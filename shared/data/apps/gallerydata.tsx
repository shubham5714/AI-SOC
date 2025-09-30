"use client"
import Image from "next/image";
import Link from "next/link"
import { Fragment, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Lightbox from "yet-another-react-lightbox";
export const GalleryList = () => {

    const [open, setOpen] = useState(false);

    const slide = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" },
    ]

    return (
        <Fragment>
            <Row className="row custom-gallery">
                {slide.map((image, index) => (
                    <Col lg={3} md={3} sm={6} className="col-12" key={index}>
                        <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                            <Image
                                src={image.src}
                                alt={`image-${index}`}
                                onClick={() => setOpen(true)}
                                fill

                            />
                        </Link>
                    </Col>
                ))}
            </Row>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slide}
            />
        </Fragment>
    )
}