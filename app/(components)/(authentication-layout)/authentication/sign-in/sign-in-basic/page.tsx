"use client"
import SpkAlerts from "@/shared/@spk-reusable-components/reusable-uiElements/spk-alerts";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
interface BasicProps { }

const Basic: React.FC<BasicProps> = () => {

    const [signbasic, setSignbasic] = useState(false);

    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "adminnext@gmail.com",
        "password": "1234567890",
    });

    const { email, password } = data;
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("")
    };
    const navigate = useRouter();
    const Login1 = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.email == "adminnext@gmail.com" && data.password == "1234567890") {
            toast.success('Created Successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            let path = '/dashboards/sales/';
            navigate.push(path);
        }
        else {
            setError("The Auction details did not Match");
            toast.error('Invalid Credentials!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setData({
                "email": "adminnext@gmail.com",
                "password": "1234567890",
            });
        }
    };

    return (
        <Fragment>
            <ToastContainer />
            <div className="container">
                <Row className=" justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={5} md={7} sm={9} className="col-12">
                        <Card className=" custom-card my-4">
                            <Card.Body className="p-5">
                                <div className="mb-4 d-flex justify-content-center">
                                    <Link scroll={false} href="/dashboards/sales/">
                                        <Image fill src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <Image fill src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Sign In</p>
                                <p className="text-muted mb-4 text-center">Let's get started</p>
                                {err &&
                                    <SpkAlerts variant="danger">{err}</SpkAlerts>
                                }
                                <Link scroll={false} href="#!" className="other-links d-flex align-items-center gap-2 justify-content-center flex-fill mb-3">
                                    <span className="fs-13 text-default fw-medium">Signup with Google</span>
                                    <span className="avatar avatar-xs custom-width">
                                        <Image fill src="../../../assets/images/media/apps/google.png" alt="" />
                                    </span>
                                </Link>
                                <Link scroll={false} href="#!" className="other-links d-flex align-items-center gap-2 justify-content-center flex-fill">
                                    <span className="fs-13 text-default fw-medium">Signup with Facebook</span>
                                    <span className="avatar avatar-xs custom-width">
                                        <Image fill src="../../../assets/images/media/apps/facebook.png" alt="" />
                                    </span>
                                </Link>
                                <div className="text-center my-3 authentication-barrier">
                                    <span className="fs-16">or</span>
                                </div>
                                <Form onSubmit={Login1}>
                                    <Row className=" gy-3">
                                        <Col xl={12} className="">
                                            <Form.Label htmlFor="signin-username" className="form-label text-default">User Name</Form.Label>
                                            <Form.Control type="text" className="form-control" id="signin-username" placeholder="user name" defaultValue={email} onChange={changeHandler} />
                                        </Col>
                                        <Col xl={12} className=" mb-2">
                                            <Form.Label htmlFor="signin-password" className="form-label text-default d-block">Password<Link scroll={false} href="/authentication/reset-password/reset-basic/" className="float-end fw-normal text-primary fw-medium">Forget password ?</Link></Form.Label>
                                            <div className="position-relative">
                                                <Form.Control type={(signbasic) ? 'text' : "password"} className="form-control create-password-input" id="signin-password" placeholder="password" defaultValue={password} onChange={changeHandler} />
                                                <Link scroll={false} href="#!" onClick={() => setSignbasic(!signbasic)} className="show-password-button text-muted" id="button-addon2"><i className={`${signbasic ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-3">
                                        <SpkButton Buttonvariant="primary" Customclass="btn" Buttontype="submit">Sign In</SpkButton>
                                        <p className="text-muted mt-3 mb-0 text-center">Dont have an account? <Link scroll={false} href="/authentication/sign-up/sign-up-basic/" className="text-primary fw-medium">Sign Up</Link></p>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Basic;