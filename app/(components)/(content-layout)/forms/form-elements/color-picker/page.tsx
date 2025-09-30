"use client";

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Colorpicker } from "@/shared/data/prism-code/forms-prism";
import { ChromePicker } from 'react-color';
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import ShowCode from "@/shared/layouts-components/showcode/showcode";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

interface ColorPickerProps { }

const ColorPickers: React.FC<ColorPickerProps> = () => {
   
    const [pickerState, setPickerState] = useState({
        isColorPickerVisible: false,
        isChromePickerVisible: false
    });

    const [color, setColor] = useColor("#561ecb");
    const [color2, setColor2] = useState<any>("#6c5ffc");

    const toggleColorPickerVisibility = () => {
        setPickerState(prevState => ({
            ...prevState,
            isColorPickerVisible: !prevState.isColorPickerVisible
        }));
    };

    const toggleChromePickerVisibility = () => {
        setPickerState(prevState => ({
            ...prevState,
            isChromePickerVisible: !prevState.isChromePickerVisible
        }));
    };

    const handleChangeComplete = (color: string) => {
        
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-ColorPickers" />
            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Color Pickers" activepage="Color Pickers" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Bootstrap Color Picker" customCardClass="custom-card" customCardBodyClass="" reactCode={Colorpicker}>
                        <Form.Control type="color" className="form-control-color p-0 border-0"
                            id="exampleColorInput" defaultValue="#136ad0" title="Choose your color" />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Classic
                            </div>
                        </Card.Header>
                        <Card.Body className="d-xxl-flex justify-content-between flex-wrap">
                            <div className="mt-2">
                                <SpkButton Buttonvariant="primary" onClickfunc={toggleColorPickerVisibility} Customclass='btn !py-1 !px-3 mb-2 !text-[0.75rem] !m-0 !gap-0 !font-medium'>
                                    <i className="ri-palette-line"></i>
                                </SpkButton>
                                {pickerState.isColorPickerVisible && (
                                    <ColorPicker color={color} onChange={setColor} hideInput={["hex", "hsv"]} />
                                )}
                            </div>
                            <div className="mt-2">
                                <SpkButton Buttonvariant="primary" Customclass='pcr-button btn-md mb-3' onClickfunc={toggleChromePickerVisibility}>
                                    {pickerState.isChromePickerVisible ? "Close Picker" : "Pick Color"}
                                </SpkButton>
                                {pickerState.isChromePickerVisible && (
                                    <ChromePicker disableAlpha={true} color={color2} onChange={(updatedColor: { hex: number }) => setColor2(updatedColor.hex)} onChangeComplete={handleChangeComplete} />
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ColorPickers;
