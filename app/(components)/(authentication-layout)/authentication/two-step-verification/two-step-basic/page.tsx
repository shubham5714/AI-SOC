"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useRef, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface BasicProps { }

const Basic: React.FC<BasicProps> = () => {
    const [inputValues, setInputValues] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
    });
    const [codeError, setCodeError] = useState<string | null>(null);
    const inputRefs = {
        one: useRef<HTMLInputElement | null>(null),
        two: useRef<HTMLInputElement | null>(null),
        three: useRef<HTMLInputElement | null>(null),
        four: useRef<HTMLInputElement | null>(null),
    };

    const handleChange = (
        field: keyof typeof inputValues,
        nextInputRef: React.RefObject<HTMLInputElement | null>,
        value: string
    ) => {
        if (/^[0-9]?$/.test(value)) { // Only allow 1 digit or empty
            setInputValues((prev) => ({ ...prev, [field]: value }));

            if (value && nextInputRef.current) {
                nextInputRef.current.focus();
            }
        }
    };

    const navigate = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const codeComplete = Object.values(inputValues).every((val) => val !== '');

        if (!codeComplete) {
            setCodeError('Please enter the complete 4-digit code.');
        } else {
            setCodeError(null);
            let path = '/dashboards/sales';
            navigate.push(path);
        }
    };

    return (
        <Fragment>
            <div className="container-lg">
                <Row className=" justify-content-center align-items-center authentication two-step-verification authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className=" custom-card my-4">
                            <Card.Body className=" p-5">
                                <div className="mb-4 d-flex justify-content-center">
                                    <Link scroll={false} href="/dashboards/sales/">
                                        <Image fill src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <Image fill src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Verification Code</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center fs-12">Enter the 4 digit code sent to the moble number ******9556.</p>
                                <Form onSubmit={handleSubmit}>
                                    <Row className=" gy-3">
                                        <Col xl={12} className=" mb-2">
                                            <Row className=" gx-3">
                                                <div className="col-3">
                                                    <Form.Control type="text" className="text-center" id="one"
                                                        value={inputValues.one}
                                                        onChange={(e) => handleChange('one', inputRefs.two, e.target.value)}
                                                        maxLength={1}
                                                        ref={inputRefs.one} />
                                                </div>
                                                <div className="col-3">
                                                    <Form.Control type="text" className="text-center" id="two" value={inputValues.two}
                                                        onChange={(e) => handleChange('two', inputRefs.three, e.target.value)}
                                                        maxLength={1}
                                                        ref={inputRefs.two} />
                                                </div>
                                                <div className="col-3">
                                                    <Form.Control type="text" className="text-center" id="three" value={inputValues.three}
                                                        onChange={(e) => handleChange('three', inputRefs.four, e.target.value)}
                                                        maxLength={1}
                                                        ref={inputRefs.three} />
                                                </div>
                                                <div className="col-3">
                                                    <Form.Control type="text" className="text-center" id="four" value={inputValues.four}
                                                        onChange={(e) => handleChange('four', inputRefs.one, e.target.value)}
                                                        maxLength={1}
                                                        ref={inputRefs.four} />
                                                </div>
                                            </Row>
                                            {codeError && <div className="text-danger mb-3">{codeError}</div>}
                                        </Col>
                                        <Col xl={12} className=" d-grid mt-2">
                                            <SpkButton Buttonvariant="primary" Buttontype="submit" Customclass="btn">Verify</SpkButton>
                                            <div className="text-center">
                                                <p className="text-muted mt-3 mb-0">Didn't recieve a code ? <Link scroll={false} href="#!" className="text-primary fw-medium">Resend</Link></p>
                                            </div>
                                        </Col>
                                    </Row>
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