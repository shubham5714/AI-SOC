"use client";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface BasicProps { }

const Basic: React.FC<BasicProps> = () => {
    const [formState, setFormState] = useState({
        password: "",
        Lockbasic: false,
        errors: {} as { password?: string; confirmPassword?: string },
    });

    const navigate = useRouter();

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        setFormState((prev) => ({
            ...prev,
            password: val,
            errors: {
                ...prev.errors,
                password: val.length >= 8 ? undefined : prev.errors.password,
            },
        }));
    };

    const validate = (): boolean => {
        const errs: { password?: string; confirmPassword?: string } = {};

        if (!formState.password) {
            errs.password = "Password is required";
        } else if (formState.password.length < 8) {
            errs.password = "Password must be at least 8 characters";
        }

        setFormState((prev) => ({
            ...prev,
            errors: errs,
        }));

        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (validate()) {
            navigate.push("/dashboards/sales");
        }
    };

    return (
        <Fragment>
            <div className="container-lg">
                <Row className=" justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className=" custom-card my-4">
                            <Card.Body className=" p-5">
                                <div className="mb-4 d-flex justify-content-center">
                                    <Link scroll={false} href="/dashboards/sales/">
                                        <Image fill src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <Image fill src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Lock Screen</p>
                                <p className="text-muted mb-4 text-center">Let's get started</p>
                                <Form onSubmit={handleSubmit}>
                                    <Row className=" gy-3">
                                        <Col xl={12} className="mb-2">
                                            <label htmlFor="lockscreen-password" className="form-label text-default">
                                                Password
                                            </label>
                                            <div className="position-relative">
                                                <Form.Control className="form-control create-password-input" id="lockscreen-password" placeholder="password" type={formState.Lockbasic ? "text" : "password"} value={formState.password} onChange={handlePasswordChange} />
                                                <span role="button" tabIndex={0} onClick={(e) => { e.preventDefault(); setFormState((prev) => ({ ...prev, Lockbasic: !prev.Lockbasic, })); }} className="show-password-button text-muted" style={{ cursor: "pointer", position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                                                    <i className={`${formState.Lockbasic ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} />
                                                </span>
                                            </div>
                                            {formState.errors.password && (
                                                <p className="text-danger mt-1">
                                                    {formState.errors.password}
                                                </p>
                                            )}
                                        </Col>
                                        <Col xl={12} className="d-grid mt-2">
                                            <SpkButton Buttontype="submit" Buttonvariant="primary" Customclass="btn">
                                                Unlock
                                            </SpkButton>
                                        </Col>
                                    </Row>
                                </Form>
                                <div className="text-center">
                                    <p className="text-muted mt-3 mb-0">
                                        Back to home ?{" "}
                                        <Link scroll={false} className="text-primary fw-medium" href="/dashboards/sales/">
                                            Click Here
                                        </Link>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Basic;
