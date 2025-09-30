"use client"
import React from 'react'
import Image from 'next/image'
import { StepType } from '@/shared/data/pages/timelinedata'

interface SpkObject {
    obj: StepType
}

const SpkTimeline1: React.FC<SpkObject> = ({ obj }) => {
    return (
        <div className="timeline-step">
        <div className="timeline-content" data-toggle="popover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
            <div className="inner-circle"></div>
            <div className="card custom-card mb-0 border border-dashed">
                <div className="card-body">
                    <span className="avatar avatar-sm avatar-rounded custom-width">
                        <Image fill src={obj.imageSrc} alt="" />
                    </span>
                    <p className="fw-medium mt-1 mb-1"> {obj.date}</p>
                    <p className="mb-1 fw-medium">{obj.title}: <span className="text-muted fw-normal mb-0 mb-lg-0">{obj.content}</span>  </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SpkTimeline1