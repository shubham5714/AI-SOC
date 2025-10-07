"use client"
import nextConfig from "@/next.config"
import SpkAlert from '@/shared/@spk-reusable-components/reusable-uiElements/spk-alerts';
import { supabase } from '@/shared/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { Initialload } from "@/shared/contextapi";
import { useUpdateTenants } from '@/shared/contextapi/TenantContext';
import { useUpdateUserData } from '@/shared/contextapi/UserContext';

const Page = () => {
    const { basePath = '' } = nextConfig;
    const bodyRef = useRef<HTMLElement | null>(null);
    const [load, setLoad] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isProcessingLogin, setIsProcessingLogin] = useState(false);

    const theme = useContext(Initialload);
    const updateTenants = useUpdateTenants();
    const updateUserData = useUpdateUserData();
    
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
    const [showMfaEnrollment, setShowMfaEnrollment] = useState(false);
    const [mfaEnrollment, setMfaEnrollment] = useState<{
        qrCode: string | null;
        secret: string | null;
        factorId: string | null;
        isEnrolling: boolean;
        isVerifying: boolean;
    }>({
        qrCode: null,
        secret: null,
        factorId: null,
        isEnrolling: false,
        isVerifying: false
    });
    
    const { email, password } = data;
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };

    const router = useRouter();

    const Login = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // If MFA flow is active, verify OTP first
            if (mfaTicket) {
                try {
                    // Parse the stored MFA ticket (contains factorId and challengeId)
                    const mfaData = JSON.parse(mfaTicket);
                    const { factorId, challengeId } = mfaData;
                    
                    console.log('Verifying MFA with factorId:', factorId, 'challengeId:', challengeId);

                    // Verify OTP with the stored challenge
                    const { data: verifiedData, error: otpError } = await supabase.auth.mfa.verify({
                        factorId: factorId,
                        challengeId: challengeId,
                        code: otp
                    });
                    
                    if (otpError) {
                        console.log('MFA verification error:', otpError);
                        throw otpError;
                    }
                    
                    console.log('MFA verification successful:', verifiedData);
                    
                    // MFA verification successful, proceed with user data
                    const userId = verifiedData.user?.id;
                    if (userId) {
                        // Fetch assigned tenants
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
                        
                        // Fetch user role
                        const { data: userRoleData, error: roleError } = await supabase
                            .from('user_roles')
                            .select('username, role')
                            .eq('user_id', userId)
                            .single();

                        if (roleError) {
                            console.error('Error fetching user role:', roleError);
                        }
                        
                        if (mounted) {
                            updateTenants(assignedTenants);
                            
                            // Store user role in context
                            if (userRoleData) {
                                updateUserData({
                                    username: userRoleData.username,
                                    role: userRoleData.role
                                });
                            }
                        }
                    }
                } catch (mfaError) {
                    console.log('MFA verification failed:', mfaError);
                    throw mfaError;
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
                    router.push("/dashboards/executive");
                }, 1200);
                return;
            }

            // Initial login attempt
            const { data: signInData, error } = await supabase.auth.signInWithPassword({ email, password });
            
            if (error) {
                throw error;
            }

            console.log('Sign in successful:', signInData);

            // Check if MFA is required by checking for enrolled factors
            if (signInData?.user) {
                try {
                    console.log('Checking for enrolled MFA factors for user:', signInData.user.id);
                    const { data: factors, error: factorsError } = await supabase.auth.mfa.listFactors();
                    
                    if (!factorsError && factors) {
                        console.log('MFA Factors:', factors);
                        console.log('TOTP factors:', factors.totp);
                        console.log('Factor count:', factors.totp?.length || 0);
                        
                        // Check if user has enrolled TOTP factors
                        if (factors.totp && factors.totp.length > 0) {
                            console.log('User has enrolled TOTP factors - MFA required');
                            
                            // Create a challenge for the first TOTP factor
                            const totpFactor = factors.totp[0];
                            const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({
                                factorId: totpFactor.id
                            });
                            
                            if (!challengeError && challenge) {
                                console.log('MFA challenge created:', challenge.id);
                                // Store the challenge ID and factor ID for verification
                                setMfaTicket(JSON.stringify({
                                    factorId: totpFactor.id,
                                    challengeId: challenge.id
                                }));
                                
                                toast.info('MFA required. Enter your 6-digit code from Google Authenticator.', {
                    position: 'top-right',
                                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                                return;
                            } else {
                                console.log('Failed to create MFA challenge:', challengeError);
                            }
                        } else {
                            console.log('No TOTP factors found - prompting for MFA enrollment');
                            // User has no MFA factors enrolled, prompt for enrollment
                            setShowMfaEnrollment(true);
                            toast.info('MFA is required for your account. Please set up two-factor authentication.', {
                                position: 'top-right',
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                            return;
                        }
                    } else {
                        console.log('Error fetching MFA factors:', factorsError);
                    }
                } catch (mfaError) {
                    console.log('Error checking MFA factors:', mfaError);
                }
            }

            // Regular login successful
            const userId = signInData.user?.id;
            if (userId) {
                // Fetch assigned tenants
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
                
                // Fetch user role
                const { data: userRoleData, error: roleError } = await supabase
                    .from('user_roles')
                    .select('username, role')
                    .eq('user_id', userId)
                    .single();

                if (roleError) {
                    console.error('Error fetching user role:', roleError);
                }
                
                if (mounted) {
                    sessionStorage.setItem('assignedTenants', JSON.stringify(assignedTenants));
                    sessionStorage.setItem('selectedTenantIds', JSON.stringify('all'));
                    
                    // Store user role in session storage
                    if (userRoleData) {
                        sessionStorage.setItem('userRole', JSON.stringify({
                            username: userRoleData.username,
                            role: userRoleData.role
                        }));
                    }
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
                
                // Show loading spinner while contexts are being processed
                setIsProcessingLogin(true);
                
                // Get redirected URL from query params or default to executive dashboard
                setTimeout(() => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const redirectedFrom = urlParams.get('redirectedFrom');
                    const targetUrl = redirectedFrom || "/dashboards/executive";
                    router.push(targetUrl);
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

    const startMfaEnrollment = async () => {
        try {
            setMfaEnrollment(prev => ({ ...prev, isEnrolling: true }));
            
            // First, check if factors already exist
            const { data: existingFactors, error: listError } = await supabase.auth.mfa.listFactors();
            if (listError) {
                console.error('Error listing factors:', listError);
            } else {
                console.log('Existing factors before enrollment:', existingFactors);
                if (existingFactors?.totp && existingFactors.totp.length > 0) {
                    // User already has factors, use existing one
                    const existingFactor = existingFactors.totp[0];
                    console.log('Using existing factor:', existingFactor);
                    
                    // Create challenge for existing factor
                    const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({
                        factorId: existingFactor.id
                    });
                    
                    if (challengeError) {
                        throw challengeError;
                    }
                    
                    setMfaTicket(JSON.stringify({
                        factorId: existingFactor.id,
                        challengeId: challenge.id
                    }));
                    
                    setMfaEnrollment(prev => ({ ...prev, isEnrolling: false }));
                    setShowMfaEnrollment(false);
                    
                    toast.info('MFA required. Enter your 6-digit code from Google Authenticator.', {
                        position: 'top-right',
                        autoClose: 5000,
                    });
                    return;
                }
            }
            
            // No existing factors, create new one
            const { data, error } = await supabase.auth.mfa.enroll({
                factorType: 'totp'
            });
            
            if (error) {
                throw error;
            }
            
            setMfaEnrollment(prev => ({
                ...prev,
                qrCode: data.totp.qr_code,
                secret: data.totp.secret,
                factorId: data.id,
                isEnrolling: false
            }));
            
            toast.success('MFA enrollment started. Scan the QR code with your authenticator app.', {
                position: 'top-right',
                autoClose: 5000,
            });
        } catch (error: any) {
            console.error('Error starting MFA enrollment:', error);
            toast.error(error.message || 'Failed to start MFA enrollment', {
                position: 'top-right',
                autoClose: 3000,
            });
            setMfaEnrollment(prev => ({ ...prev, isEnrolling: false }));
        }
    };

    const verifyMfaEnrollment = async () => {
        if (!mfaEnrollment.factorId || !otp) {
            toast.error('Please enter the verification code', {
                position: 'top-right',
                autoClose: 3000,
            });
            return;
        }

        try {
            setMfaEnrollment(prev => ({ ...prev, isVerifying: true }));
            
            // Create challenge first
            const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({
                factorId: mfaEnrollment.factorId
            });
            
            if (challengeError) {
                throw challengeError;
            }
            
            // Verify the code
            const { data, error } = await supabase.auth.mfa.verify({
                factorId: mfaEnrollment.factorId,
                challengeId: challenge.id,
                code: otp
            });
            
            if (error) {
                throw error;
            }
            
            // MFA enrollment successful, proceed with user data
            const userId = data.user?.id;
            if (userId) {
                // Fetch assigned tenants
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
                
                // Fetch user role
                const { data: userRoleData, error: roleError } = await supabase
                    .from('user_roles')
                    .select('username, role')
                    .eq('user_id', userId)
                    .single();

                if (roleError) {
                    console.error('Error fetching user role:', roleError);
                }
                
                if (mounted) {
                    sessionStorage.setItem('assignedTenants', JSON.stringify(assignedTenants));
                    sessionStorage.setItem('selectedTenantIds', JSON.stringify('all'));
                    
                    // Store user role in session storage
                    if (userRoleData) {
                        sessionStorage.setItem('userRole', JSON.stringify({
                            username: userRoleData.username,
                            role: userRoleData.role
                        }));
                    }
                }
            }
            
            // Clear enrollment state
            setMfaEnrollment({
                qrCode: null,
                secret: null,
                factorId: null,
                isEnrolling: false,
                isVerifying: false
            });
            setShowMfaEnrollment(false);
            setOtp('');
            
            toast.success('MFA successfully enabled! Login successful.', {
                position: 'top-right',
                autoClose: 3000,
            });
            
            setTimeout(() => {
                router.push("/dashboards/executive");
            }, 1200);
        } catch (error: any) {
            console.error('Error verifying MFA enrollment:', error);
            toast.error(error.message || 'Invalid verification code', {
                position: 'top-right',
                autoClose: 3000,
            });
            setMfaEnrollment(prev => ({ ...prev, isVerifying: false }));
        }
    };


    const logoPath = process.env.NODE_ENV === 'production' ? basePath : '';

    return (
        <Fragment>
            <ToastContainer />
            
            {/* Loading Spinner while processing login */}
            {isProcessingLogin && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" 
                     style={{ 
                         backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                         zIndex: 9999,
                         backdropFilter: 'blur(2px)'
                     }}>
                    <div className="text-center">
                        <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="fs-5 fw-medium text-primary">Processing Login...</div>
                        <div className="fs-6 text-muted mt-2">Setting up your dashboard</div>
                    </div>
                </div>
            )}
            
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
                                                
                                                {showMfaEnrollment && !mfaEnrollment.qrCode && (
                                                    <Col xl={12}>
                                                        <div className="alert alert-info">
                                                            <h6 className="alert-heading">MFA Required</h6>
                                                            <p className="mb-3">For security, you need to set up two-factor authentication to continue.</p>
                                                            <div className="d-flex justify-content-center">
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-primary"
                                                                    onClick={startMfaEnrollment}
                                                                    disabled={mfaEnrollment.isEnrolling}
                                                                >
                                                                    {mfaEnrollment.isEnrolling ? 'Setting up...' : 'Set Up MFA'}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                )}
                                                
                                                {showMfaEnrollment && mfaEnrollment.qrCode && (
                                                    <Col xl={12}>
                                                        <div className="alert alert-success">
                                                            <h6 className="alert-heading mb-4 text-center">Complete MFA Setup</h6>
                                                            
                                                            {/* Step 1: QR Code */}
                                                            <div className="text-center mb-4">
                                                                <p className="fs-14 mb-3 fw-medium">1. Scan this QR code with your authenticator app:</p>
                                                                <div className="d-flex justify-content-center">
                                                                    <div className="p-3 border rounded bg-white">
                                                                        <img 
                                                                            src={mfaEnrollment.qrCode} 
                                                                            alt="MFA QR Code" 
                                                                            className="img-fluid"
                                                                            style={{ maxWidth: '180px', height: 'auto' }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Step 2: Code Input */}
                                                            <div className="text-center mb-4">
                                                                <p className="fs-14 mb-3 fw-medium">2. Enter the 6-digit code from your app:</p>
                                                                <div className="d-flex justify-content-center">
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="000000"
                                                                        value={otp}
                                                                        onChange={(e) => setOtp(e.target.value)}
                                                                        maxLength={6}
                                                                        className="text-center fs-16"
                                                                        style={{ 
                                                                            fontSize: '1.2rem', 
                                                                            letterSpacing: '0.2em',
                                                                            maxWidth: '200px'
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Step 3: Verify Button */}
                                                            <div className="text-center mb-4">
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-success"
                                                                    onClick={verifyMfaEnrollment}
                                                                    disabled={mfaEnrollment.isVerifying || otp.length !== 6}
                                                                >
                                                                    {mfaEnrollment.isVerifying ? 'Verifying...' : '3. Verify & Continue'}
                                                                </button>
                                                            </div>
                                                            
                                                            {/* Manual Entry Section */}
                                                            <div className="text-center">
                                                                <p className="fs-12 text-muted mb-2">Can't scan the QR code?</p>
                                                                <p className="fs-12 text-muted mb-3">Manually enter this secret key:</p>
                                                                <div className="bg-light p-3 rounded border d-inline-block">
                                                                    <code className="fs-12 text-primary fw-medium">{mfaEnrollment.secret}</code>
                                                                </div>
                                                            </div>
                                                        </div>
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
        </Fragment>
    )
}

export default Page;