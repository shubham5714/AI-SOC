"use client"

import SpkMultiselect from "@/shared/@spk-reusable-components/reusable-plugins/spk-multiselect";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Multipleselectdata, Multipleselectdata1, Optionwithnosearch, SingleGroup } from "@/shared/data/forms/formselectdata";
import { formselect2, formselect3, formselect4, formselect7, formselect8, formselect9 } from "@/shared/data/prism-code/forms-prism";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import ShowCode from "@/shared/layouts-components/showcode/showcode";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';

interface FormSelectProps { }

const FormSelect: React.FC<FormSelectProps> = () => {

    const [values, setValues] = useState({
        _valuesA: undefined,
        _valuesB: undefined,
    });

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState<any>('');
    const [value, setValue] = useState([
        createOption("one"),
        createOption("two"),
        createOption("three")
    ]);
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    const [inputValue1, setInputValue1] = useState<any>('');
    const [value1, setValue1] = useState([
        createOption("child-1"),
        createOption("child-2")
    ]);

    const handleKeyDown1 = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!inputValue1) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue1)]);
                setInputValue1('');
                event.preventDefault();
        }
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const createOption1 = (email: string) => ({
        label: email,
        value: email,
    });

    const [inputValue2, setInputValue2] = useState<string>("");
    const [value2, setValue2] = useState<any[]>([createOption1("abc@hotmail.com")]);
    const [error, setError] = useState<string>("");

    const handleKeyDown2 = (event: React.KeyboardEvent) => {
        if (!inputValue2) return;

        switch (event.key) {
            case "Enter":
            case "Tab":
                if (isValidEmail(inputValue2) && !value2.some(option => option.value === inputValue2)) {
                    setValue2((prev) => [...prev, createOption1(inputValue2)]);
                    setError("");
                } else {
                    setError("Please enter a valid email address or avoid duplicates.");
                }
                setInputValue2("");
                event.preventDefault();
                break;
            default:
                break;
        }
    };

    const defaults = [Multipleselectdata[5]];

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-FormSelect" />

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Form Select" activepage="Form Select" />

            {/* <!-- Page Header Close --> */}
            <h6 className="fw-medium mb-2">Choices:</h6>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-flex align-items-center justify-content-between">
                            <h6 className="card-title">Single Select</h6>
                        </Card.Header>
                        <Card.Body>
                            <p className="fw-medium mb-2">Default</p>
                            <SpkSelect option={Multipleselectdata} mainClass="mb-4 default basic-multi-select" id="choices-multiple-default"
                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Multipleselectdata[0]]}
                            />
                            <p className="fw-medium mb-2">Option groups</p>
                            <SingleGroup />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-flex align-items-center justify-content-between">
                            <h6 className="card-title">Multiple Select</h6>
                        </Card.Header>
                        <Card.Body>
                            <p className="fw-medium mb-2">Default</p>
                            <div className="choices mb-4">
                                <SpkMultiselect multi options={Multipleselectdata} mainClass="default basic-multi-select custom-multi "
                                    values={[Multipleselectdata[0]]} onChange={(newValuesA) => setValues(prev => ({ ...prev, valuesA: newValuesA }))} disabledLabel={defaults.length} />
                            </div>
                            <p className="fw-medium mb-2">With Remove Button</p>
                            <div className="choices mb-4">
                                <SpkMultiselect multi options={Multipleselectdata1} mainClass="basic-multi-select custom-multi"
                                    values={[Multipleselectdata1[0]]} onChange={(newValuesB) => setValues(prev => ({ ...prev, valuesB: newValuesB }))} />
                            </div>
                            <p className="fw-medium mb-2">Option groups</p>
                            <div className="choices">
                                <SingleGroup />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <div className="card-title">
                                Passing Through Options
                            </div>
                        </Card.Header>
                        <Card.Body id="form-select-unique">
                            <CreatableSelect components={components} classNamePrefix='react-select' inputValue={inputValue} isClearable isMulti menuIsOpen={false} onChange={(newValue) => {
                                if (Array.isArray(newValue)) {
                                    setValue(newValue);
                                } else {
                                    setValue([]);
                                }
                            }} onInputChange={(newValue) => setInputValue(newValue)} onKeyDown={handleKeyDown} placeholder="Type something and press enter..." value={value} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <div className="card-title">
                                Options added via config with no search
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="colors" option={Optionwithnosearch} menuplacement='auto' classNameprefix="Select2" defaultvalue={[Optionwithnosearch[5]]}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <div className="card-title">
                                Email Address Only
                            </div>
                        </Card.Header>
                        <Card.Body id="form-select-unique">
                            <CreatableSelect components={{}} classNamePrefix='react-select' inputValue={inputValue2} isClearable isMulti menuIsOpen={false} onChange={(newValue) => {
                                if (Array.isArray(newValue)) {
                                    setValue2(newValue);
                                } else {
                                    setValue2([]);
                                }
                            }} onInputChange={(newValue) => setInputValue2(newValue)} onKeyDown={handleKeyDown2} placeholder="Type an email and press enter..." value={value2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <div className="card-title">
                                Passing Unique Values
                            </div>
                        </Card.Header>
                        <Card.Body id="form-select-unique">
                            <CreatableSelect components={components} classNamePrefix='react-select' inputValue={inputValue1} isClearable isMulti menuIsOpen={false} onChange={(newValue) => {
                                if (Array.isArray(newValue)) {
                                    setValue1(newValue);
                                } else {
                                    setValue1([]);
                                }
                            }} onInputChange={(newValue) => setInputValue1(newValue)} onKeyDown={handleKeyDown1} placeholder="Type something and press enter..." value={value1} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Select Sizes" customCardClass="custom-card" customCardBodyClass="" reactCode={formselect4}>

                        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                            <option defaultValue={'Open this select menu'}>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select><select className="form-select mb-3" aria-label="Default select">
                            <option defaultValue={'Open this select menu'}>Open this select menu
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select form-select-lg"
                            aria-label=".form-select-lg example">
                            <option defaultValue={'Open this select menu'}>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Default Select" customCardClass="custom-card" customCardBodyClass="" reactCode={formselect2}>

                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue={'Open this select menu'}>Open this select menu
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title=" Disabled Select" customCardClass="custom-card" customCardBodyClass="" reactCode={formselect7}>
                        <select className="form-select" aria-label="Disabled select example" disabled>
                            <option defaultValue={'Open this select menu'}>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Rounded Select" customCardClass="custom-card" customCardBodyClass="" reactCode={formselect3}>

                        <select className="form-select rounded-pill" aria-label="Default select example">
                            <option defaultValue={'Open this select menu'}>Open this select menu
                            </option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title=" Using Size Attribute" customCardClass="custom-card" customCardBodyClass="" reactCode={formselect8}>
                        <select className="form-select" size={4} aria-label="size 3 select example">
                            <option selected>Open this select menu</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                            <option defaultValue="4">Four</option>
                            <option defaultValue="5">Five</option>
                        </select>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Multiple Attribute Select" customCardClass="custom-card" customCardBodyClass="" reactCode={formselect9}>
                        <select className="form-select" multiple aria-label="multiple select example">
                            <option selected>Open this select menu</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    )
};

export default FormSelect;