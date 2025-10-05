"use client"
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import SpkTooltips from '../reusable-uiElements/spk-tooltips';
import Image from 'next/image';
import { ProductProps } from '@/shared/data/apps/ecommerce/reduxdata';

interface SpkProductsProps {
  onclick?: () => void;
  cartClick?: () => void;
  detailsClick?: () => void;
  shoBadge?: boolean;
  card: ProductProps;
}

const SpkProducts: React.FC<SpkProductsProps> = ({ onclick, cartClick, detailsClick, card, }) => {
  return (
    <Fragment>
      <Card className=" custom-card card-style-2">
        <Card.Body className=" p-0">
          <div className="top-left-badge">
            <div className={`badge bg-${card.discountcolor} d-inline-block`}>{card.discount}</div>
          </div>
          <div className="card-img-top border-bottom border-block-end-dashed">
            <div className="btns-container-1 align-items-center gap-1 custom-product-swiper">
              <SpkTooltips placement="top" title="Quick View">
                <Link scroll={false} onClick={detailsClick} href="/apps/executive/product-details/" className="btn btn-icon btn-info rounded-circle">
                  <i className="ri-eye-line"></i>
                </Link>
              </SpkTooltips>
              <SpkTooltips placement="top" title="Add to Wishlist">
                <Link href="/apps/executive/wishlist" onClick={onclick} className="btn btn-icon btn-success rounded-circle">
                  <i className="bx bx-heart align-center"></i>
                </Link>
              </SpkTooltips>
              <SpkTooltips placement="top" title="Compare">
                <Link scroll={false} href="#!" className="btn btn-icon btn-secondary rounded-circle">
                  <i className="bx bx-adjust"></i>
                </Link>
              </SpkTooltips>  </div>
            <div className="img-box-2 p-2">
              <Image fill src={card.image} alt="img" className="scale-img img-fluid w-100 bg-light rounded" />
            </div>
          </div>
          <div className="p-3 custom-product-swiper">
            <h6 className="mb-1 fw-medium fs-16"><Link scroll href="/apps/executive/product-details/">{card.name}</Link></h6>
            <div className="d-flex align-items-end justify-content-between flex-wrap">
              <div className="flex-grow-1">
                <div className="d-flex align-items-baseline fs-11">
                  <div className="min-w-fit-content">
                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                  </div>
                  <p className="mb-1 ms-1 min-w-fit-content text-muted">
                    <span>({card.reviews})</span>
                    <span className='mx-1'>Ratings</span>
                  </p>
                </div>
                <Link scroll={false} href="#!" className="text-primary fw-medium">{card.brand}</Link>
              </div>
              <div className="min-w-fit-content">
                <h5 className="fw-medium mb-0">${card.price}</h5>
                <span className="fs-13 ms-2 text-muted text-decoration-line-through">${card.originalPrice}</span>
              </div>
            </div>
            <div className="d-grid mt-3">
              <Link href="/apps/executive/cart" onClick={cartClick} className="btn btn-primary">
                Add to cart
              </Link>

            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkProducts;
