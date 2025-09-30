"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TimelineItemProps {
    time: string;
    user: string;
    action: React.ReactNode;
    description: string;
    Navigate: string | URL;
    media: string[];
}

interface TimelineData {
    date: string;
    color: string;
    entries: TimelineItemProps[];
}

const SpkTimeline2: React.FC<{ timelineData: TimelineData[] }> = ({ timelineData }) => {
    const TimelineItem: React.FC<TimelineItemProps> = ({ time, user, action, description, media, Navigate }) => {
        return (
            <div className="timeline-right">
                <div className="timeline-content">
                    <p className="timeline-date text-muted mb-2">{time}</p>
                    <div className="timeline-box">
                        <p className="mb-2">
                            <b>{user}</b> {action}
                        </p>
                        <p className="mb-2">{description}</p>
                        <p className="profile-activity-media mb-0">
                            {media.map((src, index) => (
                                <Link key={index} scroll={false} href={Navigate}>
                                    <Image width={64} height={48} src={src} alt="" className="mb-0" />
                                </Link>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="timeline-container">
            {timelineData.map((day, dayIndex) => (
                <React.Fragment key={dayIndex}>
                    <div className="timeline-continue">
                        {day.entries.map((item, itemIndex) => (
                            <TimelineItem key={itemIndex} {...item} />
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default SpkTimeline2;
