"use client"

import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { validation1, validation2, validation3, validation4, validation5 } from "@/shared/data/prism-code/forms-prism";
import ShowCode from "@/shared/layouts-components/showcode/showcode";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";

interface ValidationProps { }

const Validation: React.FC<ValidationProps> = () => {

    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        file: yup.mixed().required(),
        terms: yup.bool().required().oneOf([true], "terms must be accepted"),
    });

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const [formData, setFormData] = useState({
        textarea: "",
        checkbox: false,
        radio1: false,
        radio2: false,
        select: "",
        file: null,
    });

    // State to handle validation error messages
    const [errors, setErrors] = useState<any>({});

    // Handle form submission
    const handleSubmit1 = (event: React.FormEvent) => {
        event.preventDefault();
        const validationErrors: Record<string, string> = {};
        if (!formData.textarea) {
            validationErrors.textarea = "Please enter a message in the textarea.";
        }
        if (!formData.checkbox) {
            validationErrors.checkbox = "Please check this checkbox.";
        }
        if (!formData.radio1 && !formData.radio2) {
            validationErrors.radio = "Please select a radio option.";
        }
        if (!formData.select) {
            validationErrors.select = "Please select an option.";
        }
        if (!formData.file) {
            validationErrors.file = "Please upload a file.";
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Submit the form if no errors
            console.log("Form submitted successfully", formData);
        }
    };

    // Handle form field changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, checked, files } = event.target as HTMLInputElement;

        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else if (type === "radio") {
            setFormData({ ...formData, [name]: checked });
        } else if (type === "file") {
            setFormData({ ...formData, [name]: files ? files[0] : null });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-Validation" />

            <Pageheader title="Forms" currentpage="Validation" activepage="Validation" />

            {/* <!-- Page Header Close --> */}

            <Row>
                <Col xl={12}>
                    <ShowCode title="Browser Default Validation" customCardClass="custom-card" customCardBodyClass="" reactCode={validation2}>
                        <Form className="row g-3">
                            <Col md={4}>
                                <Form.Label htmlFor="validationDefault01">First name</Form.Label>
                                <Form.Control type="text" id="validationDefault01"
                                    defaultValue="Mark" required />
                            </Col>
                            <Col md={4}>
                                <Form.Label htmlFor="validationDefault02">Last name</Form.Label>
                                <Form.Control type="text" id="validationDefault02"
                                    defaultValue="Otto" required />
                            </Col>
                            <Col md={4}>
                                <Form.Label htmlFor="validationDefaultUsername">Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className="" id="inputGroupPrepend2">@</InputGroup.Text>
                                    <Form.Control type="text" id="validationDefaultUsername"
                                        aria-describedby="inputGroupPrepend2" required />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <Form.Label htmlFor="validationDefault03">City</Form.Label>
                                <Form.Control type="text" id="validationDefault03" required />
                            </Col>
                            <Col md={3}>
                                <Form.Label htmlFor="validationDefault04">State</Form.Label>
                                <Form.Select className="" id="validationDefault04" required defaultValue="Choose...">
                                    <option disabled >Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Form.Label htmlFor="validationDefault05">Zip</Form.Label>
                                <Form.Control type="text" id="validationDefault05" required />
                            </Col>
                            <div className="col-12">
                                <Form.Check type="checkbox" label="Agree to terms and conditions" required />
                            </div>
                            <div className="col-12">
                                <SpkButton Buttonvariant='primary' Buttontype="submit">Submit form</SpkButton>
                            </div>
                        </Form>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Custom Validation" customCardClass="custom-card" customCardBodyClass="" reactCode={validation1}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
                            <Row className="mb-3 custom-form-valid">
                                <Form.Group as={Col} md="4" id="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" id="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" id="validationCustomUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 custom-form-valid">
                                <Form.Group as={Col} md="6" id="validationCustom03">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" id="validationCustom04">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select className="" id="validationCustom04" required defaultValue="Choose...">
                                        <option disabled>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select a valid state.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" id="validationCustom05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" placeholder="Zip" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" required />
                                <label className="form-check-label" htmlFor="invalidCheck"> Agree to terms and conditions </label>
                                <div className="invalid-feedback"> You must agree before submitting. </div>
                            </div>
                            <SpkButton Buttontype="submit" Customclass="mt-2">Submit form</SpkButton>
                        </Form>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Supported Elements" customCardClass="custom-card" customCardBodyClass="" reactCode={validation5}>
                        <Form className="was-validated" onSubmit={handleSubmit1}>
                            <div className="mb-3">
                                <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                                <Form.Control as="textarea" id="validationTextarea" name="textarea" placeholder="Required example textarea" value={formData.textarea} onChange={handleChange} isInvalid={!!errors.textarea} required />
                                <Form.Control.Feedback type="invalid">{errors.textarea}</Form.Control.Feedback>
                            </div>
                            <Form.Check type="checkbox" className="form-check mb-3" id="validationFormCheck1" name="checkbox" checked={formData.checkbox} onChange={handleChange} required isInvalid={!!errors.checkbox} label="Check this checkbox" />
                            <Form.Control.Feedback type="invalid">{errors.checkbox}</Form.Control.Feedback>
                            <Form.Check type="radio" id="validationFormCheck2" name="radio1" checked={formData.radio1} onChange={handleChange} required isInvalid={!!errors.radio} label="Toggle this radio" />
                            <Form.Check type="radio" className="form-check mb-3" id="validationFormCheck3" name="radio2" checked={formData.radio2} onChange={handleChange} required isInvalid={!!errors.radio} label="Or toggle this other radio" />
                            <Form.Control.Feedback type="invalid">{errors.radio}</Form.Control.Feedback>
                            <Form.Group className="mb-3">
                                <Form.Select name="select" value={formData.select} onChange={handleChange} required isInvalid={!!errors.select} aria-label="select example">
                                    <option value="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">{errors.select}</Form.Control.Feedback>
                            </Form.Group>
                            <div className="mb-3">
                                <Form.Control type="file" name="file" aria-label="file example" onChange={handleChange} required isInvalid={!!errors.file} />
                                <Form.Control.Feedback type="invalid">{errors.file}</Form.Control.Feedback>
                            </div>
                            <div className="mb-3">
                                <SpkButton Buttonvariant="primary" Buttontype="submit" Disabled={false}>Submit form</SpkButton>
                            </div>
                        </Form>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Server Side Validation" customCardClass="custom-card" customCardBodyClass="" reactCode={validation3}>
                        <Form className="row g-3">
                            <Col md={4}>
                                <Form.Label htmlFor="validationServer01">First
                                    name</Form.Label>
                                <Form.Control type="text" className="form-control is-valid"
                                    id="validationServer01" defaultValue="Mark" required />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={4}>
                                <Form.Label htmlFor="validationServer02">Last
                                    name</Form.Label>
                                <Form.Control type="text" className="form-control is-valid"
                                    id="validationServer02" defaultValue="Otto" required />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={4}>
                                <Form.Label htmlFor="validationServerUsername"
                                >Username</Form.Label>
                                <InputGroup className="has-validation">
                                    <InputGroup.Text className="input-group-text rounded-end-0" id="inputGroupPrepend3">@</InputGroup.Text>
                                    <Form.Control type="text" className="form-control is-invalid"
                                        id="validationServerUsername"
                                        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                        required />
                                </InputGroup>
                                <Form.Control.Feedback id="validationServerUsernameFeedback" className="invalid-feedback d-block">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <Form.Label htmlFor="validationServer03">City</Form.Label>
                                <Form.Control type="text" className="form-control is-invalid"
                                    id="validationServer03"
                                    aria-describedby="validationServer03Feedback" required />
                                <Form.Control.Feedback id="validationServer03Feedback" className="invalid-feedback">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={3}>
                                <Form.Label htmlFor="validationServer04">State</Form.Label>
                                <Form.Select className="form-select is-invalid" id="validationServer04" defaultValue="Choose..."
                                    aria-describedby="validationServer04Feedback" required>
                                    <option disabled >Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                <Form.Control.Feedback id="validationServer04Feedback" className="invalid-feedback">
                                    Please select a valid state.
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={3}>
                                <Form.Label htmlFor="validationServer05">Zip</Form.Label>
                                <Form.Control type="text" className="form-control is-invalid"
                                    id="validationServer05"
                                    aria-describedby="validationServer05Feedback" required />
                                <Form.Control.Feedback id="validationServer05Feedback" className="invalid-feedback">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Col>
                            <div className="col-12">
                                <Form.Check required isInvalid label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
                            </div>
                            <div className="col-12">
                                <SpkButton Buttonvariant="primary" Buttontype="submit">Submit
                                    form</SpkButton>
                            </div>
                        </Form>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Tooltips" customCardClass="custom-card" customCardBodyClass="" reactCode={validation4}>
                        <Formik validationSchema={schema} onSubmit={console.log} initialValues={{ firstName: "Mark", lastName: "Otto", username: "", city: "", state: "", zip: "", file: null, terms: false, }}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            id="validationFormik101"
                                            className="position-relative"
                                        >
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control type="text" name="firstName" defaultValue={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName} />
                                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" id="validationFormik102" className="position-relative">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName} />
                                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" id="validationFormikUsername2">
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend" className="border-end-0">@</InputGroup.Text>
                                                <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" name="username" defaultValue={values.username} onChange={handleChange} isInvalid={!!errors.username} />
                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.username}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3 ">
                                        <Form.Group as={Col} md="6" id="validationFormik103" className="position-relative">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="City" name="city" defaultValue={values.city} onChange={handleChange} isInvalid={!!errors.city}
                                            />
                                            <Form.Control.Feedback type="invalid" tooltip>
                                                {errors.city}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" id="validationFormik104" className="position-relative">
                                            <Form.Label htmlFor="validationTooltip04">State</Form.Label>
                                            <Form.Select className="form-select" id="validationTooltip04" name="state" defaultValue={values.state} onChange={handleChange} isInvalid={!!errors.state} required>
                                                <option disabled defaultValue="">Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid" tooltip>
                                                {errors.state}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" id="validationFormik105" className="position-relative">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control type="text" placeholder="Zip" name="zip" defaultValue={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />

                                            <Form.Control.Feedback type="invalid" tooltip>
                                                {errors.zip}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <SpkButton Buttontype="submit">Submit form</SpkButton>
                                </Form>
                            )}
                        </Formik>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    )
};

export default Validation;