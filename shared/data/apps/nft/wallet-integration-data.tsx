// Choose Network
interface ChooseNetworkType {
    id: number;
    image: string;
    name: string;
    liclass?: string
}

export const ChooseNetwork: ChooseNetworkType[] = [
    { id: 1, image: "../../../assets/images/nft-images/16.png", name: "Etherium", liclass: 'active' },
    { id: 2, image: "../../../assets/images/nft-images/17.png", name: "Binance", },
    { id: 3, image: "../../../assets/images/nft-images/18.png", name: "Solana", },
    { id: 4, image: "../../../assets/images/nft-images/26.png", name: "Tezos", },
    { id: 5, image: "../../../assets/images/nft-images/21.png", name: "Avalanche", },
    { id: 6, image: "../../../assets/images/nft-images/25.png", name: "Cardano", },
    { id: 7, image: "../../../assets/images/nft-images/15.png", name: "Monero", },
];

// Wallet Transactions
interface TransactionType {
    id: number;
    type: string;
    icon: string;
    iconColor: string;
    title: string;
    time: string;
    from?: string;
    to?: string;
    amount?: string;
    price?: string;
    color: string;
}
export const Transaction: TransactionType[] = [
    { id: 1, to: "From", type: 'received', icon: 'exchange-line', iconColor: 'primary', title: 'ETH Received', time: '24 mins ago', from: '@user123', amount: '2.1 ETH', color: 'success', },
    { id: 2, to: "To", type: 'sent', icon: 'arrow-right-line', iconColor: 'success', title: 'ETH Sent', time: '16 mins ago', from: '@recipient456', amount: '1.5 ETH', color: 'danger', },
    { id: 3, to: "From", type: 'purchase', icon: 'coin-line', iconColor: 'info', title: 'NFT Purchase', time: '5 mins ago', from: '@creator789', price: '$350', color: '', },
    { id: 4, to: "To", type: 'withdrawal', icon: 'arrow-left-line', iconColor: 'secondary', title: 'ETH Withdrawal', time: '2 hours ago', from: '0x34F7Bc...', amount: '5.0 ETH', color: 'danger', },
];

interface WalletCardType {
    id: number;
    image: string;
    name: string;
    isActive: boolean;
    imgClass?: string,
}

export const WalletCard: WalletCardType[] = [
    { id: 1, image: '../../../assets/images/nft-images/22.png', name: 'MetaMask', isActive: true, imgClass: 'p-2' },
    { id: 2, image: '../../../assets/images/nft-images/23.png', name: 'Enjin Wallet', isActive: false, imgClass: 'p-2' },
    { id: 3, image: '../../../assets/images/nft-images/20.png', name: 'Trust Wallet', isActive: false, imgClass: 'p-2' },
    { id: 4, image: '../../../assets/images/nft-images/24.png', name: 'Coinbase Wallet', isActive: false, imgClass: 'p-2' },
    { id: 5, image: '../../../assets/images/nft-images/19.png', name: 'Lido', isActive: false, imgClass: 'p-2' },
    { id: 6, image: '../../../assets/images/nft-images/27.png', name: 'Huobi Wallet', isActive: false, },
];
