import { ReactNode } from "react"
import { ColorOptionType } from "../widgetsdata"
import { SeriesType } from "./crmdata"

// Your Balance
export const BalanceSeries = [{
    name: 'This Year',
    data: [
        [0, 48.11708650372481],
        [1, 44.83834104995953],
        [2, 45.727409628208974],
        [3, 44.69213146554142],
        [4, 44.92113232835135],
        [5, 44.200874587557415],
        [6, 41.750527715312444],
        [7, 44.84511185791557],
        [8, 46.04672992189592],
        [9, 45.9480092098883],
        [10, 46.9249480823427],
        [11, 43.600609487921346],
        [12, 40.29988975207692],
        [13, 42.03310106988357],
        [14, 39.457750445961125],
        [15, 40.540159797957294],
        [16, 37.277912393740806],
        [17, 41.43887402339309],
        [18, 39.47430428214318],
        [19, 36.91189415889479],
        [20, 36.42847097453014],
        [21, 36.96844325047937],
        [22, 35.54647151074562],
        [23, 32.998974290143025],
        [24, 30.43526314490385],
        [25, 31.14797888879888],
        [26, 27.20589032036549],
        [27, 25.777592542626508],
        [28, 30.052675048145275],
        [29, 30.92837408600937],
        [30, 34.190241658736014],
        [31, 37.57718922878679],
        [32, 41.18083316913268],
        [33, 41.27110666976231],
        [34, 36.33819281943194],
        [35, 37.39239238651191],
        [36, 37.046485292242615],
        [37, 34.594801853250495],
        [38, 31.488044618299227],
        [39, 34.69970813498227],
        [40, 39.66083111892072],
        [41, 40.203292838001616],
        [42, 36.089709320758985],
        [43, 40.31141091738469],
        [44, 44.170004784953846],
        [45, 48.84998014705778],
        [46, 43.93624560052546],
        [47, 40.62473022491363],
        [48, 39.154068738786684],
        [49, 42.803089612673666],
        [50, 40.6511024461858],
        [51, 38.34516630158569],
        [52, 39.546885205159555],
        [53, 42.50715860274628],
        [54, 38.1455129028495],
        [55, 33.87761157196474],
        [56, 37.30125615378047],
        [57, 38.799409423316405],
        [58, 39.185431079286275],
        [59, 43.32737024276462],
        [60, 41.52185070435002],
        [61, 41.613587244137946],
        [62, 44.23763577861365],
        [63, 44.91439321362589],
        [64, 42.18546432611939],
        [65, 41.0624926886062],
        [66, 44.24453261527582],
        [67, 47.34794952778721],
        [68, 48.10833243543891],
        [69, 43.640893412371504],
        [70, 40.614056030997666],
        [71, 42.9374730102888],
        [72, 46.1355421298619],
        [73, 48.995759760197956],
        [74, 52.19926195857424],
        [75, 49.2778849176981],
        [76, 52.46274689069702],
        [77, 56.74969793098863],
        [78, 60.92623317241021],
        [79, 57.70969775380601],
        [80, 57.35168105637668],
    ],
    type: 'area'
}]
export const BalanceOPtions = {
    chart: {
        height: 120,
        sparkline: {
            enabled: true
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '100%'
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: [1.5, 1.5],
        dashArray: [0, 0],
    },
    grid: {
        borderColor: 'transparent',
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            type: "horizontal",
            colorStops: [
                [
                    {
                        offset: 0,
                        color: 'var(--primary04)',
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: 'var(--primary02)',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(121, 97, 245, 0)',
                        opacity: 1
                    }
                ],
            ]
        },
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
    colors: ["var(--primary-color)"],
    tooltip: {
        enabled: false,
    }
}

// NFTs Statistics
export const NFTsStatisticsSeries = [{
    name: "Price",
    data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
}, {
    name: "Volume",
    data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
}]
export const NFTsStatisticsOptions = {
    chart: {
        height: 310,
        type: 'bar',
        zoom: {
            enabled: false
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "30%",
            borderRadius: 3,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: "top",
        offsetX: 0,
        offsetY: 8,
        markers: {
            width: 5,
            height: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
    yaxis: {
        title: {
            text: 'Statistics',
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90
        }
    }
}

// Trending Creators
export const TrendingCreatorsSeries = ({ series }: SeriesType) => ([{
    name: 'Value',
    data: series
}])
export const TrendingCreatorsOptions = ({ color }: ColorOptionType) => ({
    chart: {
        type: 'line',
        height: 20,
        width: 80,
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
    tooltip: {
        enabled: false
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
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
            enabled: false
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
        show: false,
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },
    colors: [color]
})


export const TrendingCreators = [
    { id: 1, name: 'Alicia Smith', image: '../../assets/images/faces/5.jpg', amount: '$9,223.46', trendingId: 'trending-creator1', chartOptions: TrendingCreatorsOptions({ color: 'var(--primary-color)' }), chartSeries: TrendingCreatorsSeries({ series: [54, 38, 56, 24, 65] }) },
    { id: 2, name: 'Alex Carey', image: '../../assets/images/faces/15.jpg', amount: '$17,239.09', trendingId: 'trending-creator2', chartOptions: TrendingCreatorsOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: TrendingCreatorsSeries({ series: [24, 54, 15, 42, 16] }) },
    { id: 3, name: 'Emiley Jack', image: '../../assets/images/faces/4.jpg', amount: '$5,902.83', trendingId: 'trending-creator3', chartOptions: TrendingCreatorsOptions({ color: 'rgb(40, 200, 235)' }), chartSeries: TrendingCreatorsSeries({ series: [15, 42, 16, 44, 24] }) },
    { id: 4, name: 'Jessica', image: '../../assets/images/faces/3.jpg', amount: '$3,993.09', trendingId: 'trending-creator4', chartOptions: TrendingCreatorsOptions({ color: 'rgb(244, 110, 244)' }), chartSeries: TrendingCreatorsSeries({ series: [54, 38, 56, 24, 65] }) },
    { id: 5, name: 'Toni Stark', image: '../../assets/images/faces/11.jpg', amount: '$12,124.34', trendingId: 'trending-creator5', chartOptions: TrendingCreatorsOptions({ color: 'rgb(250, 182, 50)' }), chartSeries: TrendingCreatorsSeries({ series: [15, 42, 16, 44, 24] }) },
    { id: 6, tdClass: "border-bottom-0", name: 'Kiara May', image: '../../assets/images/faces/2.jpg', amount: '$2,534.56', trendingId: 'trending-creator6', chartOptions: TrendingCreatorsOptions({ color: 'rgb(250, 75, 66)' }), chartSeries: TrendingCreatorsSeries({ series: [15, 42, 16, 44, 24] }) },
];

// Live Auction
export interface LiveAuctionType {
    id: number;
    image: string;
    title: string;
    artist: string;
    currentBid: string;
    timeRemaining: string;
    previousBid: string;
    src: string;
    topBidderAmount: string;
    color: string;
    tdClass?: string;
};

export const LiveAuction: LiveAuctionType[] = [
    { id: 1, image: '../../assets/images/nft-images/2.jpg', title: 'EtherEden', artist: '@Eden Pixelist', currentBid: '1.27 ETH', color: "primary", timeRemaining: '1hr 45min 32sec', previousBid: '1.75 ETH', src: '../../assets/images/faces/1.jpg', topBidderAmount: '2.25 ETH', },
    { id: 2, image: '../../assets/images/nft-images/3.jpg', title: 'CryptoCraze', artist: '@TechnoTrendsetter', currentBid: '1.5 ETH', color: "orange", timeRemaining: '1hr 45min 32sec', previousBid: '2.45 ETH', src: '../../assets/images/faces/11.jpg', topBidderAmount: '3.75 ETH', },
    { id: 3, image: '../../assets/images/nft-images/6.jpg', title: 'Cosmic Canvases', artist: '@AstroArtisan', currentBid: '1.75 ETH', color: "secondary", timeRemaining: '2hr 15min 10sec', previousBid: '2.25 ETH', src: '../../assets/images/faces/5.jpg', topBidderAmount: '5.65 ETH', },
    { id: 4, image: '../../assets/images/nft-images/7.jpg', title: 'Mystic Mosaics', artist: '@Enigma Weaver', currentBid: '2.00 ETH', color: "success", timeRemaining: '3hr 30min 45sec', previousBid: '3.75 ETH', src: '../../assets/images/faces/13.jpg', topBidderAmount: '6.45 ETH', },
    { id: 5, tdClass: "border-bottom-0", image: '../../assets/images/nft-images/4.jpg', title: 'Virtual Voyages', artist: '@Binary Navigator', currentBid: '1.25 ETH', color: "info", timeRemaining: '0hr 50min 20sec', previousBid: '1.35 ETH', src: '../../assets/images/faces/7.jpg', topBidderAmount: '2.15 ETH', },
];

const AssetsIcon = <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"></path></svg>
const ValueIcon = <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none"></path><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"></path><rect height="2" width="6" x="9" y="7"></rect><rect height="2" width="2" x="16" y="7"></rect><rect height="2" width="6" x="9" y="10"></rect><rect height="2" width="2" x="16" y="10"></rect></g></svg>
const SalesIcon = <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><g><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z"></path><circle cx="6.5" cy="6.5" r="1.5"></circle></g></g></svg>
const RevenueIcon = <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z"></path></g></svg>

export interface CardItem {
    id: number;
    title: string;
    value: string;
    percentageChange: string;
    iconColor: string;
    iconAlt: ReactNode;
    trend: string;
};

export const NFTcardData: CardItem[] = [
    { id: 1, title: 'Total Assets', value: '543', percentageChange: '0.25%', iconColor: 'primary', iconAlt: AssetsIcon, trend: 'up', },
    { id: 2, title: 'Total Value', value: '$5,322', percentageChange: '0.14%', iconColor: 'success', iconAlt: ValueIcon, trend: 'down', },
    { id: 3, title: 'Total Sales', value: '662', percentageChange: '1.57%', iconColor: 'info', iconAlt: SalesIcon, trend: 'up', },
    { id: 4, title: 'Total Revenue', value: '$7,977', percentageChange: '0.34%', iconColor: 'secondary', iconAlt: RevenueIcon, trend: 'up', },
];

// Hot Bids
export interface HotBidsType {
    id: number,
    image: string;
    title: string;
    time: string;
    likes: string;
    src: string;
    name: string;
    handle: string;
    bid: string;
}
export const HotBids: HotBidsType[] = [
    { id: 1, image: "../../assets/images/nft-images/2.jpg", title: "Vibrant Spec Cat NFT", time: "07hrs : 33m : 45s", likes: "1.43k", src: "../../assets/images/faces/10.jpg", name: "Kelinnies NFT", handle: "@kelinnies05", bid: ' 0.045ETH ' },
    { id: 2, image: "../../assets/images/nft-images/4.jpg", title: "Abstract Digital Art", time: "07hrs : 33m : 45s", likes: "1.43k", src: "../../assets/images/faces/1.jpg", name: "Manistics NFT", handle: "@manistics454", bid: ' 0.015ETH ' },
    { id: 3, image: "../../assets/images/nft-images/5.jpg", title: "Majestic Alpha Wolf", time: "07hrs : 33m : 45s", likes: "1.43k", src: "../../assets/images/faces/11.jpg", name: "Haridar NFT", handle: "@haridar687", bid: ' 0.045ETH ' },
];

// Featured Collections
interface UserData {
    id: number
    image: string;
    name: string;
    handle: string;
    src: string[];
    count?: string;
    countColor?: string;
}
export const Collections: UserData[] = [
    { id: 1, image: "../../assets/images/nft-images/3.jpg", name: "Meesthi Si", handle: "@meesthi05", src: ["../../assets/images/faces/2.jpg",], count: '+2', countColor: 'secondary' },
    { id: 2, image: "../../assets/images/nft-images/4.jpg", name: "Oorichimaru lo", handle: "@ooro001", src: ["../../assets/images/faces/12.jpg"], },
    { id: 3, image: "../../assets/images/nft-images/5.jpg", name: "Moniket Ms", handle: "@moniket98", src: ["../../assets/images/faces/15.jpg"], count: '+1', countColor: 'success' },
    { id: 4, image: "../../assets/images/nft-images/6.jpg", name: "SakuraYM", handle: "@sakura903", src: ["../../assets/images/faces/7.jpg"], },
    { id: 5, image: "../../assets/images/nft-images/7.jpg", name: "Sasuke Uchiha", handle: "@sasuke777", src: ["../../assets/images/faces/5.jpg"], count: '+3', countColor: 'info' },
    { id: 6, image: "../../assets/images/nft-images/8.jpg", name: "Tomarko Ki", handle: "@tomarko98", src: ["../../assets/images/faces/6.jpg"], }
];

// Top Sellers
interface TopSellersType {
    id: number;
    name: string;
    username: string;
    avatarColor: string;
    src: string;
    isVerified: boolean;
    isFollowed: boolean;
}
export const TopSellers: TopSellersType[] = [
    { id: 1, name: "Kakashi Si", username: "@lunalogic011", avatarColor: "pink", src: "../../assets/images/faces/10.jpg", isVerified: true, isFollowed: true, },
    { id: 2, name: "NFTNebula", username: "@synthwavesage", avatarColor: "info", src: "../../assets/images/faces/2.jpg", isVerified: false, isFollowed: true, },
    { id: 3, name: "PixelPioneer", username: "@binarybard89", avatarColor: "danger", src: "../../assets/images/faces/3.jpg", isVerified: true, isFollowed: false, },
    { id: 4, name: "VirtualVisionary", username: "@auroracode712", avatarColor: "warning", src: "../../assets/images/faces/7.jpg", isVerified: true, isFollowed: false, },
    { id: 5, name: "BitByteBrush", username: "@maxbyte98", avatarColor: "primary", src: "../../assets/images/faces/9.jpg", isVerified: false, isFollowed: true, },
    { id: 6, name: "NoveltyNurturer", username: "@celestenova89", avatarColor: "success", src: "../../assets/images/faces/5.jpg", isVerified: false, isFollowed: false, },
    { id: 7, name: "RoboRhythms", username: "@circuitmaestro", avatarColor: "primary", src: "../../assets/images/faces/8.jpg", isVerified: true, isFollowed: true, },
];

// Recent Activities
interface RecentActivitiesType {
    id: number;
    title: string;
    description: string;
    timeAgo: string;
    image: string;
    username: string
    sub?: boolean
}
export const RecentActivities: RecentActivitiesType[] = [
    { id: 1, title: 'Auction started For', username: 'Luminous Petal', description: 'Monisteris (@monisteris547)', timeAgo: '5 mins', image: '../../assets/images/nft-images/2.jpg', },
    { id: 2, title: 'Bid placed on ', username: 'Radium Radiance', description: 'Isther (@isther457)', timeAgo: '2 Days', image: '../../assets/images/nft-images/3.jpg', sub: true },
    { id: 3, title: 'Artwork sold to', username: ' @Lanisis', description: 'Rokonis (@rokonis658)', timeAgo: '3 Days', image: '../../assets/images/nft-images/4.jpg', },
    { id: 4, title: 'New Arrivals from New one', username: ' @kakashi', description: 'Kanith (@kanith6589)', timeAgo: '3 Days', image: '../../assets/images/nft-images/7.jpg', },
];
