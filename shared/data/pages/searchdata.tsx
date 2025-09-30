import { Fragment, useState } from "react";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import Image from "next/image";


export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString();
    const slidedata = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" }
    ]
    return (
        <Fragment>
            <Row>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-40.jpg" alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs custom-width">
                                    <Image fill src="../../assets/images/company-logos/6.png" alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Beginner</div>
                            </div>
                            <div className="fs-12 text-muted">Beginner In.co</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-41.jpg" alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs custom-width">
                                    <Image fill src="../../assets/images/company-logos/2.png" alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Responsive</div>
                            </div>
                            <div className="fs-12 text-muted">Responsive Design</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-42.jpg" alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs custom-width">
                                    <Image fill src="../../assets/images/company-logos/4.png" alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">JavaScript</div>
                            </div>
                            <div className="fs-12 text-muted">JavaScript Devlops</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-43.jpg" alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs custom-width">
                                    <Image fill src="../../assets/images/company-logos/5.png" alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Layoutscss</div>
                            </div>
                            <div className="fs-12 text-muted">Layout SCSS</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-44.jpg" alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs custom-width">
                                    <Image fill src="../../assets/images/company-logos/6.png" alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">frontend</div>
                            </div>
                            <div className="fs-12 text-muted">Frontend Development.co</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-45.jpg" alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1 flex-wrap">
                                <div className="avatar avatar-xs custom-width">
                                    <Image fill src="../../assets/images/company-logos/7.png" alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">backenddevlops</div>
                            </div>
                            <div className="fs-12 text-muted">Backend Solutions</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-46.jpg" alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1 flex-wrap">
                                <div className="avatar avatar-xs custom-width">
                                    <Image fill src="../../assets/images/company-logos/8.png" alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Frontend Dev</div>
                            </div>
                            <div className="fs-12 text-muted">Frontend Development.co</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <Image fill src="../../assets/images/media/media-60.jpg" alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1 flex-wrap">
                                <div className="avatar avatar-xs custom-width">
                                    <Image fill src="../../assets/images/company-logos/9.png" alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Flawless</div>
                            </div>
                            <div className="fs-12 text-muted">Masters In.co</div>
                        </div>
                    </Link>
                </Col>
                <Col xl={12} className=" mb-4">
                    <SpkButton Buttonvariant="info-light" Customclass="btn-loader mx-auto">
                        <span className="me-2">Loading</span>
                        <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                    </SpkButton>
                </Col>
            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)}
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }}
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={slidedata}
            />

        </Fragment>
    );
};

export const books = [
    {
        id: 1,
        title: "Whispers in the Wind",
        author: "Emma Harper",
        publishedOn: "May 10, 1902",
        description: "Set in the Scottish Highlands, this tale follows the forbidden love between a Highland.",
        image: "../../assets/images/media/books/6.jpg",
        tags: ["Classic", "Historical", "Adventure"],
    },
    {
        id: 2,
        title: "The Quantum Enigma",
        author: "Dr. James Holloway",
        publishedOn: "Jun 08, 1994",
        description: "A brilliant physicist stumbles upon a groundbreaking quantum discovery, but soon finds..",
        image: "../../assets/images/media/books/3.jpg",
        tags: ["Science Fiction", "Mystery", "Thriller"],
    },
    {
        id: 3,
        title: "Echoes of Eternity",
        author: "Sophia Turner",
        publishedOn: "Apr 15, 2010",
        description: "In a world where magic is fading, a young mage must embark on a perilous..",
        image: "../../assets/images/media/books/1.jpg",
        tags: ["Epic", "Fantasy", "Adventure"],
    },
    {
        id: 4,
        title: "Culinary Alchemy",
        author: "Gordon Meyers",
        publishedOn: "Oct 22, 1889",
        description: "Discover the secrets of transforming simple ingredients into..",
        image: "../../assets/images/media/books/2.jpg",
        tags: ["Cooking", "Non-fiction", "Self-help"],
    },
    {
        id: 5,
        title: "Shadows of the Mind",
        author: "Dr. Lisa Bennett",
        publishedOn: "Jan 06, 1999",
        description: "A forensic psychologist with a dark past is drawn into a series..",
        image: "../../assets/images/media/books/4.jpg",
        tags: ["Psychological Thriller", "Crime", "Suspense"],
    },
    {
        id: 6,
        title: "The Last Garden",
        author: "Marcus Reed",
        publishedOn: "Feb 16, 2003",
        description: "In a future where Earth’s ecosystems are collapsing, a group..",
        image: "../../assets/images/media/books/5.jpg",
        tags: ["Dystopian", "Environmental", "Drama"],
    },
];

export const newsData = [
    {
        title: "Quantum Physicists Break New Ground",
        date: "10, Mar 2024 - 3:15PM",
        location: "Quantum Research Facility, Geneva",
        description: "In a groundbreaking experiment, quantum physicists have detected a previously, challenging the known laws of physics.",
        image: "../../assets/images/media/news/1.jpg",
    },
    {
        title: "Stunning Images from NASA's Perseverance Rover",
        date: "8, Apr 2024 - 9:00AM",
        location: "Jezero Crater, Mars",
        description: "NASA's Perseverance rover has captured breathtaking images of the Martian landscape, revealing tantalizing clues about the planet's geology.",
        image: "../../assets/images/media/news/2.jpg",
    },
    {
        title: "Breakthrough in Cancer Research",
        date: "5, May 2024 - 1:45PM",
        location: "Genetech Laboratories",
        description: "Researchers have made a significant breakthrough in cancer treatment with the development of a novel therapy that targets specific cancer cells.",
        image: "../../assets/images/media/news/3.jpg",
    },
    {
        title: "Chef Julia Rodriguez Launches Global Initiative",
        date: "5, Jun 2024 - 11:30AM",
        location: "20 countries",
        description: "Renowned chef and humanitarian, Chef Julia Rodriguez, has launched a global initiative to combat hunger and food insecurity.",
        image: "../../assets/images/media/news/4.jpg",
    },
    {
        title: "Historic Peace Agreement Signed",
        date: "22, Jul 2024 - 4:20PM",
        location: "United Nations",
        description: "In a historic move, long-time rival nations have signed a landmark peace agreement, ending decades of conflict.",
        image: "../../assets/images/media/news/5.jpg",
    },
    {
        title: "Breakthrough in Renewable Energy",
        date: "8, Aug 2024 - 10:00AM",
        location: "SolarTech Innovations",
        description: "Scientists have achieved a major breakthrough in renewable energy with the development of a new, more efficient solar panel technology.",
        image: "../../assets/images/media/news/6.jpg",
    },
];

