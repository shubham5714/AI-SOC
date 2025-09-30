"use client";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Ecommerceproducts, ProductProps } from "@/shared/data/apps/ecommerce/reduxdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import { addToCart, removeFromWishlist } from "@/shared/redux/actions";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

interface WishlistProps { }

const Wishlist: React.FC<WishlistProps> = () => {
    const reduxWishlist = useSelector((state) => state.reducer.wishlist);
    const [localWishlist, setLocalWishlist] = useState(Ecommerceproducts);

    const dispatch = useDispatch();

    const Wishlistdata = [...localWishlist, ...reduxWishlist].filter(
        (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
    );

    const handleDeleteConfirmation = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove from wishlist",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
                Swal.fire("Removed", "Item removed from wishlist.", "success");
            }
        });
    };

    const handleDelete = (id: number) => {
        setLocalWishlist((prev) => prev.filter((item) => item.id !== id));
        dispatch(removeFromWishlist(id));
    };

    const handleAddToCart = (item: ProductProps) => {
        dispatch(addToCart({ ...item }));
    };

    const isEmpty = Wishlistdata.length === 0;

    return (
        <Fragment>
            <Seo title="Wishlist" />
            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Wishlist" activepage="Wishlist" />

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">My Wishlists</div>
                            <div className="d-flex flex-wrap flex-xl-nowrap gap-2">
                                <input className="form-control form-control-sm" type="text" placeholder="Search Here" />
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">New</Dropdown.Item>
                                    <Dropdown.Item href="#!">This Week</Dropdown.Item>
                                    <Dropdown.Item href="#!">This Month</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" header={[{ title: "Product" }, { title: "Price" }, { title: "Quantity", headerClassname: "text-center" }, { title: "Availability" }, { title: "Ratings" }, { title: "Offer" }, { title: "Action" }]}>
                                    {Wishlistdata.map((item: ProductProps) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1" >
                                                        <Image width={60} height={60} src={item.image} alt={item.name} className="rounded" />
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium d-block">{item.name}</span>
                                                        <span className="fs-12 text-muted">{item.category}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="fs-16 fw-medium">
                                                    ${item.price}
                                                    <span className="fs-13 fw-normal ms-1 d-inline-block text-muted text-decoration-line-through">
                                                        ${item.originalPrice}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="text-center">{item.quantity}</td>
                                            <td>
                                                <span
                                                    className={`text-${item.stockStatus === "In Stock"
                                                        ? "success"
                                                        : item.stockStatus === "Limited Stock"
                                                            ? "danger"
                                                            : "muted"
                                                        }`}
                                                >
                                                    {item.stockStatus}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-warning">
                                                    {item.rating}
                                                    <i className="ti ti-star-filled ms-1"></i>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${item.discountcolor}-transparent`}>
                                                    {item.discount}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link
                                                        href="/apps/ecommerce/cart"
                                                        className="btn btn-primary btn-icon btn-sm"
                                                        onClick={() => handleAddToCart(item)}
                                                    >
                                                        <i className="ti ti-shopping-cart"></i>
                                                    </Link>
                                                    <Link href="#!" scroll={false} className="btn btn-info btn-icon btn-sm">
                                                        <i className="ti ti-bookmark"></i>
                                                    </Link>
                                                    <Link
                                                        href="#!"
                                                        scroll={false}
                                                        onClick={() => handleDeleteConfirmation(item.id)}
                                                        className="btn btn-danger btn-icon btn-sm btn-delete"
                                                    >
                                                        <i className="ti ti-trash"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Wishlist;
