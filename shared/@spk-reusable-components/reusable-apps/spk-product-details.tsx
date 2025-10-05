"use client"
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import { ReviewsType } from '@/shared/data/apps/executive/productdetailsdata';
import Link from 'next/link';

interface SpkProductsProps {
	card: ReviewsType;
}

const SpkProductDetails: React.FC<SpkProductsProps> = ({ card }) => {
	return (
		<Fragment>
			<Card className=" custom-card mb-0">
				<Card.Body className=" py-0">
					<div className="d-sm-flex d-block align-items-top mb-3">
						<div className="d-flex flex-fill">
							<div className="me-2">
								<span
									className="avatar avatar-sm avatar-rounded custom-width">
									<Image fill src={`../../../assets/images/faces/${card.id}.jpg`} alt="" />
								</span>
							</div>
							<div className="lh-1 me-2">
								<p className="mb-1 fw-medium fs-14">
									{card.name}</p>
								<div className="mb-1">
									<i className="ri-star-s-fill text-warning align-middle fs-12"></i>
									<i className="ri-star-s-fill text-warning align-middle fs-12"></i>
									<i className="ri-star-s-fill text-warning align-middle fs-12"></i>
									<i className="ri-star-s-fill text-warning align-middle fs-12"></i>
									<i className="ri-star-s-line text-warning align-middle fs-12"></i>
								</div>
								<div className="fs-11 text-muted">
									Reviewed on {card.reviewDate}
								</div>
							</div>
						</div>
						<div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
							<span className="badge bg-success">Verified
								Purchase</span>
						</div>
					</div>
					<div className="mb-3">
						<p className="fw-medium mb-1 ps-2">Absolute
							Game-Changer! &#128077;</p>
						<p className="mb-0 fs-12 text-muted ps-2">
							{card.reviewText} </p>
					</div>
					<div className="product-images">
						<Row className="">
							<Col xl={6} className="">
								<div
									className="products-review-images d-flex">
									{card.images.map((image, index) => (
										<Link scroll={false} key={index} href="#!">
											<Image width={50} height={50} src={image} alt="" />
										</Link>
									))}

								</div>
							</Col>
							<Col xl={6} className=" d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
								<button
									className="btn btn-sm btn-light me-2">Report
									abuse</button>
								<button
									className="btn btn-sm btn-icon btn-primary-light me-2">
									<i className="ri-thumb-up-line"></i>
								</button>
								<button
									className="btn btn-sm btn-icon btn-primary-light">
									<i className="ri-thumb-down-line"></i>
								</button>
							</Col>
						</Row>
					</div>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default SpkProductDetails;