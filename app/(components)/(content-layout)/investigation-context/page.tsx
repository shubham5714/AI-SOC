"use client"
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Avatars, Categoryedit, ProjectList, ProjectListType } from "@/shared/data/apps/projects/projects-list-data";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Row } from "react-bootstrap";

interface InvestigationContextProps { }

const InvestigationContext: React.FC<InvestigationContextProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const ListItems: ProjectListType[] = ProjectList.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    return (
        <Fragment>
            <Seo title="Investigation Context" />
            <div className="d-flex align-items-center mb-3" style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
                <h1 className="page-title fw-medium fs-18 mb-0">Investigation Context</h1>
            </div>
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex flex-wrap gap-1 project-list-main align-items-center">
                                    <Link scroll={false} href="#!" className="btn btn-primary me-2"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Item</Link>
                                    <SpkSelect searchable name="colors" option={Categoryedit} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Categoryedit[1]]}
                                    />
                                </div>
                                <div className="avatar-list-stacked">
                                    {Avatars.map((idx, index) => (
                                        <span className="avatar avatar-sm avatar-rounded custom-width" key={index}>
                                            <Image fill src={idx} alt="img" />
                                        </span>
                                    ))}
                                    <Link scroll={false} className="avatar avatar-sm bg-light avatar-rounded text-default" href="#!">
                                        +8
                                    </Link>
                                </div>
                                <div className="d-flex" role="search">
                                    <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleSearch} />
                                    <SpkButton Buttonvariant="light" Customclass="btn" Buttontype="submit">Search</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}

            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: "Project Name" }, { title: "Description" }, { title: "Team" }, { title: "Assigned Date" }, { title: "Due Date" }, { title: "Status" }, { title: "Priority" }, { title: "Actions" },]}>
                                    {ListItems.length > 0 ? (
                                        ListItems.map((idx) => (
                                            <tr key={idx.id}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 custom-width">
                                                                <Image fill src={idx.logo} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">{idx.title}</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-medium text-default">{idx.tasksCompleted}/{idx.totalTasks}</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">{idx.description}</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        {idx.members.map((img, index) => (
                                                            <span className="avatar avatar-sm avatar-rounded custom-width" key={index}>
                                                                <Image fill src={img} alt="img" />
                                                            </span>
                                                        ))}
                                                        {idx.members.length < 5 && (
                                                            <Link scroll={false} className="avatar avatar-sm bg-light avatar-rounded text-default" href="#!">
                                                                +{5 - idx.members.length}
                                                            </Link>
                                                        )}
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.startDate}
                                                </td>
                                                <td>
                                                    {idx.endDate}
                                                </td>
                                                <td>
                                                    <div>
                                                        <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}>
                                                            <div className="progress-bar bg-primary" style={{ width: `${idx.progress}%` }}></div>
                                                        </div>
                                                        <div className="mt-1"><span className="text-primary fw-medium">{idx.progress}%</span> Completed</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color}`}>{idx.priority}</SpkBadge>
                                                </td>
                                                <td>
                                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className='text-center' colSpan={9}>No data found</td>
                                        </tr>
                                    )}

                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}
            <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                    <Link href='#!' scroll={false} className="page-link">Previous</Link>
                </li>
                <li className="page-item"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                <li className="page-item"><Link scroll={false} className="page-link" href="#!">3</Link></li>
                <li className="page-item">
                    <Link scroll={false} className="page-link" href="#!">Next</Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default InvestigationContext;
