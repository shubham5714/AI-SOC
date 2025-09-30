"use client";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface BasicProps { }

const Basic: React.FC<BasicProps> = () => {
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
            <div className="container-lg">
                <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className="custom-card my-4">
                            <Card.Body className="p-5">
                                <div className="mb-4 d-flex justify-content-center">
                                    <Link scroll={false} href="/dashboards/sales/">
                                        <Image width={87} height={40} src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <Image width={87} height={40} src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Create Password</p>
                                <p className="text-muted mb-4 text-center">Let's get started</p>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="gy-3">
                                        <Col xl={12}>
                                            <Form.Label className="form-label text-default" htmlFor="create-password">
                                                Password<sup className="fs-12 text-danger">*</sup>
                                            </Form.Label>
                                            <div className="position-relative">
                                                <Form.Control className="form-control create-password-input" id="create-password" placeholder="password" type={passwordVisibility.password ? "text" : "password"} value={password} onChange={handlePasswordChange} />
                                                <span role="button" tabIndex={0} onClick={() => togglePasswordVisibility("password")} className="show-password-button text-muted" style={{ cursor: "pointer", position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                                                    <i className={`${passwordVisibility.password ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} />
                                                </span>
                                            </div>
                                            {errors.password && <p className="text-danger mt-1">{errors.password}</p>}
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label className="form-label text-default" htmlFor="create-confirmpassword">
                                                Confirm Password<sup className="fs-12 text-danger">*</sup>
                                            </Form.Label>
                                            <div className="position-relative">
                                                <Form.Control className="form-control create-password-input" id="create-confirmpassword" placeholder="password" type={passwordVisibility.confirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleConfirmPasswordChange} />
                                                <span role="button" tabIndex={0} onClick={() => togglePasswordVisibility("confirmPassword")} className="show-password-button text-muted" style={{ cursor: "pointer", position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                                                    <i className={`${passwordVisibility.confirmPassword ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} />
                                                </span>
                                            </div>
                                            {errors.confirmPassword && <p className="text-danger mt-1">{errors.confirmPassword}</p>}
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-3">
                                        <SpkButton Buttonvariant="primary" Buttontype="submit">
                                            Save Password
                                        </SpkButton>
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
