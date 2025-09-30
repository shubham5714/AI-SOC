"use client"
import Image from 'next/image';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface Testimonial {
    image: string;
    name: string;
    role: string;
    content: string;
    rating: number | string;
    bgClass: string;
    quote: string;
}

interface ReviewCardProps {
    testimonial: Testimonial;
}

const getBadgeClass = (() => {
    const count: Record<number, number> = {};

    return (rating: number): string => {
        const classes: Record<number, string[]> = {
            4.5: ["bg-primary", "bg-primary"],
            4.3: ["bg-primary", "bg-danger"],
            4.1: ["bg-primary", "bg-info"],
            3.8: ["bg-primary", "bg-light"],
        };

        if (!count[rating]) count[rating] = 0;

        const classArray = classes[rating] || ["bg-default"];
        const classToReturn = classArray[count[rating] % classArray.length];

        count[rating]++;

        return classToReturn;
    };
})();

const ReviewCard: React.FC<ReviewCardProps> = ({ testimonial }) => (
    <Fragment>
        <Card className="custom-card overflow-hidden">
            <div className={`p-3 text-center align-items-center justify-content-start gap-2 border-bottom border-block-end-dashed ${testimonial.bgClass}`}>
                <Image width={64} height={64} src={testimonial.image} alt="img" className="mb-2 mx-auto text-center avatar avatar-xl rounded-circle shadow-sm" />
                <div className="flex-grow-1">
                    <p className="mb-0 fw-semibold h6">{testimonial.name}</p>
                    <span className="fw-normal text-muted fs-12">{testimonial.role}</span>
                </div>
            </div>
            <Card.Body>
                <div className="mb-0">
                    "{testimonial.content}"<i className="op-4 fs-11 fw-medium"> --- {testimonial.name}</i>
                </div>
                <div className={`badge rounded-pill float-end ${getBadgeClass(testimonial.rating)}`}>
                    {testimonial.rating}
                    <i className="ri-star-fill text-warning ms-1"></i>
                </div>
                <i className={`bx bxs-quote-alt-right review-quote ${testimonial.quote}`}></i>
            </Card.Body>
        </Card>
    </Fragment>
);

export default ReviewCard;
