"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useRef, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface CoverProps { }

const Cover: React.FC<CoverProps> = () => {

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
            <Row className=" authentication two-step-verification authentication-cover-main mx-0">
                <Col xxl={8} xl={7} className="">
                    <Row className=" justify-content-center align-items-center h-100">
                        <Col xxl={5} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className=" custom-card my-4 border">
                                <Card.Body className=" p-5">
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
                </Col>
                <Col xxl={4} xl={5} lg={12} className=" d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="authentication-cover-logo">
                            <Link scroll={false} href="/dashboards/sales/">
                                <Image fill src="../../../assets/images/brand-logos/desktop-white.png" alt="" className="authentication-brand desktop-white" />
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