"use client"
import { CartItems, categories, ItemsList } from "@/shared/data/dashboards/possystemddata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Link from "next/link";
import SpkPossystemCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-possystem";
import Image from "next/image";

interface PosSystemProps { }

const PosSystem: React.FC<PosSystemProps> = () => {
    const isotope = useRef<Isotope | null>(null); // For Isotope instance
    const grid = useRef<HTMLDivElement | null>(null); // For grid element
    const [activeFilter, setActiveFilter] = useState("*"); // State for active filter

    useEffect(() => {
        let IsotopeModule
        const initializeIsotope = async () => {
            const module = await import("isotope-layout");
            IsotopeModule = module.default;
            if (grid.current) {
                isotope.current = new IsotopeModule(grid.current, {
                    itemSelector: ".card-item",
                    layoutMode: "fitRows",
                    fitWidth: true, // Automatically adjusts item widths based on container size
                    percentPosition: true,
                });
            }
        };
        initializeIsotope();

        // Cleanup on component unmount
        return () => {
            isotope.current?.destroy();
            isotope.current = null;
        };
    }, []);

    const handleTabClick = (filter: string) => {
        setActiveFilter(filter); // Update active filter state
        isotope.current?.arrange({ filter }); // Trigger Isotope filtering
    };

    function dec(el: React.MouseEvent<HTMLButtonElement>) {
        const input = el.currentTarget.parentElement?.querySelector("input") as HTMLInputElement | null;

        if (!input) return;

        const value = Number(input.value);

        if (value === 0) {
            return false;
        } else {
            input.value = String(value - 1);
        }
    }

    function inc(el: React.MouseEvent<HTMLButtonElement>) {
        const input = el.currentTarget.parentElement?.querySelector("input") as HTMLInputElement | null;

        if (input) {
            input.value = String(Number(input.value) + 1);
        }
    }

    return (
        <Fragment>
            <Seo title="Dashboards POS System" />
            <Pageheader title='Dashboards' currentpage='POS System' activepage='POS System' />
            {/* <!-- Start Row-1 --> */}
            <div>
                <div className="d-flex align-Items-center justify-content-between mb-3">
                    <h6 className="fw-medium mb-0">Categories</h6>
                    <div className="d-flex gap-2 align-items-center">
                        <Link href='#!' scroll={false} className="categories-arrow left">
                            <i className="ri-arrow-left-s-line"></i>
                        </Link>
                        <Link href='#!' scroll={false} className="categories-arrow right">
                            <i className="ri-arrow-right-s-line"></i>
                        </Link>
                    </div>
                </div>
                <Row className="pos-category" id="filter">
                    {categories.map((idx) => (
                        <Col xl={2} md={6} className="col-xxl" key={idx.id} onClick={() => handleTabClick(idx.filter)}>
                            <Card className={`custom-card pos-menu-cards ${activeFilter === idx.filter ? "active" : ""}`}>
                                <Card.Body className="p-3">
                                    <Link scroll={false} href="#!" className="stretched-link categories" data-filter={idx.filter}>
                                        <div className="categories-content">
                                            <span className="avatar avatar-md custom-width">
                                                <Image fill src={idx.image} alt="" />
                                            </span>
                                            <div>
                                                <span className="fw-medium">{idx.name}</span>
                                                <span className="d-block op-7 fs-12">{idx.items} Items</span>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            {/* <!-- End::Row-1 --> */}

            {/* <!-- Start::Row-2 */}
            <Row>
                <Col xxl={8}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium mb-0">Items List</h6>
                        <Link scroll={false} href="#!" className="btn btn-primary"> View Cart<i className="ti ti-arrow-narrow-right ms-1 d-inline-block"></i> </Link>
                    </div>
                    <div className="row list-wrapper" ref={grid}>
                        {ItemsList.map((idx) => (
                            <Col xxl={3} xl={3} lg={3} md={3} sm={6} className={`card-item  ${idx.category}`} data-category={idx.category} key={idx.id}>
                                <SpkPossystemCard card={idx} />
                            </Col>
                        ))}
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="pagination mb-0 float-end mb-4">
                            <li className="page-item disabled">
                                <Link href='#!' scroll={false} className="page-link">Previous</Link>
                            </li>
                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                            <li className="page-item active" aria-current="page">
                                <Link scroll={false} className="page-link" href="#!">2</Link>
                            </li>
                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">3</Link></li>
                            <li className="page-item">
                                <Link scroll={false} className="page-link" href="#!">Next</Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Body className="p-0">
                            <ListGroup className=" mb-0 border-0 rounded-0">
                                {CartItems.map((idx) => (
                                    <ListGroup.Item className="border-top-0 border-start-0 border-end-0" key={idx.id}>
                                        <div className="d-flex align-items-start flex-wrap">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-xl bg-light custom-width">
                                                    <Image fill src={idx.image} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-1 fw-medium">{idx.name}<span className="fs-11 text-muted"> {idx.category}</span></p>
                                                <div className="product-quantity-container order-summ">
                                                    <div className="input-group flex-nowrap gap-1 border rounded p-1">
                                                        <button type="button" aria-label="button" className="btn btn-icon btn-sm btn-wave btn-light product-quantity-minus border-end-0" onClick={dec}><i className="ri-subtract-line"></i></button>
                                                        <input type="text" className="form-control form-control-sm border-0 text-center p-0" aria-label="quantity" defaultValue='2' />
                                                        <button type="button" aria-label="button" className="btn btn-icon btn-sm btn-wave btn-light product-quantity-plus border-start-0" onClick={inc}><i className="ri-add-line"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-end">
                                                    <Link scroll={false} aria-label="anchor" href="#!">
                                                        <i className="ri-close-line fs-16 text-danger"></i>
                                                    </Link>
                                                </p>
                                                <h6 className="mb-0 fw-medium mt-auto"><span className="badge bg-success ms-3 fs-9">30% Off</span> $3.99</h6>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <div className="fs-12 fw-medium bg-primary-transparent p-1 px-2 rounded">SPRUKO1325</div>
                                    <div className="text-success">COUPON APPLIED</div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted">Sub Total</div>
                                    <div className="fw-medium fs-14">$318.00</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted">Discount</div>
                                    <div className="fw-medium fs-14">10% - $31.08</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted">Delivery Charges</div>
                                    <div className="fw-medium fs-14">- $29.00</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted">GST (10%)</div>
                                    <div className="fw-medium fs-14">+ $2.00</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-muted">Service Tax (18%)</div>
                                    <div className="fw-medium fs-14">- $45.29</div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-15">Total :</div>
                                    <div className="fw-semibold fs-16 text-dark"> $1,387.00</div>
                                </div>
                                <div className="d-flex gap-3 mt-4">
                                    <Link scroll={false} href="#!" className="btn btn-success-light btn-wave flex-fill waves-effect waves-light">Save For Later</Link>
                                    <Link scroll={false} href="/apps/ecommerce/checkout/" className="btn btn-primary btn-wave flex-fill waves-effect waves-light">Pay Now</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-2 */}
        </Fragment>
    );
};

export default PosSystem;