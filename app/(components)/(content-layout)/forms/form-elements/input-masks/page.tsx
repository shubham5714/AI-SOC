"use client"
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { ChangeEvent, Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { InputMask } from "@react-input/mask";
import { NumericFormat } from "react-number-format";

interface InputMaskProps { }

const InputMasks: React.FC<InputMaskProps> = () => {

    const [licensePlate, setLicensePlate] = useState("");
    const handleLicensePlateChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputText = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
        inputText = inputText.slice(0, 14);
        const formattedText = formatLicensePlate(inputText);
        setLicensePlate(formattedText);
    };

    const formatLicensePlate = (inputText: string): string => {
        const formattedText = inputText
            .split("")
            .map((char, index) => (index % 4 === 0 && index !== 0 ? ` ${char}` : char))
            .join("");
        return formattedText;
    };

    const [values, setValues] = useState({
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: "",
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }


    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-InputMasks" />

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Input Masks" activepage="Input Masks" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Date Format-1
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <InputMask className="form-control date-format" mask="dd-mm-yyyy" replacement={{ d: /\d/, m: /\d/, y: /\d/ }} placeholder="DD-MM-YYYY" separate name="value1" value={values.value1} onChange={handleChange} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Date Format-2
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <InputMask className="form-control date-format1" mask="dd-mm" replacement={{ d: /\d/, m: /\d/ }} placeholder="DD-MM" name="value2" value={values.value2} onChange={handleChange} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Date Format-3
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <InputMask className="form-control date-format" mask="mm-yy" replacement={{ m: /\d/, y: /\d/ }} placeholder="MM-YY" name="value3" value={values.value3} onChange={handleChange} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Number Formatting
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <NumericFormat className='form-control' value="20020220" allowLeadingZeros thousandSeparator="" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Time Format-1
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <InputMask className="form-control date-format" mask="99:99:99" replacement={{ 9: /\d/ }} placeholder="hh:mm:ss" name="value4" value={values.value4} onChange={handleChange} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Time Format-2
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <InputMask
                                className="form-control date-format"
                                mask="99:99"
                                replacement={{ 9: /\d/ }}
                                placeholder="hh:mm"
                                name="value5"
                                value={values.value5}
                                onChange={handleChange}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Formatting Into Blocks
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Control className="form-control formatting-blocks" id="licensePlate" value={licensePlate} onChange={handleLicensePlateChange} placeholder="ABCD EFG HIJ KLMN" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    )
};

export default InputMasks;