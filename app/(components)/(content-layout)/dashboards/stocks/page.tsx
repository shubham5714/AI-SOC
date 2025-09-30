"use client"
import SpkStocksCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-stocks";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { marketData, MyStocks, MyStocksType, RecentActivities, StockCardData, StockSwiper, TotalInvestmentsOptions, TotalInvestmentsSeries, Watchlist } from "@/shared/data/dashboards/stocksdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";

interface StocksProps { }

const Stocks: React.FC<StocksProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [data, setData] = useState<MyStocksType[]>(MyStocks);


    useEffect(() => {
        setData(
            MyStocks.filter((stock) =>
                stock.name.toLowerCase().includes(searchTerm.toLowerCase())
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

    const breakpoints = {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 5,
        },
        1800: {
            slidesPerView: 5,
        },
    }

    return (
        <Fragment>
            <Seo title="Dashboards Stocks" />
            <Pageheader title='Dashboards' currentpage='Stocks' activepage='Stocks' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <div className="d-flex align-items-center justify-content-between">
                        <SpkSwiperJs slides={StockSwiper} autoplay={true} spaceBetween={20} loop={true} breakpoint={breakpoints} slidesPerView={5} />
                    </div>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={3}>
                    <Row>
                        {StockCardData.map((idx) => (
                            <Col xxl={12} lg={4} sm={12} key={idx.id}>
                                <SpkStocksCard card={idx} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Total Investments
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="p-2 fs-12 text-muted no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" py-0">
                            <div className="d-flex alilgn-items-center justify-content-between gap-3 p-3  flex-wrap rounded">
                                <div className="d-flex flex-wrap flex-fill gap-3">
                                    <div>
                                        <span className="d-block text-primary fw-medium mb-1">Invested Value</span>
                                        <span className="d-block fw-medium">$1,290.94<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up d-inline-flex"></i>1.22%</span></span>
                                    </div>
                                    <div>
                                        <span className="d-block text-primary fw-medium mb-1">Total Returns</span>
                                        <span className="d-block fw-medium">$25,458.20<span className="text-danger ms-1 fs-12"><i className="ti ti-chevron-down d-inline-flex"></i>10.14%</span></span>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap gap-3 text-end">
                                    <div>
                                        <span className="d-block text-primary fw-medium mb-1">Today Change</span>
                                        <span className="d-block fw-medium">$112.09</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-primary fw-medium mb-1">Change In %</span>
                                        <span className="d-block fw-medium">+0.01%<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up d-inline-flex"></i>0.21%</span></span>
                                    </div>
                                </div>
                            </div>
                            <div id="totalInvestmentsStats">
                                <Spkapexcharts chartOptions={TotalInvestmentsOptions} chartSeries={TotalInvestmentsSeries} type='area' width={'100%'} height={342} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Watchlist
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted py-2"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-striped" header={[{ title: 'Symbol' }, { title: 'Last Price' }, { title: 'Change' },]}>
                                    {Watchlist.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="avatar avatar-xs custom-width">
                                                        <Image fill src={idx.src} alt="" className={`${idx.filterImage}`} />
                                                    </span>
                                                    <Link scroll={false} href="#!" className="fw-medium">{idx.symbol}</Link>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                {idx.price}
                                            </td>
                                            <td className={idx.tdClass}>
                                                <span className={`text-${idx.change.startsWith('-') ? 'danger' : 'success'}`}>{idx.change}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            <Row>
                {marketData.map((idx => (
                    <Col key={idx.id}>
                        <SpkStocksCard card={idx} />
                    </Col>
                )))}
            </Row>

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Recent Activities
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted py-1 tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup className="list-group-flush stocks-activity">
                                {RecentActivities.map((idx) => (
                                    <ListGroup.Item key={idx.id}>
                                        <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md p-1 avatar-rounded bg-light custom-width">
                                                        <Image fill src={idx.image} alt="" className={`${idx.filterImage}`} />
                                                    </span>
                                                </div>
                                                <div className="lh-1">
                                                    <span className="fw-semibold d-block mb-2 text-default">{idx.name}</span>
                                                    <span className="text-muted">{idx.description}</span>
                                                </div>
                                            </div>
                                            <div className="fw-medium fs-14 text-end">
                                                <span className="d-block">{idx.amount}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={`progress progress-xs ${idx.progressClass} mb-1`}>
                                                <div className={`progress-bar progress-bar-animated bg-${idx.progressColor} progress-bar-striped progress-bar-animated`} style={{ width: `${idx.progress}%` }}></div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                My Stocks
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" value={searchTerm} onChange={handleSearch} />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-hover" header={[{ title: 'S.No' }, { title: 'Name' }, { title: 'Price' }, { title: 'Date Invested' }, { title: 'Market Cap' }, { title: 'Price Change' }, { title: 'Volume' }, { title: 'Actions' },]}>
                                    {data.length > 0 ? (
                                        data.map((idx) => (
                                            <tr key={idx.id}>
                                                <td>{idx.id}</td>
                                                <td>
                                                    <div className="d-flex align-items-start gap-3"> <span className={`avatar avatar-sm bg-${idx.bgColor}-transparent`}> <i className={`${idx.iconClass} fs-15`}></i> </span>
                                                        <div className="flex-fill lh-1">  <Link scroll={false} href="#!" className="d-block mb-1 fs-14 fw-medium">{idx.name}</Link>
                                                            <span className="d-block fs-12 text-muted text-muted">{idx.symbol}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> {idx.price} </td>
                                                <td> <span className="text-muted">{idx.date}</span> </td>
                                                <td> {idx.marketCap} </td>
                                                <td> <SpkBadge variant={`${idx.percentageChange.startsWith('-') ? 'danger' : 'success'}-transparent `}>{idx.percentageChange}</SpkBadge> </td>
                                                <td>{idx.timeAgo} </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <SpkTooltips placement="top" title="Edit">
                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-primary-light"><i className="bi bi-pencil-square"></i></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Delete">
                                                            <Link scroll={false} href="#!" onClick={() => handleDelete(idx.id)} className="btn btn-icon btn-sm btn-secondary-light"><i className="bi bi-trash"></i></Link>
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
                            <div className="d-flex align-items-center">
                                <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"> <Link scroll={false} className="page-link" href="#!"> Prev </Link> </li>
                                            <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                            <li className="page-item"> <Link scroll={false} className="page-link text-primary" href="#!"> next </Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    );
};

export default Stocks;