"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { JobListData, JobListType } from "@/shared/data/apps/jobs/jobs-list-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Row } from "react-bootstrap";

interface JobsListProps { }

const JobsList: React.FC<JobsListProps> = () => {
    const [joblist, setJoblist] = useState<JobListType[]>(JobListData);
    const [searchTerm, setSearchTerm] = useState<string>('');
    //Delete function
    const handleDelete = (idToDelete: number) => {
        const updatedJobs = joblist.filter(job => job.id !== idToDelete);
        setJoblist(updatedJobs);
    };
    //search function
    const filteredJobs = joblist.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.jobCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(() => {
        return joblist.reduce((acc, item) => {
            acc[item.id] = item.checked || false;
            return acc;
        }, {} as { [key: number]: boolean });
    });

    const [isAllChecked, setIsAllChecked] = useState(() => {
        return joblist.every((item) => item.checked);
    });

    const handleSelectAllChange = () => {
        const newChecked = !isAllChecked;
        setIsAllChecked(newChecked);
        const updatedCheckedItems = Object.fromEntries(
            joblist.map((item) => [item.id, newChecked])
        );
        setCheckedItems(updatedCheckedItems);
    };

    const handleCheckboxChange = (id: number) => {
        setCheckedItems((prev) => {
            const updated = { ...prev, [id]: !prev[id] };
            const allChecked = Object.values(updated).every(Boolean);
            setIsAllChecked(allChecked);
            return updated;
        });
    };
    return (
        <Fragment>
            <Seo title="Jobs List" />
            <Pageheader title='Apps' subtitle='Jobs' currentpage='Jobs List' activepage='Jobs List' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                All Jobs List
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <Link scroll={false} href="/apps/jobs/job-post" className="btn btn-primary btn-wave btn-sm">
                                    <i className="ri-add-line me-1 align-middle"></i>Post Job
                                </Link>
                                <div>
                                    <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" onChange={(e) => setSearchTerm(e.target.value)} />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">Posted Date</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Status</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Department</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Job Type</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Oldest</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <SpkTables checked={isAllChecked} onChange={handleSelectAllChange} showCheckbox={true} Customcheckclass='ps-4' tableClass="table table-hover text-nowrap" header={[{ title: 'Job Title' }, { title: 'Company' }, { title: 'Department' }, { title: 'Applications' }, { title: 'Posted Date' }, { title: 'Vacancies' }, { title: 'Job Type' }, { title: 'Status' }, { title: 'Expires on' }, { title: 'Action' },]}>
                                    {filteredJobs.map((idx) => (
                                        <tr className="joblist-list" key={idx.id}>
                                            <td className="ps-4 joblist-checkbox"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob22" aria-label="..." checked={checkedItems[idx.id]} onChange={() => handleCheckboxChange(idx.id)} /></td>
                                            <td>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-md border p-1 bg-light custom-width">
                                                        <Image fill src={idx.image} alt="" />
                                                    </span>
                                                    <div className="ms-2">
                                                        <p className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/jobs/job-details"> {idx.title}</Link></p>
                                                        <p className="fs-12 text-muted mb-0">Remote/Onsite</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded custom-width">
                                                        <Image fill src={idx.companyLogo} alt="" />
                                                    </span>
                                                    <Link scroll={false} href="#!" className="fw-medium mb-0">{idx.company}</Link>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.jobCategory}
                                            </td>
                                            <td>{idx.applicants}</td>
                                            <td><span className={`badge bg-${idx.postColor}-transparent`}><i className="bi bi-clock me-1"></i>{idx.postedDate}</span></td>
                                            <td>{idx.jobDuration}</td>
                                            <td>{idx.jobType}</td>
                                            <td><span className={`badge rounded-pill bg-${idx.statusColor}-transparent`}>{idx.status}</span></td>
                                            <td>
                                                {idx.closingDate}
                                            </td>
                                            <td>
                                                <Link scroll={false} href="/apps/jobs/job-details" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-eye-line"></i>
                                                </Link>
                                                <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-edit-line"></i>
                                                </Link>
                                                <Link scroll={false} href="#!" className="joblist-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light" onClick={() => handleDelete(idx.id)}>
                                                    <i className="ri-delete-bin-line"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </div>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <ul className="pagination mb-0 overflow-auto">
                                        <li className="page-item disabled">
                                            <Link href='#!' scroll={false} className="page-link">Previous</Link>
                                        </li>
                                        <li className="page-item active" aria-current="page"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link" href="#!">2</Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">3</Link></li>
                                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">4</Link></li>
                                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">5</Link></li>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link" href="#!">Next</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default JobsList;