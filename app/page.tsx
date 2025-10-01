"use client"
import nextConfig from "@/next.config"
import SpkAlert from '@/shared/@spk-reusable-components/reusable-uiElements/spk-alerts';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { Initialload } from "@/shared/contextapi";

const Page = () => {
    const { basePath = '' } = nextConfig;
    const bodyRef = useRef<HTMLElement | null>(null);
    const [load, setLoad] = useState(false);
    const [mounted, setMounted] = useState(false);

    const theme = useContext(Initialload);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !theme.pageloading) {
            LocalStorageBackup(theme.setpageloading);
        }
    }, [mounted, theme.pageloading, theme.setpageloading]);

    useEffect(() => {
        setLoad(true);
        bodyRef.current = document.body;

        bodyRef.current.classList.add('authentication-background');

        return () => {
            bodyRef.current?.classList.remove('authentication-background');
        }
    }, []);

    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "",
        "password": "",
    });
    const [otp, setOtp] = useState("");
    const [mfaTicket, setMfaTicket] = useState<string | null>(null);
    
    const { email, password } = data;
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const router = useRouter();

    const Login = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // If MFA flow is active, verify OTP first
            if (mfaTicket) {
                const { data: _verified, error: otpError } = await (supabase.auth as any).verifyOtp({
                    type: 'totp',
                    token: otp,
                    options: { ticket: mfaTicket }
                });
                if (otpError) throw otpError;
                setMfaTicket(null);
            }

            const { data: signInData, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) {
                const maybeTicket = (signInData as any)?.mfa?.ticket;
                if (maybeTicket) {
                    setMfaTicket(maybeTicket);
                    toast.info('MFA required. Enter your 6-digit code.');
                    return;
                }
                throw error;
            }

            const userId = signInData.user?.id;
            if (userId) {
                const { data: tenantRows, error: tenantsError } = await supabase
                    .from('user_tenants')
                    .select('tenant_id, tenants(name)')
                    .eq('user_id', userId);

                if (tenantsError) {
                    throw tenantsError;
                }

                const assignedTenants = (tenantRows || []).map((t: any) => ({ 
                    id: t.tenant_id, 
                    name: t.tenants?.name 
                }));
                
                if (mounted) {
                    localStorage.setItem('assignedTenants', JSON.stringify(assignedTenants));
                    localStorage.setItem('selectedTenantIds', JSON.stringify('all'));
                }
            }

            toast.success('Login successful', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            
            setTimeout(() => {
                router.push("/dashboards/sales");
            }, 1200);
        } catch (err: any) {
            setError(err.message || 'Login failed');
            toast.error('Invalid details', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const logoPath = process.env.NODE_ENV === 'production' ? basePath : '';

    return (
        <Fragment>
            <ToastContainer />
            <html>
                <body>
                    <div className="container">
                        <div className="row justify-content-center align-items-center authentication authentication-basic h-100 pt-3">
                            <Col xxl={4} xl={4} lg={4} md={6} sm={8} className="col-12">
                                <Card className="custom-card my-4">
                                    <Card.Body className="p-5">
                                        <div className="mb-4 d-flex justify-content-center">
                                            <Link scroll={false} href="/dashboards/sales/">
                                                <Image 
                                                    fill 
                                                    src={`${logoPath}/assets/images/brand-logos/desktop-logo.png`} 
                                                    alt="logo" 
                                                    className='desktop-logo' 
                                                />
                                                <Image 
                                                    fill 
                                                    src={`${logoPath}/assets/images/brand-logos/desktop-white.png`} 
                                                    alt="logo" 
                                                    className='desktop-white' 
                                                />
                                            </Link>
                                        </div>
                                        <p className="h5 mb-2 text-center">Sign In</p>
                                        <p className="text-muted mb-4 text-center">Let's get started</p>
                                        {err && <SpkAlert variant="danger">{err}</SpkAlert>}
                                        <Form onSubmit={Login}>
                                            <Row className="gy-3">
                                                <Col xl={12}>
                                                    <label htmlFor="signin-email" className="form-label text-default">
                                                        Email
                                                    </label>
                                                    <Form.Control 
                                                        name="email" 
                                                        autoComplete="email" 
                                                        type="email" 
                                                        className="form-control" 
                                                        id="signin-email" 
                                                        placeholder="email" 
                                                        value={email} 
                                                        onChange={changeHandler} 
                                                    />
                                                </Col>
                                                <Col xl={12} className="mb-2">
                                                    <label htmlFor="signin-password" className="form-label text-default d-block">
                                                        Password
                                                        <Link 
                                                            scroll={false}
                                                            href="/authentication/reset-password/reset-basic/"
                                                            className="float-end fw-normal text-danger fw-medium"
                                                        >
                                                            Forget password?
                                                        </Link>
                                                    </label>
                                                    <div className="position-relative">
                                                        <Form.Control 
                                                            name="password" 
                                                            className="form-control create-password-input" 
                                                            id="signin-password" 
                                                            placeholder="password" 
                                                            type={passwordshow1 ? 'text' : "password"} 
                                                            value={password} 
                                                            onChange={changeHandler} 
                                                        />
                                                        <span 
                                                            role="button" 
                                                            tabIndex={0} 
                                                            onClick={() => setpasswordshow1(!passwordshow1)} 
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter' || e.key === ' ') {
                                                                    setpasswordshow1(!passwordshow1);
                                                                }
                                                            }}
                                                            className="show-password-button text-muted" 
                                                            style={{ 
                                                                cursor: "pointer", 
                                                                position: "absolute", 
                                                                right: 10, 
                                                                top: "50%", 
                                                                transform: "translateY(-50%)" 
                                                            }}
                                                        >
                                                            <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                        </span>
                                                    </div>
                                                </Col>
                                                {mfaTicket && (
                                                    <Col xl={12}>
                                                        <label htmlFor="signin-otp" className="form-label text-default">
                                                            MFA Code
                                                        </label>
                                                        <Form.Control 
                                                            inputMode="numeric" 
                                                            pattern="[0-9]*" 
                                                            maxLength={6} 
                                                            name="otp" 
                                                            id="signin-otp" 
                                                            placeholder="Enter 6-digit code" 
                                                            value={otp} 
                                                            onChange={(e) => setOtp(e.target.value)} 
                                                        />
                                                    </Col>
                                                )}
                                            </Row>
                                            <div className="d-grid mt-3">
                                                <button type="submit" className="btn btn-primary">
                                                    {mfaTicket ? 'Verify & Sign In' : 'Sign In'}
                                                </button>
                                                <p className="text-muted mt-3 mb-0 text-center">
                                                    Don't have an account? 
                                                    <Link 
                                                        scroll={false} 
                                                        href="/authentication/sign-up/sign-up-basic/" 
                                                        className="text-primary fw-medium"
                                                    >
                                                        {' '}Sign Up
                                                    </Link>
                                                </p>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </body>
            </html>
        </Fragment>
    )
}

export default Page;