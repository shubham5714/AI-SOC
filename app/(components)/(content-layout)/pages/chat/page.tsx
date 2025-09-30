"use client"
import SpkBadge from '@/shared/@spk-reusable-components/reusable-uiElements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown'
import { Chat1, Chat2, Chat3 } from '@/shared/data/pages/chatappdata'
import Pageheader from '@/shared/layouts-components/pageheader/pageheader'
import Seo from '@/shared/layouts-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useRef, useState } from 'react'
import { Button, Dropdown, Nav, Offcanvas, Tab } from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import EmojiPicker from 'emoji-picker-react';
import ChatGallerylist from '@/shared/data/pages/chatgallerylist'


interface ChatProps { }

interface User {
    heading: string;
    src: string;
    status: string;
}

const Chat: React.FC<ChatProps> = () => {

    const [activeUser, setActiveUser] = useState({
        name: 'Kerina Cherish',
        image: '../../assets/images/faces/6.jpg',
        status: 'online',
    });

    const handleChatClick = (user: User) => {
        setActiveUser({
            name: user.heading,
            image: user.src,
            status: user.status,
        });
    };


    const toggleChat = () => {
        document.querySelector(".main-chart-wrapper")?.classList.add("responsive-chat-open")

    };
    const toggleChat1 = () => {
        document.querySelector(".main-chart-wrapper")?.classList.remove("responsive-chat-open")
    };

    const [state, setState] = useState({
        show: false,
        showPicker: false,
    });

    const handleClose = () => setState(prevState => ({ ...prevState, show: false, }));;
    const handleShow = () => setState(prevState => ({ ...prevState, show: true, }));;

    //  Emoji picker

    const [inputValue, setInputValue] = useState("");
    const pickerRef = useRef(null);


    const handleEmojiClick = (emojiData: string) => {
        // Add the selected emoji to the input field value
        setInputValue((prevValue) => prevValue + emojiData.emoji);
    };
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Chat" />

            <Pageheader title="Pages" currentpage="Chat" activepage="Chat" />

            {/* <!-- End::page-header --> */}
            <div className="main-chart-wrapper gap-lg-2 gap-0 mb-2 d-lg-flex">
                <div className="chat-info border">
                    <div className="chat-search p-3 border-bottom">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Chat" aria-describedby="button-addon01" />
                            <SpkButton Buttonvariant="primary" Buttonlabel="button" Buttontype="button" Id="button-addon01">
                                <i className="ri-search-line"></i>
                            </SpkButton>
                        </div>
                    </div>
                    <Tab.Container defaultActiveKey="1">
                        <Nav className="nav nav-tabs tab-style-6 nav-justified mb-0 border-bottom d-flex gap-1 gap-sm-2 flex-wrap"
                            id="myTab1" role="tablist">
                            <Nav.Item className=" me-0" role="presentation">
                                <Nav.Link eventKey="1" className="" id="users-tab" data-bs-toggle="tab"
                                    data-bs-target="#users-tab-pane" type="button" role="tab"
                                    aria-controls="users-tab-pane" aria-selected="true">Recent


                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" me-0" role="presentation">
                                <Nav.Link eventKey="2" className="" id="groups-tab" data-bs-toggle="tab"
                                    data-bs-target="#groups-tab-pane" type="button" role="tab"
                                    aria-controls="groups-tab-pane" aria-selected="false">Groups

                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="" role="presentation">
                                <Nav.Link eventKey="3" id="contacts-tab" data-bs-toggle="tab"
                                    data-bs-target="#contacts-tab-pane" type="button" role="tab"
                                    aria-controls="contacts-tab-pane" aria-selected="false">Contacts
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content id="myTabContent">
                            <Tab.Pane eventKey="1" className=" border-0 chat-users-tab" id="users-tab-pane"
                                role="tabpanel" aria-labelledby="users-tab" tabIndex={0}>
                                <SimpleBar className="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">

                                    <li className="pb-0">
                                        <p className="text-muted fs-11 fw-medium mb-2 op-7">ACTIVE CHATS</p>
                                    </li>

                                    {Chat1.map((idx, index) => (
                                        <li className={`checkforactive ${activeUser.activeclass ? `${activeUser.activeclass}` : ''} ${activeUser.name === idx.heading ? 'active' : 'chat-inactive'} ${idx.activeclass ? `${idx.activeclass}` : ''}`} key={index} onClick={() => handleChatClick(idx)}>
                                            <Link scroll={false} href="#!">
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className={`avatar avatar-md avatar-rounded custom-width  ${idx.status} me-2`}>
                                                            <Image fill src={idx.src} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill" onClick={toggleChat}>
                                                        <p className="mb-0 fw-medium">
                                                            {idx.heading} <span className="float-end text-muted fw-normal fs-11">{idx.time}</span>
                                                        </p>
                                                        <p className={`fs-12 mb-0 ${idx.typeingClass}`} >
                                                            <span className="chat-msg text-truncate">{idx.description} </span>
                                                            {idx.badge}
                                                            {idx.Icon === true ? <span className="float-end align-middle fs-16 text-success"><i className="ri-check-double-fill"></i></span>
                                                                : ""
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="pb-0">
                                        <p className="text-muted fs-11 fw-medium mb-2 op-7">ALL CHATS</p>
                                    </li>
                                    {Chat2.map((idx) => (
                                        <li className={`chat-item ${activeUser?.name === idx.heading ? 'active' : ''}`} key={idx.id}
                                            onClick={() => handleChatClick(idx)}>
                                            <Link scroll={false} href="#!">
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className={`avatar  avatar-rounded avatar-md custom-width ${idx.status} me-2`} >
                                                            <Image fill src={idx.src} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill" onClick={toggleChat}>
                                                        <p className="mb-0 fw-medium">
                                                            {idx.heading} <span
                                                                className="float-end text-muted fw-normal fs-11">{idx.time}</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">{idx.description}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </SimpleBar>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2" className="border-0 chat-groups-tab overflow-y-scroll" id="groups-tab-pane"
                                role="tabpanel" aria-labelledby="groups-tab" tabIndex={0}>

                                <ul className="list-unstyled mb-0 mt-2 ">
                                    <li className="pb-0">
                                        <p className="text-muted fs-11 fw-medium mb-1 op-7">MY CHAT GROUPS</p>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><i className="ri-checkbox-blank-circle-fill lh-1 text-primary me-1 fs-8 align-middle"></i>Huge Rocks </p>
                                                <p className="mb-0"><SpkBadge variant="secondary-transparent">4
                                                    Online</SpkBadge></p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/10.jpg" alt="img" />
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                    href="#!">
                                                    +19
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><i className="ri-checkbox-blank-circle-fill lh-1 text-info me-1 fs-8 align-middle"></i>Creative Group </p>
                                                <p className="mb-0"><SpkBadge variant="info-transparent">32
                                                    Online</SpkBadge></p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/1.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/7.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/3.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/9.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/12.jpg" alt="img" />
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                    href="#!">
                                                    +123
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><i className="ri-checkbox-blank-circle-fill lh-1 text-secondary me-1 fs-8 align-middle"></i>Anyside Spriritual</p>
                                                <p className="mb-0"><SpkBadge variant="success-transparent">3
                                                    Online</SpkBadge></p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/4.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/13.jpg" alt="img" />
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                    href="#!">
                                                    +15
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><i className="ri-checkbox-blank-circle-fill lh-1 text-secondary me-1 fs-8 align-middle"></i>Fun Time</p>
                                                <p className="mb-0"><SpkBadge variant="secondary-transparent">5
                                                    Online</SpkBadge></p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/1.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/7.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/14.jpg" alt="img" />
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                    href="#!">
                                                    +28
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><i className="ri-checkbox-blank-circle-fill lh-1 text-warning me-1 fs-8 align-middle"></i>Latest News</p>
                                                <p className="mb-0"><SpkBadge variant="warning-transparent">2 Online</SpkBadge>
                                                </p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/5.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/6.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/12.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src="../../assets/images/faces/3.jpg" alt="img" />
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                    href="#!">
                                                    +53
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="list-unstyled mb-0 mt-2 ">
                                    <li className="pb-0">
                                        <p className="text-muted fs-11 fw-medium mb-1 op-7">GROUP CHATS</p>
                                    </li>
                                    {Chat3.map((idx) => (
                                        <li className={`checkforactive ${idx.check ? 'chat-msg-unread' : ''}`} key={idx.id} onClick={() => handleChatClick(idx)}>
                                            <Link scroll={false} href="#!">
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className={`avatar avatar-md avatar-rounded custom-width ${idx.status} me-2`}>
                                                            <Image fill src={idx.src} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill" onClick={toggleChat}>
                                                        <p className="mb-0 fw-medium" >
                                                            {idx.heading}<span
                                                                className="float-end text-muted fw-normal fs-11">{idx.time}</span>
                                                        </p>
                                                        <p className={`fs-12 mb-0 ${idx.pTagClass ? `${idx.pTagClass}` : ''}`}>
                                                            <span className={`text-truncate chat-msg ${idx.class}`}>{idx.description}</span>
                                                            {idx.check ? (<span className="chat-read-icon float-end align-middle"><i className="ri-check-double-fill"></i></span>) : ''}

                                                            {idx.badge}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </Tab.Pane>
                            <Tab.Pane eventKey="3" className="border-0 chat-contacts-tab" id="contacts-tab-pane" role="tabpanel"
                                aria-labelledby="contacts-tab" tabIndex={0}>
                                <SimpleBar>
                                    <ul className="list-unstyled mb-0 chat-contacts-tab">
                                        <li>
                                            <span className="text-default fw-semibold">A</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm custom-width">
                                                        <Image fill src="../../assets/images/faces/5.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Ava Taylor
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm custom-width">
                                                        <Image fill src="../../assets/images/faces/12.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Alice Angel
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-default fw-semibold">B</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm custom-width">
                                                        <Image fill src="../../assets/images/faces/14.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Blessy diamond
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-default fw-semibold">D</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm bg-primary">
                                                        C
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Catalina Keira
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-default fw-semibold">D</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm custom-width">
                                                        <Image fill src="../../assets/images/faces/7.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Danny Raj
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-default fw-semibold">G</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm custom-width">
                                                        <Image fill src="../../assets/images/faces/15.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Gatin Leo
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-default fw-semibold">L</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm bg-primary">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Monte Christ
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm custom-width">
                                                        <Image fill src="../../assets/images/faces/2.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Thomas Lie
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-default fw-semibold">N</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm custom-width">
                                                        <Image fill src="../../assets/images/faces/10.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Nelson Gold
                                                    </span>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="ri-more-2-fill" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-default fw-semibold">V</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm custom-width">
                                                        <Image fill src="../../assets/images/faces/16.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">
                                                        Victoria Gracie
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="dropup-center dropup" Drop="up" toggleas="a" Customtoggleclass="btn btn-icon btn-sm btn-outline-light no-caret" Icon={true} IconClass="ri-more-2-fill">
                                                    <Dropdown.Item><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item>
                                                    <Dropdown.Item><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                    </ul>
                                </SimpleBar>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
                <div className="main-chat-area border">
                    <div className="d-flex align-items-center border-bottom main-chat-head flex-wrap">
                        <span className={`avatar avatar-md avatar-rounded  ${activeUser.status} chatstatusperson me-2 lh-1  custom-width`}>
                            <Image fill className="chatimageperson" src={activeUser.image} alt="img" />
                        </span>
                        <div className="flex-fill">
                            <p className="mb-0 fw-medium fs-14 lh-1">
                                <Link scroll={false} href="#!" data-bs-toggle="offcanvas" onClick={handleShow} data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="chatnameperson responsive-userinfo-open">{activeUser.name}</Link>
                            </p>
                            <p className="text-muted mb-0 chatpersonstatus">{activeUser.status}</p>
                        </div>
                        <div className="d-flex flex-wrap rightIcons gap-2">
                            <SpkButton Buttonvariant="success-light" Buttonlabel="button" Buttontype="button" Customclass="btn-icon my-0  btn-sm">
                                <i className="ti ti-phone"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="info-light" Buttonlabel="button" Buttontype="button" Customclass="btn-icon  my-0 btn-sm d-none d-sm-block">
                                <i className="ti ti-video"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="outline-light" Buttonlabel="button" Buttontype="button" Customclass="btn-icon responsive-userinfo-open btn-sm">
                                <i className="ti ti-user-circle" id="responsive-chat-close"></i>
                            </SpkButton>
                            <SpkDropdown toggleas="a" Togglevariant="" Customtoggleclass="btn btn-icon  btn-wave waves-light btn-sm btn-secondary-light waves-effect waves-light no-caret" Navigate="#!" Icon={true} IconClass="ti ti-dots-vertical">
                                <Dropdown.Item href="#!"><i className="ri-user-3-line me-1"></i>Profile</Dropdown.Item>
                                <Dropdown.Item href="#!"><i className="ri-format-clear me-1"></i>Clear Chat</Dropdown.Item>
                                <Dropdown.Item href="#!"><i className="ri-user-unfollow-line me-1"></i>Delete User</Dropdown.Item>
                                <Dropdown.Item href="#!"><i className="ri-user-forbid-line me-1"></i>Block User</Dropdown.Item>
                                <Dropdown.Item href="#!"><i className="ri-error-warning-line me-1"></i>Report</Dropdown.Item>
                            </SpkDropdown>
                            <SpkButton Buttonvariant="primary-light" Buttonlabel="button" Buttontype="button" Customclass="btn-icon my-0 responsive-chat-close" Size="sm" onClickfunc={toggleChat1}>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                        </div>
                    </div>
                    <SimpleBar className="chat-content" id="main-chat-content">
                        <ul className="list-unstyled">
                            <li className="chat-day-label">
                                <span>Today</span>
                            </li>
                            <li className="chat-item-start">
                                <div className="chat-list-inner">
                                    <div className="chat-user-profile">
                                        <span className={`avatar avatar-rounded avatar-md  ${activeUser.status} chatstatusperson  custom-width`}>
                                            <Image fill className="chatimageperson" src={activeUser.image} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">Hey!&#128522; How are you? What have you been up to lately?</p>
                                            </div>
                                        </div>
                                        <span className="chatting-user-info">
                                            <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">10:20PM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-end">
                                <div className="chat-list-inner">
                                    <div className="me-3">
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">Oh, hey! &#128516; I'm doing pretty well, thanks! Just been catching up on some reading and enjoying the nice weather. How about you?</p>
                                            </div>
                                        </div>
                                        <span className="chatting-user-info">
                                            <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                className="ri-check-double-line"></i></span>11:50PM</span> You
                                        </span>
                                    </div>
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded custom-width">
                                            <Image fill src="../../assets/images/faces/15.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-start">
                                <div className="chat-list-inner">
                                    <div className="chat-user-profile">
                                        <span className={`avatar avatar-md avatar-rounded  ${activeUser.status} chatstatusperson  custom-width`}>
                                            <Image fill className="chatimageperson" src={activeUser.image} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">That sounds lovely! I've been keeping busy with work, but I'm looking forward to the weekend. Thinking of heading out for a hike if the weather holds up.</p>
                                            </div>
                                        </div>
                                        <span className="chatting-user-info">
                                            <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:51PM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-end">
                                <div className="chat-list-inner">
                                    <div className="me-3">
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">Nice! Hiking sounds like a great way to unwind. Which trail are you thinking of exploring?</p>
                                            </div>
                                        </div>
                                        <span className="chatting-user-info">
                                            <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                className="ri-check-double-line"></i></span>11:52PM</span> You
                                        </span>
                                    </div>
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded custom-width">
                                            <Image fill src="../../assets/images/faces/15.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-start">
                                <div className="chat-list-inner">
                                    <div className="chat-user-profile">
                                        <span className={`avatar avatar-md  ${activeUser.status} avatar-rounded chatstatusperson custom-width`}>
                                            <Image fill className="chatimageperson" src={activeUser.image} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">I'm thinking of checking out the one up at Pine Ridge. It's got some amazing views of the valley. Would you be interested in joining?</p>
                                            </div>
                                        </div>
                                        <span className="chatting-user-info">
                                            <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:55PM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-end">
                                <div className="chat-list-inner">
                                    <div className="me-3">
                                        <div className="main-chat-msg">
                                            <div className="">
                                                <p className="mb-0">That sounds fantastic! I'd like to come along. Let me know what time you're planning to head out, and I'll make sure to pack some snacks for the trail.</p>
                                            </div>
                                        </div>
                                        <span className="chatting-user-info">
                                            <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                className="ri-check-double-line"></i></span>11:52PM</span> You
                                        </span>
                                    </div>
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded custom-width">
                                            <Image fill src="../../assets/images/faces/15.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-start">
                                <div className="chat-list-inner">
                                    <div className="chat-user-profile">
                                        <span className={`avatar avatar-md ${activeUser.status} avatar-rounded  custom-width`}>
                                            <Image fill className="chatimageperson" src={activeUser.image} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">okay. &#128516;</p>
                                            </div>
                                        </div>
                                        <span className="chatting-user-info chatnameperson">
                                            {activeUser.name} <span className="msg-sent-time">11:45PM</span>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </SimpleBar>
                    <div className="chat-footer">
                        <Link scroll={false} aria-label="anchor" className="btn btn-success-light me-2 btn-icon btn-send" href="#!">
                            <i className="ri-attachment-2"></i>
                        </Link>
                        <Link scroll={false} aria-label="anchor" className="btn btn-icon me-2 btn-info emoji-picker" href="#!"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation(); // Prevent the click from bubbling to parent
                                setState((prevState) => ({
                                    ...prevState,
                                    showPicker: !prevState.showPicker,
                                }));
                            }}
                        >
                            <i className="ri-emotion-line"></i>
                        </Link>
                        {state.showPicker && (
                            <div
                                ref={pickerRef}
                                style={{
                                    position: "absolute",
                                    zIndex: 1000,
                                    bottom: "3.5rem",
                                }}
                                onClick={(e) => e.stopPropagation()} // Prevent the picker itself from closing when clicked
                            >
                                <EmojiPicker onEmojiClick={handleEmojiClick} />
                            </div>
                        )}
                        <input className="form-control chat-message-space" placeholder="Type your message here..." type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        <Link scroll={false} aria-label="anchor" className="btn btn-primary ms-2 btn-icon btn-send" href="#!">
                            <i className="ri-send-plane-2-line"></i>
                        </Link>
                    </div>
                </div>
                <Offcanvas placement="end" show={state.show} onHide={handleClose} className="offcanvas-end" tabIndex={-1} id="offcanvasRight">
                    <Offcanvas.Body>
                        <Button variant="" type="button" onClick={handleClose} className="btn btn-sm btn-icon btn-outline-light border" data-bs-dismiss="offcanvas"
                            aria-label="Close"><i className="ri-close-line lh-1 align-center"></i></Button>
                        <div className="chat-user-details" id="chat-user-details">
                            <div className="text-center mb-4">
                                <span className="avatar avatar-rounded online avatar-xxl me-2 mb-3 chatstatusperson custom-width">
                                    <Image fill className="chatimageperson" src="../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                                <p className="mb-1 fs-15 fw-medium text-dark lh-1 chatnameperson">Jamison Jen</p>
                                <p className="fs-12 text-muted"><span className="chatnameperson">jamisonjen0114</span>@gmail.com</p>
                                <p className="text-center mb-0 d-flex gap-2 flex-wrap">
                                    <Button variant="" type="button" aria-label="button" className="btn btn-primary-light btn-wave flex-fill"><i
                                        className="ri-phone-line me-2 align-middle"></i>Call</Button>
                                    <Button variant="" type="button" aria-label="button" className="btn btn-success-light btn-wave flex-fill"><i
                                        className="ri-video-add-line me-2 align-middle"></i>Video Call</Button>
                                    <Button variant="" type="button" aria-label="button" className="btn btn-info-light btn-wave flex-fill"><i
                                        className="ri-chat-1-line me-2 align-middle"></i>Message</Button>
                                </p>
                            </div>
                            <div className="mb-4 pt-2">
                                <div className="fw-medium mb-4">Shared Files
                                    <span className="badge bg-info ms-1 rounded-pill">17</span>
                                    <span className="float-end fs-11"><Link scroll={false} href="#!;" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link></span>
                                </div>
                                <ul className="shared-files list-unstyled">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 bg-primary-transparent rounded-circle">
                                                <span className="shared-file-icon">
                                                    <i className="ti ti-file-text text-primary"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-medium mb-0">notification.pdf</p>
                                                <p className="mb-0 text-muted fs-11">15,Dec 2024 - 12:45PM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link scroll={false} aria-label="anchor" href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 bg-secondary-transparent rounded-circle">
                                                <span className="shared-file-icon">
                                                    <i className="ri-image-line text-secondary"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-medium mb-0">Image_file1.Jpg</p>
                                                <p className="mb-0 text-muted fs-11">03,Oct 2024 - 03:20AM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link scroll={false} aria-label="anchor" href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 bg-success-transparent rounded-circle">
                                                <span className="shared-file-icon">
                                                    <i className="ri-image-line text-success"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-medium mb-0">Imagefile_12.Jpg</p>
                                                <p className="mb-0 text-muted fs-11">19,Oct 2024 - 01:23PM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link scroll={false} aria-label="anchor" href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 bg-orange-transparent rounded-circle">
                                                <span className="shared-file-icon">
                                                    <i className="ri-video-line text-orange"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-medium mb-0">Video-rec-20-10-2021.MP4</p>
                                                <p className="mb-0 text-muted fs-11">13,May 2024 - 16:25AM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link scroll={false} href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-0 pt-2">
                                <div className="fw-medium mb-4">Photos & Media
                                    <span className="badge bg-secondary ms-1 rounded-pill">15</span>
                                    <span className="float-end fs-11"><Link scroll={false} href="#!;" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link></span>
                                </div>
                                <ChatGallerylist />
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>

            </div>

        </Fragment>
    )
}

export default Chat