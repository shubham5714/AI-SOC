export interface NFTItemType {
    id: number;
    image: string;
    time: string;
    title: string;
    likes: string;
    userAvatar: string;
    userName: string;
    userHandle: string;
    bid: string;
    tab?: string;
    tab1?: string;
    tab2?: string;
}
export const NFTItemdata: NFTItemType[] = [
    { id: 1, image: '../../../assets/images/nft-images/2.jpg', time: '04hrs : 24m : 38s', title: 'Abstract Digital Art', likes: '1.43k', userAvatar: '../../../assets/images/faces/14.jpg', userName: 'Manistics NFT', userHandle: '@manistics454', bid: '0.015ETH', },
    { id: 2, image: '../../../assets/images/nft-images/3.jpg', time: '03hrs : 12m : 45s', title: 'Abstract Digital Art', likes: '1.43k', userAvatar: '../../../assets/images/faces/2.jpg', userName: 'Manistics NFT', userHandle: '@manistics454', bid: '0.015ETH', },
    { id: 3, image: '../../../assets/images/nft-images/4.jpg', time: '05hrs : 03m : 20s', title: 'Cyberpunk Creations', likes: '1.43k', userAvatar: '../../../assets/images/faces/11.jpg', userName: 'CyberArt NFT', userHandle: '@cyberartworks154', bid: '0.014ETH', },
    { id: 4, image: '../../../assets/images/nft-images/5.jpg', time: '02hrs : 50m : 55s', title: 'Geometric Dreamscape', likes: '2.9k', userAvatar: '../../../assets/images/faces/12.jpg', userName: 'GeoNFT NFT', userHandle: '@geonft_designs47', bid: '0.016ETH', tab1: 'gameing', tab: 'realestate', tab2: 'fashion' },
    { id: 5, image: '../../../assets/images/nft-images/6.jpg', time: '06hrs : 15m : 10s', title: 'Vibrant Pixel Art', likes: '2.5k', userAvatar: '../../../assets/images/faces/3.jpg', userName: 'PixelPerfect', userHandle: '@pixelperfectnft74', bid: '0.017ETH', tab: 'music', tab1: 'sports' },
    { id: 6, image: '../../../assets/images/nft-images/7.jpg', time: '01hrs : 58m : 23s', title: 'Surreal Fantasy Art', likes: '1.8k', userAvatar: '../../../assets/images/faces/14.jpg', userName: 'Fantasia NFT', userHandle: '@fantasianft13', bid: '0.018ETH', tab: 'domain' },
    { id: 7, image: '../../../assets/images/nft-images/8.jpg', time: '03hrs : 45m : 50s', title: 'Celestial Digital Art', likes: "5.1k", userAvatar: '../../../assets/images/faces/6.jpg', userName: 'Celestial NFT', userHandle: '@celestial_nft55', bid: '0.055ETH', tab: 'art' },
    { id: 8, image: '../../../assets/images/nft-images/9.jpg', time: '07hrs : 06m : 15s', title: 'Prismatic Universe', likes: '16.40k', userAvatar: '../../../assets/images/faces/11.jpg', userName: 'Prisma NFT', userHandle: '@prisma_universe77', bid: '0.035ETH', tab: 'art', tab1: 'gameing' },
];