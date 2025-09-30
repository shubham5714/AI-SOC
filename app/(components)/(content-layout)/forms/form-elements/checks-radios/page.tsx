"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { radio1, radio10, radio11, radio12, radio13, radio14, radio15, radio16, radio17, radio18, radio19, radio2, radio20, radio21, radio22, radio23, radio24, radio3, radio4, radio5, radio6, radio7, radio8, radio9 } from "@/shared/data/prism-code/forms-prism";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import ShowCode from "@/shared/layouts-components/showcode/showcode";
import React, { Fragment, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

interface ChecksRadiosProps { }

const ChecksRadios: React.FC<ChecksRadiosProps> = () => {

    const Checkdata1 = [
        { id: "1", class1: "mb-2", class2: "", text: "Primary" },
        { id: "2", class1: "mb-2", class2: "secondary", text: "Secondary" },
        { id: "3", class1: "mb-2", class2: "warning", text: "Warning" },
        { id: "4", class1: "mb-2", class2: "info", text: "Info" },
        { id: "5", class1: "mb-2", class2: "success", text: "Success" },
        { id: "6", class1: "mb-2", class2: "danger", text: "Danger" },
        { id: "7", class1: "mb-0", class2: "dark", text: "Dark" }
    ];

    const [toggles, setToggles] = useState<{ [key: string]: string }>({});

    const toggle = (toggleKey: string) => {
        setToggles((prevState) => ({
            ...prevState,
            [toggleKey]: prevState[toggleKey] === 'on' ? 'off' : 'on',
        }));
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-Check&radios" />

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Checks & Radios" activepage="Checks & Radios" />

            {/* <!-- Page Header Close --> */}

            <Row>
                <Col xl={6} lg={6} md={6} sm={12} >
                    <ShowCode title="Radios" customCardClass="custom-card" customCardBodyClass="" reactCode={radio3}>
                        <Form.Check type="radio" label="Default radio" name="example-radios1" />
                        <Form.Check type="radio" defaultChecked label="Default checked radio" name="example-radios1" />
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} >
                    <ShowCode title="Disabled" customCardClass="custom-card" customCardBodyClass="" reactCode={radio4}>
                        <Form.Check type="radio" disabled label="Disabled radio" />
                        <Form.Check type="radio" disabled defaultChecked label="Disabled checked radio" />
                    </ShowCode>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <ShowCode title="Radio Sizes" customCardClass="custom-card" customCardBodyClass="d-sm-flex align-items-center justify-content-between" reactCode={radio14}>
                        <Form.Check type="radio" label="Default" name="example-radios" />
                        <Form.Check type="radio" className="form-check-md" id="Radio-md" name="example-radios" label="Medium" />
                        <Form.Check type="radio" className="form-check-lg" name="example-radios"
                            defaultChecked id="Radio-lg" label="Large" />
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Checks" customCardClass="custom-card" customCardBodyClass="" reactCode={radio1}>
                        <Form.Check label="Default checkbox" />
                        <Form.Check defaultChecked label="Checked checkbox" />
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Disabled" customCardClass="custom-card" customCardBodyClass="" reactCode={radio2}>
                        <Form.Check disabled label="Disabled checkbox" />
                        <Form.Check disabled defaultChecked label="Disabled checked checkbox" />
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <ShowCode title="Checkbox Sizes" customCardClass="custom-card" customCardBodyClass="d-sm-flex align-items-center justify-content-between" reactCode={radio13}>
                        <Form.Check type="checkbox" defaultChecked label="Default" />
                        <Form.Check className="form-check-md d-flex align-items-center"
                            type="checkbox" defaultChecked id="checkebox-md" label="Medium" />
                        <Form.Check className="form-check-lg d-flex align-items-center"
                            type="checkbox" defaultChecked id="checkebox-lg" label="Large" />
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <ShowCode title="Inline" customCardClass="custom-card" customCardBodyClass="" reactCode={radio9}>
                        <Form.Check className="form-check-inline" type="checkbox" label="1" />
                        <Form.Check className="form-check-inline" type="checkbox" label="2" />
                        <Form.Check className="form-check-inline" disabled type="checkbox" label="3 (disabled)" />
                        <Form.Check className="form-check-inline" type="radio" label="1" name='radio1' />
                        <Form.Check className="form-check-inline" type="radio" label="2" name='radio1' />
                        <Form.Check className="form-check-inline" disabled type="radio" label="3 (disabled)" />
                    </ShowCode>
                    <ShowCode title="Without labels" customCardClass="custom-card" customCardBodyClass="" reactCode={radio10}>
                        <div className="d-flex">
                            <Form.Check className="me-4" type="checkbox" />
                            <Form.Check className="" type="radio" />
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3} lg={12} md={12} sm={12}>
                    <ShowCode title="Reverse" customCardClass="custom-card" customCardBodyClass="" reactCode={radio11}>
                        <Form.Check className="form-check-reverse mb-3" type="checkbox" label="Reverse checkbox" />
                        <Form.Check className="form-check-reverse mb-3" type="checkbox" disabled label="Disabled reverse checkbox" />
                        <Form.Check className="form-check-reverse mb-3" type="switch" label="Reverse switch checkbox input" />
                    </ShowCode>
                </Col>
                <Col md={12} lg={12} xl={3}>
                    <ShowCode title="Outlined styles" customCardClass="custom-card" customCardBodyClass="" reactCode={radio12}>
                        <Form.Control type="checkbox" className="btn-check w-auto" id="btn-check-outlined" />
                        <SpkButton Buttonvariant='outline-primary' Customclass="mb-3">Single toggle</SpkButton><br />
                        <input type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked />
                        <label className="btn btn-outline-secondary mb-3" htmlFor="btn-check-2-outlined">Checked</label>
                        <br />
                        <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" defaultChecked />
                        <label className="btn btn-outline-success m-1" htmlFor="success-outlined">Checked success radio</label>
                        <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" />
                        <label className="btn btn-outline-danger m-1" htmlFor="danger-outlined">Danger radio</label>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={6} md={12} sm={12} className="">
                    <ShowCode title="Default (stacked)" customCardClass="custom-card" customCardBodyClass="" reactCode={radio5}>
                        <Form.Check label="Default checkbox" />
                        <Form.Check disabled label="Disabled checkbox" />
                        <Form.Check type="radio" defaultChecked label="Default radio" />
                        <Form.Check type="radio" disabled label="Disabled radio" />
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} className="">
                    <ShowCode title="Switches" customCardClass="custom-card" customCardBodyClass="" reactCode={radio6}>
                        <Form.Check type="switch" label="Default switch checkbox input" />
                        <Form.Check type="switch" defaultChecked label="Checked switch checkbox input" />
                        <Form.Check type="switch" disabled label="Disabled switch checkbox input" />
                        <Form.Check type="switch" disabled defaultChecked label="Disabled checked switch checkbox input" />
                    </ShowCode>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <ShowCode title="Switch Sizes" customCardClass="custom-card" customCardBodyClass="d-sm-flex align-item-center justify-content-between" reactCode={radio15}>
                        <Form.Check type="switch" label="Default" />
                        <Form.Check type="switch" className="form-check-md form-switch" id="switch-md" label="Medium" />
                        <Form.Check type="switch" className="form-check-lg form-switch"
                            id="switch-lg" label="Large" />
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <ShowCode title="Toggle Switch-1 Sizes" customCardClass="custom-card" customCardBodyClass="" reactCode={radio18}>
                        <div className="d-flex align-items-center flex-wrap mb-3">
                            <div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
                            <div className={`toggle  toggle-sm mb-0 ${toggles['togglesm'] === 'on' || !toggles['togglesm'] ? 'on' : ''}`} onClick={() => toggle('togglesm')}>
                                <span></span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap mb-3">
                            <div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>
                            <div className={`toggle mb-0  toggle-secondary ${toggles['default'] === 'on' || !toggles['default'] ? 'on' : ''}`} onClick={() => toggle('default')}>
                                <span></span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap">
                            <div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
                            <div className={`toggle toggle-lg mb-0  toggle-success ${toggles['large'] === 'on' || !toggles['large'] ? 'on' : ''}`} onClick={() => toggle('large')}>
                                <span></span>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <ShowCode title="Toggle Switch-2 Sizes" customCardClass="custom-card" customCardBodyClass="" reactCode={radio19}>
                        <div className="d-flex align-items-center flex-wrap mb-4">
                            <div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
                            <div className="custom-toggle-switch toggle-sm ms-2">
                                <Form.Control id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="size-sm" className="label-primary m-0"></Form.Label>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap mb-4">
                            <div className=""><p className="text-muted m-0">Default toggle switch</p></div>
                            <div className="custom-toggle-switch ms-2">
                                <Form.Control id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="size-default" className="label-secondary mb-1"></Form.Label>
                            </div>
                        </div>
                        <div className="d-sm-flex d-block align-items-center flex-wrap">
                            <div className="mb-sm-0 mb-2"><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
                            <div className="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
                                <Form.Control id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="size-lg" className="label-success mb-2"></Form.Label>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row className="row-cols-12">
                <Col md={6} lg={6} className="col col-xl">
                    <ShowCode title="Colored Checkboxes" customCardClass="custom-card" customCardBodyClass="" reactCode={radio20}>
                        {Checkdata1.map((idx, index) => (
                            <div className={`form-check ${idx.class1}`} key={index}>
                                <input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
                                    type="checkbox" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
                <Col md={6} lg={6} className="col col-xl">
                    <ShowCode title="Outline Checkboxes" customCardClass="custom-card" customCardBodyClass="" reactCode={radio21}>
                        {Checkdata1.map((idx, index) => (
                            <div className={`form-check ${idx.class1}`} key={index}>
                                <input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
                                    type="checkbox" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
                <Col md={6} lg={6} className="col col-xl">
                    <ShowCode title="Colored Radios" customCardClass="custom-card" customCardBodyClass="" reactCode={radio22}>
                        {Checkdata1.map((idx, index) => (
                            <div className={`form-check ${idx.class1}`} key={index}>
                                <input id={idx.id} className={`form-check-input form-checked form-checked-${idx.class2}`}
                                    type="radio" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
                <Col md={6} lg={6} className="col col-xl">
                    <ShowCode title="Outline Radios" customCardClass="custom-card" customCardBodyClass="" reactCode={radio23}>
                        {Checkdata1.map((idx, index) => (
                            <div className={`form-check ${idx.class1}`} key={index}>
                                <input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
                                    type="radio" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
                <Col md={6} lg={6} className="col col-xl">
                    <ShowCode title="Switches Colors" customCardClass="custom-card" customCardBodyClass="" reactCode={radio24}>
                        {Checkdata1.map((idx, index) => (
                            <div className={`form-check form-switch ${idx.class1}`} key={index}>
                                <input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
                                    type="checkbox" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12} lg={12} md={12} sm={12}>
                    <ShowCode title="Toggle Switches Style-1" customCardClass="custom-card" customCardBodyClass="" reactCode={radio16}>
                        <Row className="row gy-1">

                            <Col xl={4}>
                                <div className={`toggle  ${toggles['switch'] === 'on' || !toggles['switch'] ? 'on' : ''}`} onClick={() => toggle('switch')}>
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-secondary ${toggles['secondary'] === 'on' || !toggles['secondary'] ? 'on' : ''}`} onClick={() => toggle('secondary')}>
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-warning ${toggles['warning'] === 'on' || !toggles['warning'] ? 'on' : ''}`} onClick={() => toggle('warning')} >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-info ${toggles['info'] === 'on' || !toggles['info'] ? 'on' : ''}`} onClick={() => toggle('info')}  >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-success ${toggles['success'] === 'on' || !toggles['success'] ? 'on' : ''}`} onClick={() => toggle('success')} >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-danger ${toggles['danger'] === 'on' || !toggles['danger'] ? 'on' : ''}`} onClick={() => toggle('danger')}>
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-light ${toggles['light'] === 'on' || !toggles['light'] ? 'on' : ''}`} onClick={() => toggle('light')} >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>

                                <div className={`toggle ms-sm-2  toggle-dark ${toggles['dark'] === 'on' || !toggles['dark'] ? 'on' : ''}`} onClick={() => toggle('dark')}>
                                    <span></span>
                                </div>
                            </Col>
                        </Row>
                    </ShowCode>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12}>
                    <ShowCode title="Toggle Switches Style-2" customCardClass="custom-card" customCardBodyClass="" reactCode={radio17}>
                        <div className="row gy-1">
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchPrimary" className="m-0 label-primary"></Form.Label><span className="ms-3">Primary</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchSecondary" className="m-0 label-secondary"></Form.Label><span className="ms-3">Secondary</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchWarning" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchWarning" className="m-0 label-warning"></Form.Label><span className="ms-3">Warning</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchInfo" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchInfo" className="m-0 label-info"></Form.Label><span className="ms-3">Info</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchSuccess" className="m-0 label-success"></Form.Label><span className="ms-3">Success</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchDanger" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchDanger" className="m-0 label-danger"></Form.Label><span className="ms-3">Danger</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchLight" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchLight" className="m-0 label-light"></Form.Label><span className="ms-3">Light</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchDark" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchDark" className="m-0 label-dark"></Form.Label><span className="ms-3">Dark</span>
                                </div>
                            </Col>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={12} md={12} sm={12} className="">
                    <ShowCode title="Radio toggle buttons" customCardClass="custom-card" customCardBodyClass="" reactCode={radio7}>
                        <Form.Check type="radio" className="btn-check" name="options" id="option1" defaultChecked />
                        <SpkButton Buttonvariant="primary" Customclass="m-1">Checked</SpkButton>
                        <Form.Check type="radio" className="btn-check" name="options" id="option2" />
                        <SpkButton Buttonvariant="primary" Customclass="m-1">Radio</SpkButton>
                        <Form.Check type="radio" className="btn-check" name="options" id="option3" disabled />
                        <SpkButton Disabled={true} Buttonvariant="primary" Customclass="m-1">Disabled</SpkButton>
                        <Form.Check type="radio" className="btn-check" name="options" id="option4" />
                        <SpkButton Buttonvariant="" Customclass="btn btn-primary m-1">Radio</SpkButton>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={12} md={12} sm={12} className="">
                    <ShowCode title="Checkbox toggle buttons" customCardClass="custom-card" customCardBodyClass="" reactCode={radio8}>
                        <Form.Check type="checkbox" className="btn-check" id="btn-check" />
                        <SpkButton Buttonvariant="primary" Customclass="m-1">Single toggle</SpkButton>
                        <Form.Check type="checkbox" className="btn-check" id="btn-check-2" defaultChecked />
                        <SpkButton Buttonvariant="primary" Customclass="m-1">Checked</SpkButton>
                        <Form.Check type="checkbox" className="btn-check" id="btn-check-3" disabled />
                        <SpkButton Disabled={true} Buttonvariant="primary" Customclass="m-1">Disabled</SpkButton>
                    </ShowCode>
                </Col>
            </Row>

        </Fragment>
    )
};

export default ChecksRadios;