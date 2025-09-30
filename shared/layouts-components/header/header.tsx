"use client"
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Switcher from '../switcher/switcher';
import { data$, getState, setState } from '../services/switcherServices';
import { MENUITEMS, Menuitemtype } from '../sidebar/nav';
import SpkListgroup from '@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup';
import { Card, Dropdown, Form, ListGroup, Modal } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import SimpleBar from 'simplebar-react';
import { cartProduct, Notifications } from '@/shared/data/headerdata';
import Image from 'next/image';
import nextConfig from "@/next.config"
import { ThemeChanger } from '@/shared/redux/actions';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {

    const { basePath } = nextConfig

    //Menu-Close
    let [variable, setVariable] = useState(getState());

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            // No need to manually update component state, the UI will re-render automatically
            setVariable(e);
        });

        return () => subscription.unsubscribe(); // Clean up the subscription
    }, []);

    function menuClose() {
        const theme = variable;

        if (window.innerWidth <= 992) {
            const newState = {
                toggled: "close"
            }
            setState(newState);
        }

        if (window.innerWidth >= 992) {
            const local_varaiable = theme;
            const newToggledValue = local_varaiable.toggled ? local_varaiable.toggled : '';

            setState({ toggled: newToggledValue });
        }
    }

    const overlayRef = useRef<HTMLDivElement | null>(null);

    const toggleSidebar = () => {
        const theme = variable;
        const sidemenuType = theme.dataNavLayout;

        if (window.innerWidth >= 992) {
            if (sidemenuType === "vertical") {
                const verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                // Handle vertical styles
                switch (verticalStyle) {
                    case "closed":
                        // Toggle between open/close state for "closed" vertical style
                        setState({
                            dataNavStyle: "",
                            toggled: theme.toggled === "close-menu-close" ? "" : "close-menu-close"
                        });
                        break;
                    case "overlay":
                        // Handle icon-overlay state with window width check
                        setState({
                            dataNavStyle: "",
                            toggled: theme.toggled === "icon-overlay-close" ? "" : "icon-overlay-close",
                            iconOverlay: ""
                        });

                        if (theme.toggled !== "icon-overlay-close" && window.innerWidth >= 992) {
                            setState({
                                toggled: "icon-overlay-close",
                                iconOverlay: "",
                            });
                        }
                        break;
                    case "icontext":
                        // Handle icon-text state
                        setState({
                            dataNavStyle: "",
                            toggled: theme.toggled === "icon-text-close" ? "" : "icon-text-close"
                        });
                        break;
                    case "doublemenu":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "double-menu-open") {
                            ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                        } else {
                            let sidemenu = document.querySelector(".side-menu__item.active");
                            if (sidemenu) {
                                ThemeChanger({ ...theme, "toggled": "double-menu-open" });
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                }
                                else {

                                    ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                                }
                            }
                        }
                        break;
                    case "detached":
                        // Handle detached menu state
                        setState({
                            toggled: theme.toggled === "detached-close" ? "" : "detached-close",
                            iconOverlay: ""
                        });
                        break;
                    default:
                        setState({ toggled: "" });
                        break;
                }

                // Handle navStyle changes
                switch (navStyle) {
                    case "menu-click":
                        setState({
                            toggled: theme.toggled === "menu-click-closed" ? "" : "menu-click-closed"
                        });
                        break;
                    case "menu-hover":
                        setState({
                            toggled: theme.toggled === "menu-hover-closed" ? "" : "menu-hover-closed"
                        });
                        break;
                    case "icon-click":
                        setState({
                            toggled: theme.toggled === "icon-click-closed" ? "" : "icon-click-closed"
                        });
                        break;
                    case "icon-hover":
                        setState({
                            toggled: theme.toggled === "icon-hover-closed" ? "" : "icon-hover-closed"
                        });
                        break;
                }
            }
        } else {
            // For mobile view (screen width < 992px)
            if (theme.toggled === "close") {
                setState({ toggled: "open" });
                setTimeout(() => {
                    if (theme.toggled === "open") {
                        const overlay = overlayRef.current
                        if (overlay) {
                            overlay.classList.add("active");
                            overlay.addEventListener("click", () => {
                                const overlay = overlayRef.current
                                if (overlay) {
                                    overlay.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }

                    window.addEventListener("resize", () => {
                        if (window.innerWidth >= 992) {
                            const overlay = overlayRef.current
                            if (overlay) {
                                overlay.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                setState({ toggled: "close" });
            }
        }
    };

    //Dark-Theme
    const toggleTheme = () => {
        const currentTheme = getState();
        const newState = {
            dataThemeMode: currentTheme.dataThemeMode === 'dark' ? 'light' : 'dark',
            dataHeaderStyles: currentTheme.dataThemeMode === 'dark' ? 'light' : 'dark',
            dataMenuStyles: currentTheme.dataThemeMode === 'dark' ? 'light' : 'dark',
        }
        setState(newState)
        if (newState.dataThemeMode != 'dark') {
            const newState = {
                bodyBg: '',
                lightRgb: '',
                bodyBg2: '',
                inputBorder: '',
                formControlBg: '',
                gray: '',
            }
            setState(newState)
            localStorage.setItem("zenolightTheme", "light");
            localStorage.removeItem("zenodarkTheme");
            localStorage.removeItem("zenomenu");
            localStorage.removeItem("zenoheader");
            localStorage.removeItem("bodyBg");
            localStorage.removeItem("bodyBg2");
            localStorage.removeItem("bgImg");
            localStorage.removeItem("lightRgb");
            localStorage.removeItem("formControlBg");
        }
        else {
            localStorage.setItem("zenodarkTheme", "dark");
            localStorage.removeItem("zenolightTheme");
            localStorage.removeItem("zenomenu");
            localStorage.removeItem("zenoheader");
            localStorage.removeItem("bodyBg");
            localStorage.removeItem("bodyBg2");
            localStorage.removeItem("inputBorder");
            localStorage.removeItem("lightRgb");
            localStorage.removeItem("formControlBg");
            localStorage.removeItem("gray");
        }
    }

    //full screen
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    useEffect(() => {
        const fullscreenChangeHandler = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", fullscreenChangeHandler);

        return () => {
            document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
        };
    }, []);


    //  switcher offcanvas

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Search Functionality

    const searchRef = useRef<HTMLInputElement | null>(null);

    const handleClick = (event: MouseEvent) => {
        const searchInput = searchRef.current;

        if (searchInput && (searchInput === event.target || searchInput.contains(event.target as Node))) {
            document.querySelector(".header-search")?.classList.add("searchdrop");
        } else {
            document.querySelector(".header-search")?.classList.remove("searchdrop");
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleClick);

        return () => {
            document.body.removeEventListener("click", handleClick);
        };
    }, []);
    const [inputsearch, setInputsearch] = useState(false);
    const [InputValue, setInputValue] = useState("");
    const [search, setSearch] = useState(false);
    const [searchcolor, setsearchcolor] = useState("text-dark");
    const [searchval, setsearchval] = useState("Type something");
    const [NavData, setNavData] = useState([]);

    useEffect(() => {
        const clickHandler = (_event: MouseEvent) => {
            const searchResult = document.querySelector(".search-result");
            if (searchResult) {
                searchResult.classList.add("d-none");
            }
        };

        document.addEventListener("click", clickHandler);

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener("click", clickHandler);
        };
    }, []);

    const myfunction = (inputvalue: string) => {
        document.querySelector(".search-result")?.classList.remove("d-none");

        const i: Menuitemtype[] = [];
        const allElement2: Menuitemtype[] = [];
        MENUITEMS.forEach((mainLevel: Menuitemtype) => {
            if (mainLevel.children) {
                setInputsearch(true);
                mainLevel.children.forEach((subLevel: Menuitemtype) => {
                    i.push(subLevel);
                    if (subLevel.children) {
                        subLevel.children.forEach((subLevel1: Menuitemtype) => {
                            i.push(subLevel1);
                            if (subLevel1.children) {
                                subLevel1.children.forEach((subLevel2: Menuitemtype) => {
                                    i.push(subLevel2);
                                });
                            }
                        });
                    }
                });
            }
        });
        for (const allElement of i) {
            if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
                    setSearch(true);

                    // Check if the element has a path and doesn't already exist in allElement2 before pushing
                    if (allElement.path && !allElement2.some((el) => el.title === allElement.title)) {
                        allElement2.push(allElement);
                    }
                }
            }
        }

        if (!allElement2.length || inputvalue === "") {
            if (inputvalue === "") {
                setSearch(false);
                setsearchval("Type something");
                setsearchcolor("text-dark");
            }
            if (!allElement2.length) {
                setSearch(false);
                setsearchcolor("text-danger");
                setsearchval("There is no component with this name");
            }
        }
        setNavData(allElement2);

    };

    //Responsive Search
    const [responsiveSearch, setResponsiveSearch] = useState(false);

    const handleClose1 = () => setResponsiveSearch(false);
    const handleSearchModal = () => setResponsiveSearch(true);

    //Cart-Dropdown
    const [cartItems, setCartItems] = useState([...cartProduct]);
    const [cartItemCount, setCartItemCount] = useState(cartProduct.length);
    const handleRemove = (itemId: number, event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        setCartItemCount(updatedCart.length);
    };
    ////Notifications

    const [notifications, setNotifications] = useState(Notifications); // assuming 'data' is an array of notifications
    const [unreadCount, setUnreadCount] = useState(5); // initial unread count

    const hasNotifications = notifications.length > 0;

    const handleRemove1 = (id: number, event: React.MouseEventHandler<HTMLAnchorElement>) => {
        event.stopPropagation();
        // Filter out the notification by id
        const updatedNotifications = notifications.filter((notification) => notification.id !== id);
        setNotifications(updatedNotifications);
        setUnreadCount(unreadCount - 1); // decrease unread count
    };
    return (
        <Fragment>
            {/*<!-- app-header -->*/}
            <header className="app-header sticky" id="header">

                {/*<!-- Start::main-header-container -->*/}
                <div className="main-header-container container-fluid">
                    {variable.toggled === "open" && (

                        <div ref={overlayRef} id="responsive-overlay"></div>
                    )}
                    {/*<!-- Start::header-content-left -->*/}
                    <div className="header-content-left">
                        {/*<!-- Start::header-element -->*/}
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link scroll={false} href="/dashboards/sales/" className="header-logo">
                                    <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className='desktop-logo' />
                                    <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-dark.png`} alt="logo" className="toggle-dark" />
                                    <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark" />
                                    <Image width={29} height={32} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="toggle-logo" />
                                    <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-white.png`} alt="logo" className="toggle-white" />
                                    <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-white.png`} alt="logo" className="desktop-white" />
                                </Link>
                            </div>
                        </div>
                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <div className="header-element mx-lg-0 mx-2">
                            <Link onClick={toggleSidebar} scroll={false} aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="#!"><span></span></Link>
                        </div>
                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <div className="header-element header-search d-md-block d-none my-auto auto-complete-search">
                            {/*<!-- Start::header-link -->*/}
                            <Form.Control onClick={() => { }}
                                autoComplete="off"
                                ref={searchRef}
                                defaultValue={InputValue}
                                onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value); })} autoCapitalize="off" type="text" className="header-search-bar form-control" id="header-search" placeholder="Search anything here ..." spellCheck={false} />
                            {inputsearch ?
                                <Card className="custom-card search-result position-absolute">
                                    <Card.Header className="">
                                        <div className="card-title mb-0 text-break fs-20">Search result of {InputValue}</div>
                                    </Card.Header>
                                    <Card.Body className='overflow-auto'>
                                        <SpkListgroup CustomClass=''>
                                            {search ?
                                                NavData.map((e: string) =>
                                                    <ListGroup.Item key={Math.random()} className="">
                                                        <Link href={`${e.path}/`} className='search-result-item' onClick={() => { setInputsearch(false), setInputValue(""); }}><i className="fa fa-angle-double-right me-2 rtl-transform-icon d-inline-block"></i>{e.title}</Link>
                                                    </ListGroup.Item>
                                                )
                                                : <b className={`${searchcolor} `}>{searchval}</b>}
                                        </SpkListgroup>
                                    </Card.Body>
                                </Card>
                                : ""}
                            <Link scroll={false} href="#!" className="header-search-icon border-0">
                                <i className="ri-search-line"></i>
                            </Link >
                            {/*<!-- End::header-link -->*/}
                        </div>
                        {/*<!-- End::header-element -->*/}

                    </div>
                    {/*<!-- End::header-content-left -->*/}

                    {/*<!-- Start::header-content-right -->*/}
                    <ul className="header-content-right">

                        {/*<!-- Start::header-element -->*/}
                        <li className="header-element d-md-none d-block">
                            <Link scroll={false} href="#!" className="header-link" data-bs-toggle="modal" data-bs-target="#header-responsive-search" onClick={handleSearchModal}>
                                {/*<!-- Start::header-link-icon -->*/}
                                <i className="bi bi-search header-link-icon"></i>
                                {/*<!-- End::header-link-icon -->*/}
                            </Link>
                        </li>
                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <SpkDropdown Customclass="header-element country-selector" autoClose="outside" toggleas="a" Navigate='#!' Customtoggleclass='header-link dropdown-toggle no-caret' Svgicon='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
                            SvgClass='w-6 h-6 header-link-icon' Svg={true} Menuclass='main-header-dropdown dropdown-menu-end' Align="end">
                            <li>
                                <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#!">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                                <Image height={28} width={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/us_flag.jpg`} alt="img" />
                                            </span>
                                            English
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#!">
                                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                        <Image height={28} width={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/spain_flag.jpg`} alt="img" />
                                    </span>
                                    español
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#!">
                                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                        <Image height={28} width={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/french_flag.jpg`} alt="img" />
                                    </span>
                                    français
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#!">
                                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                        <Image height={28} width={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/uae_flag.jpg`} alt="img" />
                                    </span>
                                    عربي
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#!">
                                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                        <Image height={28} width={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/germany_flag.jpg`} alt="img" />
                                    </span>
                                    Deutsch
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#!">
                                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                        <Image height={28} width={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/china_flag.jpg`} alt="img" />
                                    </span>
                                    中国人
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#!">
                                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                        <Image height={28} width={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/italy_flag.jpg`} alt="img" />
                                    </span>
                                    Italiano
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#!">
                                    <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                        <Image height={28} width={28} src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/russia_flag.jpg`} alt="img" />
                                    </span>
                                    Русский
                                </Dropdown.Item>
                            </li>
                        </SpkDropdown>

                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <li className="header-element header-theme-mode">
                            {/*<!-- Start::header-link|layout-setting -->*/}
                            <Link scroll={false} href="#!" className="header-link layout-setting" onClick={() => toggleTheme()}>
                                <span className="light-layout">
                                    {/*<!-- Start::header-link-icon -->*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 header-link-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                    {/*<!-- End::header-link-icon -->*/}
                                </span>
                                <span className="dark-layout">
                                    {/*<!-- Start::header-link-icon -->*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 header-link-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                    {/*<!-- End::header-link-icon -->*/}
                                </span>
                            </Link>
                            {/*<!-- End::header-link|layout-setting -->*/}
                        </li>
                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <SpkDropdown Imagename='' Customclass="header-element cart-dropdown" toggleas="a" Navigate='#!' Svg={true} Customtoggleclass='header-link dropdown-toggle no-caret' Badgetag={true} Badgeclass='header-icon-badge' Menuclass='main-header-dropdown dropdown-menu-end'
                            Badgecolor='info' Badgeid='cart-icon-badge' Badgetext={cartItemCount} Badgepill={true} SvgClass='w-6 h-6 header-link-icon' Svgicon='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'>
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-15 fw-medium">Cart Items<span className="badge bg-info text-fixed-white ms-1 fs-12 rounded-circle" id="cart-data">{cartItemCount}</span></p>
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="fs-12 fw-medium text-muted">Sub Total : </span>
                                        <h6 className="mb-0"> $740</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <SimpleBar className="list-unstyled mb-0" id="header-cart-items-scroll" >
                                {cartItems.slice(0).map((item, index) => (
                                    <Dropdown.Item as="li" key={index}>
                                        <div className="d-flex align-items-center cart-dropdown-item gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md avatar-rounded custom-width">
                                                    <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}${item.image}`} alt="logo" className='avatar avatar-sm' />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="d-flex align-items-center justify-content-between mb-0">
                                                    <div className="mb-0 fw-medium">
                                                        <Link scroll={false} href="/apps/ecommerce/cart/">{item.name}</Link>
                                                        <div className="d-flex gap-2 text-truncate fs-12 fw-normal text-muted lh-1 mt-1">
                                                            <div className="fs-12">Brand : {item.brand}</div>
                                                            <div className="vr"></div>
                                                            <p className="mb-0 header-cart-text text-truncate">
                                                                Qty : {item.qty} &#x2715; ${item.price}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link scroll={false} href="#!" onClick={(event) => handleRemove(item.id, event)} className="header-cart-remove dropdown-item-close">
                                                            <i className="ri-close-line"></i>
                                                        </Link>
                                                        <h6 className="fw-medium mb-0">${item.qty * item.price}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dropdown.Item>

                                ))}
                            </SimpleBar>
                            <div className={`p-3 empty-header-item border-top d-flex gap-2 align-items-center ${cartItemCount === 0 ? 'd-none' : 'd-block'}`}>
                                <Link href="/apps/ecommerce/checkout" className={`btn flex-fill btn-primary btn-wave ${cartItemCount === 0 ? 'd-none' : 'd-block'}`}>Proceed to checkout</Link>
                            </div>
                            <div className={`p-5 empty-item ${cartItemCount === 0 ? 'd-block' : 'd-none'}`}>
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-primary-transparent">
                                        <i className="ri-shopping-cart-2-line fs-2"></i>
                                    </span>
                                    <h6 className="fw-medium mb-1 mt-3">Your Cart is Empty</h6>
                                    <span className="mb-3 fw-normal fs-13 d-block">Add some items to make me happy :)</span>
                                    <Link href="/apps/ecommerce/products" className="btn btn-primary btn-wave btn-sm m-1" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                </div>
                            </div>
                        </SpkDropdown>

                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <SpkDropdown Togglevariant='' toggleas="a" Customtoggleclass='header-link dropdown-toggle no-caret' Customclass="header-element notifications-dropdown d-xl-block d-none" Navigate='#!' Id='messageDropdown' Svg={true} SvgClass='w-6 h-6 header-link-icon' Badgetag={true} Badgecolor='secondary' Badgeclass='header-icon-pulse rounded pulse pulse-secondary custom-header-icon-pulse' Menuclass='main-header-dropdown dropdown-menu-end'
                            Svgicon='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5' >
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-15 fw-medium">Notifications</p>
                                    <span className="badge bg-secondary text-fixed-white" id="notifiation-data">{unreadCount} Unread</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <SimpleBar className="list-unstyled mb-0" id="header-notification-scroll">
                                {hasNotifications ? (
                                    notifications.map((notification) => (
                                        <Dropdown.Item as="li" className={notification.borderClass} key={notification.id}>
                                            <div className="d-flex align-items-start">
                                                <div className="pe-2 lh-1">
                                                    <span className={`avatar avatar-md avatar-rounded custom-width ${notification.color}`}>
                                                        {notification.image ? (
                                                            <Image fill src={`${process.env.NODE_ENV === 'production' ? basePath : ''}${notification.image}`} alt="user" />
                                                        ) : (
                                                            <i className={`${notification.icon} lh-1 fs-16`}></i>
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 d-flex align-items-start justify-content-between">
                                                    <div>
                                                        <p className="mb-0 fw-medium">
                                                            <Link scroll={false} href="/pages/chat/">{notification.title}</Link>
                                                        </p>
                                                        <div className="text-muted fw-normal fs-12 header-notification-text text-truncate">
                                                            {notification.user ? (
                                                                <>
                                                                    <span className="text-primary">{notification.user}</span> {notification.message}
                                                                </>
                                                            ) : notification.task ? (
                                                                <>
                                                                    <span className="text-secondary">"{notification.task}"</span> {notification.message}
                                                                </>
                                                            ) : (
                                                                notification.message
                                                            )}
                                                        </div>
                                                        <div className="fw-normal fs-10 text-muted op-8">{notification.time}</div>
                                                    </div>
                                                    <div>
                                                        <Link scroll={false} href="#!" onClick={(event) => handleRemove1(notification.id, event)} className="min-w-fit-content dropdown-item-close1">
                                                            <i className="ri-close-line"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))
                                ) : (
                                    <div className="p-5 empty-item1">
                                        <div className="text-center">
                                            <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                                <i className="ri-notification-off-line fs-2"></i>
                                            </span>
                                            <h6 className="fw-medium mt-3">No New Notifications</h6>
                                        </div>
                                    </div>
                                )}
                            </SimpleBar>

                            {hasNotifications && (
                                <div className="p-3 empty-header-item1 border-top">
                                    <div className="d-grid">
                                        <Link scroll={false} href="#!" className="btn btn-primary btn-wave">View All</Link>
                                    </div>
                                </div>
                            )}
                        </SpkDropdown>

                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <li className="header-element header-fullscreen">
                            {/*<!-- Start::header-link -->*/}
                            <Link scroll={false} href="#!" className="header-link" onClick={toggleFullscreen}>
                                {isFullscreen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 full-screen-close header-link-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 full-screen-open header-link-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                    </svg>
                                )}
                            </Link>
                            {/*<!-- End::header-link -->*/}
                        </li>
                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <SpkDropdown Customclass="header-element" toggleas="a" Navigate='#!' Customtoggleclass='header-link no-caret' Id="mainHeaderProfile" Imagetag={true}
                            Imageclass='avatar custom-header-avatar avatar-rounded' Imagename='' Imagesrc={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/15.jpg`}
                            Menuclass='main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end' Menulabel='mainHeaderProfile'>
                            <li>
                                <Link href='#!' scroll={false} className="dropdown-item  text-center border-bottom">
                                    <span className="fw-medium">
                                        Mr.Jack Miller
                                    </span>
                                    <span className="d-block fs-12 text-muted">Designer</span>
                                </Link>
                            </li>
                            <li><Link scroll={false} className="dropdown-item d-flex align-items-center" href='/pages/profile/'><i className="ri-user-line lh-1 p-1 rounded-circle bg-primary-transparent text-primary me-2 fs-14"></i>Profile</Link></li>
                            <li><Link scroll={false} className="dropdown-item d-flex align-items-center" href='/pages/file-manager/'><i className="ri-folder-4-line lh-1 p-1 rounded-circle bg-primary-transparent text-primary me-2 fs-14"></i>File Manager<span className="badge bg-success text-fixed-white ms-auto fs-9">2</span></Link></li>
                            <li><Link scroll={false} className="dropdown-item d-flex align-items-center" href='/pages/email/mail-app/'><i className="ri-mail-line lh-1 p-1 rounded-circle bg-primary-transparent text-primary me-2 fs-14"></i>Mail Inbox</Link></li>
                            <li><Link scroll={false} className="dropdown-item d-flex align-items-center" href='/pages/email/mail-settings/'><i className="ri-settings-5-line lh-1 p-1 rounded-circle bg-primary-transparent text-primary me-2 fs-14"></i>Settings</Link></li>
                            <li><Link scroll={false} className="dropdown-item d-flex align-items-center" href='/authentication/sign-in/sign-in-cover/'><i className="ri-door-lock-line lh-1 p-1 rounded-circle bg-primary-transparent text-primary me-2 fs-14"></i>Log Out</Link></li>
                        </SpkDropdown>

                        {/*<!-- End::header-element -->*/}

                        {/*<!-- Start::header-element -->*/}
                        <li className="header-element">
                            {/*<!-- Start::header-link|switcher-icon -->*/}
                            <Link scroll={false} href="#!" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas" onClick={handleShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 header-link-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </Link>
                            <Switcher
                                show={show}
                                handleClose={handleClose}
                            />
                            {/*<!-- End::header-link|switcher-icon -->*/}
                        </li>
                        {/*<!-- End::header-element -->*/}

                    </ul>
                    {/*<!-- End::header-content-right -->*/}

                </div>
                {/*<!-- End::main-header-container -->*/}

            </header>
            {/*<!-- /app-header -->*/}
            <Modal show={responsiveSearch} onHide={handleClose1} className="fade" id="header-responsive-search" tabIndex={-1} aria-labelledby="header-responsive-search">
                <Modal.Body>
                    <div className="input-group">
                        <Form.Control type="text" className="border-end-0" placeholder="Search Anything ..."
                            aria-label="Search Anything ..." aria-describedby="button-addon2" />
                        <SpkButton Buttonvariant='primary' Buttontype="button"
                            Id="button-addon2"><i className="bi bi-search"></i></SpkButton>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default Header