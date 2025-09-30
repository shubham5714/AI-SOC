import { ReactNode } from "react";

// Order Status
export const OrderStatusSeries = [{
    name: "Paid",
    type: "column",
    data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
}, {
    name: "Unpaid",
    type: "area",
    data: [44, 55, 41, 42, 22, 43, 21, 35, 56, 27, 43, 27]
}, {
    name: "Refunded",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
}]
export const OrderStatusOptions = {
    chart: {
        height: 300,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: [0, 0, 2],
        dashArray: [0, 0, 4],
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    xaxis: {
        axisBorder: {
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "10%",
            borderRadius: 3
        }
    },
    legend: {
        position: "top"
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    colors: ['var(--primary-color)', "rgba(244, 110, 244, 0.05)", 'rgb(133, 204, 65)'],
    tooltip: {
        theme: "dark",
    },
}

// Total Orders
export const TotalOrdersSeries = [92]
export const TotalOrdersOptions = {
    chart: {
        height: 295,
        type: 'radialBar',
        responsive: 'true',
        offsetX: 0,
        offsetY: 15,
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            size: 120,
            imageWidth: 50,
            imageHeight: 50,
            track: {
                strokeWidth: '97%',
                // strokeWidth: "0",
            },
            dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                bottom: 0,
                blur: 3,
                opacity: 0.5
            },
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 30,
                },
                hollow: {
                    size: "60%"
                },
                value: {
                    offsetY: -10,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val: string) {
                        return val + "%";
                    }
                }
            }
        }
    },
    colors: ['var(--primary-color)'],
    fill: {
        type: "solid",
        gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ["#b94eed"],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        dashArray: 3
    },
    labels: ["Orders"]
}

// Top Selling Categories
export const TopSellingSeries = [{
    name: 'Sales',
    data: [650, 770, 840, 890, 1100, 1380]
}]
export const TopSellingOptions = {
    chart: {
        height: 310,
        type: 'bar',
        events: {
            click: function (chart: number, w: number, e: number) {
            }
        },
        toolbar: {
            show: false,
        }
    },
    colors: ['var(--primary-color)', 'rgba(133, 204, 65, 1)', 'rgba(40, 200, 235, 1)', 'rgba(244, 110, 244, 1)', 'rgba(250, 182, 50, 1)', 'rgba(250, 75, 66, 1)'],
    plotOptions: {
        bar: {
            barHeight: '15%',
            distributed: true,
            horizontal: true,
            borderRadius: 3,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    xaxis: {
        categories: [
            ['Electronics'],
            ['Fashion'],
            ['Kitchen Appliances'],
            ['Beauty Products'],
            ['Books'],
            ['Toys and Games'],
        ],
        labels: {
            show: false,
            style: {
                fontSize: '12px'
            },
        }
    },
    yaxis: {
        offsetX: 30,
        offsetY: 30,
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 500,
                cssClass: 'apexcharts-yaxis-label',
            },
            offsetY: 8,
        }
    },
    tooltip: {
        enabled: true,
        shared: false,
        intersect: true,
        x: {
            show: false
        },
        theme: "dark",
    },
}

// Recent Orders
interface RecentOrdersType {
    id: number
    orderId: string;
    name: string;
    avatar: string;
    amount: string;
    tdClass?: string;
};
export const RecentOrders: RecentOrdersType[] = [
    { id: 1, orderId: '#SPK781', name: 'Priceton Gray', avatar: '../../assets/images/faces/15.jpg', amount: '$2,145.90', },
    { id: 2, orderId: '#SPK782', name: 'Elsa Urena', avatar: '../../assets/images/faces/4.jpg', amount: '$2,145.90', },
    { id: 3, orderId: '#SPK783', name: 'Gloria', avatar: '../../assets/images/faces/5.jpg', amount: '$2,145.90', },
    { id: 4, orderId: '#SPK784', name: 'Priya', avatar: '../../assets/images/faces/6.jpg', amount: '$2,145.90', },
    { id: 5, orderId: '#SPK785', name: 'Adam Smith', avatar: '../../assets/images/faces/11.jpg', amount: '$2,145.90', tdClass: "border-bottom-0" },
];

// Traffic Sources
interface TrafficSourcesType {
    id: number;
    name: string;
    logo: string;
    progress: number;
    progressColor: string;
    visits: string;
    trend: string;
    tdClass?: string
};
export const TrafficSources: TrafficSourcesType[] = [
    { id: 1, name: 'Chrome', logo: '../../assets/images/browsers/chrome.png', progress: 78, progressColor: 'secondary', visits: '15,248', trend: 'up', },
    { id: 2, name: 'Safari', logo: '../../assets/images/browsers/safari.png', progress: 56, progressColor: 'info', visits: '22,945', trend: 'up', },
    { id: 3, name: 'Opera', logo: '../../assets/images/browsers/opera.png', progress: 62, progressColor: 'success', visits: '32,453', trend: 'down', },
    { id: 4, name: 'Edge', logo: '../../assets/images/browsers/edge.png', progress: 45, progressColor: 'primary', visits: '9,886', trend: 'up', },
    { id: 5, name: 'Firefox', logo: '../../assets/images/browsers/firefox.png', progress: 65, progressColor: 'warning', visits: '13,345', trend: 'up', tdClass: "border-bottom-0" },
];

// Newly Added Products
export interface AddedProductsType {
    id: number
    orderId: string;
    image: string;
    name: string;
    category: string;
    discount: string;
    price: string;
    status: string;
    statusClass: string;
    date: string;
    trClass?: string;
};

export const AddedProducts: AddedProductsType[] = [
    { id: 1, orderId: '#1547988', image: '../../assets/images/ecommerce/png/12.png', name: 'Digital Camera', category: 'Gadgets', discount: '40%', price: '$241.08', status: 'Published', statusClass: 'success', date: '15-05-2024', },
    { id: 2, orderId: '#1415023', image: '../../assets/images/ecommerce/png/6.png', name: 'Stylish Shoe', category: 'Foot Wear', discount: '30%', price: '$1,489.00', status: 'Pending', statusClass: 'warning', date: '20-05-2024', },
    { id: 3, orderId: '#4578162', image: '../../assets/images/ecommerce/png/10.png', name: 'Smart Watch', category: 'Gadgets', discount: '10%', price: '$2,457.08', status: 'Saved as Draft', statusClass: 'info', date: '06-02-2024', },
    { id: 4, orderId: '#4578954', image: '../../assets/images/ecommerce/png/32.png', name: 'Alarm Clock', category: 'Home Decor', discount: '20%', price: '$359.99', status: 'Published', statusClass: 'success', date: '26-01-2024', },
    { id: 5, trClass: 'custom-border', orderId: '#8745814', image: '../../assets/images/ecommerce/png/28.png', name: 'Running Shoes', category: 'Athletic Footwear', discount: '0%', price: '$568.87', status: 'Published', statusClass: 'success', date: '24-03-2024', },
];

const SalesIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM239.86,98.11,226,202.12A16,16,0,0,1,210.13,216H45.87A16,16,0,0,1,30,202.12l-13.87-104A16,16,0,0,1,32,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H224a16,16,0,0,1,15.85,18.11ZM89.63,80h76.74L128,36.15ZM224,96H32L45.87,200H210.13Zm-51.16,23.2-5.6,56A8,8,0,0,0,174.4,184a7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.16-8.76Z"></path></svg>
const RevenueIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M168,56a8,8,0,0,1,8-8h16V32a8,8,0,0,1,16,0V48h16a8,8,0,0,1,0,16H208V80a8,8,0,0,1-16,0V64H176A8,8,0,0,1,168,56Zm62.56,54.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.66,79.66,0,0,1,36.06,28.75A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Zm0,64a87.57,87.57,0,0,0,53.92-18.5,64,64,0,0,0-107.84,0A87.57,87.57,0,0,0,128,216Z"></path></svg>
const OrderValueIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>
const OrdersIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path></svg>

export interface DashboardCard {
    id: number;
    title: string;
    value: string;
    change: string;
    arrow: string;
    iconBg: string;
    icon: ReactNode;
};
export const DashboardCardData: DashboardCard[] = [
    { id: 1, title: 'Total Sales', value: '15,432', change: '5.1%', arrow: 'up', iconBg: 'primary', icon: SalesIcon, },
    { id: 2, title: 'Revenue', value: '$245,147', change: '0.6%', arrow: 'up', iconBg: 'success', icon: RevenueIcon, },
    { id: 3, title: 'Avg. Order Value', value: '$120', change: '1.08%', arrow: 'down', iconBg: 'info', icon: OrderValueIcon, },
    { id: 4, title: 'Total Orders', value: '1,25,032', change: '2.3%', arrow: 'up', iconBg: 'secondary', icon: OrdersIcon, },
];

// Payment Methods
interface PaymentMethod {
    id: number
    name: string;
    iconClass: string;
    textColor: string;
    percentage: string;
};

export const PaymentMethods: PaymentMethod[] = [
    { id: 1, name: 'Credit Card', iconClass: 'bank-card-line', textColor: 'primary', percentage: '25%', },
    { id: 2, name: 'PayPal', iconClass: 'paypal-line', textColor: 'success', percentage: '20%', },
    { id: 3, name: 'VISA', iconClass: 'visa-line', textColor: 'info', percentage: '15%', },
    { id: 4, name: 'Apple Pay', iconClass: 'apple-line', textColor: 'secondary', percentage: '10%', },
    { id: 5, name: 'Google Pay', iconClass: 'google-line', textColor: 'warning', percentage: '10%', },
    { id: 6, name: 'Stripe', iconClass: 'refund-2-line', textColor: 'danger', percentage: '5%', },
];

// Recent Activity
interface ActivityItem {
    id: number
    icon: string;
    bgColor: string;
    title: string;
    description: string;
    time: string;
    images?: string[];
    liclass?: string
};
export const RecentActivity: ActivityItem[] = [
    { id: 1, icon: 'shopping-cart-line', bgColor: 'primary', title: 'New Order - #12345', description: '2 items purchased by John Doe', time: '3 hrs ago', },
    { id: 2, icon: 'checkbox-circle-line', bgColor: 'success', title: 'Order Shipped - #12345', description: 'Shipped via FedEx', time: '1 day ago', },
    { id: 3, icon: 'add-circle-line', bgColor: 'success', title: 'Added New Products', description: 'New items added in Fashions', time: '12 days ago', images: ['../../assets/images/ecommerce/png/7.png', '../../assets/images/ecommerce/png/12.png',], },
    { id: 4, icon: 'heart-3-line', bgColor: 'danger', title: 'Product Favorited - iPhone 12 Pro', description: 'Added to favorites by Jane Smith', time: '2 days ago', },
    { id: 5, icon: 'star-line', bgColor: 'warning', title: 'Product Rated - Samsung Galaxy S21', description: 'Rated 4.5 stars by John Doe', time: '3 days ago', },
    { id: 6, icon: 'price-tag-3-line', bgColor: 'info', title: 'Product Discount - Nike Air Max', description: 'Discounted price applied', time: '4 days ago', },
    { id: 7, icon: 'chat-1-line', bgColor: 'secondary', title: 'Customer Inquiry - Order ID: #12346', description: 'Inquiry received from customer', time: '5 days ago', liclass: "pb-0" },
];

// Top-Selling Products
interface ProductItem {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number | string;
    sales: number | string;
};
export const SellingProducts: ProductItem[] = [
    { id: 1, image: '../../assets/images/ecommerce/png/6.png', name: 'Stylish Shoe', category: 'Foot Wear', price: '$124', sales: "260", },
    { id: 2, image: '../../assets/images/ecommerce/png/7.png', name: 'Headsets', category: 'Accessories', price: '$564', sales: "181", },
    { id: 3, image: '../../assets/images/ecommerce/png/28.png', name: 'Sneakers', category: 'Sports', price: '$964', sales: "134", },
    { id: 4, image: '../../assets/images/ecommerce/png/11.png', name: 'Mouse', category: 'Fashion', price: '$769', sales: "127", },
    { id: 5, image: '../../assets/images/ecommerce/png/10.png', name: 'Smart Watch', category: 'Electronics', price: '$999', sales: "108", },
];