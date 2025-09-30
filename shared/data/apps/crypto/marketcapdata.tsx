export const MarketcapSeries = [{
    name: 'Value',
    data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}]
export const MarketcapOptions = ({ color }: ColorOptionType) => ({
    chart: {
        type: 'area',
        height: 40,
        width: 163,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: true
        }
    },
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        axisBorder: {
            show: false
        },
    },
    colors: [color]
})

// Crypto MarketCap
interface CryptoMarketCapSeriesItem {
  name: string;
  data: number[];
}
export const CryptoMarketCapSeries:CryptoMarketCapSeriesItem[] = [
    {
        name: "Value",
        data: [
            0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
            61, 27, 54, 43, 19, 46, 25, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62
        ],
    },
]

interface ColorOptionType {
    color: string;
}

interface ChartOptionsType {
    chart: {
        type: string;
        height: number;
        width: number;
        sparkline: {
            enabled: boolean;
        };
        dropShadow: {
            enabled: boolean;
            enabledOnSeries: number | undefined;
            top: number;
            left: number;
            blur: number;
            color: string;
            opacity: number;
        };
    };
    stroke: {
        show: boolean;
        curve: 'smooth' | string;
        lineCap: 'butt' | string;
        colors: string[] | undefined;
        width: number;
        dashArray: number;
    };
    fill: {
        gradient: {
            enabled: boolean;
        };
    };
    yaxis: {
        min: number;
        show: boolean;
        axisBorder: {
            show: boolean;
        };
    };
    xaxis: {
        axisBorder: {
            show: boolean;
        };
    };
    tooltip: {
        enabled: boolean;
    };
    colors: string[];
}



export const CryptoMarketCapOptions = ({ color }: { color: ColorOptionType[] }): ChartOptionsType => ({

    color,
    chart: {
        type: "line",
        height: 30,
        width: 120,
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
        },
    },
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false,
        },
    },
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
        },
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
    },
    tooltip: {
        enabled: false,
    },
    colors: [color],
    // colors: ["rgba(250, 75, 66, 1)"],
})

export const MarketcapData = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', rank: 1, price: '$35,876.29', marketCap: '$1.054B', volume: '+2.33%', icon: '../../../assets/images/crypto-currencies/square-color/Bitcoin.svg', chartId: 'bitcoin-chart', marketCapChange: '+280.30', CapChange: '(0.96%)', chartOptions: MarketcapOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: MarketcapSeries },
    { id: 2, name: 'Dash', symbol: 'DASH', rank: 50, price: '$112.34', marketCap: '$1.21B', volume: '+1.25%', icon: '../../../assets/images/crypto-currencies/square-color/Dash.svg', chartId: 'dashcoin-chart', marketCapChange: '-0.05 ', CapChange: '(-0.02%)', chartOptions: MarketcapOptions({ color: 'rgb(250, 75, 66)' }), chartSeries: MarketcapSeries },
    { id: 3, name: 'Ethereum', symbol: 'ETH', rank: 2, price: '$2,135.67', marketCap: '$250.87B', volume: '+3.12%', icon: '../../../assets/images/crypto-currencies/square-color/Ethereum.svg', chartId: 'etherium-chart', marketCapChange: '+5.42', CapChange: ' (2.21%)', chartOptions: MarketcapOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: MarketcapSeries },
];
export interface CryptoMarketCapType {
    id: number;
    name: string;
    marketCap: string;
    arrow: string;
    priceChange: string;
    price: string;
    volume?: string;
    arrow24: string;
    change24h: string;
    totalSupply: string;
    progress: boolean;
    progress1?: number;
    progress2?: number;
    image: string;
    chartOptions: ChartOptionsType;
    chartSeries: CryptoMarketCapSeriesItem;
}

// Crypto MarketCap
export const CryptoMarketCap: CryptoMarketCapType[] = [
    { id: 1, name: "Bitcoin (BTC)", marketCap: "$582.23B", arrow: "down", priceChange: '0.483%', price: "$29,948.80", volume: "$11.79B USD", arrow24: "up", change24h: "0.239%", totalSupply: "19.43M of (21M)", progress: true, progress1: 88, progress2: 12, image: "../../../assets/images/crypto-currencies/square-color/Bitcoin.svg", chartOptions: CryptoMarketCapOptions({ color: 'rgba(250, 75, 66, 1)' }), chartSeries: CryptoMarketCapSeries },
    { id: 2, name: "Ethereum (ETH)", marketCap: "$226.91B", arrow: "down", priceChange: '0.87%', price: "$1,895.96", volume: "$2.83B USD", arrow24: "down", change24h: "0.29%", totalSupply: "120M", progress: false, image: "../../../assets/images/crypto-currencies/square-color/Ethereum.svg", chartOptions: CryptoMarketCapOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: CryptoMarketCapSeries },
    { id: 3, name: "Golem (GLM)", marketCap: "$202.07M", arrow: "up", priceChange: '0.61%', price: "$1.201472", volume: "$2,112,645 USD", arrow24: "down", change24h: "34.96%", totalSupply: "1,000M", progress: true, progress1: 100, image: "../../../assets/images/crypto-currencies/square-color/Golem.svg", chartOptions: CryptoMarketCapOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: CryptoMarketCapSeries },
    { id: 4, name: "Dash (DASH)", marketCap: "$365.877M", arrow: "up", priceChange: '0.59%', price: "$32.13", volume: "$3.61M USD", arrow24: "up", change24h: "1.24%", totalSupply: "11.37M of (18.92M)", progress: true, progress1: 56, progress2: 44, image: "../../../assets/images/crypto-currencies/square-color/Dash.svg", chartOptions: CryptoMarketCapOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: CryptoMarketCapSeries },
    { id: 5, name: 'Litecoin (LTC)', marketCap: '$6.80B', arrow: "down", priceChange: '0.90%', price: '$92.98', arrow24: "up", change24h: '0.90%', totalSupply: '73.40M', volume: '$11.46B USD', progress: true, progress1: 100, image: '../../../assets/images/crypto-currencies/square-color/Litecoin.svg', chartOptions: CryptoMarketCapOptions({ color: 'rgba(250, 75, 66, 1)' }), chartSeries: CryptoMarketCapSeries },
    { id: 6, name: 'Ripple (XRP)', marketCap: '$42.48B', arrow: "up", priceChange: '0.01%', price: '$1.83', arrow24: "up", change24h: '0.01%', totalSupply: '52.54B of (100B)', volume: '$2.99B USD', progress: true, progress1: 52, progress2: 48, image: '../../../assets/images/crypto-currencies/square-color/Ripple.svg', chartOptions: CryptoMarketCapOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: CryptoMarketCapSeries },
    { id: 7, name: 'EOS', marketCap: '$85.2M', arrow: "down", priceChange: '0.61%', price: '$1.765957', arrow24: "down", change24h: '20.65%', totalSupply: '10.1B of (105B)', volume: '$116.91M USD', progress: true, progress1: 10, progress2: 90, image: '../../../assets/images/crypto-currencies/square-color/EOS.svg', chartOptions: CryptoMarketCapOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: CryptoMarketCapSeries },
    { id: 8, name: 'Bytecoin (BCN)', marketCap: '$6.2M', arrow: "down", priceChange: '25.24%', price: '$1.00039', arrow24: "down", change24h: '27.12%', totalSupply: '184.02B of (184.07B)', volume: '$6,184 USD', progress: true, progress1: 100, image: '../../../assets/images/crypto-currencies/square-color/Bytecoin.svg', chartOptions: CryptoMarketCapOptions({ color: 'rgba(250, 75, 66, 1)' }), chartSeries: CryptoMarketCapSeries },
    { id: 9, name: 'IOTA', marketCap: '$510.429M', arrow: "down", priceChange: '1.08%', price: '$1.184992', arrow24: "down", change24h: '1.08%', totalSupply: '2.78B', volume: '$7.50M USD', progress: false, image: '../../../assets/images/crypto-currencies/square-color/IOTA.svg', chartOptions: CryptoMarketCapOptions({ color: 'rgba(250, 75, 66, 1)' }), chartSeries: CryptoMarketCapSeries },
    { id: 10, name: 'Monero', marketCap: '$3.062B', arrow: "down", priceChange: '3.22%', price: '$165.76', arrow24: "down", change24h: '3.22%', totalSupply: '18.15M', volume: '$105.8M USD', progress: false, image: '../../../assets/images/crypto-currencies/square-color/Monero.svg', chartOptions: CryptoMarketCapOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: CryptoMarketCapSeries },
];