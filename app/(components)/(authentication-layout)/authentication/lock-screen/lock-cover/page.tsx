"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface CoverProps { }

const Cover: React.FC<CoverProps> = () => {
    const [formState, setFormState] = useState({
        password: "",
        Lockcover: false,
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
            <Row className=" authentication authentication-cover-main mx-0">
                <Col xxl={8} xl={7} className="">
                    <Row className=" justify-content-center align-items-center h-100">
                        <Col xxl={5} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className=" custom-card my-4 border">
                                <Card.Body className="p-5">
                                    <p className="h5 mb-2 text-center">Lock Screen</p>
                                    <p className="text-muted mb-4 text-center">Let's get started</p>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-3">
                                            <Col xl={12} className="mb-2">
                                                <label htmlFor="lockscreen-password"
                                                    className="form-label text-default">Password</label>
                                                <div className="position-relative">
                                                    <Form.Control autoComplete="false" type={(formState.Lockcover) ? 'text' : "password"} className="" id="lockscreen-password"
                                                        placeholder="password" value={formState.password} onChange={handlePasswordChange} />
                                                    <Link scroll={false} href="#!" className="show-password-button text-muted"
                                                        onClick={(e) => { e.preventDefault(); setFormState((prev) => ({ ...prev, Lockcover: !prev.Lockcover, })); }}
                                                        id="button-addon2"> <i className={`${formState.Lockcover ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Link>
                                                </div>
                                                {formState.errors.password && <p className="text-danger mt-1">{formState.errors.password}</p>}
                                               
                                            </Col>
                                            <Col xl={12} className="d-grid mt-2">
                                                <SpkButton Buttontype="submit" Size="lg" Buttonvariant="primary" Customclass="btn">Unlock</SpkButton>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Back to home ? <Link scroll={false} className="text-primary fw-medium" href="/dashboards/sales/">Click Here</Link></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={4} xl={5} lg={12} className="d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="authentication-cover-logo">
                            <Link href="/dashboards/sales/">
                                <Image fill src="../../../assets/images/brand-logos/desktop-white.png" alt="" className="authentication-brand desktop-white" />
                            </Link>
                        </div>
                        <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
                            <div>
                                <Image fill src="../../../assets/images/media/media-76.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Cover;