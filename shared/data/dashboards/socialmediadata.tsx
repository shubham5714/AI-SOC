import { ReactNode } from "react";

// Profile Analysis
export const ProfileAnalysisSeries = [
    {
        name: "Followers",
        data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
    },
    {
        name: "Account Reached",
        data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
    },
    {
        name: "People Engaged",
        data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
    }
]
export const ProfileAnalysisOptions = {
    chart: {
        stacked: true,
        type: "line",
        height: 332,
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 1,
            blur: 3,
            color: '#000',
            opacity: 0.1
        },
        toolbar: {
            show: false,
        }
    },
    grid: {
        borderColor: "#f5f4f4",
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true, // Ensure y-axis grids are shown
            },
        },
    },
    colors: [
        "var(--primary-color)",
        "rgba(40, 200, 235, 1)",
        "rgba(244, 110, 244, 1)",
    ],
    stroke: {
        curve: ["stepline", "stepline", "stepline"],
        width: [2, 2, 2],
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "var(--primary-color)",
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgba(40, 200, 235,1)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "rgba(40, 200, 235,1)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "rgba(40, 200, 235,1)",
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgba(244, 110, 244,1)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "rgba(244, 110, 244,1)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "rgba(244, 110, 244,1)",
                        opacity: 1
                    }
                ]
            ]
        }
    },
    legend: {
        show: true,
        position: "top",
    },
    yaxis: {
        title: {
            style: {
                color: "#adb5be",
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + "";
            },
        },
    },
    xaxis: {
        type: "month",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
        ],
        axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            rotate: -90,
        },
    },
    tooltip: {
        theme: "dark",
    }
}

// Follow On Device
export const DevicesSeries = [1754, 1234, 784]
export const DevicesOptions = {
    labels: ["Mobile", "Tablet", "Desktop"],
    chart: {
        height: 178,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
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
            offsetY: 10,
            expandOnClick: false,
            donut: {
                size: '85%',
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
                        label: 'Total Audience',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#495057',
                    }
                }
            }
        }
    },
    colors: ["var(--primary-color)", "rgba(133, 204, 65, 1)", "rgba(40, 200, 235, 1)"],
}

// Post Insight
export interface PostInsightType {
    id: number;
    title: string;
    date: string;
    platform: string;
    platformClass: string;
    views: string;
    revenue: string;
    image: string;
    tdClass?: string
}
export const PostInsight: PostInsightType[] = [
    { id: 1, title: 'Behind the Scenes', date: '2024-02-15', platform: 'Youtube', platformClass: 'primary', views: '9.5k+', revenue: '$1,27,443', image: '../../assets/images/media/media-23.jpg' },
    { id: 2, title: 'Monday Motivation', date: '2024-02-14', platform: 'Youtube', platformClass: 'secondary', views: '1M+', revenue: '$6,74,474', image: '../../assets/images/media/media-24.jpg' },
    { id: 3, title: 'Travel Diaries', date: '2024-02-13', platform: 'Youtube', platformClass: 'success', views: '10k+', revenue: '$12,575', image: '../../assets/images/media/media-25.jpg' },
    { id: 4, title: 'Recipe of the Day', date: '2024-02-12', platform: 'Youtube', platformClass: 'warning', views: '3.5k', revenue: '$12,38,470', image: '../../assets/images/media/media-26.jpg' },
    { id: 5, tdClass: 'border-bottom-0', title: 'Fashion Forward', date: '2024-02-11', platform: 'Youtube', platformClass: 'primary', views: '1.6M+', revenue: '$12,734', image: '../../assets/images/media/media-27.jpg' },
];

// Social Media Performance
export interface SocialStatType {
    id: number;
    platform: string;
    icon: string;
    colorClass: string;
    date: string;
    posts: number;
    likes: number;
    comments: number;
    reach: string;
    engagement: string;
}
export const SocialStats: SocialStatType[] = [
    { id: 1, platform: 'Youtube', icon: 'youtube-fill', colorClass: 'primary', date: '2024-02-15', posts: 150, likes: 25, comments: 50, reach: '10,000', engagement: '3.5%', },
    { id: 2, platform: 'Twitter', icon: 'twitter-x-fill', colorClass: 'secondary', date: '2024-02-14', posts: 200, likes: 30, comments: 70, reach: '15,000', engagement: '4.2%', },
    { id: 3, platform: 'Facebook', icon: 'messenger-fill', colorClass: 'success', date: '2024-02-13', posts: 300, likes: 40, comments: 90, reach: '20,000', engagement: '5.0%', },
    { id: 4, platform: 'Instagram', icon: 'instagram-fill', colorClass: 'warning', date: '2024-02-12', posts: 100, likes: 20, comments: 30, reach: '8,000', engagement: '2.1%', },
    { id: 5, platform: 'Linkedin', icon: 'linkedin-box-fill', colorClass: 'info', date: '2024-02-11', posts: 120, likes: 15, comments: 40, reach: '12,000', engagement: '3.0%', },
];

export interface SocialCardType {
    id: number;
    platform: string;
    icon: string;
    colorClass: string;
    count: string;
    subtitle: string;
    change: string;
    arrow: string;
}

export const SocialCardData: SocialCardType[] = [
    { id: 1, platform: 'Instagram', icon: 'instagram-line', colorClass: 'primary', count: '457K', subtitle: 'Followers', change: '1.5%', arrow: 'down', },
    { id: 2, platform: 'Linked In', icon: 'linkedin-line', colorClass: 'success', count: '457K', subtitle: 'Followers', change: '1.5%', arrow: 'down', },
    { id: 3, platform: 'Facebook', icon: 'facebook-circle-line', colorClass: 'info', count: '2.1K', subtitle: '1 hr ago', change: '1.9%', arrow: 'down', },
    { id: 4, platform: 'Twitter', icon: 'twitter-x-line', colorClass: 'secondary', count: '2.1K', subtitle: '1 week ago', change: '1.9%', arrow: 'up', },
    { id: 5, platform: 'Youtube', icon: 'youtube-line', colorClass: 'warning', count: '1.1M', subtitle: '1 day ago', change: '1.9%', arrow: 'up', },
    { id: 6, platform: 'Messenger', icon: 'messenger-line', colorClass: 'danger', count: '1.1M', subtitle: '1 day ago', change: '1.9%', arrow: 'up', },
];

export interface DeviceSessionType {
    id: number;
    type: string;
    change: string;
    changeDirection: string;
    total: string;
}

export const DeviceSessions: DeviceSessionType[] = [
    { id: 1, type: 'Mobile', change: '1.67%', changeDirection: 'Increased', total: "1,754", },
    { id: 2, type: 'Tablet', change: '0.46%', changeDirection: 'Increased', total: "1,234", },
    { id: 3, type: 'Desktop', change: '3.43%', changeDirection: 'Decresed', total: "784", },
];

// Requests
export interface RequestsType {
    name: string;
    avatar: string;
    id: number;
}
export const Requests: RequestsType[] = [
    { id: 1, name: "Socrates Itumay", avatar: "../../assets/images/faces/2.jpg", },
    { id: 2, name: "Ryan Gercia", avatar: "../../assets/images/faces/3.jpg", },
    { id: 3, name: "Prax Bhav", avatar: "../../assets/images/faces/10.jpg", },
    { id: 4, name: "Jackie Chen", avatar: "../../assets/images/faces/12.jpg", },
    { id: 5, name: "Samantha Sam", avatar: "../../assets/images/faces/5.jpg", },
    { id: 6, name: "Robert Lewis", avatar: "../../assets/images/faces/15.jpg", },
];

// Followers Segmentation
export interface SegmentationType {
    id: number;
    label: string;
    count: string;
    percentage: number;
    color: string;
}
export const Segmentation: SegmentationType[] = [
    { id: 1, label: '10-15 Years', count: "14,245", percentage: 85, color: 'primary' },
    { id: 2, label: '25-32 Years', count: "5,273", percentage: 70, color: 'secondary' },
    { id: 3, label: '33-42 Years', count: "3,575", percentage: 60, color: 'success' },
    { id: 4, label: '45-53 Years', count: "2,553", percentage: 45, color: 'warning' },
    { id: 5, label: '53-65 Years', count: "1,643", percentage: 35, color: 'info' },
    { id: 6, label: '65-80 Years', count: "656", percentage: 15, color: 'danger' },
];

// Audience Top Countries
export interface CountriesType {
    id: number;
    name: string;
    company: string;
    users: string;
    image: string;
    badgeColor: string;
}
export const Countries: CountriesType[] = [
    { id: 1, name: 'Chrome', company: 'Google, Inc.', users: "35,502", image: '../../assets/images/browsers/chrome.png', badgeColor: 'primary', },
    { id: 2, name: 'Edge', company: 'Microsoft Corporation, Inc.', users: "25,364", image: '../../assets/images/browsers/edge.png', badgeColor: 'success', },
    { id: 3, name: 'Firefox', company: 'Mozilla Foundation, Inc.', users: "14,635", image: '../../assets/images/browsers/firefox.png', badgeColor: 'info', },
    { id: 4, name: 'Safari', company: 'Apple Corporation, Inc.', users: "35,657", image: '../../assets/images/browsers/safari.png', badgeColor: 'secondary', },
    { id: 5, name: 'Opera', company: 'Opera, Inc.', users: "12,563", image: '../../assets/images/browsers/opera.png', badgeColor: 'warning', },
];

// Recent Activities
export interface SocialActivity {
    id: number;
    image: string;
    action: ReactNode;
    platform: string;
    date: string;
    liClass?: string
}
const content1 = <><span className="text-primary">Meisha Kerr</span> started Following You</>
const content2 = <><span className="text-secondary">Simon Cowall</span> Liked Your Post</>
const content3 = <>Your Request Accepted By <span className="text-success">Owen Foster</span></>
const content4 = <><span className="text-info">Liam Parker</span> started following you</>
const content5 = <><span className="text-warning">Khabib</span> Commented on your post</>
const content6 = <>Your Followed By <span className="text-info">Leo Phillip</span></>

export const SocialActivities: SocialActivity[] = [
    { id: 1, image: '../../assets/images/faces/1.jpg', action: content1, platform: 'Youtube', date: 'Dec, 13 2024', },
    { id: 2, image: '../../assets/images/faces/2.jpg', action: content2, platform: 'Twitter', date: 'Apr, 13 2024', },
    { id: 3, image: '../../assets/images/faces/3.jpg', action: content3, platform: 'Instagram', date: 'Nov, 23 2024', },
    { id: 4, image: '../../assets/images/faces/4.jpg', action: content4, platform: 'Twitter', date: 'Oct, 19 2024', },
    { id: 5, image: '../../assets/images/faces/5.jpg', action: content5, platform: 'Facebook', date: 'Jan, 12 2024', },
    { id: 6, image: '../../assets/images/faces/13.jpg', action: content6, platform: 'LinkedIn', date: 'Nov, 19 2024', liClass: 'mb-0' },
];







