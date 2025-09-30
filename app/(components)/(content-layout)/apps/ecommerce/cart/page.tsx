"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Ecommerceproducts } from "@/shared/data/apps/ecommerce/reduxdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import { addToWishlist, removeFromCart } from "@/shared/redux/actions";
import { Product } from "@/shared/redux/reducer";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Form, Row, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

interface CartProps { }


const Cart: React.FC<CartProps> = () => {
    const dispatch = useDispatch();
    const reduxCart = useSelector((state: Product) => state.reducer.cart);
    const [localCart, setLocalCart] = useState(Ecommerceproducts);
    const card = [...localCart, ...reduxCart];

    useEffect(() => {
        setLocalCart(localCart.filter((item) => !reduxCart.some((reduxItem: { id: number; }) => reduxItem.id === item.id)));
    }, [reduxCart]);

    const handleClick = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id: number) => {
        setLocalCart(localCart.filter((item) => item.id !== id));
        dispatch(removeFromCart(id));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };

    const handleAddToWishlist = (item: Product) => {
        dispatch(addToWishlist(item));
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

    const isEmpty = card.length === 0;
    return (
        <Fragment>
            <Seo title="Cart" />
            <Pageheader title='Apps' subtitle='Ecommerce' currentpage='Cart' activepage='Cart' />
            {/* <!-- Start:: Row-1 --> */}
            <Row className="">
                <Col xl={9} className="">
                    {isEmpty ? (
                        <Card className=" custom-card " id="cart-empty-cart">
                            <Card.Header className="">
                                <div className="card-title">
                                    Empty Cart
                                </div>
                            </Card.Header>
                            <Card.Body className="">
                                <div className="cart-empty text-center">
                                    <span className="svg-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
                                    </span>
                                    <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                                    <h5 className="mb-3">Add some items to make me happy :)</h5>
                                    <Link scroll={false} href="/apps/ecommerce/products" className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    ) : (
                        <Card className=" custom-card overflow-hidden" id="cart-container-delete">
                            <Card.Header className="">
                                <div className="card-title">
                                    Cart Items
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <SpkTables tableClass="text-nowrap" header={[{ title: 'Product Name' }, { title: 'Price' }, { title: 'Availability' }, { title: 'Quantity' }, { title: 'Total' }, { title: 'Action' },]}>
                                        {card.slice(0, 5).map((product, index) => (
                                            <tr key={index}>
                                                <td className="cart-items01">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-xxl bg-light custom-width">
                                                                <Image fill src={product.image} alt={product.name} />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <div className="mb-1 fw-medium">
                                                                <Link scroll={false} href="#!"> {product.name}
                                                                    {product.discount && (
                                                                        <span className={`badge bg-${product.discountcolor} fs-9 ms-2`}
                                                                        >
                                                                            <i className="ri-discount-percent-line fs-10"></i>{' '} {product.discount}
                                                                        </span>
                                                                    )}
                                                                </Link>
                                                            </div>
                                                            <div className="fs-12">
                                                                <div className="mb-1">
                                                                    <span className="me-1 d-inline-block fw-medium">Category :</span>
                                                                    <span className="text-muted">{product.category}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="me-1 d-inline-block fw-medium">Brand :</span>
                                                                    <span className="text-muted">{product.brand}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fw-medium">${product.price}</div>
                                                </td>
                                                <td>
                                                    <span
                                                        className={`badge ${product.stockStatus === 'In Stock'
                                                            ? 'bg-success-transparent'
                                                            : product.stockStatus === 'Limited Stock'
                                                                ? 'bg-danger-transparent'
                                                                : ''
                                                            }`}
                                                    >
                                                        {product.stockStatus}
                                                    </span>
                                                </td>
                                                <td className="product-quantity-container">
                                                    <div className="input-group rounded flex-nowrap">
                                                        <SpkButton Buttonvariant="light" onClickfunc={dec} Buttontype="button" Buttonlabel="button" Customclass="btn-icon btn-light input-group-text flex-fill product-quantity-minus border-end-0"><i className="ri-subtract-line"></i></SpkButton>
                                                        <Form.Control type="text" className="form-control form-control-sm text-center w-100" aria-label="quantity" defaultValue={product.quantity} />
                                                        <SpkButton Buttonvariant="light" onClickfunc={inc} Buttontype="button" Buttonlabel="button" Customclass="btn btn-icon btn-light input-group-text flex-fill product-quantity-plus border-start-0"><i className="ri-add-line"></i></SpkButton>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fw-medium">${(product.price * product.quantity).toFixed(2)}</div>
                                                </td>
                                                <td>
                                                    <SpkTooltips placement="top" title="Add To Wishlist">
                                                        <Link scroll={false} href="/apps/ecommerce/wishlist" onClick={() => handleAddToWishlist(product)} className="btn btn-icon btn-primary-light btn-sm me-1"><i className="ri-heart-line"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Remove From cart">
                                                        <Link scroll={false} href="#!" onClick={() => handleClick(product.id)} className="btn btn-icon btn-secondary-light btn-sm">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </SpkTooltips>
                                                </td>
                                            </tr>
                                        ))}

                                    </SpkTables>

                                </div>
                            </Card.Body>
                        </Card>
                    )}


                </Col>
                <Col xl={3} className="">
                    <Card className=" custom-card">
                        <div className="p-3 border-bottom d-block">
                            <div className="alert alert-secondary" role="alert">
                                <span className="text-secondary fw-medium svg-secondary"><svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>SBD Sale starts in 2 days, Stay tuned!</span>
                            </div>
                        </div>
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <p className="mb-2 fw-semibold">Delivery:</p>
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                    <label className="btn btn-outline-light text-default" htmlFor="btnradio1">Free Delivery</label>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" defaultChecked />
                                    <label className="btn btn-outline-light text-default" htmlFor="btnradio2">Express Delivery</label>
                                </div>
                                <p className="mb-0 mt-2 fs-12 text-muted">Delivered by 24,Nov 2025</p>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control form-control-sm" placeholder="Coupon Code" aria-label="coupon-code" aria-describedby="coupons" />
                                    <button className="btn btn-primary input-group-text" id="coupons">Apply</button>
                                </div>
                                <Link scroll={false} href="#!" className="fs-12 text-success">10% off on first purchase</Link>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Sub Total</div>
                                    <div className="fw-semibold fs-14">$1,299</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Discount</div>
                                    <div className="fw-semibold fs-14 text-success">10% - $129</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Delivery Charges</div>
                                    <div className="fw-semibold fs-14 text-danger">- $49</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Service Tax (18%)</div>
                                    <div className="fw-semibold fs-14">- $169</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-muted op-7">Total :</div>
                                    <div className="fw-semibold fs-14 text-primary"> $1,387</div>
                                </div>
                            </div>
                            <div className="p-3 d-grid">
                                <Link scroll={false} href="/apps/ecommerce/checkout" className="btn btn-primary btn-wave mb-2">Proceed To Checkout</Link>
                                <Link scroll={false} href="/apps/ecommerce/products" className="btn btn-light btn-wave">Continue Shopping</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-1 --> */}
        </Fragment>
    );
};

export default Cart;