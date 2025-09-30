"use client"
import { ItemsListType } from '@/shared/data/dashboards/possystemddata';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
interface SpkPossystemCardProps {
    card: ItemsListType
}

const SpkPossystemCard: React.FC<SpkPossystemCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${card.inStock ? '' : 'out-of-stock'}`}>
                <Image fill src={card.image} className="card-img-top" alt="..." />
                <Card.Body className="rounded-bottom">
                    <div className="mb-3">
                        <Link scroll={false} href="#!" className="fw-medium fs-16">{card.name}</Link>
                        <span className="fs-12 text-muted d-block">{card.subcategory}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 justify-content-between flex-wrap">
                        <h5 className="fw-medium mb-0">{card.price}</h5>
                        <div>
                            <button type="button" className={`btn btn-primary ${card.inStock ? ' ' : 'disabled'} btn-sm`}><i className="ri-add-fill me-1"></i>Add To Cart</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkPossystemCard;
