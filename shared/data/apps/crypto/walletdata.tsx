interface WalletType {
    id: number;
    title: string;
    currency: string;
}
export const WalletData: WalletType[] = [
    { id: 1, title: 'BTC Wallet Address', currency: 'BTC', },
    { id: 2, title: 'ETH Wallet Address', currency: 'ETH', },
    { id: 3, title: 'LTC Wallet Address', currency: 'LTC', },
];

interface WalletSummary {
    id: number;
    name: string;
    symbol: string;
    balance: string;
    balanceUSD: string;
    icon: string;
}
export const WalletSummaries: WalletSummary[] = [
    { id: 1, name: 'BTC WALLET', symbol: 'BTC', balance: '0.05437 BTC', balanceUSD: '$1646.94 USD', icon: '../../../assets/images/crypto-currencies/square-color/Bitcoin.svg', },
    { id: 2, name: 'ETH WALLET', symbol: 'ETH', balance: '2.3892 ETH', balanceUSD: '$4581.24 USD', icon: '../../../assets/images/crypto-currencies/square-color/Ethereum.svg', },
    { id: 3, name: 'XRP WALLET', symbol: 'XRP', balance: '234.943 XRP', balanceUSD: '$192.29 USD', icon: '../../../assets/images/crypto-currencies/square-color/Ripple.svg', },
    { id: 4, name: 'LTC WALLET', symbol: 'LTC', balance: '37.254 LTC', balanceUSD: '$3519.01 USD', icon: '../../../assets/images/crypto-currencies/square-color/Litecoin.svg', },
];
