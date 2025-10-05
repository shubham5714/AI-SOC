"use client"
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { TicketsViewsData, TicketCardStat, Status, Priority, tags, TicketType } from "@/shared/data/tickets/tickets-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

interface TicketsListProps { }

const TicketsList: React.FC<TicketsListProps> = () => {
    const [listView, setListView] = useState<TicketType[]>(TicketsViewsData);

    const handleRemove = (id: number) => {
        const list = listView.filter((task) => task.id !== id);
        setListView(list);
    };

    const [state, setState] = useState({
        show: false,
        selectAll: false
    });

    const handleClose = () => setState(prevState => ({
        ...prevState,
        show: false
    }));


    const handleShow = () => setState(prevState => ({
        ...prevState,
        show: true
    }));

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



    const handleSelectAll = () => {
        setState((prevState) => {
            const newSelectAll = !prevState.selectAll; // Toggle the `selectAll` state
            setListView((prevData) =>
                prevData.map((item) => ({
                    ...item,
                    checked: newSelectAll, // Update `checked` based on `selectAll`
                }))
            );
            return { ...prevState, selectAll: newSelectAll }; // Update the state correctly
        });
    };

    const handleCheckboxToggle = (id: number) => {
        setListView((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };
    return (
        <Fragment>
            <Seo title="Tickets Management" />
            <Pageheader title='Tickets' subtitle='Management' currentpage='Tickets List' activepage='Tickets List' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                {TicketCardStat.map((idx) => (
                    <Col xxl={3} key={idx.title}>
                        <Card className="custom-card overflow-hidden main-content-card">
                            <Card.Body>
                                <div className="d-flex align-items-start justify-content-between mb-2">
                                    <div>
                                        <span className="text-muted d-block mb-1">{idx.title}</span>
                                        <h4 className="fw-medium mb-0">{idx.count}</h4>
                                    </div>
                                    <div className="lh-1">
                                        <span className={`avatar avatar-md avatar-rounded bg-${idx.iconBg}`}>
                                            <i className={`ri-${idx.icon} fs-5`}></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-muted fs-13">{idx.trend} By <span className={`text-${idx.arrow === 'up' ? 'success' : 'danger'}`}>{idx.percentage}<i className={`ti ti-arrow-narrow-${idx.arrow} fs-16`}></i></span></div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={12} xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Total Tasks
                            </Card.Title>
                            <div className="d-flex">
                                <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-wave waves-light" onClickfunc={handleShow} Buttontoggle="modal" Buttontarget="#create-task"><i className="ri-add-line fw-medium align-middle me-1"></i> Create Task</SpkButton>
                                {/* <!-- Start::add task modal --> */}
                                <Modal show={state.show} centered onHide={handleClose} className="modal fade" id="create-task" tabIndex={-1}>

                                    <Modal.Header className="modal-header">
                                        <Modal.Title className="modal-title h6">Add Task</Modal.Title>
                                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close" onClickfunc={handleClose} ></SpkButton>
                                    </Modal.Header>
                                    <Modal.Body className="modal-body px-4">
                                        <Row className="gy-2">
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-name" >Task Name</Form.Label>
                                                <Form.Control type="text" id="task-name" placeholder="Task Name" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-id">Task ID</Form.Label>
                                                <Form.Control type="text" id="task-id" placeholder="Task ID" />
                                            </Col>
                                            <Col className="col-xl-6">
                                                <Form.Label>Assigned Date</Form.Label>
                                                <div className="form-group">
                                                    <div className="input-group flex-nowrap datepicker-inputwraper">
                                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                        <SpkDatepickr className="form-control" selected={dates["AssignedDate"] ? new Date(dates["AssignedDate"]) : null} onChange={(date: Date | null) => handleDateChange("AssignedDate", date)} dateFormat="yy/MM/dd h:mm aa" showTimeInput placeholderText="Choose date and time" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <label className="form-label">Due Date</label>
                                                <div className="form-group">
                                                    <div className="input-group flex-nowrap datepicker-inputwraper">
                                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                        <SpkDatepickr className="form-control" selected={dates["DueDate"] ? new Date(dates["DueDate"]) : null} onChange={(date: Date | null) => handleDateChange("DueDate", date)} showTimeInput dateFormat="yy/MM/dd h:mm aa" placeholderText="Choose date and time" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Status</Form.Label>
                                                <SpkSelect name="state" option={Status} mainClass="js-example-placeholder-multiple w-full js-states"
                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Status[0]]}
                                                />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Priority</Form.Label>
                                                <SpkSelect name="state" option={Priority} mainClass="js-example-placeholder-multiple w-full js-states"
                                                    menuplacement='auto' classNameprefix="Select2"
                                                />
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label>Assigned To</Form.Label>
                                                <SpkSelect name="state" multi option={tags} mainClass="js-example-placeholder-multiple w-full js-states"
                                                    menuplacement='auto' classNameprefix="Select2"
                                                />
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer className="modal-footer">
                                        <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn btn-light"
                                            data-bs-dismiss="modal" onClickfunc={handleClose} >Cancel</SpkButton>
                                        <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn btn-primary" >Add Task</SpkButton>
                                    </Modal.Footer>

                                </Modal>
                                {/* <!-- End::add task modal --> */}
                                <SpkDropdown Customclass='ms-2' toggleas='button' Customtoggleclass="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light no-caret" Icon={true} IconClass="ti ti-dots-vertical">
                                    <li><Dropdown.Item href="#!">New Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Pending Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Completed Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Inprogress Tasks</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" checked={state.selectAll} onChange={handleSelectAll} showCheckbox={true} header={[{ title: 'Task' }, { title: 'Task ID' }, { title: 'Assigned Date' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Priority' }, { title: 'Assigned To' }, { title: 'Action' }, { title: 'Status Update' },]}>
                                    {listView.map((idx) => (
                                        <tr className="task-list" key={idx.id}>
                                            <td className="task-checkbox">
                                                <input className="form-check-input" type="checkbox" aria-label="..." checked={idx.checked} onChange={() => handleCheckboxToggle(idx.id)} />
                                            </td>
                                            <td>
                                                <span className="fw-medium">{idx.title}</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{idx.code}</span>
                                            </td>
                                            <td>
                                                {idx.startDate}
                                            </td>
                                            <td>
                                                <span className={`fw-medium text-${idx.statusColor}`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                {idx.endDate}
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.priorityColor}-transparent`}>{idx.priority}</SpkBadge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {idx.team.map((img, index) => (
                                                        <span className="avatar avatar-sm avatar-rounded custom-width" key={index}>
                                                            <Image fill src={img} alt="img" />
                                                        </span>
                                                    ))}
                                                    {idx.teamCount && idx.teamCount > 0 && (
                                                        <span className="avatar avatar-sm bg-light avatar-rounded text-default">
                                                            +{idx.teamCount}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="danger-light" Customclass="btn btn-icon ms-1 btn-sm task-delete-btn" onClickfunc={(e: React.MouseEvent<HTMLInputElement>) => handleRemove(idx.id)} >
                                                        <i className="ri-delete-bin-5-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}-transparent`}>{idx.taskStatus}</SpkBadge>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled">
                                        <a className="page-link">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#!">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    );
};

export default TicketsList;