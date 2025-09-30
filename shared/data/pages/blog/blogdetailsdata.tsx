interface ListItem {
    id: number;
    iconClass: string;
    bgColor: string;
    text: string;
    badgeColor: string;
    badgeCount: number;
}

// Define the list data
export const listItems: ListItem[] = [
    {
        id: 1,
        iconClass: 'ri-brush-fill',
        bgColor: 'bg-primary',
        text: 'Designing',
        badgeColor: 'bg-primary-transparent',
        badgeCount: 13,
    },
    {
        id: 2,
        iconClass: 'ri-pencil-fill',
        bgColor: 'bg-success',
        text: 'Modern',
        badgeColor: 'bg-success-transparent',
        badgeCount: 36,
    },
    {
        id: 3,
        iconClass: 'ri-microscope-fill',
        bgColor: 'bg-info',
        text: 'Science',
        badgeColor: 'bg-info-transparent',
        badgeCount: 15,
    },
    {
        id: 4,
        iconClass: 'ri-flight-takeoff-fill',
        bgColor: 'bg-secondary',
        text: 'Trips',
        badgeColor: 'bg-secondary-transparent',
        badgeCount: 17,
    },
    {
        id: 5,
        iconClass: 'ri-magic-fill',
        bgColor: 'bg-secondary',
        text: 'Beauty',
        badgeColor: 'bg-secondary-transparent',
        badgeCount: 66,
    },
    {
        id: 6,
        iconClass: 'ri-shirt-fill',
        bgColor: 'bg-success',
        text: 'Styling',
        badgeColor: 'bg-warning-transparent',
        badgeCount: 33,
    },
];

export const comments = [
    {
        id: 1,
        name: 'Mary Cateline',
        avatar: '../../../assets/images/faces/3.jpg',
        message: 'This blog captures the essence of why music is such a powerful force in our lives. It\'s not just about the sounds. Thank you for reminding us of the beauty and magic of music.',
    },
    {
        id: 2,
        name: 'Monte vin',
        avatar: '../../../assets/images/faces/13.jpg',
        message: 'Reading your blog is like taking a journey into the heart of music itself. Your passion for the subject shines through in every word!',
    },
    {
        id: 3,
        name: 'Master Sets',
        avatar: '../../../assets/images/faces/6.jpg',
        borderClass: true,
        message: 'The importance of carving out moments of stillness in our busy lives to simply listen and be present with the music. It\'s a powerful reminder that sometimes.',
    },
];
// Define the interface for each list item
interface BlogItem {
    id: number;
    imageSrc: string;
    category: string;
    categoryColor: string;
    title: string;
    date: string;
}

export const blogItems: BlogItem[] = [
    {
        id: 1,
        imageSrc: '../../../assets/images/media/blog/11.jpg',
        category: 'Nature',
        categoryColor: 'text-primary',
        title: 'The Wonders of Nature',
        date: '18 Jan 2024, 15:46',
    },
    {
        id: 2,
        imageSrc: '../../../assets/images/media/blog/12.jpg',
        category: 'Tourism',
        categoryColor: 'text-success',
        title: 'Embarking on a Tourism Journey',
        date: '20 Feb 2024, 03:03',
    },
    {
        id: 3,
        imageSrc: '../../../assets/images/media/blog/10.jpg',
        category: 'Technology',
        categoryColor: 'text-info',
        title: 'Navigating the Digital Frontier',
        date: '05 Feb 2024, 16:23',
    },
    {
        id: 4,
        imageSrc: '../../../assets/images/media/blog/13.jpg',
        category: 'Networking',
        categoryColor: 'text-secondary',
        title: 'More Designing on websites',
        date: '13 Mar 2024, 20:14',
    },
];


// Define the hashtags array
export const hashtags: string[] = [
    '#artist', '#musician', '#monology', '#promting', '#critisium', '#mentor',
    '#adventure', '#capturing', '#navigator', '#mountain', '#popsinger', '#lyrists',
    '#musicnotes', '#multiplecovers', '#facesact', '#language', '#fluency'
];
import { Fragment, useState } from "react";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import Image from "next/image";


export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string

    const slidedata = [
        { src: "../../../assets/images/media/media-48.jpg" },
        { src: "../../../assets/images/media/media-49.jpg" },
        { src: "../../../assets/images/media/media-50.jpg" },
        { src: "../../../assets/images/media/media-51.jpg" },
        { src: "../../../assets/images/media/media-52.jpg" },
        { src: "../../../assets/images/media/media-53.jpg" },
        { src: "../../../assets/images/media/media-54.jpg" },
        { src: "../../../assets/images/media/media-55.jpg" },
        { src: "../../../assets/images/media/media-56.jpg" }

    ]
    return (
        <Fragment>
            <Row className="row gy-3">
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-48.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-49.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-50.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-51.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-52.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-53.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-54.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-55.jpg" alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../../assets/images/media/media-56.jpg" alt="image" />
                    </Link>
                </Col>
            </Row>

            <Lightboxcomponent
                close={() => setOpen(false)}
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }}
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={slidedata} index={0} />

        </Fragment>
    );
};