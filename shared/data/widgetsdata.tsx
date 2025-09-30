import { ApexOptions } from "apexcharts";
import { ReactNode } from "react";

// Sales Analysis
export const SalesAnalysisSeries = [{
    name: 'sales',
    type: 'column',
    data: [55, 75, 95, 115, 132, 150, 170, 195, 212, 242, 260, 280],
}, {
    name: 'revenue',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    dataLabels: {
        enabled: false,
    },
}]
export const SalesAnalysisOptions = {
    chart: {
        height: 380,
        type: 'line',
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 4,
            color: ["rgba(255,255,255,0)", "rgb(244, 110, 244)"],
            opacity: 0.6,
        },
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        background: {
            enabled: false,
            foreColor: '#fff',
        },
        formatter: function (val: string) {
            return val + "%";
        },
        offsetY: -10,
        style: {
            fontSize: '12px',
            colors: ["#8c9097"]
        }
    },
    stroke: {
        curve: 'smooth',
        width: [0, 2],
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
            borderRadius: 5,
        }
    },

    colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0,
            inverseColors: false,
            gradientToColors: ["var(--primary-color)"],
            opacityFrom: [0.6, 1],
            opacityTo: [1, 1],
            stops: [0, 90, 100]
        }
    },
    labels: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '2.1', '2.2'],
    yaxis: [{

    }, {
        opposite: true,
    }],
}

// Total Sales
export const TotalSalesSeries = [{
    name: 'Total Projects',
    data: [44, 42, 57, 86, 58, 55, 70, 65, 35],
}, {
    name: 'On Going',
    data: [-34, -22, -37, -56, -21, -35, -60, -68, -42],
}]
export const TotalSalesOptions = {
    chart: {
        stacked: true,
        type: 'bar',
        height: 240,
    },
    grid: {
        show: false,
        borderColor: '#f2f6f7',
    },
    colors: ["rgba(244, 110, 244,1)", "var(--primary-color)"],
    plotOptions: {
        bar: {
            columnWidth: '20%',
            borderRadius: 3,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'all',

        }
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'top',
    },
    yaxis: {
        Show: false,
        labels: {
            show: false,
        }
    },
    xaxis: {
        show: false,
        type: 'day',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
    }
}

// Sales Revenue
export const SalesRevenueSeries = [{
    name: 'sales',
    type: 'column',
    data: [200, 170, 250, 240, 220, 280, 170, 155, 130, 242, 160, 80],
}, {
    name: 'revenue',
    type: 'line',
    data: [13, 15, 25, 17, 19, 22, 11, 10, 9, 22, 8, 5],
    dataLabels: {
        enabled: false,
    },
}]
export const SalesRevenueOptions = {
    chart: {
        height: 356,
        type: 'line',
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 4,
            color: ["rgba(255,255,255,0)", "rgb(244, 110, 244)"],
            opacity: 0.4,
        },
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        background: {
            enabled: false,
            foreColor: '#fff',
        },
        formatter: function (val: string) {
            return val + "%";
        },
        offsetY: -10,
        style: {
            fontSize: '12px',
            colors: ["#8c9097"]
        }
    },
    stroke: {
        curve: 'smooth',
        width: [0, 2],
    },
    plotOptions: {
        bar: {
            columnWidth: "30%",
            borderRadius: 5,
        }
    },

    colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
    labels: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '2.1', '2.2'],
    yaxis: [{

    }, {
        opposite: true,
    }],
}

// Total Sales
export const TotalSalesSeries1 = [85]
export const TotalSalesOptions1 = {
    chart: {
        height: 300,
        type: 'radialBar',
        responsive: 'true',
        offsetX: 0,
        offsetY: 10,
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                margin: 0,
                size: '68%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
            },
        }
    },
    colors: ["var(--primary-color)"],
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    labels: ["Total Sales"]
}

// Sales Revenue
export const SalesRevenueSeries1 = [{
    name: "Views",
    data: [20, 15, 38, 20, 24, 19, 53, 19, 21, 18, 36, 18, 60, 20]
}]
export const SalesRevenueOptions1 = {
    chart: {
        height: 200,
        type: 'line',
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 2,
            left: 0,
            blur: 6,
            color: 'rgb(244, 110, 244)',
            opacity: 0.8
        },
        toolbar: { show: false }
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
        curve: 'smooth',
        width: '2',
    },
    grid: {
        borderColor: '#f5f4f4',
        strokeDashArray: 3
    },
    colors: ["rgb(244, 110, 244)"],
    annotations: {
        points: [
            {
                x: 281, // Index of the first data point
                y: 35,
                marker: {
                    size: 5,
                    fillColor: '#fff',
                    strokeColor: 'rgb(244, 110, 244)',
                    strokeWidth: 3,
                },
                label: {
                    borderColor: 'transparent',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: 'rgb(244, 110, 244)',
                    },
                },
            },
        ]
    },
    yaxis: {
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + "";
            }
        }
    },
    xaxis: {
        type: 'week',
        categories: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1', '1.1', '1.2', '1.3', '1.4'],
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

// Total Revenue
export const TotalRevenueSeries = [{
    name: 'Sales',
    data: [20, 30, 25, 50, 25, 30, 20, 35],
}, {
    name: 'Profit',
    data: [13, 23, 20, 25, 20, 23, 13, 15]
}]
export const TotalRevenueOptions = {
    chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "45%",
            borderRadius: "5",
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr',
            'May', 'Jun', 'jul', 'Aug'
        ],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    legend: {
        show: true,
        position: "bottom",
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
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    }
}

// Total Sales
export const TotalSalesSeries2 = [
    {
        name: 'Views',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
    },
    {
        name: 'Followers',
        type: 'column',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
    },
    {
        name: 'sales',
        type: 'column',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
    },
]
export const TotalSalesOptions2 = {
    chart: {
        toolbar: {
            show: false
        },
        height: 265,
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: [2, 2, 2],
        colors: ['transparent']
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
            offsetY: 0,
            shape: "circle"
        },
    },
    xaxis: {
        axisBorder: {
            color: '#e9e9e9',
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "45%",
            borderRadius: '2'
        }
    },
    colors: ["var(--primary-color)", 'rgb(40, 200, 235)', 'rgb(244, 110, 244)'],
}

// Recent Transactions
export const RecentTransactionsSeries = [
    {
        name: "New Customers",
        data: [12, 20, 16, 21, 15, 22],
    },
    {
        name: "Return Customers",
        data: [20, 12, 14, 12, 20, 15],
    },
]
export const RecentTransactionsOptions = {
    chart: {
        type: "line",
        height: 150,
        toolbar: {
            show: false
        }
    },
    colors: [
        "var(--primary-color)",
        "rgb(244, 110, 244)"
    ],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    stroke: {
        curve: 'smooth',
        width: [2, 2]
    },
    yaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (y: number) {
                return y.toFixed(0) + "";
            },
        },
    },
    xaxis: {
        show: false,
        type: "month",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        labels: {
            show: false,
        },
    },
}

interface WidgetsCardSeriesType {
    series: number[]
}

export const WidgetsCardSeries = ({ series }: WidgetsCardSeriesType) => ([{
    name: 'Value',
    data: series
}])

interface ColorOptionType {
    color: string;
}

interface WidgetsCardOptionsType {
    chart: {
        type: string;
        height: number;
        width: number;
        sparkline: {
            enabled: boolean;
        };
        dropShadow: {
            enabled: boolean;
            enabledOnSeries?: boolean;
            top: number;
            left: number;
            blur: number;
            color: string;
            opacity: number;
        };
    };
    grid: {
        show: boolean;
        xaxis: {
            lines: {
                show: boolean;
            };
        };
        yaxis: {
            lines: {
                show: boolean;
            };
        };
    };
    stroke: {
        show: boolean;
        curve: string;
        lineCap: string;
        colors?: string[];
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
    };
    xaxis: {
        show: boolean;
        axisTicks: {
            show: boolean;
        };
        axisBorder: {
            show: boolean;
        };
    };
    colors: string[];
}

export const WidgetsCardOptions = ({ color }: ColorOptionType): WidgetsCardOptionsType => ({
    chart: {
        type: 'line',
        height: 30,
        width: 100,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: 'var(--primary-color)',
            opacity: 0.5
        }
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
        width: 1.5,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    yaxis: {
        min: 0,
        show: false
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

interface WidgetCardSeries1Type {
    name: string;
    data: number[];
}

const WidgetsCardSeries1: WidgetCardSeries1Type[] = [{
    name: 'Value',
    data: [14, 38, 26, 44, 20, 65, 35, 40]
}];

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

interface WidgetsCardOptions1Type {
    chart: {
        type: 'area';
        height: number;
        width: number;
        sparkline: {
            enabled: boolean;
        };
    };
    grid: {
        show: boolean;
        xaxis: {
            lines: {
                show: boolean;
            };
        };
        yaxis: {
            lines: {
                show: boolean;
            };
        };
    };
    stroke: {
        show: boolean;
        curve: 'smooth';
        lineCap: 'butt';
        colors: string[] | undefined;
        width: number;
        dashArray: number;
    };
    fill: {
        type: 'gradient';
        gradient: {
            shadeIntensity: number;
            type: 'horizontal' | 'vertical';
            colorStops: {
                offset: number;
                color: string;
            }[];
        };
    };
    yaxis: {
        min: number;
        show: boolean;
    };
    xaxis: {
        show: boolean;
        axisTicks: {
            show: boolean;
        };
        axisBorder: {
            show: boolean;
        };
    };
    colors: string[];
}

export const WidgetsCardOptions1 = ({ color, gradientSettings }: GradientChartType): WidgetsCardOptions1Type => ({
    chart: {
        type: 'area',
        height: 40,
        width: 100,
        sparkline: {
            enabled: true
        },
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
        width: 1.9,
        dashArray: 0,
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            type: "horizontal",
            colorStops: gradientSettings.colorStops,
        }
    },
    yaxis: {
        min: 0,
        show: false
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



export interface WidgetCardType {
    id: number;
    title: string;
    value: string;
    percentage: string;
    chartId: string;
    icon: string;
    badgeClass: string;
    iconBgClass: string;
    chartOptions: WidgetsCardOptionsType;
    chartSeries: WidgetsCardSeriesType;
}

export const WidgetsCardData: WidgetCardType[] = [
    { id: 1, title: "Number Of Sales", value: "12,432", percentage: "+2.5%", chartId: "chart-1", icon: "bar-chart-box-line", badgeClass: "success", iconBgClass: "primary", chartOptions: WidgetsCardOptions({ color: 'var(--primary-color)' }), chartSeries: WidgetsCardSeries({ series: [14, 58, 20, 94, 25, 55, 35, 55] }) },
    { id: 2, title: "Profit By Sale", value: "2432", percentage: "+1.5%", chartId: "chart-2", icon: "wallet-3-line", badgeClass: "success", iconBgClass: "success", chartOptions: WidgetsCardOptions({ color: 'rgb(133, 204, 65)' }), chartSeries: WidgetsCardSeries({ series: [54, 38, 56, 24, 65, 55, 45] }) },
    { id: 3, title: "Total Revenue", value: "2432", percentage: "-0.5%", chartId: "chart-3", icon: "money-dollar-circle-line", badgeClass: "danger", iconBgClass: "info", chartOptions: WidgetsCardOptions({ color: 'rgb(40, 200, 235)' }), chartSeries: WidgetsCardSeries({ series: [54, 38, 56, 24, 65, 55, 45] }) },
    { id: 4, title: "Total Customers", value: "2432", percentage: "+4.5%", chartId: "chart-4", icon: "group-line", badgeClass: "success", iconBgClass: "secondary", chartOptions: WidgetsCardOptions({ color: 'rgb(244, 110, 244)' }), chartSeries: WidgetsCardSeries({ series: [54, 38, 56, 24, 65, 55, 45] }) },
];

const SalesIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>
const SaleIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
const RevenueIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path></svg>
const CustomersIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>


const ChartGradientSettings = {
    Revenue: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "var(--primary-color)",
                    opacity: 0.03
                },
                {
                    offset: 90,
                    color: "var(--primary-color)",
                    opacity: 0.03
                }
            ]
        ]
    },
    Customers: {
        colorStops: [
            [
                {
                    offset: 40,
                    color: "rgb(133, 204, 65)",
                    opacity: 0.03
                },
                {
                    offset: 90,
                    color: "rgb(133, 204, 65)",
                    opacity: 0.03
                }
            ]
        ]
    },
    Transactions: {
        colorStops: [
            [
                {
                    offset: 40,
                    color: "rgb(244, 110, 244)",
                    opacity: 0.03
                },
                {
                    offset: 90,
                    color: "rgb(244, 110, 244)",
                    opacity: 0.03
                }
            ]
        ]
    },
    Products: {
        colorStops: [
            [
                {
                    offset: 40,
                    color: "rgb(244, 110, 244)",
                    opacity: 0.03
                },
                {
                    offset: 90,
                    color: "rgb(244, 110, 244)",
                    opacity: 0.03
                }
            ]
        ]
    },
}

export interface WidgetCard1Type {
    id: number;
    title: string;
    value: string;
    percentage: string;
    chartId: string;
    icon: ReactNode;
    arrow: 'up' | 'down';
    iconBgClass: string;
    chartOptions: WidgetsCardOptions1Type;
    chartSeries: WidgetCardSeries1Type;
}

export const WidgetsCardData1: WidgetCard1Type[] = [
    { id: 1, title: "Number Of Sales", value: "12,432", percentage: "8%", chartId: "chart-11", icon: SalesIcon, arrow: "down", iconBgClass: "primary", chartOptions: WidgetsCardOptions1({ color: 'var(--primary-color)', gradientSettings: ChartGradientSettings.Revenue }), chartSeries: WidgetsCardSeries1 },
    { id: 2, title: "Profit By Sale", value: "$5,472", percentage: "9%", chartId: "chart-12", icon: SaleIcon, arrow: "up", iconBgClass: "success", chartOptions: WidgetsCardOptions1({ color: 'rgb(133, 204, 65)', gradientSettings: ChartGradientSettings.Customers }), chartSeries: WidgetsCardSeries1 },
    { id: 3, title: "Total Revenue", value: "$1462", percentage: "7%", chartId: "chart-13", icon: RevenueIcon, arrow: "down", iconBgClass: "info", chartOptions: WidgetsCardOptions1({ color: 'rgb(40, 200, 235)', gradientSettings: ChartGradientSettings.Transactions }), chartSeries: WidgetsCardSeries1 },
    { id: 4, title: "Total Customers", value: "1032", percentage: "6%", chartId: "chart-14", icon: CustomersIcon, arrow: "up", iconBgClass: "secondary", chartOptions: WidgetsCardOptions1({ color: 'rgb(244, 110, 244)', gradientSettings: ChartGradientSettings.Products }), chartSeries: WidgetsCardSeries1 },
];

export interface MetricType {
    id: number;
    title: string;
    value: string;
    percentage: string;
    icon: ReactNode;
    color: string;
    change: string;
}
const Sales = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 394 511.978"><path d="M158.912 88.113c-7.295-21.517-13.917-43.26-19.617-65.308l-.268-1.044-1.14-4.487c5.826-6.374 15.227-10.173 23.393-12.463l.483-.134c34.825-9.57 90.766-3.941 109.984 12.213l-23.049 54.804c12.395-16.285 16.56-22.971 23.956-32.043a71.55 71.55 0 018.789 6.815c6.556 5.935 12.41 12.494 13.596 21.636.768 5.93-.928 11.953-6.203 18.113l-52.885 61.595c-6.807-1.117-13.46-2.75-19.913-5.045l.086-.205.056-.126.033-.078.088-.205.02-.051.066-.154.076-.177.013-.03.088-.208.043-.098.045-.106.092-.208.007-.02.081-.187.066-.149.025-.058.088-.21.031-.068.061-.139.085-.2.005-.01.091-.207.054-.121.037-.089.092-.21.017-.04.073-.17.076-.172.015-.037.094-.21.04-.091.051-.119.093-.212.005-.01.087-.2.063-.144.03-.068.093-.21.028-.063.066-.15.086-.194.007-.018.094-.212.051-.114.042-.098.094-.213.015-.033.079-.179.073-.164.02-.048.096-.213.038-.085.056-.129.093-.213.003-.002.093-.21.061-.136.033-.079.096-.212.025-.056.068-.159.086-.187.01-.026.096-.214.048-.106.142-.321.013-.026.083-.189.071-.157.025-.058.093-.215.036-.076.061-.136.096-.21v-.005l.096-.215.058-.129.038-.086.096-.215.02-.045.266-.597.045-.098.051-.117.096-.214.007-.015.089-.2.068-.149.028-.066.189-.427.091-.202.005-.013.096-.215.054-.119.042-.096.094-.212.018-.038.078-.177a673.91 673.91 0 003.647-8.334l-19.255 20.795c-20.057-4.231-36.185-1.706-51.217 6.243l-53.633-64.368c-3.185-3.839-4.636-7.676-4.623-11.516.275-10.408 9.534-18.61 17.4-24.158l.063-.043c6.274-4.385 13.002-7.818 17.933-9.868l26.591 50.145zm43.53 254.869l-2.821 11.766H180.01c2.532 8.02 8.065 12.031 16.525 12.031 9.299 0 18.004-2.997 26.09-8.99v24.062c-6.72 4.583-14.829 6.875-24.325 6.875-15.361 0-26.73-3.503-34.09-10.512-7.338-7.006-11.832-14.829-13.485-23.466h-11.677l3.061-11.766h7.14c-.089-.64-.132-1.785-.132-3.415 0-1.719.043-2.955.132-3.726h-8.617l3.064-11.766h7.029c5.596-22.124 20.977-33.185 46.119-33.185 8.219 0 16.548 2.204 24.988 6.61l-5.816 23.403c-5.862-5.376-11.989-8.065-18.356-8.065-8.351 0-14.016 3.745-16.945 11.237h23.312l-2.821 11.766h-22.738c-.088.86-.134 2.093-.134 3.726v3.415h24.108zm-94.76-50.348c25.481-47.865 84.933-66.013 132.798-40.532 47.868 25.478 66.016 84.93 40.535 132.798-25.478 47.867-84.93 66.013-132.797 40.535-47.868-25.481-66.014-84.933-40.536-132.801zm119.958-88.228l-10.467-47.87c44.832 8.338 116.69 99.534 139.911 140.999 11.851 21.164 22.23 44.479 30.73 70.543 16.93 63.082.622 122.094-67.808 135.839-42.875 8.614-122.836 9.223-167.929 6.89-48.477-2.507-123.493-2.431-143.09-52.202-31.628-80.338 26.32-176.046 79.154-234.623 6.954-7.709 14.143-14.892 21.581-21.523 19.22-16.909 39.944-36.976 64.682-45.319l-23.897 44.495 34.707-46.01h18.287l24.139 48.781z"></path></svg>
const Revenue = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><path d="M256 59.55c108.5 0 196.45 87.96 196.45 196.45S364.5 452.45 256 452.45c-108.49 0-196.45-87.96-196.45-196.45S147.51 59.55 256 59.55zM256 0c70.68 0 134.69 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm163.28 92.72C377.49 50.94 319.76 25.09 256 25.09c-63.77 0-121.5 25.85-163.28 67.63C50.94 134.5 25.09 192.23 25.09 256c0 63.76 25.85 121.49 67.63 163.28 41.78 41.78 99.51 67.63 163.28 67.63 63.77 0 121.5-25.85 163.28-67.63 41.78-41.78 67.63-99.51 67.63-163.28 0-63.77-25.85-121.5-67.63-163.28zM286.15 218.77c-.59-6.7-3.28-11.86-8.06-15.61-3.31-2.59-7.63-4.29-12.92-5.08v38.85l9.64 2.18c9.17 2.01 17.31 4.65 24.39 7.98 7.04 3.33 12.97 7.33 17.79 11.94 4.82 4.56 8.48 9.89 10.95 15.87 2.48 6.01 3.76 12.75 3.84 20.16-.08 11.77-3.06 21.84-8.91 30.28-5.88 8.41-14.33 14.89-25.33 19.37-9.18 3.75-19.98 5.92-32.37 6.52v21.07h-14.93v-21.08c-12.43-.64-23.48-2.9-33.13-6.81-11.6-4.65-20.6-11.73-27-21.24-6.44-9.51-9.72-21.54-9.9-36.08h43.08c.34 5.97 1.96 11 4.77 14.97 2.86 4.01 6.79 7.04 11.77 9.08 3.17 1.32 6.64 2.21 10.41 2.69v-41l-13.35-3.1c-16.11-3.7-28.78-9.68-38.08-17.95-9.26-8.27-13.86-19.45-13.82-33.57-.04-11.51 3.07-21.62 9.3-30.28 6.23-8.65 14.84-15.39 25.89-20.25 9.01-3.94 19.02-6.28 30.06-7.01V139.7h14.93v20.94c11.39.69 21.49 3.06 30.28 7.08 10.66 4.9 18.89 11.73 24.78 20.51 5.89 8.79 8.87 18.94 9 30.54h-43.08zm-35.91-20.69c-2.6.38-4.93.96-6.99 1.75-3.88 1.54-6.78 3.63-8.7 6.23-1.96 2.64-2.94 5.67-3.03 9.04-.09 2.82.47 5.25 1.71 7.38 1.23 2.13 3.07 3.97 5.45 5.58 2.4 1.63 5.3 3.03 8.66 4.23.94.33 1.91.65 2.9.95v-35.16zm14.93 115.64c2.77-.41 5.3-1.05 7.59-1.94 4.26-1.62 7.55-3.88 9.85-6.78 2.31-2.94 3.5-6.27 3.54-10.02-.04-3.5-1.15-6.52-3.28-9.04-2.13-2.52-5.38-4.69-9.77-6.53-2.31-.98-4.96-1.92-7.93-2.82v37.13z"></path></svg>
const ProductsIcon = <svg version="1.1" className="svg-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.43 122.88" xmlSpace="preserve"><g><path className="st0" d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.23c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M63.49,23.76h17.76v18.02 h15.98L72.39,65.95L47.51,41.78h15.98V23.76L63.49,23.76z M53.69,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.24,9.48-9.48,9.48 c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48 c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C83.31,108.17,87.55,103.92,92.79,103.92L92.79,103.92z"></path></g></svg>
const BySaleIcon = <svg version="1.1" className="svg-white" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 100.54" xmlSpace="preserve"><g><path d="M65.98,54.6H56.9c-0.15,0-0.27,0.06-0.37,0.15c-0.1,0.1-0.15,0.23-0.15,0.37v19.14c0,0.15,0.06,0.27,0.15,0.37 c0.1,0.1,0.23,0.15,0.37,0.15h9.07c0.15,0,0.27-0.06,0.37-0.15c0.1-0.1,0.15-0.23,0.15-0.37V55.12c0-0.15-0.06-0.27-0.15-0.37 C66.25,54.64,66.12,54.6,65.98,54.6L65.98,54.6L65.98,54.6z M6.98,13.97h31.49V4.94c0-1.37,0.56-2.6,1.45-3.49 C40.82,0.56,42.06,0,43.41,0h36.06c1.37,0,2.59,0.56,3.49,1.45c0.89,0.89,1.45,2.14,1.45,3.49v9.03h31.49 c1.93,0,3.67,0.79,4.92,2.06c1.27,1.27,2.06,3.01,2.06,4.92v16.86c-7.89,5.41-16.03,10.02-24.42,13.78 c-8.44,3.78-17.14,6.71-26.14,8.73v-6.74c0-1.54-0.63-2.96-1.64-3.98c-1.01-1.01-2.43-1.64-3.98-1.64H56.17l0,0 c-1.54,0-2.96,0.63-3.98,1.64c-1.01,1.01-1.64,2.43-1.64,3.98v6.59c-8.76-2.01-17.25-4.89-25.48-8.58 C16.45,47.73,8.1,42.96,0,37.36V20.95c0-1.93,0.79-3.67,2.06-4.92C3.32,14.76,5.07,13.97,6.98,13.97L6.98,13.97L6.98,13.97z M122.88,47.81v45.76c0,1.93-0.79,3.67-2.06,4.92c-1.27,1.27-3.01,2.06-4.92,2.06H6.98c-1.93,0-3.67-0.79-4.92-2.06 C0.79,97.22,0,95.48,0,93.57V47.39c6.89,4.42,13.98,8.28,21.27,11.55c9.41,4.22,19.17,7.45,29.29,9.61v7.25 c0,1.54,0.63,2.96,1.64,3.98c1.01,1.01,2.44,1.64,3.98,1.64h10.53c1.54,0,2.96-0.63,3.98-1.64c1.01-1.01,1.64-2.43,1.64-3.98v-7.6 l0.11,0.46c10.31-2.17,20.25-5.43,29.83-9.73C109.33,55.77,116.2,52.05,122.88,47.81L122.88,47.81z M75.71,6.73H47.19 c-0.17,0-0.31,0.06-0.44,0.19c-0.1,0.1-0.19,0.27-0.19,0.44v6.42h29.75V7.36c0-0.17-0.06-0.31-0.19-0.44 c-0.1-0.1-0.27-0.19-0.44-0.19H75.71L75.71,6.73z"></path></g></svg>

export const MetricsData: MetricType[] = [
    { id: 1, title: "Total Sales", value: "12,378", percentage: "+11.35%", icon: Sales, color: "primary", change: "up" },
    { id: 2, title: "Total Revenue", value: "12,378", percentage: "+15.35%", icon: Revenue, color: "success", change: "up" },
    { id: 3, title: "Total Products", value: "12,378", percentage: "-11.35%", icon: ProductsIcon, color: "info", change: "down" },
    { id: 4, title: "Profit By Sale", value: "12,378", percentage: "+9.15%", icon: BySaleIcon, color: "secondary", change: "up" },
];

interface RevenueItem {
    id: number;
    title: string;
    amount: string;
    percentage: string;
    iconColor: string;
    listClass?: string;
    arrow: string;
}
export const RevenueData: RevenueItem[] = [
    { id: 1, title: "Today Revenue", amount: "$256", percentage: "-1.05%", iconColor: "primary", arrow: 'down' },
    { id: 2, title: "This Month Revenue", amount: "$29,754", percentage: "+0.82%", iconColor: "warning", listClass: "warning", arrow: 'up' },
    { id: 3, title: "This Year Revenue", amount: "$2,25,116", percentage: "+0.21%", iconColor: "success", listClass: "success", arrow: 'up' },
];

// Customers Activity
interface ActivityItem {
    id: number;
    name: string;
    message: string;
    image: string;
    amount: string;
    time: string;
}
export const ActivityData: ActivityItem[] = [
    { id: 1, name: "Charle", message: "new account created", image: "../assets/images/faces/10.jpg", amount: "$12,355", time: "5 mins ago" },
    { id: 2, name: "Charle", message: "new account created", image: "../assets/images/faces/1.jpg", amount: "$12,355", time: "12:00 AM" },
    { id: 3, name: "Charle", message: "new account created", image: "../assets/images/faces/2.jpg", amount: "$12,355", time: "12:00 AM" },
    { id: 4, name: "Charle", message: "new account created", image: "../assets/images/faces/4.jpg", amount: "$12,355", time: "12:00 AM" },
];

// Top Customers
interface Person {
    id: number;
    name: string;
    email: string;
    image: string;
    amount: string;
}
export const PeopleData: Person[] = [
    { id: 1, name: "Amanda Nanes", email: "amandananes@gmail.com", image: "../assets/images/faces/10.jpg", amount: "$6,192", },
    { id: 2, name: "Charles Achilles", email: "charlesachilles@gmail.com", image: "../assets/images/faces/1.jpg", amount: "$2,415", },
    { id: 3, name: "Julia Camo", email: "juliacamo@gmail.com", image: "../assets/images/faces/2.jpg", amount: "$2,341", },
    { id: 4, name: "Json Taylor", email: "jsontaylor@gmail.com", image: "../assets/images/faces/3.jpg", amount: "$5,172", },
    { id: 5, name: "Elisha Sean", email: "elishasean@gmail.com", image: "../assets/images/faces/4.jpg", amount: "$2,624", },
];

// Recent Transactions
interface User {
    id: number;
    name: string;
    purchases: number;
    saleValue: string;
    avatarSrc: string;
}

export const RecentTransactions: User[] = [
    { id: 1, name: 'Emma Wilson', purchases: 15, saleValue: "$1,835", avatarSrc: '../assets/images/faces/4.jpg' },
    { id: 2, name: 'Robert Lewis', purchases: 18, saleValue: "$2,415", avatarSrc: '../assets/images/faces/15.jpg' },
    { id: 3, name: 'Angelina Hose', purchases: 21, saleValue: "$2,341", avatarSrc: '../assets/images/faces/5.jpg' },
    { id: 4, name: 'Samantha Sam', purchases: 24, saleValue: "$2,624", avatarSrc: '../assets/images/faces/2.jpg' },
    { id: 5, name: 'Dwayne Smith', purchases: 32, saleValue: "$3,172", avatarSrc: '../assets/images/faces/14.jpg' },
    { id: 6, name: 'Robert Lewis', purchases: 18, saleValue: "$2,415", avatarSrc: '../assets/images/faces/15.jpg' },
    { id: 7, name: 'Samantha Sam', purchases: 24, saleValue: "$2,624", avatarSrc: '../assets/images/faces/2.jpg' },
];
export interface WidgetsCardType {
    id: number;
    title: string;
    value: string;
    icon: ReactNode;
    arrow: string;
    badgeText: string;
    iconBgClass: string;
}
const icon1 = <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M96,37.5v72l-62.4,36A96,96,0,0,1,96,37.5Z" opacity="0.2"></path><path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62Zm130.34,26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05,104.05,0,0,0,128,24a8,8,0,0,0-8,8v91.83l-78.81,45.9a8,8,0,0,0-2.87,11A104,104,0,0,0,232,128,103.34,103.34,0,0,0,218.34,76.52ZM136,40.36A88.05,88.05,0,0,1,199.89,77.3L136,114.51ZM128,216a88.45,88.45,0,0,1-71.49-36.68l75.4-43.91.22-.14L207.9,91.14A88,88,0,0,1,128,216Z"></path></svg>
const icon2 = <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,118.31V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V118.31h0A191.14,191.14,0,0,0,128,144,191.08,191.08,0,0,0,224,118.31Z" opacity="0.2"></path><path d="M104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112ZM232,72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8ZM40,72v41.62A184.07,184.07,0,0,0,128,136a184,184,0,0,0,88-22.39V72ZM216,200V131.63A200.25,200.25,0,0,1,128,152a200.19,200.19,0,0,1-88-20.36V200H216Z"></path></svg>
const icon3 = <svg xmlns="http://www.w3.org/2000/svg" className="svg-success" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z" opacity="0.2"></path><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
const icon4 = <svg xmlns="http://www.w3.org/2000/svg" className="svg-info" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>

export const WidgetsCard: WidgetsCardType[] = [
    { id: 1, title: "Total Sales", value: "12,432", iconBgClass: "primary", arrow: "up", badgeText: "+2.5%", icon: icon1 },
    { id: 2, title: "Total Revenue", value: "$9,432", iconBgClass: "secondary", arrow: "down", badgeText: "-2.5%", icon: icon2 },
    { id: 3, title: "Total Customers", value: "3,132", iconBgClass: "success", arrow: "up", badgeText: "+2.5%", icon: icon3 },
    { id: 4, title: "Total Profit", value: "$532", iconBgClass: "info", arrow: "up", badgeText: "+2.5%", icon: icon4 },
];


