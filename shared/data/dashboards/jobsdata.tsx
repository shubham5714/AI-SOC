import { ProjectsCardDataType } from "./projectsdata";

// Candidates Performance
export const CandidatesPerformanceSeries = [{
    name: 'Weekly',
    data: [31, 11, 22, 37, 13, 22, 37, 21, 44, 22, 34, 25],
    type: "column",
}, {
    name: 'Monthly',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 23],
    type: "area",
}, {
    name: 'Daily',
    data: [30, 8, 20, 36, 15, 22, 37, 19, 44, 24, 32, 23],
    type: "line",
},]
export const CandidatesPerformanceOptions = {
    chart: {
        height: 300,
        type: "line",
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
        width: [2, 1, 2],
        curve: "smooth",
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
        },
        axisTicks: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
        },
        labels: {
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        axisBorder: {
            show: false,
        },
    },
    legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
        fontSize: "11px",
        fontFamily: "Helvetica, Arial",
        fontWeight: 600,
        labels: {
            colors: '#74767c',
        },
        markers: {
            width: 7,
            height: 7,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
        },
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    colors: ["var(--primary-color)", "var(--primary005)", "rgb(244, 110, 244)"],
    plotOptions: {
        bar: {
            columnWidth: "15%",
            borderRadius: 4,
        }
    },
    fill: {
        opacity: [1, 0.05, 1],
        gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
        },
    },
}

// Job Statistics
export const JobStatisticsSeries = [75, 67]
export const JobStatisticsOptions = {
    chart: {
        height: 260,
        type: "radialBar"
    },
    colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "65%",
                background: "#fff",
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "16px",
                    show: false,
                },
                value: {
                    offsetY: 10,
                    color: "#4b9bfa",
                    fontSize: "22px",
                    show: true,
                },
                total: {
                    show: true,
                    label: 'Total',
                }
            },
        },
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontWeight: 600,
        fontSize: '11px',
        labels: {
            colors: '#74767c',
        },
        markers: {
            width: 7,
            height: 7,
            strokeWidth: 0,
            radius: 12,
            offsetX: 0,
            offsetY: 0
        },
    },
    stroke: {
        lineCap: "round",
    },
    labels: ["Job View", "Job Applied"],
}

// Recent Hirings
export type RecentHiringsType = {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string;
    taskCount: number | string;
    dueDate: string;
    checked: boolean;
    color: string;
};
export const RecentHirings: RecentHiringsType[] = [
    { id: 1, name: "Joanna Smith", email: "joannasmith14@gmail.com", color: "primary", role: "Product Manager", avatar: "../../assets/images/faces/12.jpg", taskCount: 16, dueDate: "24.10.2025", checked: true, },
    { id: 2, name: "Nada Wael", email: "nadawael20@gmail.com", color: "success", role: "Lead Developer", avatar: "../../assets/images/faces/3.jpg", taskCount: "04", dueDate: "16.10.2025", checked: false, },
    { id: 3, name: "Sara Ahmed", email: "saraahmed08@gmail.com", color: "info", role: "Manager", avatar: "../../assets/images/faces/1.jpg", taskCount: 12, dueDate: "18.10.2025", checked: true, },
    { id: 4, name: "Ghone Doe", email: "ghonedoe10@gmail.com", color: "secondary", role: "Lead UI/UX Designer", avatar: "../../assets/images/faces/13.jpg", taskCount: "05", dueDate: "10.10.2025", checked: true, },
    { id: 5, name: "Leo Phillip", email: "leophillip43@gmail.com", color: "warning", role: "Angular Developer", avatar: "../../assets/images/faces/14.jpg", taskCount: "05", dueDate: "24.10.2025", checked: false, },
];

// Pending Request Approvals
export interface ApprovalsType {
    id: number;
    position: string;
    experience: string;
    department: string;
    performance: string;
    candidates: string;
    date: string;
    status: string;
    icon: string;
    color: string;
    trClass?: string;
}

export const Approvals: ApprovalsType[] = [
    { id: 1, icon: 'global-line', color: 'primary', position: '.Net Developer', experience: '02 Years', department: 'Development', performance: 'Good', candidates: "12", date: '14.10.2020', status: 'Open', },
    { id: 2, icon: 'exchange-funds-line', color: 'secondary', position: 'Graphic Designer', experience: '05 Years', department: 'Designing', performance: 'Excellent', candidates: "24", date: '10.08.2020', status: 'Closed', },
    { id: 3, icon: 'honor-of-kings-line', color: 'success', position: 'Java Developer', experience: '0 Years', department: 'Development', performance: 'Excellent', candidates: "08", date: '16.12.2020', status: 'Open', },
    { id: 4, icon: 'a-b', color: 'info', position: 'QA Tester', experience: '04 Years', department: 'Quality & Control', performance: 'Good', candidates: "26", date: '05.11.2020', status: 'Open', },
    { id: 5, icon: 'android-line', color: 'warning', position: 'Android Developer', experience: '02 Years', department: 'Development', performance: 'Good', candidates: "06", date: '05.12.2020', status: 'Closed', },
];


export const JobsCardData: ProjectsCardDataType[] = [
    { id: 1, title: "Total Job Posted", count: "248", spanClass: "d-inline-block", timePeriod: "THIS MONTH", iconClass: "git-repository-private-line", bgColor: "primary", badgeText: "16%", percentageChange: "16%", },
    { id: 2, title: "Applied Candidates", count: "2K", spanClass: "d-inline-block", timePeriod: "THIS MONTH", iconClass: "parent-line", bgColor: "success", badgeText: "2.03%", percentageChange: "2.03%", },
    { id: 3, title: "Got Hired", count: "120", spanClass: "d-inline-block", timePeriod: "THIS MONTH", iconClass: "bell-line", bgColor: "info", badgeText: "0.04%", percentageChange: "0.04%", },
    { id: 4, title: "Today Interviews", count: "56", spanClass: "d-inline-block", timePeriod: "TODAY", iconClass: "stack-line", bgColor: "secondary", badgeText: "0.12%", percentageChange: "0.12%", },
];

// Recent Applicants
interface ApplicantsType {
    id: number;
    name: string;
    title: string;
    image: string;
}
export const Applicants: ApplicantsType[] = [
    { id: 1, name: "Mackeil Jepf", title: "Designer", image: "../../assets/images/faces/15.jpg" },
    { id: 2, name: "Rosen Begh", title: "Project Manager", image: "../../assets/images/faces/8.jpg" },
    { id: 3, name: "Rojesh Marfph", title: "Team Lead", image: "../../assets/images/faces/11.jpg" },
    { id: 4, name: "Joseph George", title: "Senior Developer", image: "../../assets/images/faces/13.jpg" },
    { id: 5, name: "Daniel Jackson", title: "Designer", image: "../../assets/images/faces/16.jpg" },
];

// Acquisitions
interface ProgressBar {
    id: number;
    color: string;
    percentage: number;
}
export const AcquisitionsProgress: ProgressBar[] = [
    { id: 1, color: 'primary', percentage: 32 },
    { id: 2, color: 'info', percentage: 20 },
    { id: 3, color: 'success', percentage: 12 },
    { id: 4, color: 'secondary', percentage: 16 },
    { id: 5, color: 'warning', percentage: 12 },
    { id: 6, color: 'danger', percentage: 8 }
];

interface AcquisitionsType {
    id: number;
    label: string;
    count: string;
    badgeColor: string;
}
export const Acquisitions: AcquisitionsType[] = [
    { id: 1, label: 'Total Applications', count: "1,982", badgeColor: 'primary',  },
    { id: 2, label: 'Recruited', count: "214", badgeColor: 'info',  },
    { id: 3, label: 'Short Listed', count: "262", badgeColor: 'success',  },
    { id: 4, label: 'Rejected', count: "395", badgeColor: 'secondary',  },
    { id: 5, label: 'Blocked', count: "79", badgeColor: 'warning',  },
    { id: 6, label: 'Pending', count: "64", badgeColor: 'danger', }
];
