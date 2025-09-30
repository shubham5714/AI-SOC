
import NftDetailsSwiper from "./nft-details-swiper";
import Image from "next/image";

export const Swiperdata = [
    <div className="image-container custom-width">
        <Image fill className="img-fluid" src="../../../assets/images/nft-images/2.jpg" alt="img" />
    </div>,
    <div className="image-container custom-width">
        <Image fill className="img-fluid" src="../../../assets/images/nft-images/3.jpg" alt="img" />
    </div>,
    <div className="image-container custom-width">
        <Image fill className="img-fluid" src="../../../assets/images/nft-images/4.jpg" alt="img" />
    </div>,
    <div className="image-container custom-width">
        <Image fill className="img-fluid" src="../../../assets/images/nft-images/5.jpg" alt="img" />
    </div>
];

export interface ReviewsType {
    id: number;
    name: string;
    avatar: string;
    date: string;
    rating: number;
    title: string;
    description: string;
    images: string[];
}

export const ReviewsData: ReviewsType[] = [
    { id: 1, name: 'Christopher', avatar: '../../../assets/images/faces/15.jpg', date: '24 Nov, 2024 - 10:54PM', rating: 4.1, title: 'Vibrant Symphony 💖', description: 'Vibrant Symphony is an extraordinary NFT that immerses you in a world of vivid colors and imaginative landscapes.', images: ['../../../assets/images/nft-images/13.jpg', '../../../assets/images/nft-images/3.jpg'], },
    { id: 2, name: 'Sarah Johnson', avatar: '../../../assets/images/faces/10.jpg', date: '30 Apr, 2024 - 03:22PM', rating: 3.7, title: 'Enchanting Dreamscape', description: 'Enchanting Dreamscape offers a surreal journey through dream-like imagery and subtle symbolism.', images: ['../../../assets/images/nft-images/6.jpg', '../../../assets/images/nft-images/7.jpg'], },
    { id: 3, name: 'Emily Brown', avatar: '../../../assets/images/faces/12.jpg', date: '15 May, 2024 - 09:15AM', rating: 3.8, title: 'Oceanic Serenity 🌊', description: 'Oceanic Serenity captivates with its tranquil underwater scenes and ethereal marine life.', images: ['../../../assets/images/nft-images/6.jpg', '../../../assets/images/nft-images/3.jpg'], },
];

export const NftSwiperCardData = ReviewsData.map((idx, index) => (
    <div key={index}>
        <NftDetailsSwiper card={idx} />
    </div>
))

interface PopularNftType {
    id: number;
    image: string;
    name: string;
    likes: string;
    totalLikes: string;
    price: string;
    oldPrice: string;
}

export const PopularNftdata: PopularNftType[] = [
    { id: 1, image: "../../../assets/images/nft-images/4.jpg", name: "Digital Dreamscapes", likes: "18.5k", totalLikes: "18,512", price: "2.299 ETH", oldPrice: "3.299 ETH", },
    { id: 2, image: "../../../assets/images/nft-images/7.jpg", name: "Galactic Gardens", likes: "4.2k", totalLikes: "4,356", price: "1.899 ETH", oldPrice: "2.799 ETH", },
    { id: 3, image: "../../../assets/images/nft-images/10.jpg", name: "Pixelated Paradise", likes: "9.1k", totalLikes: "9,153", price: "3.599 ETH", oldPrice: "5.499 ETH", },
    { id: 4, image: "../../../assets/images/nft-images/11.jpg", name: "Vibrant Voyages", likes: "15.7k", totalLikes: "15,789", price: "6.499 ETH", oldPrice: "9.999 ETH", },
];