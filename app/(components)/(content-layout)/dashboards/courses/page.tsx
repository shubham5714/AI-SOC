"use client"
import SpkCoursesCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-courses";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { CourseCardData, CourseCategories, CourseCategoriesOptions, CourseCategoriesSeries, CoursesCompletedOptions, CoursesCompletedSeries, CoursesList, CoursesListType, Instructors, RecentCourses, TopCourses } from "@/shared/data/dashboards/coursesdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";

interface CoursesProps { }

const Courses: React.FC<CoursesProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [data, setData] = useState<CoursesListType[]>(CoursesList);

    // Filter EmployeeDirectory based on search term
    useEffect(() => {
        setData(
            CoursesList.filter((course) =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    // Handle search input change
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle deletion of an employee
    const handleDelete = (contactId: number): void => {
        setData((prevData) => prevData.filter((contact) => contact.id !== contactId));
    };
    return (
        <Fragment>
            <Seo title="Dashboards Courses" />
            <Pageheader title='Dashboards' currentpage='Courses' activepage='Courses' />
            {/* <!-- Start::Row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Row>
                        <Col xl={3}>
                            <Row>
                                {CourseCardData.map((idx) => (
                                    <Col xl={12} sm={6} key={idx.id}>
                                        <SpkCoursesCard card={idx} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xl={9}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title className="flex-grow-1 me-3">Courses Completed</Card.Title>
                                    <div className="btn-list">
                                        <SpkButton Buttonvariant="outline-light" Customclass="btn btn-sm border">All</SpkButton>
                                        <SpkButton Buttonvariant="outline-light" Customclass="btn btn-sm border">Completed</SpkButton>
                                        <SpkButton Buttonvariant="outline-light" Customclass="btn btn-sm border">In Progress</SpkButton>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-sm-flex align-items-center mb-3">
                                        <div className="d-flex align-items-center me-5">
                                            <span className="fs-8 text-primary">
                                                <i className="mdi mdi-circle"></i>
                                            </span>
                                            <div className="ms-2">
                                                <p className="mb-0 fs-15">742</p>
                                                <div className="d-flex align-items-center">
                                                    <p className="mb-0 me-2 fs-13 text-muted">Year</p>
                                                    <span className="fs-12 text-success d-inline-flex align-items-center"><i className="ti ti-trending-up me-1"></i>2.5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center me-5">
                                            <span className="fs-8 text-secondary">
                                                <i className="mdi mdi-circle"></i>
                                            </span>
                                            <div className="ms-2">
                                                <p className="mb-0 fs-15">125</p>
                                                <div className="d-flex align-items-center">
                                                    <p className="mb-0 me-2 fs-13 text-muted">Week</p>
                                                    <span className="fs-12 text-danger d-inline-flex align-items-center"><i className="ti ti-trending-down me-1"></i>0.2%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center me-5">
                                            <span className="fs-8 text-success">
                                                <i className="mdi mdi-circle"></i>
                                            </span>
                                            <div className="ms-2">
                                                <p className="mb-0 fs-15">369</p>
                                                <div className="d-flex align-items-center">
                                                    <p className="mb-0 me-2 fs-13 text-muted">Month</p>
                                                    <span className="fs-12 text-success d-inline-flex align-items-center"><i className="ti ti-trending-up me-1"></i>1.7%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="courses-completed">
                                        <Spkapexcharts chartOptions={CoursesCompletedOptions} chartSeries={CoursesCompletedSeries} type='bar' width={'100%'} height={370} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={5}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Top Instructors</Card.Title>
                                    <Link scroll={false} href="#!" className="btn btn-sm btn-primary-light">View All</Link>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table table-hover card-table mb-0" header={[{ title: 'Recruiter', headerClassname: 'ps-3' }, { title: 'Category' }, { title: 'Actions', headerClassname: 'pe-3' }]}>
                                            {Instructors.map((idx) => (
                                                <tr key={idx.id}>
                                                    <td className={`ps-3 ${idx.tdClass}`}>
                                                        <div className="d-flex align-items-center position-relative">
                                                            <Link scroll={false} href="#!" className="stretched-link" title="recruiter"></Link>
                                                            <span className={`avatar avatar-sm rounded-circle custom-width me-2 ${idx.bgcolor ? `bg-${idx.bgcolor}` : ''}`}>
                                                                {idx.avatar ? (<Image fill src={idx.avatar} alt="logo" className="avatar avatar-sm rounded-circle " />) : idx.icon ? (<i className={`bi bi-${idx.icon}`}></i>) : idx.text}</span>
                                                            <div className="flex-grow-1">
                                                                <p className="mb-0">{idx.name}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={idx.tdClass}>
                                                        <span>{idx.category}</span>
                                                    </td>
                                                    <td className={`pe-3 position-relative ${idx.tdClass}`}>
                                                        <SpkDropdown toggleas='a' Customtoggleclass="ms-3 pe-4 text-primary no-caret" Icon={true} IconClass="bi bi-three-dots">
                                                            <li><Dropdown.Item className="dropdown-item">Follow</Dropdown.Item></li>
                                                            <li><Dropdown.Item className="dropdown-item">like</Dropdown.Item></li>
                                                            <li><Dropdown.Item className="dropdown-item">Share</Dropdown.Item></li>
                                                        </SpkDropdown>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={7}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title className="flex-grow-1 me-3">Top Courses</Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light border btn-wave no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Year</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table table-hover card-table mb-0" header={[{ title: 'Tutor', headerClassname: 'ps-3' }, { title: 'Category' }, { title: 'Vacancies' }, { title: 'Filled' }, { title: 'Subscription', headerClassname: 'pe-3' },]}>
                                            {TopCourses.map((idx) => (
                                                <tr key={idx.id}>
                                                    <td className={`ps-3 ${idx.tdClass}`}>
                                                        <div className="d-flex align-items-center position-relative">
                                                            <Link scroll={false} href="#!" className="stretched-link" title="recruiter"></Link>
                                                            <span className="me-2 ">
                                                                <Image width={30} height={30} src={idx.avatar} alt="applicant" title="applicant" className="rounded-circle avatar avatar-sm" />
                                                            </span>
                                                            <div className="flex-grow-1">
                                                                <p className="mb-0">{idx.name}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={idx.tdClass}>
                                                        <Link scroll={false} href="#!">{idx.company}</Link>
                                                    </td>
                                                    <td className={idx.tdClass}>
                                                        <span>{idx.applicants}</span>
                                                    </td>
                                                    <td className={idx.tdClass}>
                                                        <span>{idx.jobs}</span>
                                                    </td>
                                                    <td className={`pe-3 ${idx.tdClass}`}>
                                                        <span className={`${idx.status ? `badge rounded-pill bg-${idx.color}` : ''}`}>{idx.status ? idx.status : '-'}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={4}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card card-bg-primary border-0 shadow-none overflow-hidden courses-banner-card">
                                <Card.Body className="p-4">
                                    <h4 className="text-fixed-white mb-2">Empower Learning Management</h4>
                                    <p className="mb-4 op-8 lh-base">Manage courses, track progress, and enhance learning seamlessly with the Courses Admin Dashboard.</p>
                                    <SpkButton Buttonvariant="secondary" Customclass="btn  btn-wave waves-effect waves-light">Learn More</SpkButton>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Top Course Categories</Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light border btn-wave no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                        <li><Dropdown.Item href="#!">By Industry</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">By Size</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className="p-4">
                                    <Row className="align-items-center">
                                        <div className="col-auto mx-auto">
                                            <div id="course-categories">
                                                <Spkapexcharts chartOptions={CourseCategoriesOptions} chartSeries={CourseCategoriesSeries} type='donut' height={180} />
                                            </div>
                                        </div>
                                        <Col className="col">
                                            {CourseCategories.map((idx) => (
                                                <Row className="justify-content-between flex-nowrap mb-3" key={idx.id}>
                                                    <div className="col-auto">
                                                        <span><i className={`bi bi-circle-fill me-2 fs-8 text-${idx.iconColor}`}></i>{idx.category}</span>
                                                    </div>
                                                    <div className="col text-end">
                                                        <span className={`text-${idx.iconColor}`}>{idx.percentage}</span>
                                                    </div>
                                                </Row>
                                            ))}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Your Courses</Card.Title>
                                    <Link scroll={false} href="#!" className="btn btn-primary-light ms-2">View All</Link>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="border-bottom mb-3">
                                        <Row className="g-0">
                                            <Col xl={6}>
                                                <div className="d-flex align-items-center p-3 position-relative border-end">
                                                    <div className="flex-grow-1">
                                                        <span className="fs-5">11</span>
                                                        <p className="mb-0 text-muted fs-14">Total</p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary">
                                                            <i className="bi bi-megaphone fs-5"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <div className="d-flex align-items-center p-3 position-relative">
                                                    <div className="flex-grow-1">
                                                        <span className="fs-5">4.56 hrs</span>
                                                        <p className="mb-0 text-muted fs-14 text-truncate w-75">Avg Time Spent</p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <span className="avatar avatar-md avatar-rounded bg-info">
                                                            <i className="bi bi-eye fs-5"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <h6 className="mt-4 mb-3 px-3 pb-1">Recent Courses</h6>
                                    <ListGroup as='ul' className="list-group-flush">
                                        {RecentCourses.map((idx) => (
                                            <ListGroup.Item as='li' key={idx.id}>
                                                <Link scroll={false} href="#!" className="stretched-link" title="recent-post"></Link>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div>
                                                        <span className={`avatar avatar-sm bg-${idx.color}-transparent fw-semibold`}>{idx.letter}</span>
                                                    </div>
                                                    <p className="mb-0 flex-fill overflow-hidden text-truncate">{idx.title}</p>
                                                    <span className="text-muted text-end ms-2">{idx.date}</span>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End::Row-1 --> */}

            {/* <!-- Start::Row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Courses List
                            </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <Form.Control value={searchTerm} onChange={handleSearch} className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customclass='m-1' toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'S.No' }, { title: 'Course' }, { title: 'Category' }, { title: 'Classes' }, { title: 'Last Updated' }, { title: 'Instructor' }, { title: 'Students' }, { title: 'Actions' },]}>
                                    {data.length > 0 ? (
                                        data.map((idx) => (
                                            <tr key={idx.id}>
                                                <td>
                                                    {idx.id}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center lh-1">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-xs ">
                                                                <Image width={20} height={20} src={idx.image} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.title}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color}-transparent`}>{idx.category}</SpkBadge>
                                                </td>
                                                <td>
                                                    {idx.students}
                                                </td>
                                                <td>
                                                    {idx.date}
                                                </td>
                                                <td>
                                                    {idx.instructor}
                                                </td>
                                                <td>
                                                    {idx.views}
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <SpkTooltips placement="top" title="Edit">
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Delete">
                                                            <Link scroll={false} aria-label="anchor" onClick={() => handleDelete(idx.id)} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i className="ri-delete-bin-line"></i></Link>
                                                        </SpkTooltips>
                                                    </div>
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
                        <Card.Footer className="border-top-0">
                            <div className="d-flex flex-wrap align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link scroll={false} className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link scroll={false} className="page-link text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-1 --> */}
        </Fragment>
    );
};

export default Courses;