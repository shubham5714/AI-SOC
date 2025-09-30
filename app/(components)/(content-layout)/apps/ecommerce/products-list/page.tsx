"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import { dataType, ProductList } from "@/shared/data/apps/ecommerce/productlistdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";

interface ProductsListProps { }

const ProductsList: React.FC<ProductsListProps> = () => {
    const [allData, setAllData] = useState<any>(ProductList);
    const handleRemove = (id: number) => {
        const newList = allData.filter((item: { id: number; }) => item.id !== id);
        setAllData(newList);
    };

    const [selectedItems, setSelectedItems] = useState<any>([]);

    const handleCheckboxClick = (id: string) => {
        setSelectedItems((prevSelected: string[]) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item: string) => item !== id)
                : [...prevSelected, id]
        );
    };
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(allData.map((product: { id: number; }) => product.id));
        } else {
            setSelectedItems([]);
        }
    };
    return (
        <Fragment>
            <Seo title="Products List" />
            <Pageheader title='Apps' subtitle='Ecommerce' currentpage='Products List' activepage='Products List' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Products List
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" showCheckbox={true} onChange={handleSelectAll} checked={selectedItems.length === allData.length} header={[{ title: 'Product' }, { title: 'Category' }, { title: 'Price' }, { title: 'Stock' }, { title: 'Status' }, { title: 'Seller' }, { title: 'Published' }, { title: 'Action' }]}>
                                    {allData.map((product: dataType) => (
                                        <tr key={product.id} className="product-list">
                                            <td className="product-checkbox">
                                                <input className="form-check-input check-all" type="checkbox" id="all-products" defaultValue=""
                                                    aria-label="..."
                                                    onChange={() => handleCheckboxClick(product.id)}
                                                    checked={selectedItems.includes(product.id)} />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <span className="avatar avatar-md avatar-square bg-light custom-width">
                                                        <Image fill src={product.imageSrc} className="w-100 h-100" alt={product.name} />
                                                    </span>
                                                    <div>
                                                        <p className="fw-medium mb-0 d-flex align-items-center">
                                                            <Link scroll={false} href="#!">{product.name}</Link>
                                                        </p>
                                                        <p className="fs-12 text-muted mb-0">{product.brand}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>{product.category}</span>
                                            </td>
                                            <td>{product.price}</td>
                                            <td>{product.stock}</td>
                                            <td>
                                                <span className={`badge ${product.status === 'Published' ? 'bg-primary-transparent' : 'bg-danger-transparent'}`}>
                                                    {product.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center fw-medium">
                                                    <span className="avatar avatar-sm me-2 avatar-rounded custom-width">
                                                        <Image fill src={product.authorImage} alt={product.author} />
                                                    </span>
                                                    <Link scroll={false} href="#!">{product.author}</Link>
                                                </div>
                                            </td>
                                            <td>{product.createdAt}</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link scroll={false} href="/apps/ecommerce/edit-products/" className="btn btn-icon btn-sm btn-primary-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" onClick={() => handleRemove(product.id)} className="btn btn-icon btn-sm btn-danger-light product-btn">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>

                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>5</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <Pagination className="pagination mb-0 overflow-auto">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item>3</Pagination.Item>
                                        <Pagination.Item>4</Pagination.Item>
                                        <Pagination.Item>5</Pagination.Item>
                                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                                    </Pagination>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ProductsList;