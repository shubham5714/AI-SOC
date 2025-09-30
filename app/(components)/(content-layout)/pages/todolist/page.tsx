"use client"
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Pagination, Row, Table } from "react-bootstrap";
import { mailtype, Priority, Status, tags, tasks, TaskType, TodoData } from "@/shared/data/pages/todolistdata";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import { ReactSortable } from "react-sortablejs";
import SpkProgress from "@/shared/@spk-reusable-components/reusable-uiElements/spk-progress";
import Image from "next/image";

interface TodolistProps { }

const Todolist: React.FC<TodolistProps> = () => {

    //Modal
    const [todolist, setTodolist] = useState(false);

    const handleClose = () => setTodolist(false);
    const handleShow = () => setTodolist(true);

    //datepicker
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

    /*....*/
    const [allChecked, setAllChecked] = useState(false);
    const [data, setData] = useState<TaskType[]>(TodoData);
    const [checkedState, setCheckedState] = useState<boolean[]>([]);

    // Initialize checkedState when data changes
    useEffect(() => {
        setCheckedState(data.map(item => item.checked));
    }, [data]);

    // Handle "Check All"
    const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setAllChecked(checked);
        setCheckedState(data.map(() => checked));

        // Update checked state in data as well
        const updatedData = data.map(item => ({ ...item, checked }));
        setData(updatedData);
    };

    // Handle individual checkbox
    const handleIndividualCheck = (index: number) => {
        const updatedState = [...checkedState];
        updatedState[index] = !updatedState[index];  // Toggle individual checkbox
        setCheckedState(updatedState);

        // Update the "checked" state in the actual task data as well
        const updatedData = [...data];
        updatedData[index].checked = updatedState[index];
        setData(updatedData);

        setAllChecked(updatedState.every(Boolean)); // Check if all checkboxes are checked
    };

    // Delete item by ID
    const handleRemove = (id: number) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);

        // Also update the checkedState
        const updatedCheckedState = checkedState.filter((_, index) => data[index].id !== id);
        setCheckedState(updatedCheckedState);
    };


    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-ToDoList" />
            <Pageheader title="Pages" currentpage="To Do List" activepage="To Do List" />
            {/* <!-- End::page-header --> */}

            {/*<!-- Start::row-1 -->*/}
            <Row className="">
                <Col xl={3}>
                    <Card className=" custom-card">
                        <Card.Header className=" gap-2 align-items-center pb-3 border-bottom border-block-end-dashed">
                            <div>
                                <span className="avatar avatar-md bg-primary avatar-rounded"><i className="ri-file-list-3-line fs-16"></i></span>
                            </div>
                            <div>
                                <Card.Title className="">
                                    To Do List
                                </Card.Title>
                                <span className="text-muted d-block fs-12"> Create new list</span>
                            </div>
                            <SpkButton Buttonvariant="secondary-light ms-auto" Size="sm" Buttontype="button" ><i className="ri-add-line me-1"></i>Add New List </SpkButton>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 task-navigation border-bottom border-block-end-dashed">
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-0">
                                        <span className="fs-11 text-muted op-7 fw-medium">General</span>
                                    </li>
                                    {tasks.map((task) => (
                                        <li key={task.id} className={task.active ? 'active' : ''}>
                                            <Link scroll={false} href="#!">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-2 lh-1">
                                                        <i className={`${task.icon} align-middle fs-14 ${task.icon.includes('line') ? 'text-primary' : ''}`}></i>
                                                    </span>
                                                    <span className="flex-fill text-nowrap">
                                                        {task.title}
                                                    </span>
                                                    {task.count && (
                                                        <SpkBadge Customclass={`${task.badgeClass} rounded-pill`}>{task.count}</SpkBadge>
                                                    )}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-2 d-flex justify-content-between gap-2 align-items-center">
                                        <span className="fs-11 text-muted op-7 fw-medium">Work Space</span>
                                    </li>
                                    {mailtype.map((task) => (
                                        <li key={task.id}>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <div>
                                                    <input className="form-check-input" type="checkbox" value="" aria-label="..." />
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium">{task.title}</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3 p-3 bg-primary rounded border overflow-hidden todo-list-card">
                                <div>
                                    <div className="fs-15 fw-medium text-fixed-white">Today Completed</div>
                                    <div className="mb-4 fs-15 fw-medium text-fixed-white">Tasks</div>
                                    <h4 className="mb-0 text-fixed-white">3/28 Tasks</h4>
                                </div>
                                <div className="">
                                    <Image fill src="../../assets/images/media/media-66.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between pb-3 border-bottom border-block-end-dashed">
                            <div className="flex-grow-1">
                                <Form.Control className="form-control w-100" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkDropdown Togglevariant='light'
                                    Customtoggleclass="btn btn-light no-caret btn-wave" Arrowicon={true} Toggletext="Sort By">
                                    <Dropdown.Item as="li" >New</Dropdown.Item>
                                    <Dropdown.Item as="li" >Popular</Dropdown.Item>
                                    <Dropdown.Item as="li" >Relevant</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                            <SpkButton Buttonvariant="primary ms-auto" Buttontype="button" Buttontoggle="modal" onClickfunc={handleShow} ><i className="ri-add-circle-line lh-1 me-1"></i>Add New Task </SpkButton>

                        </Card.Header>
                        <Card.Body className="p-0 position-relative" id="todo-content">
                            <div>
                                <div className="table-responsive">
                                    <Table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input className="form-check-input check-all" type="checkbox" checked={allChecked} onChange={handleCheckAll} id="all-tasks" value="" aria-label="..." />
                                                </th>
                                                <th className="todolist-handle-drag">

                                                </th>
                                                <th scope="col">Task Title</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Dead Line</th>
                                                <th scope="col">Priority</th>
                                                <th scope="col">Assigner</th>
                                                <th scope="col" className="todolist-progress">Progress</th>
                                                <th scope="col" className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <ReactSortable
                                            list={data}
                                            setList={setData}
                                            className="sortable-table"
                                            animation={150} // Adjust the animation speed
                                            handle=".todo-handle" // This makes only the drag handle element draggable
                                            tag='tbody'
                                        >
                                            {data.map((idx, index) => (
                                                <tr className="todo-box" key={index}>
                                                    <td className="task-checkbox">
                                                        <input type="checkbox" checked={checkedState[index] ?? false} onChange={() => handleIndividualCheck(index)} className="form-check-input" />
                                                    </td>
                                                    <td>
                                                        <SpkButton Buttonvariant="light" Size="sm" Customclass="btn btn-icon todo-handle">: :</SpkButton>
                                                    </td>
                                                    <td>
                                                        <span className="fw-medium">{idx.title}</span>
                                                    </td>
                                                    <td>
                                                        <span className={`fw-medium text-${idx.color}`}><i className="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>{idx.status}</span>
                                                    </td>
                                                    <td>
                                                        {idx.dueDate}
                                                    </td>
                                                    <td>
                                                        <span className={`badge bg-${idx.color1}-transparent`}>{idx.priority}</span>
                                                    </td>
                                                    <td className="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                                        <span className="avatar avatar-sm avatar-rounded custom-width">
                                                            <Image fill src={idx.assignee} alt="" />
                                                        </span>
                                                        {idx.name}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <SpkProgress variant={idx.color2} mainClass="progress-animate progress-xs w-100 " striped={true} animated={true} now={idx.data} />
                                                            <div className="ms-2">{`${idx.data}%`}</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex gap-2">
                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                                <i className="ri-edit-line"></i>
                                                            </Link>
                                                            <Link scroll={false} href="#!" onClick={() => handleRemove(idx.id)} className="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </ReactSortable>

                                    </Table>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div> Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div>
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Prev</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/*<!--End::row-1 -->*/}
            <Modal show={todolist} onHide={handleClose} centered className="modal fade" id="addtask" tabIndex={-1} aria-hidden="true">
                <div className="">
                    <div className="">
                        <Modal.Header>
                            <Modal.Title as="h6" className="modal-title" id="mail-ComposeLabel">Create Task</Modal.Title>
                            <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" onClickfunc={handleClose} ></SpkButton>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <Row className="gy-2">
                                <Col xl={12}>
                                    <label htmlFor="task-name" className="form-label">Task Name</label>
                                    <Form.Control type="text" className="form-control" id="task-name"
                                        placeholder="Task Name" />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Assigned To</label>
                                    <SpkSelect multi name="colors" option={tags} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select Industry" defaultvalue={[tags[0]]} />
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Assigned Date</label>
                                    <div className="form-group">
                                        <div className="input-group datepicker-inputwraper custom-todo-list flex-nowrap">
                                            <div className="input-group-text text-muted"> <i
                                                className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control" selected={dates["AssignedDate"] ? new Date(dates["AssignedDate"]) : null} onChange={(date: Date | null) => handleDateChange("AssignedDate", date)} Timeinput="Time:" dateFormat="yyyy-MM-dd h:mm aa" placeholderText='Choose date with time' showTimeInput />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Target Date</label>
                                    <div className="form-group">
                                        <div className="input-group datepicker-inputwraper custom-todo-list flex-nowrap">
                                            <div className="input-group-text text-muted"> <i
                                                className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control" selected={dates["TargetDate"] ? new Date(dates["TargetDate"]) : null} onChange={(date: Date | null) => handleDateChange("TargetDate", date)} Timeinput="Time:" dateFormat="yyyy-MM-dd h:mm aa" placeholderText='Choose date with time' showTimeInput />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Status</label>
                                    <SpkSelect name="colors" option={Status} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Priority</label>
                                    <SpkSelect name="colors" option={Priority} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}>
                                Cancel
                            </SpkButton>
                            <SpkButton Buttonvariant="primary" Buttontype="button">
                                Create
                            </SpkButton>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
};

export default Todolist;