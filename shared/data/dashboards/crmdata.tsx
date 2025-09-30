import { ReactNode } from "react";

export interface SeriesType {
    series: number[]
}

// Revenue Analytics
export const RevenueAnalyticsSeries = [
    {
        type: 'line',
        name: 'Profit',
        data: [
            {
                x: 'Jan',
                y: 100
            },
            {
                x: 'Feb',
                y: 210
            },
            {
                x: 'Mar',
                y: 180
            },
            {
                x: 'Apr',
                y: 454
            },
            {
                x: 'May',
                y: 230
            },
            {
                x: 'Jun',
                y: 320
            },
            {
                x: 'Jul',
                y: 656
            },
            {
                x: 'Aug',
                y: 830
            },
            {
                x: 'Sep',
                y: 350
            },
            {
                x: 'Oct',
                y: 350
            },
            {
                x: 'Nov',
                y: 210
            },
            {
                x: 'Dec',
                y: 410
            }
        ]
    },
    {
        type: 'line',
        name: 'Revenue',
        chart: {
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        data: [
            {
                x: 'Jan',
                y: 180
            },
            {
                x: 'Feb',
                y: 620
            },
            {
                x: 'Mar',
                y: 476
            },
            {
                x: 'Apr',
                y: 220
            },
            {
                x: 'May',
                y: 520
            },
            {
                x: 'Jun',
                y: 780
            },
            {
                x: 'Jul',
                y: 435
            },
            {
                x: 'Aug',
                y: 515
            },
            {
                x: 'Sep',
                y: 738
            },
            {
                x: 'Oct',
                y: 454
            },
            {
                x: 'Nov',
                y: 525
            },
            {
                x: 'Dec',
                y: 230
            }
        ]
    },
    {
        type: 'line',
        name: 'Sales',
        chart: {
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        data: [
            {
                x: 'Jan',
                y: 200
            },
            {
                x: 'Feb',
                y: 530
            },
            {
                x: 'Mar',
                y: 110
            },
            {
                x: 'Apr',
                y: 130
            },
            {
                x: 'May',
                y: 480
            },
            {
                x: 'Jun',
                y: 520
            },
            {
                x: 'Jul',
                y: 780
            },
            {
                x: 'Aug',
                y: 435
            },
            {
                x: 'Sep',
                y: 475
            },
            {
                x: 'Oct',
                y: 738
            },
            {
                x: 'Nov',
                y: 454
            },
            {
                x: 'Dec',
                y: 480
            }
        ]
    }
]
export const RevenueAnalyticsOptions = {
    chart: {
        height: 290,
        animations: {
            speed: 500
        }
    },
    colors: ["var(--primary-color)", "rgb(133, 204, 65)", "rgb(250, 182, 50)"],
    dataLabels: {
        enabled: false
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    stroke: {
        curve: 'smooth',
        width: [2, 2, 2],
        dashArray: [0, 0, 5]
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
            }
        },
    },
    tooltip: {
        y: [{
            formatter: function (e: number) {
                return void 0 !== e ? "$" + e.toFixed(0) : e
            }
        }, {
            formatter: function (e: number) {
                return void 0 !== e ? "$" + e.toFixed(0) : e
            }
        }, {
            formatter: function (e: number) {
                return void 0 !== e ? e.toFixed(0) : e
            }
        }]
    },
    legend: {
        show: true,
        position: "bottom",
        offsetX: 0,
        offsetY: 8,
        markers: {
            size: 4,
            strokeWidth: 0,
            strokeColor: '#fff',
        },
    },
    title: {
        align: 'left',
        style: {
            fontSize: '.8125rem',
            fontWeight: 'semibold',
            color: '#8c9097'
        },
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    }
}

// Leads Overview
export const LeadsOverviewSeries = [{
    name: 'Cold Leads',
    data: [80, 50, 30, 40, 100, 20, 40],
}, {
    name: 'Hot Leads',
    data: [20, 30, 40, 90, 20, 90, 35],
}, {
    name: 'Warm Leads',
    data: [40, 76, 78, 13, 43, 10, 80],
}]
export const LeadsOverviewOptions = {
    chart: {
        height: 310,
        type: 'radar',
        toolbar: {
            show: false,
        }
    },
    title: {
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    colors: ["var(--primary08)", "rgba(133, 204, 65, 0.85)", "rgba(40, 200, 235, 0.85)"],
    stroke: {
        width: 1
    },
    fill: {
        opacity: 0.05
    },
    markers: {
        size: 0
    },
    legend: {
        show: true,
        fontSize: "12px",
        position: 'bottom',
        horizontalAlign: 'center',
        fontFamily: "Montserrat",
        fontWeight: 500,
        offsetX: 0,
        offsetY: -4,
        labels: {
            colors: '#9ba5b7',
        },
        markers: {
            size: 4,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 7,
            offsetX: 0,
            offsetY: 0
        },
    },
    xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val: number, i: number) {
                if (i % 5 === 0) {
                    return val
                }
            }
        }
    }
}



type CRMcardDataSeriesType = {
    data: number[];
}[];

export const CRMcardDataSeries = ({ series }: SeriesType): CRMcardDataSeriesType => ([{
    data: series
}]);


type ColorOptionType = {
    color: string;
};

type CRMcardDataOptionsType = {
    chart: {
        height: number;
        width: number;
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
    plotOptions: {
        bar: {
            columnWidth: string;
            borderRadius: number;
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

export const CRMcardDataOptions = ({ color }: ColorOptionType): CRMcardDataOptionsType => ({
    chart: {
        height: 40,
        width: 80,
        type: 'bar',
        fontFamily: 'Poppins, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '40%',
            borderRadius: 2,
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
        curve: 'straight'
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

export const CRMcardDataSeries1 = ({ series }: SeriesType) => ([{
    data: series
}])
export const CRMcardDataOptions1 = ({ color }: ColorOptionType) => ({
    chart: {
        height: 40,
        width: 80,
        type: 'line',
        fontFamily: 'Poppins, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '40%',
            borderRadius: 2,
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
        width: 2,
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
    colors: [color],
})



const LeadsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>
const ConversionIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,61.64l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.31ZM50.54,101.44a36,36,0,0,1,50.92-50.91h0a36,36,0,0,1-50.92,50.91ZM56,76A20,20,0,1,0,90.14,61.84h0A20,20,0,0,0,56,76ZM216,180a36,36,0,1,1-10.54-25.46h0A35.76,35.76,0,0,1,216,180Zm-16,0a20,20,0,1,0-5.86,14.14A19.87,19.87,0,0,0,200,180Z"></path></svg>
const PendingIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
const PipelineIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>
const ContactsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path></svg>

export interface CRMcardDataType {
    id: number;
    icon: ReactNode;
    title: string;
    value: string;
    changePercentage: string;
    changeDirection: string;
    bgColor: string;
    chartType: string;
    chartOptions: CRMcardDataOptionsType;
    chertSeries: CRMcardDataSeriesType
}

export const CRMcardData: CRMcardDataType[] = [
    { id: 1, icon: LeadsIcon, title: "Total Leads", value: "1,1125", changePercentage: "+2.5%", changeDirection: 'up', bgColor: 'primary', chartType: "bar", chartOptions: CRMcardDataOptions({ color: 'var(--primary-color)' }), chertSeries: CRMcardDataSeries({ series: [20, 14, 19, 10, 23, 20, 22, 9, 12] }) },
    { id: 2, icon: ConversionIcon, title: "Conversion Rate", value: "15.8%", changePercentage: "-2.5%", changeDirection: 'down', bgColor: 'success', chartType: "line", chartOptions: CRMcardDataOptions1({ color: 'rgb(133, 204, 65)' }), chertSeries: CRMcardDataSeries1({ series: [20, 14, 20, 22, 9, 12, 19, 10, 25] }) },
    { id: 3, icon: PendingIcon, title: "Tasks Pending", value: "$3,132", changePercentage: "+2.5%", changeDirection: 'up', bgColor: 'info', chartType: "bar", chartOptions: CRMcardDataOptions({ color: 'rgb(40, 200, 235)' }), chertSeries: CRMcardDataSeries({ series: [20, 20, 22, 9, 14, 19, 10, 25, 12] }) },
    { id: 4, icon: PipelineIcon, title: "Sales Pipeline", value: "$3,132", changePercentage: "+2.5%", changeDirection: 'up', bgColor: 'secondary', chartType: "line", chartOptions: CRMcardDataOptions1({ color: 'rgb(244, 110, 244)' }), chertSeries: CRMcardDataSeries1({ series: [20, 20, 22, 9, 12, 14, 19, 10, 25] }) },
    { id: 5, icon: ContactsIcon, title: "New Contacts", value: "968", changePercentage: "-2.5%", changeDirection: 'down', bgColor: 'warning', chartType: "bar", chartOptions: CRMcardDataOptions({ color: 'rgb(250, 182, 50)' }), chertSeries: CRMcardDataSeries({ series: [20, 19, 10, 25, 20, 22, 9, 12, 14] }) },
];

// TOP DEALS
interface TableRow {
    id: number;
    company: string;
    revenue: string;
    progress: string;
    status: string;
    avatarIcon?: string;
    avatarText?: string;
    avatarColor: string;
    statusColor: string;
    tdClass?: string;
}
export const TopDeals: TableRow[] = [
    { id: 1, company: "Et Management", revenue: "$121K", progress: "50%", avatarColor: "primary", statusColor: 'primary', status: "Contract Sent", avatarIcon: "terminal", },
    { id: 2, company: "Raslk Assoc", revenue: "$68K", progress: "70%", avatarColor: "secondary", statusColor: 'warning', status: "On Hold", avatarText: "RA", },
    { id: 3, company: "Sed Systems", revenue: "$221K", progress: "10%", avatarColor: "orange", statusColor: 'danger', status: "Contract Failed", avatarIcon: "monitor", },
    { id: 4, company: "Justo Manufacturers", revenue: "$521K", progress: "70%", avatarColor: "success", statusColor: 'success', status: "Won", avatarText: "JM", },
    { id: 5, company: "At Developers", revenue: "$51K", progress: "90%", avatarColor: "info", statusColor: 'primary', status: "Contract Sent", avatarText: "AD", },
    { id: 6, company: "Jumbotrics", revenue: "$51K", progress: "90%", avatarColor: "warning", statusColor: 'danger', status: "Closed", avatarText: "JU", tdClass: "border-bottom-0" },
];

// Deals Statistics
export interface DealsStatisticsType {
    id: number;
    companyName: string;
    contactName: string;
    email: string;
    amount: string;
    country: string;
    daysLeft: string;
    src: string;
    color: string;
    tdClass?: string
}
export const DealsStatistics: DealsStatisticsType[] = [
    { id: 1, companyName: "Xenon Tech. Ed.", contactName: "Simon Cowall", email: "mayorkelly@gmail.com", amount: "$4320.29", color: 'primary', country: "Germany", daysLeft: "43 Days", src: "../../assets/images/faces/15.jpg", },
    { id: 2, companyName: "Ideal IT Sol.", contactName: "Meisha Kerr", email: "andrewgarfield@gmail.com", amount: "$6745.99", color: 'secondary', country: "Canada", daysLeft: "45 Days", src: "../../assets/images/faces/4.jpg", },
    { id: 3, companyName: "Inferno Xo", contactName: "Jessica", email: "simoncowel234@gmail.com", amount: "$1176.89", color: 'success', country: "Singapore", daysLeft: "50 Days", src: "../../assets/images/faces/5.jpg", },
    { id: 4, companyName: "Myami Group & Tech.", contactName: "Amanda B", email: "mirindahers@gmail.com", amount: "$1899.99", color: 'warning', country: "USA", daysLeft: "55 Days", src: "../../assets/images/faces/6.jpg", },
    { id: 5, companyName: "Mevengo Tech Et Sed", contactName: "Jason Stathman", email: "jacobsmith@gmail.com", amount: "$1867.29", color: 'info', country: "Europe", daysLeft: "30 Days", src: "../../assets/images/faces/11.jpg", },
    { id: 6, companyName: "Lackme Info Et.", contactName: "Khabib Hussain", email: "Hussain@gmail.com", amount: "$2439.99", color: 'danger', country: "Canada", daysLeft: "35 Days", src: "../../assets/images/faces/13.jpg", tdClass: "border-bottom-0" },
];

// Top Leads
interface TopLeadsType {
    id: number;
    name: string;
    email: string;
    amount: string;
    src?: string;
    avatarText?: string;
    avatarColor?: string
}
export const TopLeads: TopLeadsType[] = [
    { id: 1, name: "Michael Jordan", email: "michael.jordan@example.com", amount: "$2,893", src: "../../assets/images/faces/10.jpg", },
    { id: 2, name: "Emigo Kiaren", email: "emigo.kiaren@gmail.com", amount: "$4,289", avatarColor: 'warning', avatarText: "EK", },
    { id: 3, name: "Randy Origoan", email: "randy.origoan@gmail.com", amount: "$6,347", src: "../../assets/images/faces/12.jpg", },
    { id: 4, name: "George Pieterson", email: "george.pieterson@gmail.com", amount: "$3,894", avatarColor: 'success', avatarText: "GP", },
    { id: 5, name: "Kiara Advain", email: "kiaraadvain214@gmail.com", amount: "$2,679", avatarColor: 'primary', avatarText: "KA", },
    { id: 6, name: "Leo Phillip", email: "leophillip343@gmail.com", amount: "$2,446", src: "../../assets/images/faces/13.jpg", },
];

// Tasks List
interface TasksListType {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string
    checked: boolean;
    tooltip?: string;
}

export const TasksList: TasksListType[] = [
    { id: 1, title: "Review Marketing Campaign Strategy", description: "Nemo enim ipsam voluptatem", icon: 'hourglass-line', color: 'primary', checked: false, tooltip: 'Progress' },
    { id: 2, title: "Update Client Database", description: "Eos dolor ea", icon: 'check-fill', color: 'success', checked: true, tooltip: 'Completed' },
    { id: 3, title: "Prepare Monthly Sales Report", description: "Nonumy erat ipsum ut ipsum", icon: 'error-warning-line', color: 'success', checked: false, tooltip: 'Pending' },
    { id: 4, title: "Schedule Team Meeting", description: "Nemo enim ipsam voluptatem", icon: 'check-fill', color: 'success', checked: true, tooltip: 'Completed' },
    { id: 5, title: "Update User Database", description: "Eos dolor ea", icon: 'hourglass-line', color: 'primary', checked: false, tooltip: 'Progress' },
    { id: 6, title: "Respond to Customer Inquiries", description: "Sed labore ut sed", icon: 'check-fill', color: 'success', checked: true, tooltip: 'Completed' },
];

export const TasksList1: TasksListType[] = [
    { id: 1, title: "Conduct Product Demo Sessions", description: "Nonumy erat ipsum ut ipsum", icon: 'time-line', color: 'secondary', checked: false },
    { id: 2, title: "Organize Training Session", description: "Consetetur et amet dolor", icon: 'time-line', color: 'secondary', checked: false },
    { id: 3, title: "Analyze Market Trends", description: "Nonumy erat ipsum ut ipsum", icon: 'time-line', color: 'secondary', checked: false },
    { id: 4, title: "Coordinate with Logistics Department", description: "Nonumy erat ipsum ut ipsum", icon: 'time-line', color: 'secondary', checked: false },
    { id: 5, title: "Meeting On Updation", description: "Nonumy erat ipsum ut ipsum", icon: 'time-line', color: 'secondary', checked: false },
    { id: 6, title: "Plan Social Media Content Calendar", description: "Accusam aliquyam ea sea", icon: 'time-line', color: 'secondary', checked: false },
];

// Profit By Sale
interface Sale {
    id: number;
    title: string;
    amount: string;
    percentage: string;
    progress: number;
    icon: string;
    colorClass: string;
}

export const ProfitBySale: Sale[] = [
    { id: 1, title: 'Total Sales', amount: "$12,345", percentage: "10% Increases", progress: 80, icon: 'wallet-alt', colorClass: 'primary', },
    { id: 2, title: 'Total Profit', amount: "$9,345", percentage: "12% Increases", progress: 75, icon: 'money-withdraw', colorClass: 'secondary', },
    { id: 3, title: 'Total Revenue', amount: "$9,345", percentage: "11% Decrease", progress: 78, icon: 'money-withdraw', colorClass: 'success', },
    { id: 4, title: 'Total Loss', amount: "$11,345", percentage: "11% Decrease", progress: 68, icon: 'money-withdraw', colorClass: 'info', },
];