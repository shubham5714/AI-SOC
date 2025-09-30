import { ShortcutsType } from '@/shared/data/dashboards/podcastdata'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface SpkPodcastcardProps {
    card: ShortcutsType
}

const SpkPodcastcard: React.FC<SpkPodcastcardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card active">
                <Card.Body className="">
                    <Link scroll={false} href="#!" className="stretched-link categories" data-filter="*">
                        <div className="d-flex align-items-center flex-wrap gap-3">
                            <span className={`avatar avatar-md bg-${card.bg} svg-white`}>
                                {card.icon}
                            </span>
                            <div>
                                <span className="fw-medium">{card.name}</span>
                                <span className="fs-12 d-block fw-medium text-muted">180 Items</span>
                            </div>
                        </div>
                    </Link>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkPodcastcard
