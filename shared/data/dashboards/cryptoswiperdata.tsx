import Image from 'next/image';
import React, { Fragment } from 'react';
import { SwiperCrypto } from './cryptodata';

interface SpkCryptocardProps {
    card: SwiperCrypto
}

const SpkCryptoSwipercard: React.FC<SpkCryptocardProps> = ({ card }) => {

    return (
        <Fragment>
            <div className="d-flex align-items-center gap-2">
                <div className="lh-1">
                    <Image width={28} height={28} src={card.imgSrc} alt="" className={`avatar avatar-sm  ${card.imgClass ? `${card.imgClass}` : ''}`} />
                </div>
                <div className='flex-fill'>{card.name} - {card.price}</div>
                <div className={`text-${card.changeClass}`} ms-auto>{card.change}</div>
            </div>
        </Fragment>
    );
};

export default SpkCryptoSwipercard;
