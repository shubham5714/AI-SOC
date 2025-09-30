"use client"
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkBadge from '../spk-badge';
import Image from 'next/image';
import { BorderCardType } from '@/shared/data/ui-elements/cardsdata';

interface BorderCards {
  card: BorderCardType;
}
const Spkborderedcards: React.FC<BorderCards> = ({ card }) => {
  return (
    <Fragment>
      <Card className={`border border-${card.Color} custom-card`}>
        <Card.Body>
          <p className="fs-14 fw-medium mb-2 lh-1">{card.Title}
            <Link scroll={false} href="#!"><i className={`bi bi-plus-square float-end text-${card.Class} fs-18`}></i></Link>
          </p>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {card.badges.map((badge, index) => (
              <SpkBadge key={index} Customclass={badge.className}>
                {badge.text}
              </SpkBadge>
            ))}
          </div>
          <div className="avatar-list-stacked">
            {card.images.map((src, index) => (
              <span className="avatar avatar-sm avatar-rounded custom-width" key={index}>
                <Image fill src={src} alt={`img-${index}`} />
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default Spkborderedcards