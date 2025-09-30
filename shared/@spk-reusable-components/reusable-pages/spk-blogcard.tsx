"use client"
import { BlogsDataType } from '@/shared/data/pages/blog/blogdata'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, } from 'react-bootstrap'

interface SpkObject {
    card: BlogsDataType
    ImagePadding?: boolean
}

const SpkBlogCard: React.FC<SpkObject> = ({ card, ImagePadding }) => {
    return (
        <Card className=" custom-card overflow-hidden">
            {ImagePadding ? (
                <Link href='#!' className='p-3 pb-0 rounded-5 custom-width' >
                    <Image fill src={card.imageSrc} className="rounded-3 card-img-top" alt="..." />
                </Link>
            ) : (<Image fill src={card.imageSrc} className="d-block w-100" alt="..." />)}

            <Card.Body className=" p-0">
                <div className="p-3">
                    <h5 className="fw-semibold  fw-semibold mb-2 d-block lh-base"><Link className=" h5 fw-semibold  fw-semibold mb-2 d-block lh-base" href="/pages/blog/blog-details">{card.title}</Link></h5>
                    {card.extra && (
                        <p className="mb-3">Nature offers breathtaking landscapes, from lush green valleys</p>
                    )}
                    <p className="mb-3">{card.description}
                        <Link scroll={false} href="#!" className={`fw-medium text-${card.morecolor} ms-2 align-middle fs-12 text-Augoration-underline d-inline-block`}>Read More ?</Link>
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="d-flex align-items-center flex-wrap gap-1">
                            <div className="avatar avatar-md avatar-rounded me-2 custom-width">
                                <Image fill src={card.authorImage} alt="" />
                            </div>
                            <div>
                                <p className="mb-0 fw-medium">{card.author}</p>
                                <p className="text-muted fs-12 mb-0">{card.date}</p>
                            </div>
                        </div>
                        <div className="avatar avatar-sm bg-danger-transparent avatar-rounded">
                            <i className="ri-heart-line text-danger"></i>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SpkBlogCard