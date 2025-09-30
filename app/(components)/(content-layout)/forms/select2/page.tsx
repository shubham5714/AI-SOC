"use client"

const SpkSelect = dynamic(() => import("@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect"), { ssr: false });
const SpkMultiselect = dynamic(() => import("@/shared/@spk-reusable-components/reusable-plugins/spk-multiselect"), { ssr: false });
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from "@/shared/data/forms/select2data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface Option {
    value: string;
    label: string;
}

interface Optionmax {
    value: string;
    label: string;
}

interface Select2Props { }


const Select2: React.FC<Select2Props> = () => {

    const [state, setState] = useState({
        valuesA: null,
        valuesB: null,
        selectedOptions: null as Optionmax[] | null,
        singleSelectValue: null as Option | null,
        multiSelectValue: [] as Option[] | null,
        isSelectDisabled: false,
        selectedOptions1: [] as string[],
        errorMessage: '',
    });

    const handleSelectChange = (selected: Optionmax[] | null) => {
        const maxSelections = 3;

        if (selected && selected.length <= maxSelections) {
            setState(prev => ({ ...prev, selectedOptions: selected }));
        }
    };



    const options: Option[] = [
        { value: 's-1', label: 'Selection-1' },
        { value: 's-2', label: 'Selection-2' },
        { value: 's-3', label: 'Selection-3' },
        { value: 's-4', label: 'Selection-4' },
        { value: 's-5', label: 'Selection-5' },
    ];
    const options1: Option[] = [
        { value: 's-1', label: 'Selection-1' },
        { value: 's-2', label: 'Selection-2' },
        { value: 's-3', label: 'Selection-3' },
    ];

    const handleSingleSelectChange = (selectedOption: Option | null) => {
        setState(prev => ({ ...prev, singleSelectValue: selectedOption }));
    };

    const handleMultiSelectChange = (selectedOptions: Option[] | null) => {
        setState(prev => ({ ...prev, multiSelectValue: selectedOptions }));
    };

    const disableSelect = () => {
        setState(prev => ({ ...prev, isSelectDisabled: true }));
    };

    const enableSelect = () => {
        setState(prev => ({ ...prev, isSelectDisabled: false }));
    };


    const MAX_SELECTIONS = 3;

    const handleSelectChange1 = (selected1: string[]) => {
        if (selected1.length > MAX_SELECTIONS) {
            setState(prev => ({
                ...prev,
                errorMessage: 'You can only select up to 3 items!',
            }));
        } else {
            setState(prev => ({
                ...prev,
                selectedOptions1: selected1,
                errorMessage: '',
            }));
        }
    };

    const filteredOptions =
        state.selectedOptions1.length >= MAX_SELECTIONS
            ? state.selectedOptions1
            : Selectmaxoption;

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-Select2" />

            <Pageheader title="Forms" currentpage="Select2" activepage="Select2" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Select2
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="state" option={Selectoption1} mainClass="basic-multi-select " searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Selectoption1[0]]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Single Select With Placeholder
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="state" option={Selectoption3} mainClass="js-example-placeholder-single js-states" clearable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Selectoption3[0]]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multiple Select
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkMultiselect multi options={Selectoption2} mainClass="default basic-multi-select custom-multi custom-select-dropdown custom-form-drop" values={[Selectoption2[0]]} onChange={(valuesA) => setState(prev => ({ ...prev, valuesA: valuesA }))} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multiple Select With Placeholder
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkMultiselect multi options={Selectoption4} mainClass="default basic-multi-select custom-multi custom-select-dropdown  custom-form-drop" onChange={(valuesB) => setState(prev => ({ ...prev, valuesB: valuesB }))} placeholder="Select a State" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Templating
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="state" option={Selectoption5} mainClass="js-example-templating js-persons basic-custom-select" menuplacement="auto" classNameprefix="Select2" defaultvalue={[Selectoption5[0]]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Templating Selection
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="state" option={Selectoption5} mainClass="basic-multi-select" menuplacement="auto" classNameprefix="Select2" defaultvalue={[Selectoption5[0]]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Disabling a Select2 control
                            </div>
                        </Card.Header>
                        <div className="card-body vstack gap-3">
                            <SpkSelect mainClass="mb-3" option={options} classNameprefix="Select2" defaultvalue={state.singleSelectValue} onfunchange={handleSingleSelectChange} disabled={state.isSelectDisabled} />
                            <SpkSelect mainClass="js-example-disabled-multi" option={options1} defaultvalue={state.multiSelectValue} classNameprefix="Select2" onfunchange={handleMultiSelectChange} multi disabled={state.isSelectDisabled} clearable={!state.isSelectDisabled} />
                            <div>
                                <SpkButton Buttonvariant='primary-light' Customclass="me-2" onClickfunc={enableSelect}>
                                    Enable
                                </SpkButton>
                                <SpkButton Buttonvariant='primary' onClickfunc={disableSelect}>
                                    Disable
                                </SpkButton>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Max Selections Limiting
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect multi name="states[]" option={filteredOptions} mainClass="basic-multi-select" searchable menuplacement="auto" classNameprefix="Select2" defaultvalue={state.selectedOptions1} onfunchange={handleSelectChange1} noOptionsmessage={() => (state.selectedOptions1.length >= MAX_SELECTIONS ? "You can only select up to 3 items!" : "No options available")} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
};

export default Select2;