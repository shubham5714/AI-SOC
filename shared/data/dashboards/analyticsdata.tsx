// Visitor Analytics
export const VisitorAnalyticsSeries = [
    {
        type: "line",
        name: "Viewers",
        data: [
            {
                x: "Jan",
                y: 320,
            },
            {
                x: "Feb",
                y: 560,
            },
            {
                x: "Mar",
                y: 250,
            },
            {
                x: "Apr",
                y: 486,
            },
            {
                x: "May",
                y: 310,
            },
            {
                x: "Jun",
                y: 560,
            },
            {
                x: "Jul",
                y: 560,
            },
            {
                x: "Aug",
                y: 860,
            },
            {
                x: "Sep",
                y: 400,
            },
            {
                x: "Oct",
                y: 500,
            },
            {
                x: "Nov",
                y: 350,
            },
            {
                x: "Dec",
                y: 700,
            },
        ],
    },
    {
        type: "bar",
        name: "Followers",
        data: [
            {
                x: "Jan",
                y: 680,
            },
            {
                x: "Feb",
                y: 800,
            },
            {
                x: "Mar",
                y: 680,
            },
            {
                x: "Apr",
                y: 840,
            },
            {
                x: "May",
                y: 980,
            },
            {
                x: "Jun",
                y: 720,
            },
            {
                x: "Jul",
                y: 900,
            },
            {
                x: "Aug",
                y: 1000,
            },
            {
                x: "Sep",
                y: 850,
            },
            {
                x: "Oct",
                y: 950,
            },
            {
                x: "Nov",
                y: 750,
            },
            {
                x: "Dec",
                y: 860,
            },
        ],
    },
    {
        type: "bar",
        name: "Sessions",
        data: [
            {
                x: "Jan",
                y: 180,
            },
            {
                x: "Feb",
                y: 250,
            },
            {
                x: "Mar",
                y: 300,
            },
            {
                x: "Apr",
                y: 350,
            },
            {
                x: "May",
                y: 350,
            },
            {
                x: "Jun",
                y: 250,
            },
            {
                x: "Jul",
                y: 150,
            },
            {
                x: "Aug",
                y: 250,
            },
            {
                x: "Sep",
                y: 350,
            },
            {
                x: "Oct",
                y: 350,
            },
            {
                x: "Nov",
                y: 250,
            },
            {
                x: "Dec",
                y: 200,
            },
        ],
    },
]
export const VisitorAnalyticsOptions = {
    chart: {
        type: "area",
        height: 342,
        animations: {
            speed: 500,
        },
        toolbar: {
            show: false,
        },
        stacked: {
            enabled: true
        }
    },
    colors: ["rgba(244, 110, 244, 1)", "rgba(40, 200, 235, 1)", "var(--primary-color)"],
    dataLabels: {
        enabled: false,
    },
    grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3,
    },
    fill: {
        type: ['soild', 'solid', 'soild'],
        gradient: {
            opacityFrom: 0.05,
            opacityTo: 0.05,
            shadeIntensity: 0.1,
        },
    },
    stroke: {
        curve: ["smooth", "stepline", "smooth"],
        width: [2, 2, 2],
        dashArray: [0, 0, 0, 0],
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            formatter: function (value: number) {
                return "$" + value;
            },
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "15%",
            borderRadius: "2",
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'all',
        },
    },
    tooltip: {
        y: [
            {
                formatter: function (e: number) {
                    return void 0 !== e ? e.toFixed(0) : e;
                },
            },
            {
                formatter: function (e: number) {
                    return void 0 !== e ? e.toFixed(0) : e;
                },
            },
            {
                formatter: function (e: number) {
                    return void 0 !== e ? e.toFixed(0) : e;
                },
            },
        ],
    },
    legend: {
        show: true,
        position: "top",
        inverseOrder: true,
        markers: {
            size: 5,
            shape: "circle",
            strokeWidth: 0
        }
    },
}

// Sales Growth Rate
export const SalesGrowthRateSeries = [{
    name: 'Last Year',
    data: [35, 36, 22, 44, 48, 37, 36, 26, 27, 33, 32, 36],
    type: 'line',
}, {
    name: 'This Year',
    data: [55, 53, 46, 40, 45, 38, 46, 37, 22, 34, 40, 44,],
    type: 'bar',
},
]
export const SalesGrowthRateOptions = {
    chart: {
        type: 'line',
        height: 205,
        stacked: true,
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: false
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: "4",
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'all',
        },
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
        padding: {
            top: 2,
            right: 2,
            bottom: 2,
            left: 2
        },
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    markers: {
        size: 3,
        hover: {
            size: 3
        },
    },
    colors: ["rgba(244, 110, 244, 1)", "var(--primary-color)"],
    stroke: {
        curve: 'straight',
        width: 2,
        dashArray: 5
    },
    legend: {
        show: true,
        position: "bottom",
        fontSize: '10px',
        fontFamily: 'Poppins',
        markers: {
            size: 3.5,
            shape: "circle",
            strokeWidth: 0
        },
    },
    yaxis: {
        axisBorder: {
            show: false,
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
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            show: false,
            formatter: function (y: number) {
                return y.toFixed(0) + "";
            }
        }
    },
    xaxis: {
        type: 'month',
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        title: {
            style: {
                color: '#adb5be',
                fontSize: '5px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
}

// Site Referrals
export const SiteReferralsSeries = [14, 23, 21, 17, 15]
export const SiteReferralsOptions = {
    chart: {
        type: 'polarArea',
        height: 320
    },
    stroke: {
        colors: ['rgba(255,255,255,0.5)'],
    },
    fill: {
        opacity: 1
    },
    legend: {
        show: false,
        position: 'bottom',
        markers: {
            size: 4,
            shape: 'circle',
        },
    },
    labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Email'],
    colors: ["var(--primary08)", "rgba(133, 204, 65, 0.8)", "rgba(40, 200, 235, 0.8)", "rgba(244, 110, 244, 0.8)", "rgba(250, 182, 50, 0.8)"],
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 0,
            expandOnClick: false,
            donut: {
                size: '95%',
                background: 'transparent',
            }
        }
    },
    grid: {
        padding: {
            bottom: -120
        }
    },
}

interface AnalyticsCardSeriesType {
    data: number[];
}

export const AnalyticsCardSeries: AnalyticsCardSeriesType[] = [
    {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
    },
]

interface ColorStop {
    offset: number;
    color: string;
    opacity: number;
}

interface GradientSettings {
    colorStops: ColorStop[][];
}

interface AnalyticsCardOptionsType {
    color: string;
    gradientSettings: GradientSettings;
}

// Define a type for the options returned (you can expand it as needed)
interface ApexChartOptions {
    chart: {
        height: number;
        width: number;
        type: string;
        zoom: {
            enabled: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
    };
    tooltip: {
        enabled: boolean;
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
    grid: {
        borderColor: string;
    };
    xaxis: {
        crosshairs: {
            show: boolean;
        };
    };
    yaxis: {
        max: number;
    };
    colors: string[];
    stroke: {
        width: number[];
    };
    fill: {
        opacity: number;
        type: string[];
        gradient: {
            shade: string;
            shadeIntensity: number;
            gradientToColors: string[];
            inverseColors: boolean;
            opacityFrom: number;
            opacityTo: number;
            stops: number[];
            colorStops: ColorStop[][];
        };
    };
}

export const AnalyticsCardOptions = ({
    color,
    gradientSettings,
}: AnalyticsCardOptionsType): ApexChartOptions => ({
    chart: {
        height: 70,
        width: 100,
        type: 'area',
        zoom: {
            enabled: false,
        },
        sparkline: {
            enabled: true,
        },
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (_seriesName: string) {
                    return '';
                },
            },
        },
        marker: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        },
    },
    yaxis: {
        max: 65,
    },
    colors: [color],
    stroke: {
        width: [1.5],
    },
    fill: {
        opacity: 0.001,
        type: ['gradient'],
        gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            gradientToColors: ['var(--primary01)'],
            inverseColors: true,
            opacityFrom: 0.35,
            opacityTo: 0.05,
            stops: [0, 50, 100],
            colorStops: gradientSettings.colorStops,
        },
    },
});


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

export interface AnalyticsCardDataType {
    id: number
    title: string
    value: null | string
    percentage: string
    trendIcon: string
    chartId: string
    avatarColor: string
    icon: string
    chartOptions: ApexChartOptions
    chartSeries: AnalyticsCardSeriesType
    chart: boolean;
    fs: string;
    svgIcon?: string,
    avatarsize?: string;
}
export const AnalyticsCardData: AnalyticsCardDataType[] = [
    { id: 1, fs: '20', title: 'Total Followers', value: '13,124', percentage: '2.62%', trendIcon: 'up', chart: true, chartId: 'chart-21', avatarColor: 'primary', icon: 'group', chartOptions: AnalyticsCardOptions({ color: 'var(--primary-color)', gradientSettings: ChartGradientSettings.Revenue }), chartSeries: AnalyticsCardSeries },
    { id: 2, fs: '20', title: 'Session Rate', value: '10,235', percentage: '3.35%', trendIcon: 'up', chart: true, chartId: 'chart-22', avatarColor: 'success', icon: 'trending-up', chartOptions: AnalyticsCardOptions({ color: 'rgb(133, 204, 65)', gradientSettings: ChartGradientSettings.Customers }), chartSeries: AnalyticsCardSeries },
    { id: 3, fs: '20', title: 'Conversion Rate', value: '1,32,664', percentage: '1.86%', trendIcon: 'down', chart: true, chartId: 'chart-23', avatarColor: 'info', icon: 'dollar', chartOptions: AnalyticsCardOptions({ color: 'rgb(40, 200, 235)', gradientSettings: ChartGradientSettings.Transactions }), chartSeries: AnalyticsCardSeries },
    { id: 4, fs: '20', title: 'Total Review', value: '6,365', percentage: '5.45%', trendIcon: 'up', chart: true, chartId: 'chart-24', avatarColor: 'secondary', icon: 'like', chartOptions: AnalyticsCardOptions({ color: 'rgb(244, 110, 244)', gradientSettings: ChartGradientSettings.Products }), chartSeries: AnalyticsCardSeries },
];


// Site Referrals
interface SiteReferralsType {
    id: number
    source: string;
    value: number;
    change: string;
}
export const SiteReferrals: SiteReferralsType[] = [
    { id: 1, source: 'Search Engines', value: 300, change: '+5.2%' },
    { id: 2, source: 'Social Media', value: 450, change: '+10.3%' },
    { id: 3, source: 'Direct', value: 200, change: '+2.5%' },
    { id: 4, source: 'Referral Sites', value: 150, change: '-1.2%' },
    { id: 5, source: 'Email', value: 100, change: '+3.8%' }
];

// Visitors Statistics
interface VisitorsStatisticsType {
    id: number
    visitors: number | string;
    avgSessionDuration: string;
    pageViews: number | string;
    totalSessions: number | string;
    bounceRate: string;
    conversionRate: string;
    time: string;
    sources: string;
}
export const VisitorsStatistics: VisitorsStatisticsType[] = [
    { id: 1, visitors: "32,190", avgSessionDuration: '15m 30s', pageViews: "12,345", totalSessions: "19,845", bounceRate: '45%', conversionRate: '3.5%', time: '3m 45s', sources: 'Google, Facebook' },
    { id: 2, visitors: "28,674", avgSessionDuration: '13m 25s', pageViews: "10,432", totalSessions: "18,242", bounceRate: '47%', conversionRate: '3.8%', time: '3m 10s', sources: 'Twitter, LinkedIn' },
    { id: 3, visitors: "35,789", avgSessionDuration: '16m 10s', pageViews: "13,567", totalSessions: "22,222", bounceRate: '43%', conversionRate: '3.2%', time: '4m 05s', sources: 'Bing, YouTube' },
    { id: 4, visitors: "30,234", avgSessionDuration: '14m 50s', pageViews: "11,678", totalSessions: "18,556", bounceRate: '46%', conversionRate: '3.6%', time: '3m 30s', sources: 'Instagram, Reddit' },
    { id: 5, visitors: "33,456", avgSessionDuration: '15m 45s', pageViews: "12,890", totalSessions: "20,566", bounceRate: '44%', conversionRate: '3.4%', time: '3m 55s', sources: 'Yahoo, Pinterest' },
    { id: 6, visitors: "35,789", avgSessionDuration: '16m 10s', pageViews: "13,567", totalSessions: "22,222", bounceRate: '43%', conversionRate: '3.2%', time: '4m 05s', sources: 'Bing, YouTube' },
];

// Users By Countries
interface CountryData {
    id: number
    flag: string;
    countryName: string;
    percentageChange: string;
    visitors: number | string;
    arrow: string
}
export const UsersByCountries: CountryData[] = [
    { id: 1, flag: "../../assets/images/flags/us_flag.jpg", countryName: "United States", arrow: 'up', percentageChange: "5.1%", visitors: "26,890" },
    { id: 2, flag: "../../assets/images/flags/germany_flag.jpg", countryName: "Germany", arrow: 'up', percentageChange: "1.3%", visitors: "12,345" },
    { id: 3, flag: "../../assets/images/flags/spain_flag.jpg", countryName: "Spain", arrow: 'up', percentageChange: "2.7%", visitors: "18,765" },
    { id: 4, flag: "../../assets/images/flags/china_flag.jpg", countryName: "China", arrow: 'down', percentageChange: "1.0%", visitors: "9,874" },
    { id: 5, flag: "../../assets/images/flags/mexico_flag.jpg", countryName: "Mexico", arrow: 'up', percentageChange: "2.7%", visitors: "21,456" },
    { id: 6, flag: "../../assets/images/flags/canada_flag.jpg", countryName: "Canada", arrow: 'up', percentageChange: "2.1%", visitors: "28,976" },
    { id: 7, flag: "../../assets/images/flags/argentina_flag.jpg", countryName: "Argentina", arrow: 'up', percentageChange: "5.4%", visitors: "21,456" },
    { id: 8, flag: "../../assets/images/flags/singapore_flag.jpg", countryName: "Singapore", arrow: 'up', percentageChange: "0.7%", visitors: "16,789" }
];

// Top Landing Pages
interface LandingPagesType {
    id: number
    path: string;
    visits: number | string;
    progress: number;
    progressColor: string;
}

export const LandingPages: LandingPagesType[] = [
    { id: 1, path: 'main/landing-page/home', visits: "2,345", progress: 50, progressColor: 'primary' },
    { id: 2, path: 'main/landing-page/products/popular-category', visits: "1,987", progress: 30, progressColor: 'success' },
    { id: 3, path: 'main/landing-page/blog/latest-article', visits: "1,532", progress: 20, progressColor: 'info' },
    { id: 4, path: 'main/landing-page/about-us/team-page', visits: "1,254", progress: 40, progressColor: 'secondary' },
    { id: 5, path: 'main/landing-page/about-us/profile', visits: "1,103", progress: 40, progressColor: 'warning' },
    { id: 6, path: 'main/landing-page/contact/support', visits: "985", progress: 60, progressColor: 'danger' }
];

// Activity
interface StatItem {
    id: number
    icon: string;
    bgColor: string;
    title: string;
    stat: string | number;
    percentageChange: string;
    type: string;
    liclasss?: string
}

export const Activity: StatItem[] = [
    { id: 1, icon: 'timer-2-line', bgColor: 'primary', title: 'Avg. Session Duration', stat: '2m 35s', percentageChange: '5.2%', type: 'Increased' },
    { id: 2, icon: 'user-add-line', bgColor: 'info', title: 'New Users', stat: '5,621', percentageChange: '10.3%', type: 'Increased' },
    { id: 3, icon: 'eye-line', bgColor: 'success', title: 'Page Views', stat: '45,890', percentageChange: '2.15%', type: 'Decreased' },
    { id: 4, icon: 'line-chart-line', bgColor: 'secondary', title: 'Conversion Rate', stat: '4.8%', percentageChange: '1.5%', type: 'Increased' },
    { id: 5, icon: 'arrow-down-s-line', bgColor: 'warning', title: 'Bounce Rate', stat: '32.5%', percentageChange: '3.8%', type: 'Decreased' },
    { id: 6, icon: 'user-line', bgColor: 'danger', title: 'Returning Visitors', stat: '8,932', percentageChange: '7.2%', type: 'Increased' },
    { id: 7, icon: 'money-dollar-circle-line', bgColor: 'teal', title: 'Avg. Order Value', stat: '$56.78', percentageChange: '2.7%', type: 'Decreased', liclasss: "mb-0" }
];