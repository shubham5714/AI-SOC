// Job Application Status
export const JobApplicationSeries = [
    {
        name: "Hired",
        data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
    },
    {
        name: "Rejected",
        data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
    },
]
export const JobApplicationOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        type: "bar",
        fontFamily: "'Poppins', sans-serif",
        height: 320,
        stacked: true,
    },
    colors: ["rgb(244, 110, 244)", "var(--primary-color)"],
    plotOptions: {
        bar: {
            columnWidth: "15%",
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'all',
            borderRadius: 2,
        }
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        endingShape: 'rounded',
        colors: ['transparent'],
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
    grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],

    },
    yaxis: {
        tickAmount: 4,
    },
}

// Gender Distribution
export const GenderDistributionSeries = [500, 350, 150]
export const GenderDistributionOptions = {
    chart: {
        width: 310,
        type: 'polarArea'
    },
    labels: ['Male', 'Female', 'Others'],
    fill: {
        opacity: 0.9
    },
    stroke: {
        width: 1,
        colors: undefined
    },
    colors: ["var(--primary-color)", "rgb(40, 200, 235)", "rgb(133, 204, 65)"],
    yaxis: {
        show: false
    },
    legend: {
        position: 'right',
        offsetY: 30,
        offsetX: -30,
        markers: {
            size: 5,
            shape: "circle",
            strokeWidth: 0
        }
    },
}

type HrmCardDataSeriesType = {
    data: number[];
}[];

export const HrmCardDataSeries: HrmCardDataSeriesType = [
    {
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
];

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

type HrmCardDataOptionsType = {
    chart: {
        type: string;
        height: number;
        sparkline: {
            enabled: boolean;
        };
    };
    stroke: {
        curve: string;
        width: number;
    };
    fill: {
        type: string;
        
    };
    colors: string[];
    tooltip: {
        fixed: {
            enabled: boolean;
        };
        x: {
            show: boolean;
        };
        y: {
            title: {
                formatter: (seriesName: string) => string;
            };
        };
    };
};
export const HrmCardDataOptions = ({ color, gradientSettings }: GradientChartType): HrmCardDataOptionsType => ({
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 1.5,
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
    colors: [color],
    // colors: ["var(--primary-color)"],
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName: string) {
                    return "";
                },
            },
        },
    },
})

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

export interface HrmCardDataType {
    id: number
    title: string
    value: string
    percentage: string
    trend: string
    chartOptions: HrmCardDataOptionsType
    chartSeries: HrmCardDataSeriesType
}

export const HrmCardData: HrmCardDataType[] = [
    { id: 1, title: 'Total Employees', value: '12,116', percentage: '2.5%', trend: 'up', chartOptions: HrmCardDataOptions({ color: 'var(--primary-color)', gradientSettings: ChartGradientSettings.Revenue }), chartSeries: HrmCardDataSeries },
    { id: 2, title: 'Total Job Applied', value: '15,784', percentage: '1.5%', trend: 'down', chartOptions: HrmCardDataOptions({ color: 'rgb(133, 204, 65)', gradientSettings: ChartGradientSettings.Customers }), chartSeries: HrmCardDataSeries },
    { id: 3, title: 'Total Compensation', value: '$56,784', percentage: '6.0%', trend: 'up', chartOptions: HrmCardDataOptions({ color: 'rgb(40, 200, 235)', gradientSettings: ChartGradientSettings.Transactions }), chartSeries: HrmCardDataSeries },
    { id: 4, title: 'Annual Compensation', value: '$6.8k', percentage: '6.0%', trend: 'up', chartOptions: HrmCardDataOptions({ color: 'rgb(244, 110, 244)', gradientSettings: ChartGradientSettings.Products }), chartSeries: HrmCardDataSeries },
];

// Employee Status
interface Employee {
    id: number;
    name: string;
    role: string;
    status: string;
    performance: number;
    image: string;
    tdClass?: string,
}
export const EmployeeStatus: Employee[] = [
    { id: 1, name: 'John Doe', role: 'Manager', status: 'Active', performance: 85, image: '../../assets/images/faces/11.jpg', },
    { id: 2, name: 'Jane Smith', role: 'Developer', status: 'Inactive', performance: 70, image: '../../assets/images/faces/8.jpg', },
    { id: 3, name: 'Alex Johnson', role: 'HR Specialist', status: 'Active', performance: 92, image: '../../assets/images/faces/12.jpg', },
    { id: 4, name: 'Sarah Brown', role: 'Analyst', status: 'Active', performance: 78, image: '../../assets/images/faces/5.jpg', },
    { id: 5, name: 'Robert White', role: 'Designer', status: 'Inactive', performance: 60, image: '../../assets/images/faces/10.jpg', },
    { id: 6, name: 'Emily Clark', role: 'Accountant', status: 'Active', performance: 88, image: '../../assets/images/faces/1.jpg', tdClass: 'border-bottom-0' },
];

interface LeaveRequest {
    id: number;
    name: string;
    role: string;
    leaveType: string;
    leaveDays: number;
    status: string;
    image: string;
    color: string;
    tdClass?: string;
}

export const LeaveRequests: LeaveRequest[] = [
    { id: 1, name: 'Socrates Itumay', role: 'Team Lead', leaveType: 'Sick Leave', leaveDays: 2, color: "success", status: 'Approved', image: '../../assets/images/faces/2.jpg', },
    { id: 2, name: 'Samantha Paul', role: 'Sr.UI Developer', leaveType: 'Casual Leave', leaveDays: 1, color: "warning", status: 'Pending', image: '../../assets/images/faces/4.jpg', },
    { id: 3, name: 'Gray Noal', role: 'Java Developer', leaveType: 'Paternity Leave', leaveDays: 5, color: "success", status: 'Approved', image: '../../assets/images/faces/14.jpg', },
    { id: 4, name: 'Gray Noal', role: 'React Developer', leaveType: 'Personal Leave', leaveDays: 2, color: "danger", status: 'Rejected', image: '../../assets/images/faces/15.jpg', },
    { id: 5, tdClass: "border-bottom-0", name: 'Pope Johnson', role: 'Jr.Java Developer', leaveType: 'Gifted Leave', leaveDays: 2, color: "warning", status: 'Pending', image: '../../assets/images/faces/16.jpg', },
];

// Employee Directory
export interface EmployeeDirectoryType {
    id: number | string;
    empID: string;
    name: string;
    role: string;
    department: string;
    email: string;
    phone: string;
    status: string;
    salary: string;
    image: string;
    color: string;
    trClass?: string
}
export const EmployeeDirectory: EmployeeDirectoryType[] = [
    { id: "01", empID: '#emp23520', name: 'Richard Dom', role: 'Team Leader', department: 'Backend', email: 'richard116@demo.com', phone: '+0987654321', color: "success", status: 'Active', salary: '$15,000', image: '../../assets/images/faces/1.jpg', },
    { id: "02", empID: '#emp23521', name: 'Kakashra Sri', role: 'Web Developer', department: 'Front End', email: 'Kakashra987@demo.com', phone: '+0986548761', color: "success", status: 'Active', salary: '$20,000', image: '../../assets/images/faces/2.jpg', },
    { id: "03", empID: '#emp23522', name: 'Nikki Jey', role: 'Project Manager', department: 'HR', email: 'Nikki654@demo.com', phone: '+0986548787', color: "info", status: 'On Leave', salary: '$25,000', image: '../../assets/images/faces/3.jpg', },
    { id: "04", empID: '#emp23523', name: 'Sasukey Ahuhi', role: 'Project Manager', department: 'HR', email: 'Sasukey986@demo.com', phone: '+0986548788', color: "success", status: 'Active', salary: '$30,000', image: '../../assets/images/faces/4.jpg', },
    { id: "05", empID: '#emp23524', name: 'Xiong Yu', role: 'UI Developer', department: 'Engineering', email: 'Xiongu987@demo.com', phone: '+0986548988', color: "success", status: 'Active', salary: '$35,000', image: '../../assets/images/faces/5.jpg', },
    { id: "06", empID: '#emp23525', name: 'Arifa Zed', role: 'Team Member', department: 'IT', email: 'Arifa432@demo.com', phone: '+0986548985', color: "danger", status: 'Resigned', salary: '$40,000', image: '../../assets/images/faces/6.jpg', },
    { id: "07", trClass: 'custom-border', empID: '#emp23526', name: 'Jennifer Tab', role: 'Project Manager', department: 'Front End', email: 'Jennifer543@demo.com', phone: '+09865489987', color: "success", status: 'Active', salary: '$45,000', image: '../../assets/images/faces/7.jpg', },
];

// Upcoming Events
interface TimelineEvent {
    id: number;
    date: number | string;
    day: string;
    time?: string;
    title: string;
    badgeText: string;
    badgeColor: string;
    color: string;
    class?: boolean
}
export const UpcomingEvents: TimelineEvent[] = [
    { id: 1, color: 'primary', date: "02", day: 'Mon', time: '10:00AM', title: 'You have an announcement', badgeText: 'Announcement', badgeColor: 'primary' },
    { id: 2, color: 'success', date: "08", day: 'Tue', title: 'National holiday', class: false, badgeText: 'Holiday', badgeColor: 'warning' },
    { id: 3, color: 'info', date: "12", day: 'Wed', time: '09:00AM', title: 'John pup birthday', badgeText: 'Birthday', badgeColor: 'success' },
    { id: 4, color: 'secondary', date: "20", day: 'Thu', title: 'National Holiday', class: false, badgeText: 'Holiday', badgeColor: 'warning' },
    { id: 5, color: 'warning', date: "12", day: 'Wed', time: '04:00PM', title: 'Meeting reminder', badgeText: 'Announcement', badgeColor: 'primary' },
    { id: 6, color: 'danger', date: "21", day: 'Fri', time: '09:00AM', title: 'John pup birthday', badgeText: 'Birthday', badgeColor: 'success' },
    { id: 7, color: 'teal', date: "20", day: 'Thu', title: 'National Holiday', class: false, badgeText: 'Holiday', badgeColor: 'warning' },
    { id: 8, color: 'orange', date: "12", day: 'Wed', time: '04:00PM', title: 'Meeting reminder', badgeText: 'Announcement', badgeColor: 'primary' },
];

// Today's Interviews
interface InterviewsType {
    id: number;
    name: string;
    time: string;
    src: string;
}
export const Interviews: InterviewsType[] = [
    { id: 1, name: "Anurag Batiya", time: "03 May(9.00am-10.00am)", src: "../../assets/images/faces/15.jpg", },
    { id: 2, name: "Project Meeting", time: "04 May(9.00am-10.00am)", src: "../../assets/images/faces/3.jpg", },
    { id: 3, name: "Team Meeting", time: "05 May(9.00am-10.00am)", src: "../../assets/images/faces/6.jpg", },
    { id: 4, name: "Client Meeting", time: "06 May(9.00am-10.00am)", src: "../../assets/images/faces/13.jpg", },
    { id: 5, name: "Client Meeting", time: "06 May(9.00am-10.00am)", src: "../../assets/images/faces/3.jpg", },
    { id: 6, name: "Team Meeting", time: "05 May(9.00am-10.00am)", src: "../../assets/images/faces/11.jpg", },
];

interface AttendanceItem {
    id: number
    label: string;
    count: string;
    icon: string;
    bgColor: string;
}

export const AttendanceItems: AttendanceItem[] = [
    { id: 1, label: "Attendance", count: "4,241", icon: "stack-line", bgColor: "primary", },
    { id: 2, label: "Absent", count: "485", icon: "calendar-todo-line", bgColor: "success", },
    { id: 3, label: "Late", count: "08", icon: "time-line", bgColor: "info", },
];