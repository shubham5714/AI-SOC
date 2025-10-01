import { ReactNode } from "react"

interface ColorStop {
    offset: number;
    color: string;
    opacity: number;
}

interface GradientSettings {
    colorStops: ColorStop[][];
}

export interface GradientChartType {
    color: string;
    gradientSettings: GradientSettings;
}

// Sales Statistics
export const SalesStatisticsSeries = [{
    name: 'Sales',
    data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29],
    type: "bar",
}, {
    name: 'Revenue',
    data: [46, 35, 101, 98, 44, 55, 57, 56, 55, 34, 79, 46],
    type: "bar",
}, {
    name: 'Profit',
    data: [26, 35, 41, 78, 34, 65, 27, 46, 37, 65, 49, 23],
    type: "bar",
}, {
    name: 'Customers',
    data: [20, 53, 11, 13, 48, 52, 78, 43, 47, 73, 45, 48],
    type: "area",
}]
export const SalesStatisticsOptions = {

    chart: {
        height: 300,
        type: "bar",
        toolbar: {
            show: false,
        },
        stacked: true,
        fontFamily: 'Nunito, sans-serif',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        endingShape: 'rounded',
        colors: ['transparent'],
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        axisBorder: {
            show: false,
        },
    },
    legend: {
        show: true,
        position: 'bottom',
        offsetY: 10,
        fontSize: "13px",
        markers: {
            size: 4,
            shape: 'circle',
        },
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    colors: ['var(--primary-color)', 'rgb(40, 200, 235)', 'rgb(133, 204, 65)', "var(--primary005)"],
    plotOptions: {
        bar: {
            columnWidth: "15%",
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'all',
            borderRadius: 2,
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val: string) {
                return "$ " + val + " thousands"
            }
        }
    }
}

// Visitors By Device
export const VisitorsByDeviceSeries = [4289, 3565, 2964, 1573]
export const VisitorsByDeviceOptions = {
    labels: ["Mobile", "Desktop", "Laptop", "Tablet"],
    chart: {
        height: 224,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: 'bottom',
        markers: {
            size: 4,
            shape: 'circle',
        },
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '86%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        fontFamily: "Montserrat, sans-serif",
                        offsetY: -5
                    },
                    value: {
                        show: true,
                        fontSize: '22px',
                        color: undefined,
                        offsetY: 5,
                        fontWeight: 600,
                        fontFamily: "Montserrat, sans-serif",
                        formatter: function (val: string) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total Visitors',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#495057',
                    }
                }
            }
        }
    },
    colors: ["var(--primary-color)", "rgba(244, 110, 244, 1)", "rgba(133, 204, 65, 1)", "rgba(40, 200, 235, 1)"],
}
type SelesCardDataSeriesType = {
    data: number[];
}[];

export const SelesCardDataSeries: SelesCardDataSeriesType = [
    {
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102],
    },
];
type SelesCardDataOptionsType = {
    chart: {
        height: number;
        type: string;
        fontFamily: string;
        foreColor: string;
        zoom: {
            enabled: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
    };
    tooltip: {
        enabled: boolean;
        theme: string;
        x: {
            show: boolean;
        };
        y: {
            title: {
                formatter: (seriesName: string) => string;
            };
        };
        marker: {
            show: boolean;
        };
    };
    dataLabels: {
        enabled: boolean;
    };
    stroke: {
        curve: string;
        width: number[];
    };
    fill: {
        type: string;
        gradient: {
            opacityFrom: number;
            opacityTo: number;
            stops: number[];
            colorStops: {
                offset: number;
                color: string;
                opacity?: number;
            }[];
        };
    };
    title: {
        text?: string;
    };
    grid: {
        borderColor: string;
    };
    xaxis: {
        crosshairs: {
            show: boolean;
        };
    };
    colors: string[];
};

export const SelesCardDataOptions = ({ color, gradientSettings }: GradientChartType): SelesCardDataOptionsType => ({
    chart: {
        height: 40,
        type: 'area',
        fontFamily: 'Montserrat, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName: string) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [1.5],
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            colorStops: gradientSettings.colorStops,
        },
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: [color]
})


const RevenueIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="72" x2="128" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="128" y1="168" x2="128" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /></svg>
const CustomersIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="128" cy="144" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><path d="M72,216a65,65,0,0,1,112,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><path d="M164,72.55a32,32,0,1,1,39.63,45.28c14.33,3.1,27.89,14.84,36.4,26.17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><path d="M16,144c8.51-11.33,22.06-23.07,36.4-26.17A32,32,0,1,1,92,72.55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /></svg>
const TransactionsIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="80" y1="100" x2="176" y2="100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="80" y1="140" x2="176" y2="140" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><path d="M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /></svg>
const ProductsIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="128" y1="129.09" x2="128" y2="231.97" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><path d="M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><polyline points="81.56 48.31 176 100 176 152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /></svg>

const ChartGradientSettings = {
    Revenue: {
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
    Customers: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: 'rgba(133, 204, 65, 0.4)',
                    opacity: 1
                },
                {
                    offset: 60,
                    color: 'rgba(133, 204, 65, 0.2)',
                    opacity: 1
                },
                {
                    offset: 100,
                    color: 'rgba(133, 204, 65, 0)',
                    opacity: 1
                }
            ],
        ]
    },
    Transactions: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: 'rgba(40, 200, 235, 0.4)',
                    opacity: 1
                },
                {
                    offset: 60,
                    color: 'rgba(40, 200, 235, 0.2)',
                    opacity: 1
                },
                {
                    offset: 100,
                    color: 'rgba(40, 200, 235, 0)',
                    opacity: 1
                }
            ],
        ]
    },
    Products: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: 'rgba(244, 110, 244, 0.4)',
                    opacity: 1
                },
                {
                    offset: 60,
                    color: 'rgba(244, 110, 244, 0.2)',
                    opacity: 1
                },
                {
                    offset: 100,
                    color: 'rgba(244, 110, 244, 0)',
                    opacity: 1
                }
            ],
        ]
    },
}

export interface SelesCardDataType {
    id: number
    title: string
    description: string
    iconBg: string
    percentage: string
    trendIcon: string
    svgIcon: ReactNode
    chartOptions: SelesCardDataOptionsType
    chartSeries: SelesCardDataSeriesType
}

export const SelesCardData: SelesCardDataType[] = [
    { id: 1, title: "$315,244", description: "Total Alerts", iconBg: "primary", percentage: "12%", trendIcon: "up", svgIcon: RevenueIcon, chartOptions: SelesCardDataOptions({ color: 'var(--primary-color)', gradientSettings: ChartGradientSettings.Revenue }), chartSeries: SelesCardDataSeries },
    { id: 2, title: "153,432", description: "Total Customers", iconBg: "success", percentage: "5%", trendIcon: "down", svgIcon: CustomersIcon, chartOptions: SelesCardDataOptions({ color: 'rgb(133, 204, 65)', gradientSettings: ChartGradientSettings.Customers }), chartSeries: SelesCardDataSeries },
    { id: 3, title: "75,275", description: "Total Transactions", iconBg: "info", percentage: "11%", trendIcon: "up", svgIcon: TransactionsIcon, chartOptions: SelesCardDataOptions({ color: 'rgb(40, 200, 235)', gradientSettings: ChartGradientSettings.Transactions }), chartSeries: SelesCardDataSeries },
    { id: 4, title: "6,26,532", description: "Total Products", iconBg: "secondary", percentage: "6.5%", trendIcon: "up", svgIcon: ProductsIcon, chartOptions: SelesCardDataOptions({ color: 'rgb(244, 110, 244)', gradientSettings: ChartGradientSettings.Products }), chartSeries: SelesCardDataSeries },
];

// Orders Overview
interface OverviewProgressType {
    id: number
    color: string
    value: number
}
export const OverviewProgress: OverviewProgressType[] = [
    { id: 1, color: 'primary', value: 32 },
    { id: 2, color: 'info', value: 26 },
    { id: 3, color: 'success', value: 20 },
    { id: 4, color: 'secondary', value: 22 },
];

interface OrdersOverviewType {
    id: number
    status: string
    icon: string
    bgClass: string
    orders: string
    change: string
    arrow: string
    amount: string
    tdClass?: string
}
export const OrdersOverview: OrdersOverviewType[] = [
    { id: 1, status: "Delivered", icon: "box-3-fill", bgClass: "primary", orders: "12,864 Orders", change: "12.6%", arrow: "down", amount: "$5,11,754" },
    { id: 2, status: "Pending", icon: "survey-fill", bgClass: "secondary", orders: "15,875 Orders", change: "2.76%", arrow: "up", amount: "$1,234.78" },
    { id: 3, status: "Cancelled", icon: "close-circle-fill", bgClass: "orange", orders: "32,190 Orders", change: "4.76%", arrow: "down", amount: "$1,234.78" },
    { id: 4, status: "Returned", icon: "caravan-fill", bgClass: "info", orders: "19,765 Orders", change: "11.6%", arrow: "up", amount: "$14,867", tdClass: "border-bottom-0" },
];

// Recent Orders
export interface RecentOrdersType {
    id: number
    image: string
    name: string
    brand: string
    category: string
    status: string
    statusClass: string
    customername: string
    email: string
    quantity: number
    date: string
    price: string
    checked: boolean;
    trclass?: string;
}
export const RecentOrders: RecentOrdersType[] = [
    { id: 1, image: "../../assets/images/ecommerce/jpg/1.jpg", name: "Elegance Wall Clock", brand: "TechBrand", category: "Home Decor", status: "Pending", statusClass: "primary", customername: "John Smith", email: "johnsmith@mail.com", quantity: 8, date: "01 Dec 2024", price: "$1,200", checked: false },
    { id: 2, image: "../../assets/images/ecommerce/jpg/2.jpg", name: "StrideX Pro", brand: "WearCo", category: "Footwear", status: "Completed", statusClass: "success", customername: "Alice Brown", email: "aliceb@mail.com", quantity: 15, date: "29 Nov 2024", price: "$750", checked: true },
    { id: 3, image: "../../assets/images/ecommerce/jpg/3.jpg", name: "EduCarry 360", brand: "DecorArts", category: "School Supplies", status: "Shipped", statusClass: "secondary", customername: "Leo Phillip", email: "leophillip@mail.com", quantity: 10, date: "03 Dec 2024", price: "$500", checked: true },
    { id: 4, image: "../../assets/images/ecommerce/jpg/4.jpg", name: "BloomCraft Pot", brand: "FurniWorld", category: "Garden & Decor", status: "Pending", statusClass: "warning", customername: "Michael Green", email: "mgreen@mail.com", quantity: 3, date: "30 Nov 2024", price: "$2,400", checked: false },
    { id: 5, trclass: 'custom-border', image: "../../assets/images/ecommerce/jpg/5.jpg", name: "Leather Wallet", brand: "StylePro", category: "Accessories", status: "In Progress", statusClass: "danger", customername: "BrewBuddy Mug", email: "Kitchen & Dining", quantity: 20, date: "02 Dec 2024", price: "$600", checked: false, },
];

// Recent Transactions
interface RecentTransactionsType {
    id: number
    logo: string
    name: string
    method: string
    amount: string
    date: string
    tdClass?: string
}
export const RecentTransactions: RecentTransactionsType[] = [
    { id: 1, logo: "../../assets/images/media/payment-gateways/paypal.png", name: "Paypal ****2783", method: "Online Transaction", amount: "$1,234.78", date: "Nov 22, 2024" },
    { id: 2, logo: "../../assets/images/media/payment-gateways/wallet.png", name: "Digital Wallet", method: "Online Transaction", amount: "$623.99", date: "Nov 22, 2024" },
    { id: 3, logo: "../../assets/images/media/payment-gateways/maestro.png", name: "Mastro Card ****7893", method: "Card Payment", amount: "$1,324", date: "Nov 21, 2024" },
    { id: 4, logo: "../../assets/images/media/payment-gateways/stripe.png", name: "Stripe", method: "Online Payment", amount: "$1,123.49", date: "Nov 20, 2024" },
    { id: 5, logo: "../../assets/images/media/payment-gateways/visa-card.png", name: "Visa Card ****2563", method: "Card Payment", amount: "$1,289", date: "Nov 18, 2024", tdClass: "border-bottom-0" },
]

// Visitors By Device
const MobileIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><circle cx="128" cy="68" r="16" /></svg>
const DesktopIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="32" y="48" width="192" height="140" rx="16" transform="translate(256 236) rotate(180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="160" y1="224" x2="96" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="32" y1="148" x2="224" y2="148" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="128" y1="192" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /></svg>
const LaptopIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M40,168V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16v96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><path d="M24,168H232a0,0,0,0,1,0,0v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V168a0,0,0,0,1,0,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="144" y1="96" x2="112" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /></svg>
const TabletIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="48" y1="72" x2="208" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="48" y1="184" x2="208" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /></svg>

interface VisitorsByDeviceType {
    id: number
    icon: ReactNode
    title: string
    value: string
    change: string
    arrow: string
    colorClass: string
}
export const VisitorsByDevice: VisitorsByDeviceType[] = [
    { id: 1, icon: MobileIcon, title: "Mobile", value: "4,289", change: "6.85%", arrow: "up", colorClass: "primary" },
    { id: 2, icon: DesktopIcon, title: "Desktop", value: "3,565", change: "3.54%", arrow: "up", colorClass: "secondary" },
    { id: 3, icon: LaptopIcon, title: "Laptop", value: "2,964", change: "0.53%", arrow: "down", colorClass: "success" },
    { id: 4, icon: TabletIcon, title: "Tablet", value: "1,573", change: "8.25%", arrow: "up", colorClass: "info" },
];

// Top Customers
interface TopCustomersType {
    id: number
    avatar: string
    name: string
    country: string
    amount: string
}
export const TopCustomers: TopCustomersType[] = [
    { id: 1, avatar: "../../assets/images/faces/14.jpg", name: "John Doe", country: "United States", amount: "$1,425" },
    { id: 2, avatar: "../../assets/images/faces/1.jpg", name: "Maria Gonzalez", country: "Spain", amount: "$1,356" },
    { id: 3, avatar: "../../assets/images/faces/9.jpg", name: "Ahmed Al-Farsi", country: "UAE", amount: "$1,276" },
    { id: 4, avatar: "../../assets/images/faces/15.jpg", name: "Akira Tanaka", country: "Japan", amount: "$1,055" },
    { id: 5, avatar: "../../assets/images/faces/4.jpg", name: "Priya Sharma", country: "India", amount: "$946" },
];

// Top Country Sales
interface CountrySalesType {
    id: number
    flag: string
    name: string
    progress: number
    bgColor: string
}
export const CountrySales: CountrySalesType[] = [
    { id: 1, flag: "../../assets/images/flags/us_flag.jpg", name: "United States", progress: 45, bgColor: "primary" },
    { id: 2, flag: "../../assets/images/flags/italy_flag.jpg", name: "Italy", progress: 67, bgColor: "info" },
    { id: 3, flag: "../../assets/images/flags/spain_flag.jpg", name: "Spain", progress: 52, bgColor: "success" },
    { id: 4, flag: "../../assets/images/flags/germany_flag.jpg", name: "Germany", progress: 32, bgColor: "secondary" },
    { id: 5, flag: "../../assets/images/flags/uae_flag.jpg", name: "UAE", progress: 80, bgColor: "warning" },
    { id: 6, flag: "../../assets/images/flags/mexico_flag.jpg", name: "Mexico", progress: 39, bgColor: "danger" }
];

// Recent Activity
const content1 = <div className="mb-1">Acquired <span className="fw-medium text-primary">3,156</span> New Products</div>
const content2 = <div className="mb-1">Updated <span className="fw-medium text-secondary">Ecommerce</span> Offer Details</div>
const content3 = <div className="mb-1">New Categories Added <span className="fw-medium text-success">Clothing & Sports</span></div>
const content4 = <div className="mb-1">Resolved <span className="fw-medium text-warning">#32982</span> Invoice Issue</div>
const content5 = <div className="mb-1">Sent a invoice to <span className="fw-medium text-danger">jhon@gmail.com</span> $15,000</div>
const content6 = <div className="mb-1">Received <span className="fw-medium text-teal">457</span> Positive Reviews</div>

interface notificationsType {
    id: number
    content: ReactNode
    timestamp: string
}

export const notifications: notificationsType[] = [
    { id: 1, content: content1, timestamp: "25 mins ago", },
    { id: 2, content: content2, timestamp: "4 hrs ago", },
    { id: 3, content: content3, timestamp: "Yesterday at 12:47PM", },
    { id: 4, content: content4, timestamp: "24 Dec at 2:45PM", },
    { id: 5, content: content5, timestamp: "22 Dec at 10:15AM", },
    { id: 6, content: content6, timestamp: "21 Dec at 11:55AM", },
];

