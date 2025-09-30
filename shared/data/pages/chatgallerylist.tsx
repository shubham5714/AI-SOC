import { Lightboxcomponent } from '@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

const ChatGallerylist = () => {
    const [open, setOpen] = useState(false);

    const Slides = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" }
    ]
    return (
         <>
            <Row className="gy-3">
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-41.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-43.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-44.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-45.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-60.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card  mb-0" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-61.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)}
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }}
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={Slides} index={0} />
        </>
    )
}

export default ChatGallerylist