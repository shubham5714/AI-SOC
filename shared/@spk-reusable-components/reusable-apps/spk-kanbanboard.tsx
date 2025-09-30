"use client"
import React, { Fragment } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import SpkDropdown from '../reusable-uiElements/spk-dropdown';
import Link from 'next/link';
import Image from 'next/image';

interface Badge {
    text: string;
    color: string;
}

interface Category {
    text: string;
    color: string;
}

interface SpkKanbanCard {
    id: string | number;
    title: string;
    badges: Badge[];
    category: Category[];
    avatars: string[];
    likes: number;
    comments: number | string;
}

interface SpkKanbanboardCardProps {
    card: SpkKanbanCard;
}

const SpkKanbanboardCard: React.FC<SpkKanbanboardCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card" key={card.id}>
                <Card.Body className="">
                    <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="task-badges">
                            {card.badges.map((badge, index) => (
                                <span className={`badge bg-${badge.color}-transparent me-1`} key={index}>{badge.text}</span>
                            ))}
                        </div>
                        <SpkDropdown toggleas='button' Customtoggleclass="btn btn-sm btn-light no-caret" Icon={true} IconClass="ri-more-2-fill">
                            <li><Dropdown.Item href="#!">View</Dropdown.Item></li>
                            <li><Dropdown.Item href="#!">Edit</Dropdown.Item></li>
                            <li><Dropdown.Item href="#!">Delete</Dropdown.Item></li>
                        </SpkDropdown>
                    </div>
                    <h6 className="fw-medium mb-1 fs-15">{card.title}</h6>
                    <p className="kanban-task-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="kanban-card-footer">
                        {card.category.map((progress, index) => (
                            <span className={`badge bg-${progress.color}-transparent me-1`} key={index}>{progress.text}</span>
                        ))}
                    </div>
                </Card.Body>
                <div className="p-3 border-top border-block-start-dashed">
                    <div className="d-flex align-items-center flex-row-reverse justify-content-between">
                        <div className="avatar-list-stacked">
                            {card.avatars.map((img, index) => (
                                <span className="avatar avatar-sm avatar-rounded custom-width" key={index}>
                                    <Image fill src={img} alt="img" />
                                </span>
                            ))}
                        </div>
                        <div>
                            <Link scroll={false} href="#!" className="me-2 text-secondary">
                                <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">{card.likes}</span>
                            </Link>
                            <Link scroll={false} href="#!" className="text-info">
                                <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">{card.comments}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default SpkKanbanboardCard;