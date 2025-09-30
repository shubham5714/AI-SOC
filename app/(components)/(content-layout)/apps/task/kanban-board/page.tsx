"use client"
import SpkKanbanboardCard from "@/shared/@spk-reusable-components/reusable-apps/spk-kanbanboard";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { cars, KanbanBoardData, KanbanBoardData1, KanbanBoardData2, KanbanBoardData3, KanbanBoardData4, simpleItems1, simpleItems2 } from "@/shared/data/apps/task/kanban-board-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Form, Modal, Row } from "react-bootstrap";
import { FilePond } from "react-filepond";
import SimpleBar from "simplebar-react";

interface KanbanBoardProps { }

const KanbanBoard: React.FC<KanbanBoardProps> = () => {
    const [isSearchable] = useState(true);
    const [files, setFiles] = useState<any>([]);

    const [kanbanBoardModal, setKanbanBoardModal] = useState<{ [key: string]: boolean }>({});

    const handleShow = (offcanvasName: string) => {
        setKanbanBoardModal((prevShow) => {
            // Only update the state if it's not already true
            if (prevShow[offcanvasName] !== true) {
                return { ...prevShow, [offcanvasName]: true };
            }
            return prevShow; // Prevent state change if already true
        });
    };

    const handleClose = (offcanvasName: string) => {
        setKanbanBoardModal((prevShow) => {
            // Only update the state if it's not already false
            if (prevShow[offcanvasName] !== false) {
                return { ...prevShow, [offcanvasName]: false };
            }
            return prevShow; // Prevent state change if already false
        });
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


    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);
    const topContainerRef = useRef(null);
    const bottomContainerRef = useRef(null);
    const lastContainerRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const dragula = require("dragula");
            const windowElement = window;

            if (leftContainerRef.current && rightContainerRef.current) {
                const containers = [
                    leftContainerRef.current,
                    rightContainerRef.current,
                    topContainerRef.current,
                    bottomContainerRef.current,
                    lastContainerRef.current
                ];
                const drake = dragula(containers);

                // Your other dragula-related logic here...
            }

            OnDivChange();
        }
    }, []);

    const leftButtonRef = useRef(null);
    const rightButtonRef = useRef(null);
    const topButtonRef = useRef(null);
    const bottomButtonRef = useRef(null);
    const lastButtonRef = useRef(null);

    // Store all the refs in an array
    const elementsToModify = [
        { containerRef: leftContainerRef, buttonRef: leftButtonRef },
        { containerRef: rightContainerRef, buttonRef: rightButtonRef },
        { containerRef: topContainerRef, buttonRef: topButtonRef },
        { containerRef: bottomContainerRef, buttonRef: bottomButtonRef },
        { containerRef: lastContainerRef, buttonRef: lastButtonRef }
    ];

    const OnDivChange = () => {
        elementsToModify.forEach(({ containerRef, buttonRef }) => {
            const element = containerRef.current;
            const button = buttonRef.current;

            if (element?.children.length <= 0) {
                element?.classList.add("task-Null");
                if (button) {
                    button.classList.add("d-none");
                }
            } else {
                element?.classList.remove("task-Null");
                if (button) {
                    button.classList.remove("d-none");
                }
            }
        });
    };
    return (
        <Fragment>
            <Seo title="Kanban Board" />
            <Pageheader title='Apps' subtitle='Task' currentpage='Kanban Board' activepage='Kanban Board' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className=" p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex gap-4 align-items-center flex-wrap">
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded custom-width">
                                            <Image fill src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded custom-width">
                                            <Image fill src="../../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded custom-width">
                                            <Image fill src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded custom-width">
                                            <Image fill src="../../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded custom-width">
                                            <Image fill src="../../../assets/images/faces/4.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded custom-width">
                                            <Image fill src="../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +8
                                        </Link>
                                    </div>
                                    <div className="d-flex gap-2 kanban-board flex-wrap flex-xxl-nowrap">
                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-w-lg" Buttontoggle="modal" Buttontarget="#add-board" onClickfunc={() => handleShow("addmodal")}><i className="ri-add-line me-1 fw-medium align-middle"></i>New Board</SpkButton>
                                        <SpkSelect searchable={isSearchable} name="colors" option={simpleItems2} mainClass="default basic-multi-select" id="choices-multiple-default"
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[simpleItems2[0]]}
                                        />

                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2 flex-xxl-nowrap" role="search">
                                    <span className="fw-medium fs-15 text-nowrap flex-nowrap me-2">WorkSpace :</span>
                                    <Form.Control className="me-1" type="search" placeholder="Search Tasks" aria-label="Search" />
                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn" Buttontype="submit">Search</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <div className="TASK-kanban-board">
                <div className="kanban-tasks-type new">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-primary-transparent border border-primary border-opacity-25 rounded">
                            <span className="d-block fw-medium fs-15">New</span>
                            <div>
                                <span className="badge badge-task bg-primary">18</span>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-tasks" id="new-tasks">
                        <SimpleBar className="kanban-tasks" id="new-tasks" >
                            <div id="new-tasks-draggable" data-view-btn="new-tasks" ref={leftContainerRef} onMouseEnter={OnDivChange}>
                                {KanbanBoardData.map((idx) => (
                                    <SpkKanbanboardCard key={idx.id} card={idx} />
                                ))}
                            </div>
                        </SimpleBar>
                    </div>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center" ref={leftButtonRef}>
                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link scroll={false} onClick={() => handleShow("taskmodal")} aria-label="anchor" href="#!" className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
                <div className="kanban-tasks-type todo">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-success-transparent rounded border border-success border-opacity-25">
                            <span className="d-block fw-medium fs-15">Todo</span>
                            <div>
                                <span className="badge badge-task bg-success">12</span>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-tasks" id="todo-tasks">
                        <SimpleBar className="kanban-tasks" id="new-tasks">
                            <div id="todo-tasks-draggable" data-view-btn="todo-tasks" ref={rightContainerRef} onMouseEnter={OnDivChange}>
                                {KanbanBoardData1.map((idx) => (
                                    <SpkKanbanboardCard key={idx.id} card={idx} />
                                ))}
                            </div>
                        </SimpleBar>
                    </div>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center" ref={rightButtonRef}>
                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link scroll={false} onClick={() => handleShow("taskmodal")} aria-label="anchor" href="#!" className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
                <div className="kanban-tasks-type in-progress">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-info-transparent border border-info border-opacity-25 rounded">
                            <span className="d-block fw-medium fs-15">On Going </span>
                            <div>
                                <span className="badge badge-task bg-info">26</span>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-tasks" id="inprogress-tasks">
                        <SimpleBar className="kanban-tasks" id="new-tasks">
                            <div id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks" ref={topContainerRef} onMouseEnter={OnDivChange}>
                                {KanbanBoardData2.map((idx) => (
                                    <SpkKanbanboardCard key={idx.id} card={idx} />
                                ))}
                            </div>
                        </SimpleBar>
                    </div>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center" ref={topButtonRef}>
                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link scroll={false} aria-label="anchor" onClick={() => handleShow("taskmodal")} href="#!" className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
                <div className="kanban-tasks-type inreview">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-secondary-transparent border border-secondary border-opacity-25 rounded">
                            <span className="d-block fw-medium fs-15">In Review </span>
                            <div>
                                <span className="badge badge-task bg-secondary">30</span>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-tasks" id="inreview-tasks">
                        <SimpleBar className="kanban-tasks" id="new-tasks">
                            <div id="inreview-tasks-draggable" data-view-btn="inreview-tasks" ref={bottomContainerRef} onMouseEnter={OnDivChange}>
                                {KanbanBoardData3.map((idx) => (
                                    <SpkKanbanboardCard key={idx.id} card={idx} />
                                ))}
                            </div>
                        </SimpleBar>
                    </div>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center" ref={bottomButtonRef}>
                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link scroll={false} aria-label="anchor" href="#!" onClick={() => handleShow("taskmodal")} className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
                <div className="kanban-tasks-type completed">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-warning-transparent border border-warning border-opacity-25 rounded">
                            <span className="d-block fw-medium fs-15">Completed </span>
                            <div>
                                <span className="badge badge-task bg-warning">36</span>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-tasks" id="completed-tasks">
                        <SimpleBar className="kanban-tasks" id="new-tasks">
                            <div id="completed-tasks-draggable" data-view-btn="completed-tasks" ref={lastContainerRef} onMouseEnter={OnDivChange}>
                                {KanbanBoardData4.map((idx) => (
                                    <SpkKanbanboardCard key={idx.id} card={idx} />
                                ))}
                            </div>
                        </SimpleBar>
                    </div>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center" ref={lastButtonRef}>
                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link scroll={false} aria-label="anchor" href="#!" onClick={() => handleShow("taskmodal")} className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!--End::row-2 --> */}

            {/* <!-- Start::add board modal --> */}
            <Modal show={kanbanBoardModal["addmodal"] || false} onHide={() => handleClose("addmodal")} centered className="fade" id="add-board" tabIndex={-1}>
                <div className="">
                    <div className="">
                        <Modal.Header >
                            <Modal.Title as="h6" >Add Board</Modal.Title>
                            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" onClickfunc={() => handleClose("addmodal")}></SpkButton>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <Row>
                                <Col xl={12}>
                                    <Form.Label htmlFor="board-title">Task Board Title</Form.Label>
                                    <Form.Control type="text" id="board-title"
                                        placeholder="Board Title" />
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn btn-light" data-bs-dismiss="modal" onClickfunc={() => handleClose("addmodal")} >Cancel</SpkButton>
                            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn btn-primary">Add Board</SpkButton>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
            {/* <!-- End::add board modal --> */}

            {/* <!-- Start::add task modal --> */}
            <Modal show={kanbanBoardModal["taskmodal"] || false} onHide={() => handleClose("taskmodal")} centered className="fade" id="add-task" tabIndex={-1}>
                <div className="">
                    <div className="">
                        <Modal.Header>
                            <Modal.Title as="h6" >Add Task</Modal.Title>
                            <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" onClickfunc={() => handleClose("taskmodal")}  ></SpkButton>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <Row className="gy-2">
                                <Col xl={6}>
                                    <Form.Label htmlFor="task-name" className="form-label">Task Name</Form.Label>
                                    <input type="text" className="form-control" id="task-name" placeholder="Task Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="task-id" className="form-label">Task ID</Form.Label>
                                    <input type="text" className="form-control" id="task-id" placeholder="Task ID" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="text-area" className="form-label">Task Description</Form.Label>
                                    <textarea className="form-control" id="text-area" rows={2}
                                        placeholder="Write Description"></textarea>
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="text-area" className="form-label">Task Images</Form.Label>
                                    <FilePond
                                        className="multiple-filepond"
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={6}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Assigned To</Form.Label>
                                    <SpkSelect name="colors" option={simpleItems1} mainClass="basic-multi-select" placeholder="Sort By"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Target Date</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group flex-nowrap datepicker-inputwraper">
                                            <div className="input-group-text text-muted"> <i
                                                className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control" Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" selected={dates["TargetDate"] ? new Date(dates["TargetDate"]) : null} onChange={(date: Date | null) => handleDateChange("TargetDate", date)} placeholderText='Choose date and time' showTimeInput />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Tags</Form.Label>
                                    <SpkSelect multi name="colors" option={cars} mainClass="w-full !rounded-md" menuplacement='top' classNameprefix="Select2" />
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn btn-light" data-bs-dismiss="modal" onClickfunc={() => handleClose("taskmodal")}  >Cancel</SpkButton>
                            <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="btn btn-primary">Add Task</SpkButton>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
            {/* <!-- End::add task modal --> */}
        </Fragment>
    );
};

export default KanbanBoard;