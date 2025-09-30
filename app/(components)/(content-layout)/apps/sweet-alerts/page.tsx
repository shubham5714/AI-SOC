"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";

interface SweetAlertsProps { }

const SweetAlerts: React.FC<SweetAlertsProps> = () => {

    function Basicsweetalert() {
        Swal.fire({
            title: 'Hello this is Basic alert message',
            allowOutsideClick: true,
            confirmButtonColor: '#3085d6'
        });
    }

    function TitleAlert() {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    }

    function FooterAlert() {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    function LoginWindow() {
        Swal.fire({
            imageUrl: "https://placeholder.pics/svg/300x1500",
            imageHeight: 1500,
            imageAlt: "A tall image"
        });
    }

    function CustomHTMLAlert() {
        Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html: `
              You can use <b>bold text</b>,
              <a href="http://sweetalert2.github.io/" target='_blank' autofocus>links</a>
              and other HTML tags
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Great!
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              <i class="fe fe-thumbs-down"></i>
            `,
            cancelButtonAriaLabel: "Thumbs down"
        });
    }

    function MultipleButtons() {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    function AlertDialog() {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

    function ConfirmAlert() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    function AlertParameters() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ",
                cancelButton: "btn btn-danger me-2"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    function ImageAlert() {
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "../../assets/images/media/media-59.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
    }

    //backgroundimage
    function Backgroundimage() {
        Swal.fire({
            title: 'Custom width, padding, color, background.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(../../assets/images/media/media-19.jpg)',
        });
    }

    // auto close

    function Autoclose() {
        let timerInterval: string | number | NodeJS.Timeout | undefined;

        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer()?.querySelector('b'); // Use optional chaining here
                if (b) {
                    timerInterval = setInterval(() => {
                        const timerLeft = Swal.getTimerLeft()?.toString() || '0'; // Use optional chaining and provide a default value
                        b.textContent = timerLeft;
                    }, 100);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {

            }
        });
    }

    //Ajax
    function Ajaxalert() {
        Swal.fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                });
            }
        });
    }

    return (
        <Fragment>
            <Seo title="Projects-Sweetalerts" />

            <Pageheader title="Apps" currentpage="Sweet Alerts" activepage="Sweet Alerts" />
            {/* <!-- Start:: row-1 --> */}
            <Row className="row">
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Basic Alert
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="basic-alert" onClickfunc={Basicsweetalert} >Basic Alert</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Title With Text Under
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-text" onClickfunc={TitleAlert} >Title With Text</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                With Text,Error Icon & Footer
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Customclass="btn btn-primary" Buttonvariant="primary" Id="alert-footer" onClickfunc={FooterAlert} >Alert Footer</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Alert With Long Window
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Customclass="btn btn-primary" Buttonvariant="primary" Id="long-window" onClickfunc={LoginWindow} >Long Window Here</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Custom HTML Description
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-description" onClickfunc={CustomHTMLAlert} >Custom HTML Alert</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Alert With Multiple Buttons
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="three-buttons" onClickfunc={MultipleButtons} >Multiple Buttons</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Custom Positioned Dialog Alert
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-dialog" onClickfunc={AlertDialog} >Alert Dialog</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Confirm Alert
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-confirm" onClickfunc={ConfirmAlert} >Confirm Alert</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Alert With Parameters
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-parameter" onClickfunc={AlertParameters} >Alert Parameters</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Alert With Image
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-image" onClickfunc={ImageAlert} >Image Alert</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Alert With Image
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-custom-bg" onClickfunc={Backgroundimage} >Custom Alert</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header >
                            <Card.Title>
                                Auto Close Alert
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-auto-close" onClickfunc={Autoclose} >Auto Close</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="card custom-card">
                        <Card.Header className="card-header">
                            <Card.Title className="card-title">
                                Ajax Request Alert
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body text-center">
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-primary" Id="alert-ajax" onClickfunc={Ajaxalert} >Ajax Request</SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    )
};

export default SweetAlerts;
