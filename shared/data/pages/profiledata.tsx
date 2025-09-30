
"use client";
import { useState } from 'react';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Lightboxcomponent } from '@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox';
import Image from 'next/image';

export const Profilelist = () => {

    const [open, setOpen] = useState(false);
    const profileslides = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" },
        { src: "../../assets/images/media/media-26.jpg" },
        { src: "../../assets/images/media/media-32.jpg" },
        { src: "../../assets/images/media/media-30.jpg" },
        { src: "../../assets/images/media/media-31.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-59.jpg" },
        { src: "../../assets/images/media/media-61.jpg" },
        { src: "../../assets/images/media/media-42.jpg" }
    ]

    return (
        <>
            <Row>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-41.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-43.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-44.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-45.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-60.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-26.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-32.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-30.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-31.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-59.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-61.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)} // Close function
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={profileslides}
            />
        </>
    );
};

export interface ProfileCardType {
    id: number;
    Imgsrc: string;
    Name: string;
    Mail: string;
    Role: string;
    Color: string;
}

export const Profilecarddata: ProfileCardType[] = [
    { id: 1, Imgsrc: "../../assets/images/faces/2.jpg", Name: 'Della Jasmine', Mail: "dellajasmine117@gmail.com", Role: 'Product Designer', Color: 'info' },
    { id: 2, Imgsrc: "../../assets/images/faces/15.jpg", Name: 'Danny Raj', Mail: "dannyraj658@gmail.com", Role: 'UI Designer', Color: 'success' },
    { id: 3, Imgsrc: "../../assets/images/faces/5.jpg", Name: 'Catalina Keira', Mail: "catalinakeira023@gmail.com", Role: 'Product Designer', Color: 'info' },
    { id: 4, Imgsrc: "../../assets/images/faces/11.jpg", Name: 'Priceton Gray', Mail: "pricetongray451@gmail.com", Role: 'Team Manager', Color: 'warning' },
    { id: 5, Imgsrc: "../../assets/images/faces/7.jpg", Name: 'Sarah Ruth', Mail: "sarahruth45@gmail.com", Role: 'Product Designer', Color: 'info' },
    { id: 6, Imgsrc: "../../assets/images/faces/12.jpg", Name: 'Mahira Hose', Mail: "mahirahose9456@gmail.com", Role: 'Product Designer', Color: 'info' },
    { id: 7, Imgsrc: "../../assets/images/faces/1.jpg", Name: 'Victoria Gracie', Mail: "victoriagracie@gmail.com", Role: 'Product Designer', Color: 'info' },
    { id: 8, Imgsrc: "../../assets/images/faces/13.jpg", Name: 'Amith Gray', Mail: "amithgray132@gmail.com", Role: 'Product Designer', Color: 'info' },
    { id: 9, Imgsrc: "../../assets/images/faces/6.jpg", Name: 'Isha Bella', Mail: "ishabella255@gmail.com", Role: 'Product Designer', Color: 'info' }
]