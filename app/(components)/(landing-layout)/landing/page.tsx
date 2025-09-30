"use client"
import SpkPricingCard2 from "@/shared/@spk-reusable-components/reusable-pages/spk-pricingcard2";
import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { ContactData, FeaturesData, OurTeamSwiperData, ServiceData, TestimonialsSwiperData } from "@/shared/data/pages/landingdata";
import { pricingPlanMonth, pricingPlansYear } from "@/shared/data/pages/pricingdata";
import Seo from "@/shared/layouts-components/seo/seo";
import { data$, getState, setState } from "@/shared/layouts-components/services/switcherServices";
import Landingswitcher from "@/shared/layouts-components/switcher/landing-switcher";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import nextConfig from "@/next.config"

const Landing = ({ }) => {

    const { basePath } = nextConfig

    let [variable, setVariable] = useState(getState());

    const [landing, setLanding] = useState({
        show: false,
        expande: false,
        expande1: false,
        expande2: false,
        isActive: false
    })

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            // No need to manually update component state, the UI will re-render automatically
            setVariable(e);
        });

        return () => subscription.unsubscribe(); // Clean up the subscription
    }, []);

    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const currentToggled = variable
            const newState = {
                toggled: currentToggled === 'open' ? 'close' : 'open',
                dataNavLayout: "horizontal",
            };
            setState(newState);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', toggleNavigation);
        return () => {
            window.removeEventListener('resize', toggleNavigation);
        };
    }, []);

    useEffect(() => {

        const newState = {
            dataNavStyle: "menu-click",
            dataNavLayout: "horizontal",
            dataMenuStyles: "",
            dataVerticalStyle: "",
            dataWidth: "",

        }
        setState(newState);

        return () => {
            const newState = {
                dataNavStyle: "",
                dataVerticalStyle: "",
                dataNavLayout: `${localStorage.zynixLayout == "horizontal" ? "horizontal" : "vertical"}`,
            }
            setState(newState)
        }

    }, [])


    useEffect(() => {
        window.addEventListener('resize', menuClose);
        return () => {
            window.removeEventListener('resize', menuClose);
        };
    }, []);

    useEffect(() => {
        function handleResize() {

            if (window.innerWidth <= 992) {

                const newState = {
                    toggled: 'close',
                    dataNavLayout: 'horizontal'
                }
                setState(newState)
            } else {
                const newState = {
                    toggled: 'open',
                    dataNavLayout: 'horizontal'
                }
                setState(newState)
            }
        }

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        // handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const landingpages = () => {
            if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
                let Scolls = document?.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.add("sticky-pin");
                });
            } else {
                let Scolls = document?.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.remove("sticky-pin");
                });
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", landingpages);
        }
    });

    function handleClick1() {
        setLanding(prve => ({ ...prve, expande: false }));
        setLanding(prve => ({ ...prve, expande1: false }));
        setLanding(prve => ({ ...prve, expande2: false }));

        const newState = {
            toggled: 'close',
            dataNavLayout: 'horizontal'
        }
        setState(newState)
    }

    const sideMenuItems = useRef<HTMLAnchorElement[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault();
        const target: string | null = e.currentTarget.getAttribute("href");
        if (target) {
            const location = document.getElementById(target.substring(1))?.offsetTop;
            if (location !== undefined) {
                window.scrollTo({
                    left: 0,
                    top: location - 64,
                    behavior: "smooth",
                });
            }
        }
    };

    useEffect(() => {
        sideMenuItems.current.forEach((elem) => {
            elem.addEventListener("click", handleClick);
        });

        return () => {
            sideMenuItems.current.forEach((elem) => {
                elem.removeEventListener("click", handleClick);
            });
        };
    }, []);


    //  switcher offcanvas

    const handleClose = () => setLanding(prev => ({ ...prev, show: false }));
    const handleShow = () => setLanding(prev => ({ ...prev, show: true }));




    const documentSelector = (selector: string): HTMLElement | null => document.querySelector<HTMLElement>(selector);

    useEffect(() => {
        // Check localStorage for initial state
        if (localStorage.getItem('data-menu-styles') === 'light') {
            documentSelector('html')?.setAttribute('data-menu-styles', 'light');
        }
    }, []);

    const toggleExpand = () => {
        setLanding(prev => ({
            ...prev,
            expande: !prev.expande
        }));

        if (localStorage.getItem('data-menu-styles') === 'light') {
            document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
        }
    };

    const handleSubMenuToggle1 = () => {
        setLanding(prev => ({
            ...prev,
            expande1: !prev.expande1, // Toggle 'expande1'
        }));
    };

    const handleSubMenuToggle2 = () => {
        setLanding(prev => ({
            ...prev,
            expande2: !prev.expande2, // Toggle 'expande2'
        }));
    };

    // closing the menu when widnow width is <= 992

    const overlayElementRef = useRef<any>(null);

    function menuClose() {
        if (window.innerWidth <= 992) {
            const newState = {
                toggled: "close"
            }
            setState(newState);
        }
        if (overlayElementRef.current) {
            overlayElementRef.current?.classList.remove("active");
        }
    }


    const [activeLink, setActiveLink] = useState<string>('home');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const onScroll = () => {
        const sections = document.querySelectorAll(".side-menu__item");
        const scrollPos =
            window.scrollY ||
            document.documentElement.scrollTop ||
            (document.querySelector("body")?.scrollTop || 0);

        sections.forEach((elem) => {
            const value = elem.getAttribute("href") ?? "";
            const fragmentIndex = value.indexOf("#");
            const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

            if (fragment) {
                const refElement = document.getElementById(fragment);

                if (refElement) {
                    const scrollTopMinus = scrollPos + 73;
                    if (
                        refElement.offsetTop <= scrollTopMinus &&
                        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
                    ) {
                        elem.classList.add("active");
                    } else {
                        elem.classList.remove("active");
                    }
                }
            }
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    //  current Year 
    let currentYear = new Date().getFullYear();

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1112: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }

    const breakpoints1 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1112: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }

    return (
        <Fragment>
            <Seo title="Landing-Page" />

            {/* <!-- app-header --> */}
            <header className="app-header">

                {/* <!-- Start::main-header-container --> */}
                <div className="main-header-container container-fluid">

                    {/* <!-- Start::header-content-left --> */}
                    <div className="header-content-left">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link href='/dashboards/sales' scroll={false} className="header-logo">
                                    <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="toggle-logo" />
                                    <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-dark.png`} alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            {/* <!-- Start::header-link --> */}
                            <Link href="#!" scroll={false} className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={() => toggleNavigation()} >
                                <span className="open-toggle">
                                    <i className="ri-menu-3-line fs-20"></i>
                                </span>
                            </Link>
                            {/* <!-- End::header-link --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-left --> */}

                    {/* <!-- Start::header-content-right --> */}
                    <div className="header-content-right">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element align-items-center">
                            {/* <!-- Start::header-link|switcher-icon --> */}
                            <div className="btn-list d-lg-none d-flex">
                                <Link scroll={false} href="/authentication/sign-up/sign-up-basic" className="btn btn-primary-light">
                                    Sign Up
                                </Link>
                                <SpkButton Buttonvariant="success" Customclass="btn btn-icon btn-success switcher-icon d-flex align-items-center justify-content-center" data-bs-toggle="offcanvas"
                                    data-bs-target="#switcher-canvas" onClickfunc={handleShow} >
                                    <i className="ri-settings-3-line"></i>
                                </SpkButton>
                            </div>
                            {/* <!-- End::header-link|switcher-icon --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-right --> */}

                </div>
                {/* <!-- End::main-header-container --> */}

            </header>
            {/* <!-- /app-header --> */}

            {/* <!-- Start::app-sidebar --> */}
            <div ref={overlayElementRef} id="responsive-overlay" onClick={() => menuClose()}></div>
            <aside className="app-sidebar custom-landpage sticky" id="sidebar">

                <div className="container-xl">
                    {/* <!-- Start::main-sidebar --> */}
                    <div className="main-sidebar">

                        {/* <!-- Start::nav --> */}
                        <nav className="main-menu-container nav nav-pills sub-open">
                            <div className="landing-logo-container">
                                <div className="horizontal-logo">
                                    <Link scroll={false} href="/dashboards/sales/" className="header-logo">
                                        <Image fill src={`../assets/images/brand-logos/desktop-logo.png`} alt="logo"
                                            className="desktop-logo" />
                                        <Image fill src={`../assets/images/brand-logos/desktop-white.png`} alt="logo"
                                            className="desktop-white" />
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg></div>
                            <ul className="main-menu">
                                <li className="slide">
                                    <Link scroll={false} className={`side-menu__item ${activeLink === 'home' ? 'active' : ''}`} href="#home" ref={(el: HTMLAnchorElement | null) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('home')}
                                    >
                                        <span className="side-menu__label">Home</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link scroll={false} href="#about" className={`side-menu__item ${activeLink === 'about' ? 'active' : ''}`} ref={(el: HTMLAnchorElement | null) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('about')}
                                    >
                                        <span className="side-menu__label">About</span>
                                    </Link>
                                </li>
                                <li className={`slide has-sub ${landing.expande ? 'open' : ''} `}>
                                    <Link scroll={false} href="#!" ref={(el: HTMLAnchorElement | null) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }} className={`side-menu__item ${landing.expande ? 'active' : ''} ${landing.isActive ? 'active' : ''} `} onClick={toggleExpand} >
                                        <span className="side-menu__label me-2">More</span>
                                        <i className="fe fe-chevron-right side-menu__angle op-8"></i>
                                    </Link>
                                    <ul className={`slide-menu child1 ${landing.expande ? 'active' : ''}`}
                                        style={{ display: landing.expande ? 'block' : 'none' }}
                                    >
                                        <li className="slide">
                                            <Link scroll={false} ref={(el: HTMLAnchorElement | null) => {
                                                if (el) {
                                                    sideMenuItems.current.push(el);
                                                }
                                            }}
                                                onClick={() => handleLinkClick('services')}
                                                href="#services" className={`side-menu__item ${activeLink === 'services' ? 'active' : ''}`}>Services</Link>
                                        </li>

                                        <li className="slide">
                                            <Link scroll={false} ref={(el: HTMLAnchorElement | null) => {
                                                if (el) {
                                                    sideMenuItems.current.push(el);
                                                }
                                            }}
                                                onClick={() => handleLinkClick('features')}
                                                href="#features" className={`side-menu__item ${activeLink === 'features' ? 'active' : ''}`}>Features</Link>
                                        </li>
                                        <li className={`slide has-sub ${landing.expande1 ? 'open' : ''}`}>
                                            <Link scroll={false} href="#!" ref={(el: HTMLAnchorElement | null) => {
                                                if (el) {
                                                    sideMenuItems.current.push(el);
                                                }
                                            }} className="side-menu__item" onClick={handleSubMenuToggle1} >Level-2
                                                <i className="fe fe-chevron-right side-menu__angle"></i></Link>
                                            <ul className={`slide-menu child2 ${landing.expande1 ? 'active' : ''}`}
                                                style={{ display: landing.expande1 ? 'block' : 'none' }}>
                                                <li className="slide">
                                                    <Link scroll={false} href="#!" ref={(el: HTMLAnchorElement | null) => {
                                                        if (el) {
                                                            sideMenuItems.current.push(el);
                                                        }
                                                    }} className="side-menu__item">Level-2-1</Link>
                                                </li>
                                                <li className={`slide has-sub ${landing.expande2 ? 'open' : ''}`}>
                                                    <Link scroll={false} href="#!" ref={(el: HTMLAnchorElement | null) => {
                                                        if (el) {
                                                            sideMenuItems.current.push(el);
                                                        }
                                                    }} className="side-menu__item" onClick={handleSubMenuToggle2} >Level-2-2
                                                        <i className="fe fe-chevron-right side-menu__angle"></i></Link>
                                                    <ul className={`slide-menu child3 ${landing.expande2 ? 'active' : ''}`}
                                                        style={{ display: landing.expande2 ? 'block' : 'none' }}>
                                                        <li className="slide">
                                                            <Link scroll={false} href="#!" ref={(el: HTMLAnchorElement | null) => {
                                                                if (el) {
                                                                    sideMenuItems.current.push(el);
                                                                }
                                                            }}
                                                                className="side-menu__item">Level-2-2-1</Link>
                                                        </li>
                                                        <li className="slide has-sub">
                                                            <Link scroll={false} href="#" ref={(el: HTMLAnchorElement | null) => {
                                                                if (el) {
                                                                    sideMenuItems.current.push(el);
                                                                }
                                                            }}
                                                                className="side-menu__item">Level-2-2-2</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide">
                                    <Link scroll={false} href="#pricing" className={`side-menu__item ${activeLink === 'pricing' ? 'active' : ''}`} ref={(el: HTMLAnchorElement | null) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('pricing')}
                                    >
                                        <span className="side-menu__label">Pricing</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link scroll={false} href="#team" className={`side-menu__item ${activeLink === 'team' ? 'active' : ''}`} ref={(el: HTMLAnchorElement | null) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('team')}
                                    >
                                        <span className="side-menu__label">Team</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link scroll={false} href="#testimonials" className={`side-menu__item ${activeLink === 'testimonials' ? 'active' : ''}`} ref={(el: HTMLAnchorElement | null) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('testimonials')}
                                    >
                                        <span className="side-menu__label">Testimonials</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link scroll={false} href="#contact" className={`side-menu__item ${activeLink === 'contact' ? 'active' : ''}`} ref={(el: HTMLAnchorElement | null) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('contact')}
                                    >
                                        <span className="side-menu__label">Contact Us</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                </path>
                            </svg></div>
                            <div className="d-lg-flex d-none">
                                <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                    <Link scroll={false} href="/authentication/sign-up/sign-up-basic" className="btn btn-wave btn-success">
                                        Sign Up
                                    </Link>
                                    <SpkButton Buttonvariant="primary" Customclass="btn btn-wave btn-icon btn-primary switcher-icon d-flex align-items-center justify-content-center" data-bs-toggle="offcanvas" onClickfunc={handleShow}
                                        data-bs-target="#switcher-canvas">
                                        <i className="ri-settings-3-line"></i>
                                    </SpkButton>
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End::nav --> */}

                    </div>
                    {/* <!-- End::main-sidebar --> */}
                </div>

            </aside>
            {/* <!-- End::app-sidebar --> */}

            {/*<!-- Start::app-content -->*/}
            <div className="main-content landing-main px-0" onClick={handleClick1}>

                {/*<!-- Start:: Section-1 -->*/}
                <div className="landing-banner" id="home">
                    <section className="banner-section section">
                        <Container className=" main-banner-container pb-lg-0">
                            <Row className=" align-items-center">
                                <Col lg={7} className="">
                                    <div className="mb-5">
                                        <p className="mb-3 text-fixed-white deals-tag d-flex align-items-center gap-2"><span className="avatar avatar-xs bg-info text-fixed-white rounded-circle me-1 shadow-1"><i className="fe fe-zap"></i></span> GET OUR SERVICES WITH GREAT DEALS </p>
                                        <h1 className="mb-3 content-1 text-fixed-white">  Boost Your <span className="text-warning position-relative"> Business</span> our Template.</h1>
                                        <p className="content-2 text-fixed-white">We provide creative solutions that go beyond commercial objectives and are expertly developed.Pushing the boundaries of creativity to surpass business goals.</p>
                                    </div>
                                    <div className="btn-list">
                                        <Link scroll={false} href="/dashboards/sales/" className="btn btn-lg btn-secondary mb-2 me-2 mb-sm-0"><i className="fe fe-arrow-right me-2 d-inline-block"></i>Get Started</Link>
                                        <Link scroll={false} href="#!" className="btn btn-lg mb-2 mb-sm-0 bg-transparent border-white-1 text-fixed-white"><i className="fe fe-phone me-2 d-inline-block"></i>Contact Us</Link>
                                    </div>
                                </Col>
                                <Col lg={5} className=" mt-4 mt-lg-0 text-end">
                                    <div className="add-content bg-transparent shadow-none p-0">
                                        <div className="add-content1">
                                            <Image fill src="../assets/images/media/media-71.png" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                {/*<!-- End:: Section-1 -->*/}

                {/*<!-- Start:: Section-2 -->*/}
                <section className="section bg-white" id="about">
                    <Container className="">
                        <div className="heading-section">
                            <div className="heading-subtitle"><span className="text-primary fw-semibold">About</span></div>
                            <hr className="center-diamond" />
                            <div className="heading-title">Why you choose us? </div>
                            <div className="heading-description">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.</div>
                        </div>
                        <Row className=" justify-content-center">
                            <Col lg={4} className="">
                                <Card className=" mb-lg-0 home-cards border shadow-none reveal reveal-active">
                                    <Card.Body className=" d-flex main-card-body">
                                        <div className="b-icons fs-3 mx-auto br-style5 flex-shrink-0 bg-primary-transparent"><i className="bx bx-layer lh-0"></i></div>
                                        <div className="ms-3">
                                            <h5>Easy to Customize</h5>
                                            <p className="mb-0 card-main-content">Magna dolore elitr ut et labore stet dolor tempor at ipsum, amet quis nostrum exercitationem.</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} className="">
                                <Card className=" mb-lg-0 home-cards border shadow-none reveal reveal-active">
                                    <Card.Body className=" d-flex main-card-body">
                                        <div className="b-icons fs-3 mx-auto br-style5 flex-shrink-0 bg-secondary-transparent text-secondary"><i className="bx bx-package lh-0"></i></div>
                                        <div className="ms-3">
                                            <h5>Simplified Code </h5>
                                            <p className="mb-0 card-main-content">At vero eos et accusamus et iusto odio dignissimos ducimus qui quidem rerum facilis reprehenderi.</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} className="">
                                <Card className=" mb-lg-0 home-cards border shadow-none reveal reveal-active">
                                    <Card.Body className=" d-flex main-card-body">
                                        <div className="b-icons fs-3 mx-auto br-style5 flex-shrink-0 bg-info-transparent text-info"><i className="bx bx-analyse lh-0"></i></div>
                                        <div className="ms-3">
                                            <h5>Multiple Demos</h5>
                                            <p className="mb-0 card-main-content">Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores rerum hic tenetur.</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*<!-- End:: Section-2 -->*/}

                {/*<!-- Start:: Section-3 -->*/}
                <section className="section bg-background" id="services">
                    <Container className="">
                        <Row className="">
                            <div className="heading-section">
                                <div className="heading-subtitle"><span className="text-primary fw-semibold">Services</span></div>
                                <hr className="center-diamond" />
                                <div className="heading-title">Best Services You Can Get !</div>
                                <div className="heading-description">We provide excellent service which ensure repeated
                                    customers</div>
                            </div>
                            {ServiceData.map((idx) => (
                                <Col xl={3} sm={6} className="" key={idx.id}>
                                    <Card className=" bg-custom-white reveal reveal-active custom-card">
                                        <div className="position-relative">
                                            <Link scroll={false} href="#!" className=' custom-width'>
                                                <Image fill className="card-img-top" src={idx.imgSrc} alt="blog-image" />
                                            </Link>
                                        </div>
                                        <Card.Body className=" d-flex flex-column">
                                            <h5>{idx.title}</h5>
                                            <span className="d-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                                            <Link scroll={false} href="#!" className="fs-14 text-primary fw-semibold">Read More<i className="bi bi-arrow-right ms-2 d-inline-block rtl-transform-icon"></i></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                {/*<!-- End:: Section-3 -->*/}

                {/*<!-- Start:: Section-4 -->*/}
                <section className="section overflow-hidden bg-white" id="features">
                    <Container className="">
                        <Row className="">
                            <div className="heading-section">
                                <div className="heading-subtitle"><span className="text-primary fw-semibold">Highlight Features</span></div>
                                <hr className="center-diamond" />
                                <div className="heading-title">Main highlight Features</div>
                                <div className="heading-description">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.</div>
                            </div>
                            {FeaturesData.map((idx) => (
                                <Col xl={3} sm={6} className="" key={idx.id}>
                                    <Card className=" bg-image add-class theme-cards text-center shadow-none border reveal reveal-active">
                                        <Card.Body className=" main-card-body">
                                            <div className={`text-${idx.colorClass} addons fs-4 mb-3`}>
                                                <i className={`bi bi-${idx.iconClass}`}></i>
                                            </div>
                                            <h5>{idx.title}</h5>
                                            <p className="card-main-content mb-0">{idx.description}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                {/*<!-- End:: Section-4 -->*/}

                {/*<!-- Start:: Section-5 -->*/}
                <section className="section bg-background bg-background-pattern1">
                    <Container className=" workflow-container">
                        <Row className=" gy-3">
                            <div className="heading-section">
                                <div className="heading-subtitle"><span className="text-primary fw-semibold">Work Flow</span>
                                </div>
                                <hr className="center-diamond" />
                                <div className="heading-title">Our work flow is Awesome !</div>
                                <div className="heading-description">Our work flow starts right from the booking of the appointment.</div>
                            </div>
                            <Col xl={4} className="">
                                <div className="px-3">
                                    <Card className=" mb-5">
                                        <Card.Body className=" main-card-body">
                                            <div>
                                                <span className="svg-gradient mx-auto svg-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Finance">
                                                        <path
                                                            fill="#544efd"
                                                            style={{
                                                                lineHeight: 'normal',
                                                                textIndent: 0,
                                                                textAlign: 'start',
                                                                textDecorationLine: 'none',
                                                                textDecorationStyle: 'solid',
                                                                textDecorationColor: '#000',
                                                                textTransform: 'none',
                                                                whiteSpace: 'normal',
                                                                isolation: 'auto',
                                                                mixBlendMode: 'normal'
                                                            }}
                                                            d="M-432.873 1359.588a.5.5 0 0 0-.227.059l-8.212 4.355.468.885 7.772-4.123 2.746 5.18.883-.469-2.98-5.621a.5.5 0 0 0-.45-.266z"
                                                            color="#000"
                                                            transform="translate(456.5 -1353.371)"
                                                            className="color2b79c2 svgShape"
                                                        />
                                                        <path
                                                            fill="#544efd"
                                                            style={{
                                                                lineHeight: 'normal',
                                                                textIndent: 0,
                                                                textAlign: 'start',
                                                                textDecorationLine: 'none',
                                                                textDecorationStyle: 'solid',
                                                                textDecorationColor: '#000',
                                                                textTransform: 'none',
                                                                whiteSpace: 'normal',
                                                                isolation: 'auto',
                                                                mixBlendMode: 'normal'
                                                            }}
                                                            d="M-436.693 1357.387a.5.5 0 0 0-.346.144l-4.941 4.94.707.709 4.587-4.586 2.403 2.402.707-.707-2.756-2.756a.5.5 0 0 0-.361-.146z"
                                                            color="#000"
                                                            transform="translate(456.5 -1353.371)"
                                                            className="color2b79c2 svgShape"
                                                        />
                                                        <path
                                                            style={{
                                                                lineHeight: 'normal',
                                                                textIndent: 0,
                                                                textAlign: 'start',
                                                                textDecorationLine: 'none',
                                                                textDecorationStyle: 'solid',
                                                                textDecorationColor: '#000',
                                                                textTransform: 'none',
                                                                whiteSpace: 'normal',
                                                                isolation: 'auto',
                                                                mixBlendMode: 'normal'
                                                            }}
                                                            d="M-440.936 1365.371v1h11.436c.563 0 1 .437 1 1v13c0 .563-.437 1-1 1h-19c-.563 0-1-.437-1-1v-10.76h-1v10.76c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2v-13c0-1.1-.9-2-2-2h-11.436z"
                                                            color="#000"
                                                            transform="translate(456.5 -1353.371)"
                                                            fill="#8d54ea"
                                                            className="color000000 svgShape"
                                                        />
                                                        <path
                                                            style={{ isolation: 'auto', mixBlendMode: 'normal' }}
                                                            d="M-440.5 1367.37h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm0 2h1v1h-1zm0 8h1v1h-1zm0 2h1v1h-1zm-2 0h1v1h-1zm-16-8h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"
                                                            color="#000"
                                                            transform="translate(456.5 -1353.371)"
                                                            fill="#8d54ea"
                                                            className="color000000 svgShape"
                                                        />
                                                        <path
                                                            style={{
                                                                lineHeight: 'normal',
                                                                textIndent: 0,
                                                                textAlign: 'start',
                                                                textDecorationLine: 'none',
                                                                textDecorationStyle: 'solid',
                                                                textDecorationColor: '#000',
                                                                textTransform: 'none',
                                                                whiteSpace: 'normal',
                                                                isolation: 'auto',
                                                                mixBlendMode: 'normal'
                                                            }}
                                                            d="M-434 1371.371a2.506 2.506 0 0 0-2.5 2.5c0 1.376 1.124 2.5 2.5 2.5h6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-6zm0 1h5.5v3h-5.5c-.84 0-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5z"
                                                            color="#000"
                                                            transform="translate(456.5 -1353.371)"
                                                            fill="#8d54ea"
                                                            className="color000000 svgShape"
                                                        />
                                                        <path
                                                            style={{ isolation: 'auto', mixBlendMode: 'normal' }}
                                                            d="M-434.5 1373.37h1v1h-1z"
                                                            color="#000"
                                                            transform="translate(456.5 -1353.371)"
                                                            fill="#8d54ea"
                                                            className="color000000 svgShape"
                                                        />
                                                        <path
                                                            fill="#544efd"
                                                            style={{
                                                                lineHeight: 'normal',
                                                                textIndent: 0,
                                                                textAlign: 'start',
                                                                textDecorationLine: 'none',
                                                                textDecorationStyle: 'solid',
                                                                textDecorationColor: '#000',
                                                                textTransform: 'none',
                                                                whiteSpace: 'normal',
                                                                isolation: 'auto',
                                                                mixBlendMode: 'normal'
                                                            }}
                                                            d="M-446.5 1359.37c-3.308 0-6 2.691-6 6 0 3.307 2.692 6 6 6s6-2.693 6-6c0-3.309-2.692-6-6-6zm0 1c2.767 0 5 2.232 5 5 0 2.766-2.233 5-5 5s-5-2.234-5-5c0-2.768 2.233-5 5-5z"
                                                            color="#000"
                                                            transform="translate(456.5 -1353.371)"
                                                            className="color2b79c2 svgShape"
                                                        />
                                                        <path
                                                            fill="#544efd"
                                                            d="M11.21 13.538q0-.19-.066-.35-.066-.16-.216-.299-.144-.139-.383-.256-.233-.118-.566-.228-.443-.122-.799-.282-.349-.164-.599-.383-.244-.219-.377-.505-.127-.287-.127-.661 0-.346.11-.632.117-.286.328-.497.216-.21.521-.345.305-.135.683-.181v-.926h.782v.93q.776.105 1.198.602.427.493.427 1.348h-.97q0-.283-.073-.518-.066-.236-.2-.409-.133-.172-.332-.27-.2-.096-.455-.096-.266 0-.46.071-.195.072-.328.203-.127.126-.194.307-.061.18-.061.4 0 .202.061.366.067.16.216.295.15.135.389.257.244.118.599.231.455.13.804.295.35.16.588.375.239.215.36.497.123.282.123.652 0 .362-.128.653-.128.286-.36.497-.233.21-.566.337-.333.126-.75.168v.808h-.77v-.808q-.35-.037-.677-.156-.327-.118-.582-.34-.25-.224-.4-.56-.15-.342-.15-.818h.977q0 .358.105.594t.277.375q.172.139.383.193.211.055.422.055.294 0 .521-.067.233-.071.388-.198.161-.13.245-.311.083-.185.083-.413z"
                                                            className="color2b79c2 svgShape"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="mb-2 mt-4">
                                                <h5 className="mb-0">Emphasize Efficiency</h5>
                                            </div>
                                            <div className="mb-0">
                                                <span className="card-main-content">Our workflow is designed to minimize wasted time,which enables you to complete tasks faster and more efficiently.</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <div className="text-center">
                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary fw-semibold border-0 workflow-bottom-design">01</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} className="">
                                <div className="px-3">
                                    <div className="text-center mb-5">
                                        <span className="avatar avatar-md avatar-rounded  bg-primary-transparent text-primary fw-semibold border-0 workflow-top-design">02</span>
                                    </div>
                                    <Card className="">
                                        <Card.Body className=" main-card-body">
                                            <div>
                                                <span className="svg-gradient mx-auto svg-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="IdeaConcept"><path fill="#544efd" d="M64 13.481a2 2 0 0 0 2-2V8.5a2 2 0 0 0-4 0v2.981a2 2 0 0 0 2 2zM73.941 15.487a2 2 0 0 0 2.62-1.064l1.161-2.747a2 2 0 0 0-3.685-1.557l-1.161 2.747a2.001 2.001 0 0 0 1.065 2.621zM83.472 21.545a1.99 1.99 0 0 0 1.414-.586l2.108-2.108a2 2 0 1 0-2.828-2.828l-2.108 2.108a2 2 0 0 0 1.414 3.414zM87.531 29.074a2 2 0 0 0 2.62 1.064l2.747-1.161a2 2 0 1 0-1.557-3.685l-2.747 1.161a2.002 2.002 0 0 0-1.063 2.621zM89.538 39.012a2 2 0 0 0 2 2h2.981a2 2 0 0 0 0-4h-2.981a2 2 0 0 0-2 2zM51.439 14.423a2 2 0 1 0 3.684-1.557l-1.16-2.747a2 2 0 1 0-3.685 1.557l1.161 2.747zM43.114 20.959c.391.39.902.585 1.414.585s1.024-.195 1.415-.586a2 2 0 0 0 0-2.829l-2.108-2.108a2 2 0 0 0-2.829 2.829l2.108 2.109zM35.101 28.978l2.748 1.161a2 2 0 1 0 1.556-3.685l-2.748-1.161a2 2 0 1 0-1.556 3.685zM33.481 41.012h2.982a2 2 0 0 0 0-4h-2.982a2 2 0 0 0 0 4zM51.075 55.369a3.886 3.886 0 0 1 1.497 3.063v.965a2 2 0 0 0 2 2H64a2 2 0 0 0 2-2v-12.18c3.492-.894 6.084-4.057 6.084-7.822 0-4.457-3.626-8.083-8.084-8.083s-8.084 3.626-8.084 8.083c0 3.766 2.593 6.929 6.084 7.822v10.18h-5.502a7.863 7.863 0 0 0-2.944-5.168 16.743 16.743 0 0 1-6.41-13.217c0-4.782 2.046-9.357 5.613-12.553 3.617-3.24 8.292-4.729 13.163-4.192 7.858.866 14.255 7.473 14.88 15.368.449 5.66-1.938 11.125-6.385 14.617a7.796 7.796 0 0 0-2.988 6.172v6.728c0 .559-.458 1.013-1.02 1.013h-1.521a2 2 0 0 0-2 2 2.89 2.89 0 0 1-2.887 2.886 2.89 2.89 0 0 1-2.887-2.886 2 2 0 0 0-2-2h-4.541a2 2 0 0 0 0 4h2.837c.859 2.825 3.489 4.886 6.591 4.886 3.109 0 5.74-2.071 6.594-4.905 2.68-.1 4.834-2.293 4.834-4.994v-6.728a3.82 3.82 0 0 1 1.459-3.026 20.835 20.835 0 0 0 7.901-18.079C84 27.383 76.249 19.381 66.358 18.291c-5.932-.655-11.86 1.238-16.27 5.188a20.883 20.883 0 0 0-6.944 15.532c0 6.418 2.891 12.38 7.931 16.358zm8.841-15.973A4.089 4.089 0 0 1 64 35.313c2.252 0 4.084 1.832 4.084 4.083S66.252 43.479 64 43.479s-4.084-1.832-4.084-4.083z" className="color1ac6bd svgShape"></path><path fill="#8d54ea" d="M96.027 94.564a2 2 0 0 0-2 2v5.777L66 116.272V97.087a2 2 0 0 0-4 0v19.173l-27.896-13.984V96.63a2 2 0 0 0-4 0v6.881c0 .04.009.077.012.117.004.072.01.143.022.214.011.064.026.125.043.186.017.062.034.124.057.184.023.061.05.12.079.178a1.842 1.842 0 0 0 .326.477c.043.046.089.089.136.13.049.043.098.086.151.124.056.041.116.077.177.112.035.02.065.046.102.065l31.896 15.989c.017.008.035.011.052.019.096.045.196.079.299.108.037.011.073.026.111.034.14.031.285.05.434.05.149 0 .293-.019.433-.05.037-.008.071-.023.108-.033.104-.029.205-.063.302-.108.016-.007.033-.01.048-.017l32.027-15.919c.037-.018.067-.044.102-.064.062-.036.124-.072.182-.114.053-.038.1-.08.148-.122a1.907 1.907 0 0 0 .373-.439c.034-.055.063-.112.092-.169.029-.058.056-.116.079-.177s.041-.123.058-.186c.016-.061.032-.121.043-.183.012-.072.018-.144.022-.218.002-.04.012-.077.012-.117v-7.017a2.005 2.005 0 0 0-2.003-2.001z" className="color5277a3 svgShape"></path><path fill="#8d54ea" d="m115.301 75.97-14.739-4.841L115.785 61l.011-.009c.014-.009.025-.022.039-.032a2.017 2.017 0 0 0 .439-.432c.11-.147.201-.304.266-.472.003-.008.009-.013.012-.021.017-.045.023-.092.036-.138.02-.07.042-.138.055-.21.012-.065.015-.13.02-.195.005-.064.012-.127.011-.191-.001-.066-.01-.131-.018-.196-.007-.064-.013-.127-.027-.19-.014-.064-.035-.126-.055-.189-.019-.061-.037-.121-.063-.181-.029-.068-.067-.132-.104-.196-.023-.04-.039-.083-.065-.122l-.02-.025c-.043-.063-.095-.12-.146-.178-.037-.042-.07-.088-.11-.126-.043-.042-.094-.077-.141-.115-.056-.045-.109-.093-.169-.131-.039-.025-.083-.043-.124-.066-.076-.041-.151-.083-.23-.114-.009-.003-.016-.009-.025-.012l-25.304-9.436a2 2 0 0 0-1.398 3.748l21.633 8.067-14.426 9.598-13.023-6.473a2 2 0 0 0-1.78 3.582l10.455 5.197-27.53 13.685-27.421-13.746 10.332-5.134a2 2 0 1 0-1.78-3.582l-12.881 6.4-14.361-9.628 21.431-7.965a2 2 0 0 0-1.393-3.749l-25.093 9.326a2 2 0 0 0-.417 3.536l15.172 10.171-14.897 4.914a2.001 2.001 0 0 0-.264 3.691L44.459 95.58a1.995 1.995 0 0 0 1.514.109l18.023-5.92 17.943 5.958a2.002 2.002 0 0 0 1.52-.107l32.107-15.959a1.997 1.997 0 0 0 1.104-1.935 1.994 1.994 0 0 0-1.369-1.756zM45.505 91.632 18.57 78.244l13.376-4.413 26.82 13.445-13.261 4.356zm36.913.039-13.183-4.377L96.182 73.9l13.24 4.349-27.004 13.422z" className="color5277a3 svgShape"></path></svg>
                                                </span>
                                            </div>
                                            <div className="mb-2 mt-4">
                                                <h5 className="mb-0">Flexibility</h5>
                                            </div>
                                            <div className="mb-0">
                                                <span className="card-main-content">Our workflow is designed to be flexible and adaptable to changing circumstances &amp; quickly respond.</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col xl={4} className="">
                                <div className="px-3">
                                    <Card className=" mb-5">
                                        <Card.Body className=" main-card-body">
                                            <div>
                                                <span className="svg-gradient mx-auto svg-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 512 512"><path fill="#8d54ea" d="M347.73 266.36c-3.31 0-6-2.69-6-6l0-18.31c0-47.28-38.46-85.74-85.73-85.74-47.28 0-85.74 38.46-85.74 85.74l0 18.31c0 3.31-2.68 6-6 6-3.31 0-6-2.69-6-6l0-18.31c0-53.89 43.85-97.74 97.74-97.74 53.89 0 97.73 43.85 97.73 97.74l0 18.31c0 3.31-2.68 6-6 6zM289.3 354.14c-3.2 0-5.86-2.53-5.99-5.75-.14-3.32 2.43-6.11 5.74-6.25 29.56-1.23 33.76-25.21 33.93-26.23.52-3.26 3.59-5.49 6.84-4.99 3.26.51 5.51 3.53 5.02 6.8-1.79 12.01-13.56 35.09-45.29 36.41-.08 0-.17.01-.25.01z" className="color5a5a5a svgShape"></path><path fill="#8d54ea" d="M268.43 367.69c-15.07 0-26.88-8.59-26.88-19.55 0-10.97 11.81-19.55 26.88-19.55 15.07 0 26.87 8.58 26.87 19.55 0 10.96-11.81 19.55-26.87 19.55zm0-27.1c-8.38 0-14.88 4.06-14.88 7.55 0 3.49 6.5 7.55 14.88 7.55 8.37 0 14.87-4.06 14.87-7.55 0-3.49-6.5-7.55-14.87-7.55zM347.73 322.83l-18.82 0c-3.31 0-6-2.69-6-6l0-56.47c0-3.32 2.69-6 6-6l18.82 0c18.88 0 34.24 15.36 34.24 34.23 0 18.88-15.36 34.24-34.24 34.24zm-12.82-12l12.82 0c12.26 0 22.24-9.98 22.24-22.24 0-12.26-9.98-22.23-22.24-22.23l-12.82 0 0 44.47zM183.09 322.83l-18.82 0c-18.88 0-34.24-15.36-34.24-34.24 0-18.87 15.36-34.23 34.24-34.23l18.82 0c3.31 0 6 2.69 6 6l0 56.47c0 3.32-2.69 6-6 6zm-18.82-56.47c-12.27 0-22.24 9.97-22.24 22.23 0 12.26 9.97 22.24 22.24 22.24l12.82 0 0-44.47-12.82 0 0 0z" className="color5a5a5a svgShape"></path><path fill="#544efd" d="M256 460.6c-0.82,0 -1.63,-0.17 -2.4,-0.5 -72.15,-31.47 -111.87,-69.94 -132.49,-96.67 -22.66,-29.38 -27.95,-51.26 -28.16,-52.18 -0.11,-0.44 -0.16,-0.9 -0.16,-1.36l0 -191.33c0,-2.48 1.52,-4.7 3.82,-5.6l157.21 -61.15c1.4,-0.55 2.96,-0.55 4.35,0l157.22 61.15c2.3,0.9 3.82,3.12 3.82,5.6l0 191.33c0,0.46 -0.05,0.91 -0.16,1.36 -0.21,0.92 -5.5,22.8 -28.16,52.18 -20.62,26.73 -60.34,65.19 -132.49,96.67 -0.77,0.33 -1.58,0.5 -2.4,0.5zm-151.21 -151.49c0.99,3.55 7,22.79 26.35,47.66 19.53,25.13 57.01,61.22 124.86,91.28 67.85,-30.06 105.33,-66.15 124.86,-91.28 19.33,-24.84 25.34,-44.07 26.35,-47.66l0 -186.45 -151.21 -58.82 -151.21 58.82 0 186.45z" className="colorcced00 svgShape"></path><path fill="#544efd" d="M256 512c-0.82,0 -1.63,-0.17 -2.4,-0.5 -90.52,-39.49 -140.33,-87.71 -166.17,-121.22 -28.32,-36.71 -34.9,-63.94 -35.17,-65.08 -0.11,-0.45 -0.16,-0.91 -0.16,-1.36l0 -240.86c0,-2.47 1.52,-4.69 3.83,-5.59l197.9 -76.98c1.39,-0.54 2.95,-0.54 4.35,0l197.89 76.98c2.31,0.9 3.83,3.12 3.83,5.59l0 240.86c0,0.45 -0.06,0.91 -0.16,1.36 -0.27,1.14 -6.85,28.37 -35.17,65.08 -25.84,33.51 -75.65,81.73 -166.17,121.22 -0.77,0.33 -1.58,0.5 -2.4,0.5zm-191.9 -188.93c1.13,4.08 8.6,28.68 33.36,60.56 24.76,31.89 72.32,77.75 158.54,115.81 86.67,-38.26 134.31,-84.39 159.06,-116.49 24.47,-31.72 31.73,-55.81 32.84,-59.88l0 -235.98 -191.9 -74.65 -191.9 74.65 0 235.98z" className="colorcced00 svgShape"></path></svg>
                                                </span>
                                            </div>
                                            <div className="mb-2 mt-4">
                                                <h5 className="mb-0">Quality Control</h5>
                                            </div>
                                            <div className="mb-0">
                                                <span className="card-main-content">Our workflow is designed to ensure quality control,which enables you to produce high-quality services for customers.</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <div className="text-center">
                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary fw-semibold border-0 workflow-bottom-design">03</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*<!-- End:: Section-5 -->*/}

                {/*<!-- Start:: Section-6 -->*/}
                <section className="section bg-white" id="pricing">
                    <Container className="">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span
                                className="landing-section-heading text-primary">PRICING</span>
                            </p>
                            <h4 className="fw-semibold mt-3 mb-2">Plans that flex with your needs.</h4>
                            <Row className=" justify-content-center">
                                <Col xl={7} className="">
                                    <p className="text-muted fs-14 mb-5 fw-normal">Stay agile with plans that seamlessly adjust to your changing requirements, ensuring you always have the flexibility you need.</p>
                                </Col>
                            </Row>
                        </div>
                        <Row className=" justify-content-center">
                            <Col xl={12} className="col-xl-12">
                                <Tab.Container defaultActiveKey="month">
                                    <div className="text-center mb-5 mt-4">
                                        <div className="tab-style-1 border p-1 bg-white shadow-sm rounded-pill d-inline-block">
                                            <Nav className="nav-pills">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="month" type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-monthly">Monthly</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="year" type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-yearly">Annually <SpkBadge variant="info" Customclass="ms-1 rounded-pill">Save 10%</SpkBadge></Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </div>
                                    <Tab.Content className="">
                                        <Tab.Pane eventKey="month" className="p-0 border-0" id="pills-monthly">
                                            <Row className=" align-items-center">
                                                {pricingPlanMonth.map((plan, index) => (
                                                    <SpkPricingCard2 billingCycle="Month" key={index} plan={plan} />
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="year" className="p-0 border-0" id="pills-yearly">
                                            <Row className=" align-items-center">
                                                {pricingPlansYear.map((plan, index) => (
                                                    <SpkPricingCard2 billingCycle="Year" key={index} plan={plan} />
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*<!-- End:: Section-6 -->*/}

                {/*<!-- Start:: Section-7 -->*/}
                <section className="section blob-bg-sec bg-primary">
                    <Container className="">
                        <Row className=" justify-content-between">
                            <Col lg={5} className=" my-auto">
                                <div className="d-flex align-items-center justify-content-center trusted-companies sub-card-companies flex-wrap mb-3 mb-xl-0 gap-4">
                                    <div className="trust-img reveal reveal-active"><Image fill src="../assets/images/media/landing/tools/1.png" alt="img" className="border-0" /></div>
                                    <div className="trust-img reveal reveal-active"><Image fill src="../assets/images/media/landing/tools/2.png" alt="img" className="border-0" /></div>
                                    <div className="trust-img reveal reveal-active"><Image fill src="../assets/images/media/landing/tools/3.png" alt="img" className="border-0" /></div>
                                    <div className="trust-img reveal reveal-active"><Image fill src="../assets/images/media/landing/tools/4.png" alt="img" className="border-0" /></div>
                                    <div className="trust-img reveal reveal-active"><Image fill src="../assets/images/media/landing/tools/5.png" alt="img" className="border-0" /></div>
                                    <div className="trust-img reveal me-0 reveal-active"><Image fill src="../assets/images/media/landing/tools/6.png" alt="img" className="border-0" /></div>
                                </div>
                            </Col>
                            <Col lg={6} className="mt-4 mt-lg-0 reveal reveal-active">
                                <div className="heading-section mb-0">
                                    <h5 className="heading-title text-fixed-white text-start">Our Template Developed on These Tools</h5>
                                    <div className="heading-description text-fixed-white text-start op-8">Ullamco laboris nisi ut aliquip ex ea commodo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.perspiciatis unde omnis.</div>
                                    <div className="mt-4 d-flex align-items-center justify-content-start">
                                        <Link scroll={false} href="/dashboards/sales/" className="btn btn-lg btn-secondary me-3 mb-2 mb-sm-0 mb-4">Get Started Now</Link>
                                        <Link scroll={false} href="/dashboards/sales/" className="mb-sm-0 text-fixed-white text-decoration-underline link-offset-1">Discover More<i className="fe fe-arrow-right fs-14 align-text-bottom ms-1"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*<!-- End:: Section-7 -->*/}

                {/*<!-- Start:: Section-8 -->*/}
                <section className="section bg-white" id="team">
                    <Container className=" TeamContainer">
                        <div className="heading-section">
                            <div className="heading-subtitle"><span className="text-primary fw-semibold">Our Team</span></div>
                            <hr className="center-diamond" />
                            <div className="heading-title">We Have a Team of Experts</div>
                            <div className="heading-description">Meet our team member to save your time</div>
                        </div>
                        <SpkSwiperJs breakpoint={breakpoints1} slides={OurTeamSwiperData} autoplay={true} loop={true} slidesPerView={3} className="swiper teamSwiper swiper-initialized swiper-horizontal swiper-pointer-events" />
                    </Container>
                </section>
                {/*<!-- End:: Section-8 -->*/}

                {/*<!-- Start:: Section-9 -->*/}
                <section className="section bg-primary" id="testimonials">
                    <Container className=" reviews-container">
                        <Row className=" gy-3">
                            <Col xl={4} className="">
                                <div className="heading-section text-start mb-0 mt-4">
                                    <div className="heading-subtitle style1"><span className="text-fixed-white fs-16 fw-semibold">Testimonials</span>
                                    </div>
                                    <div className="heading-title text-fixed-white">Have a look at what people say <span className="text-secondary">About Us</span></div>
                                    <div className="heading-description text-fixed-white op-8">We care about our customer satisfaction and experience.</div>
                                </div>
                            </Col>
                            <Col xl={8} className="">
                                <SpkSwiperJs breakpoint={breakpoints} slides={TestimonialsSwiperData} pagination={{ clickable: true, }} autoplay={true} navigation={false} loop={true} slidesPerView={2} className="swiper pagination-dynamic testimonialSwiperService swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" />
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*<!-- End:: Section-9 -->*/}

                {/*<!-- Start:: Section-10 -->*/}
                <section className="section overflow-hidden bg-white" id="contact">
                    <Container className="container">
                        <div className="heading-section mb-4">
                            <div className="heading-section">
                                <div className="heading-subtitle"><span className="text-primary fw-semibold">Contact</span></div>
                                <hr className="center-diamond" />
                                <div className="heading-title">Get In Touch With Us..</div>
                                <div className="heading-description fs-15 mb-5">Stay up-to-date with the latest news and updates on our products and services</div>
                            </div>
                            <Row className=" justify-content-center">
                                <Col xxl={11} className="">
                                    <Row className="">
                                        {ContactData.map((idx) => (
                                            <Col xxl={3} className="" key={idx.id}>
                                                <Card className=" border shadow-none reveal reveal-active">
                                                    <Card.Body className=" p-3">
                                                        <div className="d-flex align-items-center text-start">
                                                            <div>
                                                                <span className={`avatar avatar-md avatar-rounded bg-${idx.bgColor}`}>
                                                                    <i className={`fe fe-${idx.icon} fs-12`}></i>
                                                                </span>
                                                            </div>
                                                            <div className="ms-2 text-default  fs-14">
                                                                <h6 className="mb-0">{idx.title}</h6>
                                                                <p className="mb-0"> {idx.content}</p>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                {/*<!-- End:: Section-10 -->*/}

                {/*<!-- Start:: Section-11 -->*/}
                <footer className="footer mt-auto text-fixed-white position-relative">
                    <section className="section py-5 newsLetter-sec">
                        <Container className="">
                            <Row className=" my-auto justify-content-between">
                                <Col lg={6} className="">
                                    <div className="heading-section mb-0 text-start mb-3 mb-lg-0">
                                        <h3 className="text-fixed-white mb-0">Subscribe to our News Letter</h3>
                                        <div className="heading-description fs-15 text-fixed-white op-8">Stay up-to-date with the latest news and updates on our
                                            products and services</div>
                                    </div>
                                </Col>
                                <Col lg={4} className="">
                                    <Form className=" mb-0">
                                        <Form.Group className=" custom-form-group mx-auto">
                                            <Form.Control type="text" className="form-control form-control-lg rounded-pill shadow-none" placeholder="Enter Your Email Address..." />
                                            <SpkButton Buttonvariant="primary" Customclass="custom-form-btn btn  rounded-pill border-0 shadow-none">Subscribe</SpkButton>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <div className="py-5 py-3 border-top border-white-1">
                        <Container className="">
                            <Row className="">
                                <Col lg={3} md={6} className=" mb-4 mb-lg-0">
                                    <Link scroll={false} href="/dashboards/sales/" className="d-inline-block mb-2">
                                        <Image fill src="../assets/images/brand-logos/desktop-white.png" alt="img" />
                                    </Link>
                                    <p className="mb-4 op-8 fs-15">
                                        At dolor clita amet erat takimata sed tempor invidunt lorem.
                                        Justo sea nonumy.
                                    </p>
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link"><i className="fe fe-phone me-2 d-inline-block fs-16"></i>+125 254 3562</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link"><i className="fe fe-mail me-2 d-inline-block fs-16"></i>spruko@company.com</Link></li>
                                        <li className="list-item"><Link scroll={false} href="#!" className="footer-link"><i className="fe fe-map-pin me-2 d-inline-block fs-16"></i>San Francisco, CA </Link></li>
                                    </ul>
                                    <div className="footer-btn-list d-flex align-items-center mt-3">
                                        <Link scroll={false} aria-label="anchor" href="#!" className="footer-btn btn btn-icon rounded-circle me-2"><i className="fe fe-facebook"></i></Link>
                                        <Link scroll={false} aria-label="anchor" href="#!" className="footer-btn btn btn-icon rounded-circle me-2"><i className="fe fe-linkedin"></i></Link>
                                        <Link scroll={false} aria-label="anchor" href="#!" className="footer-btn btn btn-icon rounded-circle me-2"><i className="fe fe-instagram"></i></Link>
                                        <Link scroll={false} aria-label="anchor" href="#!" className="footer-btn btn btn-icon rounded-circle"><i className="ri ri-twitter-x-line"></i></Link>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} className=" mb-4 mb-lg-0">
                                    <h5 className="text-fixed-white">Page Links</h5>
                                    <ul className="list-unstyled footer-icon mb-0">
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">About company</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="/pages/team/" className="footer-link">Our Team</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="/pages/blog/blog/" className="footer-link">News &amp; Blog</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Testimonials</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="/pages/faqs/" className="footer-link">FAQ's</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Account Settings</Link></li>
                                        <li className="list-item"><Link scroll={false} href="/pages/pricing/" className="footer-link">Price &amp; Plan</Link></li>
                                    </ul>
                                </Col>
                                <Col lg={3} md={6} className=" mb-4 mb-lg-0">
                                    <h5 className="text-fixed-white">Services</h5>
                                    <ul className="list-unstyled footer-icon mb-0">
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Business Services</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Financial Planning</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Marketing</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Analytical</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Business Audits</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Digital Marketing</Link></li>
                                        <li className="list-item"><Link scroll={false} href="#!" className="footer-link">24/7 Support</Link></li>
                                    </ul>
                                </Col>
                                <Col lg={3} sm={6} className=" mb-4 mb-lg-0">
                                    <h5 className="text-fixed-white">Support</h5>
                                    <ul className="list-unstyled footer-icon mb-0">
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Support Contact </Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Report Abuse</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Affiliate</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Cancellation &amp; Refund Policy</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Our Terms</Link></li>
                                        <li className="list-item mb-2"><Link scroll={false} href="#!" className="footer-link">Privacy Policy</Link></li>
                                        <li className="list-item"><Link scroll={false} href="#!" className="footer-link">Payment Options</Link></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="py-3 border-top border-white-1">
                        <Container className="">
                            <Row className=" align-items-center justify-content-center">
                                <Col xl={7} lg={9} className="">
                                    <div className="d-md-flex align-items-center">
                                        <p className="mb-0 me-3 text-fixed-white">Payments We Accept :</p>
                                        <div className="mt-3 mt-md-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-2 mb-sm-0 payment-cards" width="80" height="40" enableBackground="new 0 0 48 48" viewBox="0 0 48 48"><polygon fill="#fff" points="17.202 32.269 21.087 32.269 23.584 16.732 19.422 16.732"></polygon><path fill="#fff" d="M13.873 16.454l-3.607 11.098-.681-3.126c-1.942-4.717-5.272-6.659-5.272-6.659l3.456 14.224h4.162l5.827-15.538H13.873zM44.948 16.454h-4.162l-6.382 15.538h3.884l.832-2.22h4.994l.555 2.22H48L44.948 16.454zM39.954 26.997l2.22-5.826 1.11 5.826H39.954zM28.855 20.893c0-.832.555-1.665 2.497-1.665 1.387 0 2.775 1.11 2.775 1.11l.832-3.329c0 0-1.942-.832-3.607-.832-4.162 0-6.104 2.22-6.104 4.717 0 4.994 5.549 4.162 5.549 6.659 0 .555-.277 1.387-2.497 1.387s-3.884-.832-3.884-.832l-.555 3.329c0 0 1.387.832 4.162.832 2.497.277 6.382-1.942 6.382-5.272C34.405 23.113 28.855 22.836 28.855 20.893z"></path><path fill="#fff" d="M9.711,25.055l-1.387-6.936c0,0-0.555-1.387-2.22-1.387c-1.665,0-6.104,0-6.104,0
                                            S8.046,19.229,9.711,25.055z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-2 mb-sm-0 payment-cards" width="80" height="40" viewBox="0 0 24 24"><path fill="#FF5F00" d="M15.245 17.831h-6.49V6.168h6.49v11.663z"></path><path fill="#EB001B" d="M9.167 12A7.404 7.404 0 0 1 12 6.169 7.417 7.417 0 0 0 0 12a7.417 7.417 0 0 0 11.999 5.831A7.406 7.406 0 0 1 9.167 12z"></path><path fill="#F79E1B" d="M24 12a7.417 7.417 0 0 1-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0 1 24 12z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-2 mb-sm-0 payment-cards" width="80" height="40" viewBox="0 0 64 64"><g data-name="Paypal card"><path fill="#fff" d="M47 25.23a2.91 2.91 0 0 0-1-1.1 4.63 4.63 0 0 0-1.63-.59 12.57 12.57 0 0 0-2.19-.17H38.3a1 1 0 0 0-.88.71L34.8 35.47a.56.56 0 0 0 .57.71h1.86a1 1 0 0 0 .89-.7l.63-2.77a1 1 0 0 1 .9-.7h.53a8.9 8.9 0 0 0 5.32-1.4 4.41 4.41 0 0 0 1.88-3.69 3.67 3.67 0 0 0-.38-1.69ZM43 29a4 4 0 0 1-2.35.61h-.45a.57.57 0 0 1-.57-.71l.57-2.41a1 1 0 0 1 .89-.71h.6a3 3 0 0 1 1.62.36 1.26 1.26 0 0 1 .55 1.11A2.09 2.09 0 0 1 43 29Zm19.4-5.49h-1.65A1 1 0 0 0 60 24l-.09.15-.08.37-2.38 10.61-.08.33a.53.53 0 0 0 .46.67h1.77a.93.93 0 0 0 .8-.57l.1-.14L63 24.17a.54.54 0 0 0-.58-.7ZM56 26.82a7.12 7.12 0 0 0-3.32-.59 14.22 14.22 0 0 0-2.25.18c-.56.08-.61.1-1 .17a1.08 1.08 0 0 0-.81.87l-.23.93c-.13.59.21.57.37.52a9.45 9.45 0 0 1 1.1-.32 8.23 8.23 0 0 1 1.75-.24 4.66 4.66 0 0 1 1.69.24.86.86 0 0 1 .56.84v.27l-.27.16a33.3 33.3 0 0 0-2.74.3 9 9 0 0 0-2.37.65 3.73 3.73 0 0 0-1.6 1.26 3.5 3.5 0 0 0-.52 1.94 2.33 2.33 0 0 0 .76 1.78 2.89 2.89 0 0 0 2 .66 5.12 5.12 0 0 0 1.17-.1l.9-.31.77-.42.69-.47-.06.3a.54.54 0 0 0 .49.7h1.76a1 1 0 0 0 .79-.7L57 29.59l.07-.48v-.45A2 2 0 0 0 56 26.82Zm-3 6.61-.3.39-.72.37a2.66 2.66 0 0 1-1 .21 2.19 2.19 0 0 1-1-.2l-.37-.69a1.44 1.44 0 0 1 .27-.92 1.84 1.84 0 0 1 .8-.53 6.5 6.5 0 0 1 1.22-.28c.42-.05 1.27-.15 1.37-.15l.13.23c-.04.14-.28 1.14-.4 1.57Z"></path><path fill="#fff" d="M34.86 26.37h-2.23a1.63 1.63 0 0 0-1.18.7s-2.66 4.58-2.92 5h-.31l-.83-5a1 1 0 0 0-1-.73h-1.68a.54.54 0 0 0-.55.71s1.26 7.2 1.51 8.9c.12.94 0 1.1 0 1.1L24 40c-.24.39-.11.71.29.71h1.93a1.55 1.55 0 0 0 1.16-.7l7.42-12.59s.72-1.07.06-1.05Zm-12.65.45a7 7 0 0 0-3.32-.59 14.42 14.42 0 0 0-2.26.17 8.18 8.18 0 0 0-.95.18 1.08 1.08 0 0 0-.82.86l-.22.93c-.13.6.22.58.35.52a10.88 10.88 0 0 1 1.12-.32 7.58 7.58 0 0 1 1.74-.23 4.47 4.47 0 0 1 1.7.24.83.83 0 0 1 .55.84v.26l-.27.17a27 27 0 0 0-2.74.3 8.7 8.7 0 0 0-2.36.64 3.63 3.63 0 0 0-1.6 1.27 3.38 3.38 0 0 0-.57 1.94 2.28 2.28 0 0 0 .77 1.77 2.83 2.83 0 0 0 2 .67 4.87 4.87 0 0 0 1.16-.11l.91-.31.76-.42.7-.47-.06.29a.55.55 0 0 0 .5.69H21a1 1 0 0 0 .8-.69l1.36-5.88.07-.47v-.45a2 2 0 0 0-1.02-1.8Zm-3 6.6-.3.38-.73.38a2.62 2.62 0 0 1-1 .21 2.17 2.17 0 0 1-1.06-.2l-.36-.7a1.4 1.4 0 0 1 .27-.9l.79-.54a7.54 7.54 0 0 1 1.23-.28c.42-.05 1.26-.15 1.38-.15l.12.22c.02.16-.22 1.16-.33 1.58Zm-6-8.23a2.71 2.71 0 0 0-1-1.09 4.54 4.54 0 0 0-1.62-.6 13.86 13.86 0 0 0-2.2-.17H4.53a1 1 0 0 0-.9.71L1 35.42a.55.55 0 0 0 .56.71h1.88a.94.94 0 0 0 .89-.71L5 32.66a.93.93 0 0 1 .88-.7h.52a8.88 8.88 0 0 0 5.3-1.4 4.38 4.38 0 0 0 1.9-3.69 3.42 3.42 0 0 0-.36-1.68Zm-4 3.72a3.91 3.91 0 0 1-2.35.62h-.44a.55.55 0 0 1-.56-.71l.56-2.42a1 1 0 0 1 .89-.71h.6a3 3 0 0 1 1.62.36 1.24 1.24 0 0 1 .54 1.11 2 2 0 0 1-.84 1.75Z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-2 mb-sm-0 payment-cards" width="80" height="40" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#fff" d="M3.093,14.964c1.18,0,2.55-0.431,2.79-1.711h-1.24c-0.213,0.625-0.85,0.923-1.568,0.923c-1.035,0-1.788-0.64-1.853-1.726h4.83v1.042c0,0.387-0.02,0.848-0.04,1.235h1.18c0.025-0.238,0.04-0.49,0.04-0.728c0.506,0.61,1.33,0.923,2.2,0.923c1.407,0,2.467-0.833,2.767-2.069c-0.022,0.12-0.037,0.253-0.037,0.402c0,0.908,0.792,1.682,2.272,1.682c1,0,1.717-0.224,2.32-0.952c0,0.253,0.016,0.506,0.046,0.759h1.114c-0.03-0.313-0.04-0.654-0.04-0.997v-2.44c0-0.372-0.07-0.67-0.2-0.923l2.33,4.345l-1.07,2.024h1.346L24,9.503h-1.243l-2.055,4.093l-2.055-4.092h-1.41l0.436,0.833c-0.42-0.744-1.351-1.012-2.415-1.012c-1.186,0-2.55,0.327-2.686,1.607h1.275c0.06-0.506,0.585-0.804,1.305-0.804c0.974,0,1.53,0.356,1.53,1.234v0.134c-0.465,0-1.05,0-1.56,0.018c-1.622,0.039-2.656,0.388-2.896,1.333c0.045-0.209,0.06-0.432,0.06-0.663c0-1.936-1.488-2.832-2.828-2.832c-0.8,0-1.612,0.201-2.202,0.899V7.25h-1.2v4.876c-0.01-1.904-1.252-2.783-2.94-2.783C0.982,9.343,0,10.49,0,12.23C0,13.808,0.95,14.985,3.093,14.964z M15.193,12.313l-0.002-0.002h-0.012c0.494-0.016,1.034-0.022,1.484-0.022v0.129c0,1.115-0.675,1.8-1.935,1.8c-0.945,0-1.305-0.501-1.305-0.962C13.423,12.544,14.098,12.346,15.193,12.313z M9.116,10.165c1.125,0,1.893,0.8,1.893,2.004c0,1.204-0.766,2.004-1.876,2.004H9.131h-0.03c-1.11,0-1.875-0.8-1.875-2.004C7.226,10.964,8.006,10.165,9.116,10.165z M3.058,10.145c0.871,0,1.681,0.418,1.725,1.534h-3.54C1.364,10.615,2.114,10.145,3.058,10.145z"></path></svg>
                                            <Link scroll={false} href="#!" className="text-fixed-white fs-15">And more<i className="ri-arrow-right-s-line fs-13 d-inline-block ms-1 rtl-transform-icon"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="py-3 border-top border-white-1">
                        <Container className="">
                            <Row className="">
                                <Col xl={6} className=" text-center text-xl-start">
                                    <div className="fs-14">
                                        Copyright © <span id="year">{currentYear}</span>
                                        <Link scroll={false} href="/dashboards/sales/" className="text-primary"> Zeno.</Link> Designed with <span className="bi bi-heart-fill text-danger lh-1 align-middle"></span> by
                                        <Link scroll={false} href="https://spruko.com/" className="text-primary" target="_blank"> Spruko</Link> All Rights Reserved
                                    </div>
                                </Col>
                                <Col xl={6} className="">
                                    <ul className="list-unstyled d-flex mb-0 justify-content-center justify-content-xl-end mt-3 mt-xl-0 ms-auto flex-wrap legal-footer-section">
                                        <li className="list-item"><Link scroll={false} href="#!" className="fs-14 fw-normal pe-3 text-fixed-white">Terms of Service</Link></li>
                                        <li className="list-item"><Link scroll={false} href="#!" className="fs-14 fw-normal px-3 text-fixed-white">Privacy Policy</Link></li>
                                        <li className="list-item"><Link scroll={false} href="#!" className="fs-14 fw-normal px-3 text-fixed-white">Legal</Link></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </footer>
                {/*<!-- End:: Section-11 -->*/}

            </div>
            {/*<!-- End::app-content -->*/}

            {/*<!-- Start::Landing-switcher -->*/}
            <Landingswitcher show={landing.show} handleClose={handleClose} />
            {/*<!-- End::Landing-switcher -->*/}

        </Fragment>
    )
}


export default Landing;