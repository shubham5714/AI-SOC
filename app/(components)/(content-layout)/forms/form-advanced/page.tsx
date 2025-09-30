"use client";
import React, { FC, Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Tags from "@yaireo/tagify/dist/react.tagify";
import PhoneInput from 'react-phone-number-input';
import { CountrySelect } from "react-country-state-city";
import dynamic from "next/dynamic";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
const SpkSelect = dynamic(() => import('@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect'), { ssr: false });
import { Tagifyselectdata } from "@/shared/data/forms/formadvancedata";
import ListBox from "react-listbox";

// TagifySettings Interface
interface TagifySettings {
    maxTags: number;
    placeholder: string;
    dropdown: {
        enabled: number;
    };
}

interface FormAdvancedProps {}

const FormAdvanced: FC<FormAdvancedProps> = () => {
    const [state, setState] = useState({
        value: null,
        value1: null,
        _countryid: 0,
    });

    const [telephone, setTelephone] = useState({
        selected: [1, 2],
        select: [1, 2],
        tags: "tag2, tag2",
        tags1: "CSS, HTML, JavaScript",
        tags2: "tag1, tag2, tag3, tag4, tag5, tag6"
    });

    // Options for SelectBox components
    const options: { value: string; label: string }[] = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' },
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' },
        { value: 'seven', label: 'Seven' },
        { value: 'eight', label: 'Eight' },
        { value: 'nine', label: 'Nine' },
        { value: 'ten', label: 'Ten' },
    ];

    const options1: { value: string; label: string }[] = [
        { label: 'One', value: "1" },
        { label: 'Two', value: "2" },
        { label: 'Three', value: "3" },
    ];

    // Tagify settings
    const tagifySettings: TagifySettings = {
        maxTags: 10,
        placeholder: "Add tags here...",
        dropdown: {
            enabled: 0,
        },
    };

    const tagifySettings1: TagifySettings = {
        maxTags: 10,
        placeholder: "Add more tags...",
        dropdown: {
            enabled: 0,
        },
    };

    const tagifySettings2: TagifySettings = {
        maxTags: 10,
        placeholder: "Add more tags...",
        dropdown: {
            enabled: 0,
        },
    };

    // Functions to handle tag changes
    const handleTagChange = (field: string, value: string) => {
        setTelephone(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleCountryChange = (e: React.MouseEvent<HTMLInputElement>) => {
        setState(prevState => ({
            ...prevState,
            _countryid: e.id, // Assuming the country object has an `id`
        }));
    };

    // Handle selected option change for ListBox
    const handleChangeSelected = (newValue: number) => {
        setTelephone(prevState => ({
            ...prevState,
            selected: [newValue] // Update selected state
        }));
        console.log("Selected option index:", newValue);
    };

    return (
        <Fragment>
            {/* Page Header */}
            <Seo title="Forms-Formadvanced" />
            <Pageheader title="Forms" currentpage="Form Advanced" activepage="Form Advanced" />

            {/* Row 1 - Tagify Inputs */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">TAGIFY JS</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={6}>
                                    <Form.Label className="form-label d-block">Basic Tagify</Form.Label>
                                    <Tags value={telephone.tags} settings={tagifySettings} onChange={(e) => handleTagChange('tags', e.detail.value)} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label d-block">Tagify With Custom Suggestions</Form.Label>
                                    <Tags value={telephone.tags1} settings={tagifySettings1} onChange={(e) => handleTagChange('tags1', e.detail.value)} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label d-block">Disabled User Input</Form.Label>
                                    <Form.Control name="tags-disabled-user-input" placeholder="Select tags from the list" className="form-control" disabled />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label d-block">Drag & Sort</Form.Label>
                                    <Tags value={telephone.tags2} settings={tagifySettings2} onChange={(e) => handleTagChange('tags2', e.detail.value)} />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label d-block">Tagify Single-Value Select</Form.Label>
                                    <SpkSelect name="colors" option={Tagifyselectdata} mainClass="default basic-multi-select" id="choices-multiple-default" menuplacement="auto" classNameprefix="Select2" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Row 2 - Telephone Inputs */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">TELEPHONE INPUT</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-4">
                                <Col xl={3}>
                                    <Form.Label htmlFor="phone" className="form-label d-block">Basic Telephone Input</Form.Label>
                                    <PhoneInput placeholder="Enter phone number" value={state.value} onChange={(phoneNumber) => setState({ ...state, value: phoneNumber })} />
                                </Col>
                                <Col xl={4}>
                                    <Form.Label htmlFor="phone-only-countries" className="form-label d-block">Telephone Input With Default Country</Form.Label>
                                    <PhoneInput placeholder="Enter phone number" defaultCountry="US" value={state.value1} onChange={(phoneNumber) => setState({ ...state, value1: phoneNumber })} />
                                </Col>
                                <Col xl={4}>
                                    <Form.Label htmlFor="phone-existing-number" className="form-label d-block">Input With Only Countries</Form.Label>
                                    <CountrySelect onChange={handleCountryChange} placeHolder="Select Country" className="border-0" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Row 3 - Auto Complete */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">AUTO COMPLETE</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xxl={4} className="d-flex align-items-center gap-2">
                                    <Form.Label htmlFor="autoComplete" className="mb-0">Search Results Of Food & Drinks Combo</Form.Label>
                                    <Form.Control type="search" className="w-auto" id="autoComplete" placeholder="Placeholder" autoComplete="off" />
                                </Col>
                                <Col xxl={4} className="d-flex align-items-center gap-2">
                                    <Form.Label htmlFor="autoComplete-color" className="mb-0">Advanced Search Results For Colors</Form.Label>
                                    <Form.Control type="search" className="w-auto" id="autoComplete-color" autoComplete="off" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Row 4 - Dual ListBox */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">DUAL LIST BOX</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-4">
                                <Col xl={6}>
                                    <h6>Select by class :</h6>
                                    <ListBox options={options} onChange={handleChangeSelected} selected={telephone.selected} />
                                </Col>
                                <Col xl={6}>
                                    <h6>Add options and add eventListeners :</h6>
                                    <ListBox options={options1} onChange={handleChangeSelected} selected={telephone.select} />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default FormAdvanced;
