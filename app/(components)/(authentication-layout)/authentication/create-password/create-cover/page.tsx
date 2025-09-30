"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface CoverProps { }

const Cover: React.FC<CoverProps> = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<{ [key: string]: boolean }>({
        password: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = (field: string) => {
        setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const [passwords, setPasswords] = useState<{ [key: string]: string }>({
        password: "",
        confirmPassword: "",
    });

    const updatePassword = (field: string, value: string) => {
        setPasswords((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        updatePassword("password", val);
        if (val.length >= 8) {
            setErrors((prev) => ({ ...prev, password: undefined }));
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        updatePassword("confirmPassword", val);
        if (val.length >= 8) {
            setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
        }
    };

    const validate = (): boolean => {
        const errs: { password?: string; confirmPassword?: string } = {};
        const { password, confirmPassword } = passwords;

        if (!password) {
            errs.password = "Password is required";
        } else if (password.length < 8) {
            errs.password = "Password must be at least 8 characters";
        }

        if (!confirmPassword) {
            errs.confirmPassword = "Confirm Password is required";
        } else if (confirmPassword !== password) {
            errs.confirmPassword = "Passwords do not match";
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (validate()) {
            const path = "/dashboards/sales";
            router.push(path);
        }
    };

    const { password, confirmPassword } = passwords;
    return (
        <Fragment>
            <Row className=" authentication authentication-cover-main mx-0">
                <Col xxl={8} xl={7} className="">
                    <Row className=" justify-content-center align-items-center h-100">
                        <Col xxl={5} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className=" custom-card my-4 border">
                                <Card.Body className="p-5">
                                    <p className="h5 mb-2 text-center">Create Password</p>
                                    <p className="text-muted mb-4 text-center">Let's get started</p>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className=" gy-3">
                                            <Col xl={12} className="">
                                                <Form.Label className="form-label text-default" htmlFor="create-password">Password<sup className="fs-12 text-danger">*</sup></Form.Label>
                                                <div className="position-relative">
                                                    <Form.Control className="form-control create-password-input" id="create-password" placeholder="password" type={passwordVisibility.password ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
                                                    <Link scroll={false} href="#!" onClick={() => togglePasswordVisibility('password')} className="show-password-button text-muted"><i className={`${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} ></i></Link>
                                                </div>
                                                {errors.password && <p className="text-danger mt-1">{errors.password}</p>}
                                            </Col>
                                            <Col xl={12} className=" mb-2">
                                                <Form.Label className="form-label text-default" htmlFor="create-confirmpassword">Confirm Password<sup className="fs-12 text-danger">*</sup></Form.Label>
                                                <div className="position-relative">
                                                    <Form.Control className="form-control create-password-input" id="create-confirmpassword" placeholder="password" type={passwordVisibility.passwords ? 'text' : 'password'} value={confirmPassword} onChange={handleConfirmPasswordChange} />
                                                    <Link scroll={false} href="#!" onClick={() => togglePasswordVisibility('passwords')} className="show-password-button text-muted"><i className={`${passwordVisibility.passwords ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                                </div>
                                                {errors.confirmPassword && <p className="text-danger mt-1">{errors.confirmPassword}</p>}
                                            </Col>
                                        </Row>
                                        <div className="d-grid mt-3">
                                            <SpkButton Buttonvariant="primary" Buttontype="submit">Save Password</SpkButton>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={4} xl={5} lg={12} className=" d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="authentication-cover-logo">
                            <Link scroll={false} href="/dashboards/sales/">
                                <Image width={87} height={40} src="../../../assets/images/brand-logos/desktop-white.png" alt="" className="authentication-brand desktop-white" />
                            </Link>
                        </div>
                        <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
                            <div>
                                <Image fill src="../../../assets/images/media/media-72.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Cover;