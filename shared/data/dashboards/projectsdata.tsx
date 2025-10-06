import { ReactNode } from "react";

// Project Statistics
export const ProjectStatisticsSeries = [{
    name: 'Active Projects',
    type: 'column',
    data: [104, 102, 117, 146, 118, 115, 220, 103, 83, 114, 265, 174],
}, {
    name: "Completed Projects",
    type: "column",
    data: [92, 75, 123, 111, 196, 122, 159, 102, 138, 136, 62, 240]
}, {
    name: 'Project Revenue',
    type: 'line',
    data: [35, 52, 86, 65, 102, 70, 152, 87, 55, 92, 170, 80],
}]
export const ProjectStatisticsOptions = {
    chart: {
        height: 315,
        type: "line",
        stacked: false,
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ["var(--primary-color)", "rgb(244, 110, 244)", "rgb(133, 204, 65)"],
    stroke: {
        width: [2, 2, 2],
        curve: "smooth"
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
            borderRadius: 2
        }
    },
    markers: {
        size: [0, 0, 5],
        colors: undefined,
        strokeColors: '#fff',
        strokeOpacity: 0.6,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: [0, 0, 2],
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
            size: undefined,
            sizeOffset: 3
        }
    },
    fill: {
        opacity: [1, 1, 1]
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    legend: {
        show: true,
        position: 'bottom',
    },
    yaxis: {
        min: 0,
        forceNiceScale: true,
        title: {
            style: {
                color: '	#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + "";
            }
        }
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
    },
    tooltip: {
        enabled: true,
        shared: false,
        intersect: true,
        x: {
            show: false
        }
    },
}

// Tasks Activity
export const TasksActivitySeries = [5, 4, 5, 1]
export const TasksActivityOptions = {
    labels: ["Critical", "High", "Medium", "Low"],
    chart: {
        height: 208,
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
            startAngle: -90,
            endAngle: 90,
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
                        offsetY: -30
                    },
                    value: {
                        show: true,
                        fontSize: '15px',
                        color: undefined,
                        offsetY: -25,
                        formatter: function (val: string) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    grid: {
        padding: {
            bottom: -100
        }
    },
    colors: ["var(--primary-color)", "rgba(40, 200, 235, 1)", "rgba(133, 204, 65, 1)", "rgba(244, 110, 244, 1)"],
}

// Task List
interface Task {
    id: number;
    taskName: string;
    time: string;
    date: string;
    avatars: string[];
    status?: string
    tdClass?: string
}
export const TaskList: Task[] = [
    { id: 1, taskName: "Update client records in database", time: "12.43pm", date: "Today", avatars: ["../../assets/images/faces/2.jpg", "../../assets/images/faces/8.jpg", "../../assets/images/faces/2.jpg"] },
    { id: 2, taskName: "Design logo for new product", time: "11.25am", date: "Tomorrow", avatars: ["../../assets/images/faces/6.jpg", "../../assets/images/faces/9.jpg"] },
    { id: 3, taskName: "Respond to customer emails promptly", time: "9.56am", date: "Today", avatars: ["../../assets/images/faces/3.jpg", "../../assets/images/faces/5.jpg", "../../assets/images/faces/10.jpg", "../../assets/images/faces/15.jpg"] },
    { id: 4, taskName: "Compile weekly sales report summary", time: "8.15am", date: "Today", avatars: ["../../assets/images/faces/11.jpg"] },
    { id: 5, taskName: "Review and edit blog post", time: "4.20pm", date: "Tomorrow", avatars: ["../../assets/images/faces/13.jpg", "../../assets/images/faces/16.jpg", "../../assets/images/faces/8.jpg"] },
    { id: 6, taskName: "Create social media content calendar", time: "8.29am", date: "Today", avatars: ["../../assets/images/faces/10.jpg", "../../assets/images/faces/5.jpg"] },
    { id: 7, taskName: "Compile weekly sales report summary", time: "8.15am", date: "Today", avatars: ["../../assets/images/faces/11.jpg"], tdClass: "border-bottom-0" },
];

export const TaskList1: Task[] = [
    { id: 1, taskName: "Sort and file important documents", date: "24 Nov 2024", time: "4 hrs ago", avatars: ["../../assets/images/faces/5.jpg", "../../assets/images/faces/9.jpg"] },
    { id: 2, taskName: "Test website for user experience", date: "30 Nov 2024", time: "Today", avatars: ["../../assets/images/faces/11.jpg", "../../assets/images/faces/12.jpg", "../../assets/images/faces/13.jpg"] },
    { id: 3, taskName: "Schedule team meeting", date: "11 Dec 2024", time: "Yesterday", avatars: ["../../assets/images/faces/4.jpg"] },
    { id: 4, taskName: "Write brief for marketing campaign", date: "6 Dec 2024", time: "Yesterday", avatars: ["../../assets/images/faces/1.jpg", "../../assets/images/faces/2.jpg"] },
    { id: 5, taskName: "Proofread product description text", date: "8 Dec 2024", time: "Yesterday", avatars: ["../../assets/images/faces/5.jpg", "../../assets/images/faces/3.jpg", "../../assets/images/faces/11.jpg", "../../assets/images/faces/12.jpg"] },
    { id: 6, taskName: "Organize files on cloud storage", date: "21 Dec 2024", time: "Today", avatars: ["../../assets/images/faces/1.jpg"] },
    { id: 7, taskName: "Schedule team meeting", date: "11 Dec 2024", time: "Yesterday", avatars: ["../../assets/images/faces/4.jpg"], tdClass: "border-bottom-0" },
];

// Projects Summary
export interface SummaryType {
    id: number,
    name: string;
    startDate: string;
    progress: number;
    progressColor: string;
    team: string[];
    dueDate: string;
    status: string;
    statusColor: string;
    imgCount?: string;
}
export const Summary: SummaryType[] = [
    { id: 1, name: "Website Design", startDate: "25-03-2024", progress: 40, progressColor: "primary", team: ["../../assets/images/faces/2.jpg", "../../assets/images/faces/8.jpg", "../../assets/images/faces/2.jpg",], dueDate: "14-04-2024", status: "In Progress", statusColor: "primary", imgCount: '2' },
    { id: 2, name: "Filemanager Application", startDate: "16-03-2024", progress: 75, progressColor: "secondary", team: ["../../assets/images/faces/1.jpg", "../../assets/images/faces/12.jpg"], dueDate: "24-05-2024", status: "Pending", statusColor: "warning" },
    { id: 3, name: "Chat Interface", startDate: "28-02-2024", progress: 58, progressColor: "success", team: ["../../assets/images/faces/5.jpg", "../../assets/images/faces/8.jpg", "../../assets/images/faces/11.jpg"], dueDate: "28-03-2024", status: "Ongoing", statusColor: "danger" },
    { id: 4, name: "Ecommerce Application", startDate: "18-03-2024", progress: 100, progressColor: "orange", team: ["../../assets/images/faces/6.jpg", "../../assets/images/faces/9.jpg", "../../assets/images/faces/13.jpg"], dueDate: "02-04-2024", status: "Completed", statusColor: "success" },
    { id: 5, name: "HR Dashboard", startDate: "25-03-2024", progress: 45, progressColor: "info", team: ["../../assets/images/faces/10.jpg"], dueDate: "27-03-2024", status: "In Progress", statusColor: "primary" },
];


const ProjectIcon = <svg id="Layer_1" className="svg-white" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>
const EarningsIcon = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" viewBox="0 0 24 24"><path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z"></path></svg>
const CostIcon = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg>
const ProductivityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" viewBox="0 0 24 24"><path d="M21.71,7.29a1,1,0,0,0-1.42,0L14,13.59,9.71,9.29a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,11.41l4.29,4.3a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,7.29Z"></path></svg>

export interface ProjectsCardDataType {
    id?: number;
    title?: string;
    count?: string;
    percentage?: string;
    icon?: ReactNode;
    bgColor?: string;
    badgeClass?: string;
    arrow?: string;
    titleColor?: string;
    timePeriod?: string;
    spanClass?: string;
    iconClass?: string;
    badgeText?: string;
    percentageChange?: string;
}
export const ProjectsCardData: ProjectsCardDataType[] = [
    { id: 1, title: 'Total Time On Project', count: '148:00h', percentage: '3.45%', arrow: 'up', badgeClass: 'align-middle', bgColor: 'primary', icon: ProjectIcon, titleColor: "text-muted" },
    { id: 2, title: 'Total Earnings', count: '$12,563.50', percentage: '4.14%', arrow: 'up', badgeClass: 'align-middle', bgColor: 'success', icon: EarningsIcon, titleColor: "text-muted" },
    { id: 3, title: 'Total Cost', count: '$6,156.38', percentage: '0.66%', arrow: 'down', badgeClass: 'align-middle', bgColor: 'info', icon: CostIcon, titleColor: "text-muted" },
    { id: 4, title: 'Total Productivity', count: '95.5$', percentage: '2.97%', arrow: 'up', badgeClass: 'align-middle', bgColor: 'secondary', icon: ProductivityIcon, titleColor: "text-muted" },
];

// Project Categories
interface CategoriesType {
    id: number;
    title: string;
    percentage: string;
    count: number;
    color: string;
    liClass?: string;
}
export const Categories: CategoriesType[] = [
    { id: 1, title: 'Ongoing Projects', percentage: '12.77%', count: 120, color: 'primary', },
    { id: 2, title: 'Completed Projects', percentage: '47.87%', count: 450, color: 'info', },
    { id: 3, title: 'Pending Approval', percentage: '8.51%', count: 80, color: 'success', },
    { id: 4, title: 'Upcoming Projects', percentage: '6.38%', count: 60, color: 'secondary', },
    { id: 5, title: 'Delayed Projects', percentage: '3.19%', count: 30, color: 'warning', },
];

// Recent Transactions
interface TransactionType {
    id: number;
    title: string;
    date: string;
    amount: string;
    status: string;
    color: string;
}

export const TransactionData: TransactionType[] = [
    { id: 1, title: 'Website Redesign', date: '2024-12-01', amount: '$5,000', status: 'Payment Received', color: 'primary', },
    { id: 2, title: 'Mobile App Development', date: '2024-12-02', amount: '$2,500', status: 'Expense', color: 'info', },
    { id: 3, title: 'CRM Integration', date: '2024-12-03', amount: '$3,000', status: 'Budget Allocation', color: 'success', },
    { id: 4, title: 'E-commerce Platform', date: '2024-12-04', amount: '$7,500', status: 'Payment Received', color: 'secondary', },
    { id: 5, title: 'Marketing Campaign', date: '2024-12-05', amount: '$1,200', status: 'Expense', color: 'warning', },
    { id: 6, title: 'Inventory System', date: '2024-12-06', amount: '$4,000', status: 'Payment Received', color: 'danger', },
];

// Aquisitions
interface AquisitionsType {
    id: number;
    name: string;
    count: number;
    progress: number;
    color: string;
}

export const Aquisitions: AquisitionsType[] = [
    { id: 1, name: 'New Projects', count: 32, progress: 50, color: 'primary', },
    { id: 2, name: 'Applications', count: 17, progress: 70, color: 'info', },
    { id: 3, name: 'Featured', count: 10, progress: 90, color: 'success', },
    { id: 4, name: 'Shortlisted', count: 8, progress: 32, color: 'secondary', },
    { id: 5, name: 'Rejected', count: 12, progress: 65, color: 'warning', },
];

// Tasks Activity
interface TaskActivityType {
    id: number;
    type: string;
    name: string;
    change: string;
    totalTasks: string;
    changeType: string;
}

export const TaskActivityType: TaskActivityType[] = [
    { id: 1, type: 'critical', name: 'Critical', change: "", totalTasks: "5", changeType: '', },
    { id: 2, type: 'high', name: 'High', change: "", totalTasks: "4", changeType: '', },
    { id: 3, type: 'medium', name: 'Medium', change: "", totalTasks: "5", changeType: '', },
    { id: 4, type: 'low', name: 'Low', change: "", totalTasks: "1", changeType: '', },
];