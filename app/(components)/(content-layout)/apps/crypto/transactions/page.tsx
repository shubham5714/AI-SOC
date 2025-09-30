"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { TransactionsData, TransactionType } from "@/shared/data/apps/crypto/transactionsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";

const Transactions = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [data, setData] = useState<TransactionType[]>(TransactionsData);

    useEffect(() => {
        setData(
            TransactionsData.filter((crypto) =>
                crypto.currency.toLowerCase().includes(searchTerm.toLowerCase())
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
            <Seo title="Transactions" />
            <Pageheader title='Apps' subtitle='Crypto' currentpage='Transactions' activepage='Transactions' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Transaction History
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" value={searchTerm} onChange={handleSearch} />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">This Year</Dropdown.Item></li>
                                </SpkDropdown>
                                <div>
                                    <SpkButton Buttonvariant="secondary" Customclass="btn btn-sm btn-wave">View All</SpkButton>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Cryptocurrency' }, { title: 'Date & Time' }, { title: 'Transaction ID' }, { title: 'Type' }, { title: 'Amount' }, { title: 'Status' }, { title: 'Recipient Address' }, { title: 'Actions' },]} >
                                    {data.length > 0 ? (
                                        data.map((idx) => (
                                            <tr className="transaction-list" key={idx.id}>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <Image fill src={idx.image} alt="" />
                                                        </span>
                                                        <div className="fw-medium">{idx.currency}</div>
                                                    </div>
                                                </td>
                                                <td>{idx.date}</td>
                                                <td>{idx.transactionsId}</td>
                                                <td className={`text-${idx.typeColor} fw-medium`}>{idx.type}</td>
                                                <td>{idx.amount}</td>
                                                <td> <SpkBadge variant={`${idx.statusColor}-transparent`}>{idx.status}</SpkBadge></td>
                                                <td className="text-muted">{idx.address}</td>
                                                <td>
                                                    <SpkTooltips placement="top" title="download">
                                                        <SpkButton Buttonvariant="info-light" Customclass="btn btn-icon btn-sm"><i className="ri-download-2-line"></i></SpkButton>
                                                    </SpkTooltips>
                                                    <SpkButton Buttonvariant="danger-light" Customclass="btn  btn-icon ms-1 btn-sm transactions-delete" onClickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-5-line"></i></SpkButton>
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
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled">
                                        <a className="page-link">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#!">2</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Transactions;