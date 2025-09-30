import React, { Fragment, useEffect, useState } from "react";
import { Col, Form, Offcanvas, Row } from "react-bootstrap";
import { data$, getState } from "../services/switcherServices";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import {
  updateTheme,
  Reset1,
  setDirection,
  setPrimaryColor,
  ThemePrimaryColor,
} from "@/shared/data/switcherdata/switcherdata";

interface LandingSwitcherProps {
  show: boolean;
  handleClose: () => void;
}

const Landingswitcher = ({ show, handleClose }: LandingSwitcherProps) => {
  let [variable, setVariable] = useState(getState());
  useEffect(() => {
    const subscription = data$.subscribe((e) => {
      setVariable(e);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Fragment>
      {/* <!-- Start Switcher --> */}
      <Offcanvas
        className="offcanvas offcanvas-end"
        placement="end"
        show={show}
        onHide={handleClose}
        tabIndex={-1}
        id="switcher-canvas"
        aria-labelledby="offcanvasRightLabel"
      >
        <Offcanvas.Header className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Switcher
          </h5>
          <SpkButton
            Buttontype="button"
            Buttonvariant=""
            Customclass="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClickfunc={handleClose}
          ></SpkButton>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <div className="">
            <p className="switcher-style-head">Theme Color Mode:</p>
            <Row className="row switcher-style">
              <Col className="col-4">
                <Form.Check className="form-check switch-select">
                  <Form.Check.Label
                    className="form-check-label"
                    htmlFor="switcher-light-theme"
                  >
                    Light
                  </Form.Check.Label>
                  <Form.Check.Input
                    className="form-check-input"
                    type="radio"
                    name="theme-style"
                    id="switcher-light-theme"
                    checked={variable.dataThemeMode === "light"}
                    onChange={(_e) => { }}
                    onClick={() => updateTheme('light', "clicked")}
                  />
                </Form.Check>
              </Col>
              <Col className="col-4">
                <Form.Check className="form-check switch-select">
                  <Form.Check.Label
                    className="form-check-label"
                    htmlFor="switcher-dark-theme"
                  >
                    Dark
                  </Form.Check.Label>
                  <Form.Check.Input
                    className="form-check-input"
                    type="radio"
                    name="theme-style"
                    id="switcher-dark-theme"
                    checked={variable.dataThemeMode === "dark"}
                    onChange={(_e) => { }}
                    onClick={() => updateTheme('dark', "clicked")}
                  />
                </Form.Check>
              </Col>
            </Row>
          </div>
          <div className="">
            <p className="switcher-style-head">Directions:</p>
            <div className="row switcher-style">
              <div className="col-4">
                <Form.Check className="form-check switch-select">
                  <Form.Check.Label
                    className="form-check-label"
                    htmlFor="switcher-ltr"
                  >
                    LTR
                  </Form.Check.Label>
                  <Form.Check.Input
                    className="form-check-input"
                    type="radio"
                    name="direction"
                    id="switcher-ltr"
                    checked={variable.dir === "ltr"}
                    onChange={(_e) => { }}
                    onClick={() => setDirection("ltr")}
                  />
                </Form.Check>
              </div>
              <div className="col-4">
                <Form.Check className="form-check switch-select">
                  <Form.Check.Label
                    className="form-check-label"
                    htmlFor="switcher-rtl"
                  >
                    RTL
                  </Form.Check.Label>
                  <Form.Check.Input
                    className="form-check-input"
                    type="radio"
                    name="direction"
                    id="switcher-ltr"
                    checked={variable.dir === "rtl"}
                    onChange={(_e) => { }}
                    onClick={() => setDirection("rtl")}
                  />
                </Form.Check>
              </div>
            </div>
          </div>
          <div className="theme-colors">
            <p className="switcher-style-head">Theme Primary:</p>
            <div className="d-flex align-items-center switcher-style">
              <Form.Check className="form-check switch-select me-3">
                <Form.Check.Input
                  className="form-check-input color-input color-primary-1"
                  type="radio"
                  name="theme-primary"
                  id="switcher-primary"
                  checked={variable.colorPrimaryRgb === "64, 100, 221"}
                  onChange={(_e) => { }}
                  onClick={() => setPrimaryColor('64, 100, 221')}
                />
              </Form.Check>
              <Form.Check className="form-check switch-select me-3">
                <Form.Check.Input
                  className="form-check-input color-input color-primary-2"
                  type="radio"
                  name="theme-primary"
                  id="switcher-primary"
                  checked={variable.colorPrimaryRgb === "207, 117, 225"}
                  onChange={(_e) => { }}
                  onClick={() => setPrimaryColor('207, 117, 225')}
                />
              </Form.Check>
              <Form.Check className="form-check switch-select me-3">
                <Form.Check.Input
                  className="form-check-input color-input color-primary-3"
                  type="radio"
                  name="theme-primary"
                  id="switcher-primary"
                  checked={variable.colorPrimaryRgb === "199, 89, 106"}
                  onChange={(_e) => { }}
                  onClick={() => setPrimaryColor('199, 89, 106')}
                />
              </Form.Check>
              <Form.Check className="form-check switch-select me-3">
                <Form.Check.Input
                  className="form-check-input color-input color-primary-4"
                  type="radio"
                  name="theme-primary"
                  id="switcher-primary3"
                  checked={variable.colorPrimaryRgb === "1, 159, 162"}
                  onChange={(_e) => { }}
                  onClick={() => setPrimaryColor('1, 159, 162')}
                />
              </Form.Check>
              <Form.Check className="form-check switch-select me-3">
                <Form.Check.Input
                  className="form-check-input color-input color-primary-5"
                  type="radio"
                  name="theme-primary"
                  id="switcher-primary4"
                  checked={variable.colorPrimaryRgb === "139, 149, 4"}
                  onChange={(_e) => { }}
                  onClick={() => setPrimaryColor('139, 149, 4')}
                />
              </Form.Check>
              <div className="form-check switch-select me-3 ps-0 mt-1 color-primary-light">
                <div className="theme-container-primary">
                  <SpkButton Customclass="">nano</SpkButton>
                </div>
                <div className="pickr-container-primary">
                  <SpkButton
                    Customclass="pcr-button"
                    onClickfunc={(ele: React.MouseEvent<HTMLButtonElement>) => {
                      if (ele.target.querySelector("input")) {
                        ele.target.querySelector("input").click();
                      }
                    }}
                  >
                    <ThemePrimaryColor />
                  </SpkButton>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="switcher-style-head">reset:</p>
            <div className="text-center">
              <SpkButton
                Id="reset-all"
                Customclass="btn btn-danger mt-3"
                Buttonvariant="danger"
                onClickfunc={Reset1}
              >
                Reset
              </SpkButton>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <!-- End Switcher --> */}
    </Fragment>
  );
};

export default Landingswitcher;
