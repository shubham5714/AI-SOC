"use client"
import nextConfig from "@/next.config"
import SpkAlert from '@/shared/@spk-reusable-components/reusable-uiElements/spk-alerts';
import { auth } from '@/shared/firebase/firebaseapi';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { Initialload } from "@/shared/contextapi";

const page = () => {

    let { basePath } = nextConfig
    const bodyRef: any = useRef(null)
    const [load, setLoad] = useState(false)

    const theme = useContext(Initialload);
    useEffect(() => {
        if (typeof window !== 'undefined' && !theme.pageloading) {
            LocalStorageBackup(theme.setpageloading);
        }
    }, []);

    useEffect(() => {
        setLoad(true)
        bodyRef.current = document.body

        bodyRef.current.classList.add('authentication-background')

        return () => {
            bodyRef.current?.classList.remove('authentication-background')
        }

    }, []);

    const [passwordshow1, setpasswordshow1] = useState(false);

    const [err, setError] = useState("");
    const [err1, setError1] = useState("");
    const [data, setData] = useState({
        "email": "adminnextjs@gmail.com",
        "password": "1234567890",
    });
    const { email, password } = data;
    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    const Login = (e: React.FormEvent) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(user => {

                // Show success message
                toast.success('Login successful', {
                    position: 'top-right',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setTimeout(() => {
                    RouteChange();
                }, 1200);
            })
            .catch(err => {
                setError(err.message);

                // Show error message
                toast.error('Invalid details', {
                    position: 'top-right',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    const Login1 = (_e: any) => {
        _e.preventDefault();

        if (data.email === "adminnextjs@gmail.com" && data.password === "1234567890") {
            // Show toast immediately when login button is clicked
            toast.success('Login successful', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setTimeout(() => {
                RouteChange(); // Navigate after toast delay
            }, 2000);
        } else {
            setError1("The Auction details did not Match");
            setData({
                email: "adminnextjs@gmail.com",
                password: "1234567890",
            });
            toast.error('Invalid login credentials', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,

                pauseOnHover: true,
                draggable: true,
            });
        }
    };
    const router = useRouter();
    const RouteChange = () => {
        let path = "/dashboards/sales";
        router.push(path);
    };

    const [passwordShow, setPasswordShow] = useState(false);

    return (
        <Fragment>
            <ToastContainer />
            <html>
                <body className="">
                    <div className="container">
                        <div className="row justify-content-center align-items-center authentication authentication-basic h-100 pt-3">
                            <Col xxl={4} xl={4} lg={4} md={6} sm={8} className="col-12">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                                    <Nav variant="pills" className="justify-content-center authentication-tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="react">
                                                <Image height={20} width={20} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/nextjs.png`} alt="logo" className='avatar avatar-sm' />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="firebase">
                                                <Image height={20} width={20} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/firbase.png`} alt="logo" className='avatar avatar-sm' />
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content className=''>
                                        <Tab.Pane eventKey="react" className='border-0'>
                                            <Card className=" custom-card my-4">
                                                <Card.Body className="p-5">
                                                    <div className="mb-4 d-flex justify-content-center">
                                                        <Link scroll={false} href="/dashboards/sales/">
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className='desktop-logo' />
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-white.png`} alt="logo" className='desktop-white' />
                                                        </Link>
                                                    </div>
                                                    <p className="h5 mb-2 text-center">Sign In</p>
                                                    <p className="text-muted mb-4 text-center">Let's get started</p>
                                                    {err &&
                                                        <SpkAlert variant="danger">{err}</SpkAlert>
                                                    }
                                                    <Link scroll={false} href="#!" className="other-links d-flex align-items-center gap-2 justify-content-center flex-fill mb-3">
                                                        <span className="fs-13 text-default fw-medium">Signup with Google</span>
                                                        <span className="avatar avatar-xs custom-width">
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/google.png`} alt="logo" />
                                                        </span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="other-links d-flex align-items-center gap-2 justify-content-center flex-fill">
                                                        <span className="fs-13 text-default fw-medium">Signup with Facebook</span>
                                                        <span className="avatar avatar-xs custom-width">
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/facebook.png`} alt="logo" />
                                                        </span>
                                                    </Link>
                                                    <div className="text-center my-3 authentication-barrier">
                                                        <span className="fs-16">or</span>
                                                    </div>
                                                    <Form>
                                                        <Row className="gy-3">
                                                            <Col xl={12}>
                                                                <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                                                                <Form.Control autoComplete="false" type="text" className="form-control" id="signin-username" placeholder="user name" defaultValue={email} onChange={changeHandler} />
                                                            </Col>
                                                            <Col xl={12} className="mb-2">
                                                                <label htmlFor="signin-password" className="form-label text-default d-block">Password<Link scroll={false}
                                                                    href="/authentication/reset-password/reset-basic/"
                                                                    className="float-end fw-normal text-danger fw-medium">Forget password
                                                                    ?</Link></label>
                                                                <div className="position-relative">
                                                                    <Form.Control className="form-control create-password-input" id="lockscreen-password" placeholder="password" type={(passwordshow1) ? 'text' : "password"} value={password} onChange={changeHandler} />
                                                                    <span role="button" tabIndex={0} onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-muted" style={{ cursor: "pointer", position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                                                                        <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                                    </span>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                    <div className="d-grid mt-3">
                                                        <Link href="#!" scroll={false} onClick={Login1} className="btn btn-primary">
                                                            Sign In
                                                        </Link>
                                                        <p className="text-muted mt-3 mb-0 text-center">Dont have an account? <Link scroll={false} href="/authentication/sign-up/sign-up-basic/" className="text-primary fw-medium">Sign Up</Link></p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="firebase" className='border-0'>
                                            <Card className=" custom-card my-4">
                                                <Card.Body className="p-5">
                                                    <div className="mb-4 d-flex justify-content-center">
                                                        <Link scroll={false} href="/dashboards/sales/">
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className='desktop-logo' />
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-white.png`} alt="logo" className='desktop-white' />
                                                        </Link>
                                                    </div>
                                                    <p className="h5 mb-2 text-center">Sign In</p>
                                                    <p className="text-muted mb-4 text-center">Let's get started</p>
                                                    {err &&
                                                        <SpkAlert variant="danger">{err}</SpkAlert>
                                                    }
                                                    <Link scroll={false} href="#!" className="other-links d-flex align-items-center gap-2 justify-content-center flex-fill mb-3">
                                                        <span className="fs-13 text-default fw-medium">Signup with Google</span>
                                                        <span className="avatar avatar-xs custom-width">
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/google.png`} alt="logo" />
                                                        </span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="other-links d-flex align-items-center gap-2 justify-content-center flex-fill">
                                                        <span className="fs-13 text-default fw-medium">Signup with Facebook</span>
                                                        <span className="avatar avatar-xs custom-width">
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/apps/facebook.png`} alt="logo" />
                                                        </span>
                                                    </Link>
                                                    <div className="text-center my-3 authentication-barrier">
                                                        <span className="fs-16">or</span>
                                                    </div>
                                                    <Row className=" gy-3">
                                                        <Col xl={12} className="">
                                                            <Form.Label htmlFor="signin-email1" className="form-label text-default">User Name</Form.Label>
                                                            <Form.Control name="signin-email1" className="signin-email-input" id="signin-email1" placeholder="Enter your email address" type="email" defaultValue={email}
                                                                onChange={changeHandler} />
                                                        </Col>
                                                        <Col xl={12} className=" mb-2">
                                                            <Form.Label htmlFor="signin-password" className="form-label text-default d-block">Password<Link scroll={false} href="/authentication/reset-password/reset-basic/" className="float-end fw-normal text-danger fw-medium">Forget password ?</Link></Form.Label>
                                                            <div className="position-relative custom-auth-icon">
                                                                <Form.Control className="form-control create-password-input" id="lockscreen-password" placeholder="password" type={passwordShow ? 'text' : 'password'} value={password} onChange={changeHandler} />
                                                                <span role="button" tabIndex={0} onClick={() => setPasswordShow(!passwordShow)} className="show-password-button text-muted" style={{ cursor: "pointer", position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                                                                    <i className={`${passwordShow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                                </span>

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="d-grid mt-3">
                                                        <Link href="/dashboards/sales" onClick={Login} className="btn btn-primary">
                                                            Sign In
                                                        </Link>
                                                        <p className="text-muted mt-3 mb-0 text-center">Dont have an account? <Link scroll={false} href="/authentication/sign-up/sign-up-basic/" className="text-primary fw-medium">Sign Up</Link></p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </div>
                    </div>
                </body>
            </html>
        </Fragment >
    )
}

export default page;