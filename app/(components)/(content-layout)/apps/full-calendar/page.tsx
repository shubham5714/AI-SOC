"use client"

import Pageheader from '@/shared/layouts-components/pageheader/pageheader'
import Seo from '@/shared/layouts-components/seo/seo'
import FullCalendar, { EventClickArg, DateSelectArg, EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import listPlugin from "@fullcalendar/list";;
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SimpleBar from 'simplebar-react';

interface FullCalenderProps { }

const FullCalender: React.FC<FullCalenderProps> = () => {

    let eventGuid = 0;
    const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
    const INITIAL_EVENTS = [
        {
            id: createEventId(),
            title: "Meeting",
            start: todayStr,
        },
        {
            id: createEventId(),
            title: "Meeting Time",
            start: todayStr + "T16:00:00",
        },
    ];

    function createEventId() {
        return String(eventGuid++);
    }
    const initialstate1 = {
        calendarEvents: [
            {
                title: "Atlanta Monster",
                start: new Date("2019-04-04 00:00"),
                id: "1001",
            },
            {
                title: "My Favorite Murder",
                start: new Date("2019-04-05 00:00"),
                id: "1002",
            },
        ],

        events: [
            {
                title: "Calendar Events",
                id: "1",
                bg: "primary",
            },
            {
                title: "Birthday Events",
                id: "2",
                bg: "secondary",
            },
            {
                title: "Holiday Calendar",
                id: "3",
                bg: "success",
            },
            {
                title: "Office Events",
                id: "4",
                bg: "info",
                border: "border-info-transparent"
            },
            {
                title: "Other Events",
                id: "5",
                bg: "warning",
            },
            {
                title: "Festival Events",
                id: "6",
                bg: "danger",
            },
            {
                title: "Timeline Events",
                id: "7",
                bg: "teal",
            },
            {
                title: "Special Events",
                id: "8",
                bg: "pink",
            },
        ],
    };
    const [state] = useState(initialstate1);

    const externalEventsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const draggableEl = externalEventsRef.current;
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                const title = eventEl.getAttribute("title");
                const id = eventEl.getAttribute("data");
                const classValue = eventEl.getAttribute("class");
                return {
                    title: title,
                    id: id,
                    className: classValue,
                };
            },
        });
    }, []);

    function renderEventContent(eventInfo: EventContentArg) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        );
    }
    const handleEventClick = (clickInfo: EventClickArg) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    };
    const handleEvents = () => { };

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Full-Calender" />

            <Pageheader title="Apps" currentpage="Full Calendar" activepage="Full Calendar" />

            {/* <!-- Page Header Close --> */}
            {/* Start::row-1 */}
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>All Events</Card.Title>
                            <SpkButton Customclass="btn btn-primary btn-wave" Buttonvariant='primary' ><i className="ri-add-line align-middle me-1 fw-medium d-inline-block"></i>Create New Event</SpkButton>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div id="external-events" ref={externalEventsRef} className="p-3">
                                {state.events.map((event) => (
                                    <div
                                        className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-${event.bg} border border-${event.bg} border-opacity-10 `}
                                        title={event.title}
                                        key={event.id}>
                                        <div className={`fc-event-main text-fixed-white`}> {event.title}</div>
                                    </div>
                                ))}

                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Activity :
                            </Card.Title>
                            <SpkButton Buttonvariant='primary-light' Customclass="btn btn-sm btn-wave">View All</SpkButton>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <SimpleBar className="p-3 border-bottom" id="full-calendar-activity">
                                <ul className="list-unstyled mb-0 fullcalendar-events-activity">
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <p className="mb-1 fw-medium">Tuesday, Feb 5, 2025</p>
                                            <span className="badge bg-light text-default mb-1">10:00AM - 11:00AM</span>
                                        </div>
                                        <p className="mb-0 text-muted fs-12">Discussion with team on project updates.</p>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <p className="mb-1 fw-medium">Monday, Jan 2, 2023</p>
                                            <span className="badge bg-success mb-1">Completed</span>
                                        </div>
                                        <p className="mb-0 text-muted fs-12">Review and finalize budget proposal.</p>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <p className="mb-1 fw-medium">Thursday, Mar 8, 2025</p>
                                            <span className="badge bg-warning-transparent mb-1">Reminder</span>
                                        </div>
                                        <p className="mb-0 text-muted fs-12">Prepare presentation slides for client meeting.</p>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <p className="mb-1 fw-medium">Friday, Apr 12, 2025</p>
                                            <span className="badge bg-light text-default mb-1">2:00PM - 4:00PM</span>
                                        </div>
                                        <p className="mb-0 text-muted fs-12">Training session on new software tools.</p>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <p className="mb-1 fw-medium">Saturday, Mar 16, 2025</p>
                                            <span className="badge bg-danger-transparent mb-1">Due Date</span>
                                        </div>
                                        <p className="mb-0 text-muted fs-12">Submit quarterly report to management.</p>
                                    </li>
                                </ul>
                            </SimpleBar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="card-header">
                            <Card.Title>Full Calendar</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id='calendar2'>
                                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                                    headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
                                    initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                                    initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                                    eventsSet={handleEvents}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*End::row-1 */}
        </Fragment>
    )
}

export default FullCalender