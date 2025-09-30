"use client"
import { Data1, multiselectdata, Data, defaultContent } from "@/shared/data/apps/projects/createprojectdata";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});
import CreatableSelect from 'react-select/creatable';
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
const SpkSelect = dynamic(() => import('@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect'), { ssr: false });

interface CreateProjectProps { }

const Createproject: React.FC<CreateProjectProps> = () => {
    const [isSearchable] = useState(true);


    const components = {
        DropdownIndicator: null,
    };
    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };
    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value1, setValue1] = useState([
        createOption("Marketing"),
        createOption("Sales"),
        createOption("Development"),
        createOption("Design"),
        createOption("Research"),

    ]);
    const handleKeyDown = (event: { key: string; preventDefault: () => void; }) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    const [files, setFiles] = useState<any>([]);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Projects-Createproject" />

            <Pageheader title="Apps" subtitle="Projects" currentpage="Create Project" activepage="Create Project" />

            {/* <!-- Page Header Close --> */}

            {/* Start::row-1 */}
            <Row className="row">
                <Col xl={12} className="col-xl-12">
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Create Project
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <Row className="row gy-3">
                                <Col xl={4} className="col-xl-4">
                                    <Form.Label htmlFor="input-label" className="">Project Name :</Form.Label>
                                    <Form.Control type="text" className="" id="input-label" placeholder="Enter Project Name" />
                                </Col>
                                <Col xl={4} className="col-xl-4">
                                    <Form.Label htmlFor="input-label11" className="">Project Manager :</Form.Label>
                                    <Form.Control type="text" className="" id="input-label11" placeholder="Project Manager Name" />
                                </Col>
                                <Col xl={4} className="col-xl-4">
                                    <Form.Label htmlFor="input-label1" className="">Client / Stakeholder :</Form.Label>
                                    <Form.Control type="text" className="" id="input-label1" placeholder="Enter Client Name" />
                                </Col>
                                <Col xl={12} className="col-xl-12">
                                    <Form.Label className="form-label">Project Description :</Form.Label>
                                    <div>
                                        <SunEditor defaultValue={defaultContent} id="project-descriptioin-editor" />
                                    </div>
                                </Col>
                                <Col xl={6} className="col-xl-6">
                                    <Form.Label className="form-label">Start Date :</Form.Label>
                                    <Form.Group>
                                        <InputGroup className="input-group datepicker-inputwraper custom-date">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control" selected={dates["timeDate"] ? new Date(dates["timeDate"]) : null} onChange={(date: Date | null) => handleDateChange("timeDate", date)} Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" placeholderText='Choose date with time' showTimeInput />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col xl={6} className="col-xl-6">
                                    <Form.Label className="form-label">End Date :</Form.Label>
                                    <Form.Group>
                                        <InputGroup className="input-group datepicker-inputwraper custom-date">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control" dateFormat="yy/MM/dd h:mm aa" selected={dates["EndDate"] ? new Date(dates["EndDate"]) : null} onChange={(date: Date | null) => handleDateChange("EndDate", date)} Timeinput="Time:" showTimeSelect placeholderText='Choose date and time' />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Status :</Form.Label>
                                    <SpkSelect searchable={isSearchable} name="colors" option={Data1} mainClass="default basic-multi-select" id="choices-multiple-default"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Priority :</Form.Label>
                                    <SpkSelect searchable={isSearchable} name="colors" option={Data} mainClass="default basic-multi-select" id="choices-multiple-default"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Assigned To</Form.Label>
                                    <SpkSelect multi name="colors" option={multiselectdata} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Tags</Form.Label>
                                    <CreatableSelect
                                        className="tags-data"
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue1(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue1([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value1}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Attachments</Form.Label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <SpkButton Buttonvariant="primary-light" Customclass="btn btn-primary-light btn-wave ms-auto float-end">Create Project</SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/*End::row-1 */}
        </Fragment>
    )
};

export default Createproject;