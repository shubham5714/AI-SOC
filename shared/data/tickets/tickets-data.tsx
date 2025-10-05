export interface TicketType {
    id: number;
    title: string;
    code: string;
    startDate: string;
    status: string;
    endDate: string;
    priority: 'Low' | 'Medium' | 'High';
    team: string[];
    teamCount?: number;
    taskStatus: string;
    checked?: boolean;
    statusColor: string;
    priorityColor: string;
    color: string;
}

export const TicketsViewsData: TicketType[] = [
    { id: 1, title: "Design New Landing Page", code: "SPK - 01", startDate: "02-06-2024", status: "New", statusColor: 'primary', endDate: "10-06-2024", priorityColor: 'secondary', priority: "Medium", team: ["../../../assets/images/faces/2.jpg", "../../../assets/images/faces/8.jpg", "../../../assets/images/faces/2.jpg"], teamCount: 2, color: 'info', taskStatus: "In Review", checked: false },
    { id: 2, title: "New Project Buleprint", code: "SPK - 04", startDate: "05-06-2024", status: "Inprogress", statusColor: 'secondary', endDate: "15-06-2024", priorityColor: 'danger', priority: "High", team: ["../../../assets/images/faces/12.jpg", "../../../assets/images/faces/11.jpg"], teamCount: 4, color: 'warning', taskStatus: "On Hold", checked: true },
    { id: 3, title: "Server Side Validation", code: "SPK - 11", startDate: "12-06-2024", status: "Pending", statusColor: 'warning', endDate: "16-06-2024", priorityColor: 'success', priority: "Low", team: ["../../../assets/images/faces/5.jpg", "../../../assets/images/faces/9.jpg", "../../../assets/images/faces/13.jpg"], teamCount: 5, color: 'info', taskStatus: "In Review", checked: false },
    { id: 4, title: "New Project Buleprint", code: "SPK - 04", startDate: "05-06-2024", status: "Inprogress", statusColor: 'secondary', endDate: "15-06-2024", priorityColor: 'danger', priority: "High", team: ["../../../assets/images/faces/12.jpg", "../../../assets/images/faces/11.jpg",], teamCount: 4, color: 'info', taskStatus: "In Review", checked: true, },
    { id: 5, title: "Server Side Validation", code: "SPK - 11", startDate: "12-06-2024", status: "Pending", statusColor: 'warning', endDate: "16-06-2024", priorityColor: 'success', priority: "Low", team: ["../../../assets/images/faces/5.jpg", "../../../assets/images/faces/9.jpg", "../../../assets/images/faces/13.jpg",], teamCount: 5, color: 'info', taskStatus: "In Review", checked: false, },
    { id: 6, title: "New Plugin Development", code: "SPK - 24", startDate: "08-06-2024", status: "Completed", statusColor: 'success', endDate: "17-06-2024", priorityColor: 'success', priority: "Low", team: ["../../../assets/images/faces/2.jpg", "../../../assets/images/faces/8.jpg",], teamCount: 2, color: 'warning', taskStatus: "On Hold", checked: true, },
    { id: 7, title: "Designing New Authentication Page", code: "SPK - 16", startDate: "03-06-2024", status: "Inprogress", statusColor: 'secondary', endDate: "08-06-2024", priorityColor: 'secondary', priority: "Medium", team: ["../../../assets/images/faces/10.jpg", "../../../assets/images/faces/15.jpg",], teamCount: 3, color: 'info', taskStatus: "In Review", checked: false, },
    { id: 8, title: "New Plugin Development", code: "SPK - 24", startDate: "08-06-2024", status: "Completed", statusColor: 'success', endDate: "17-06-2024", priorityColor: 'success', priority: "Low", team: ["../../../assets/images/faces/2.jpg", "../../../assets/images/faces/8.jpg"], teamCount: 2, color: 'info', taskStatus: "In Review", checked: false },
    { id: 9, title: "Designing New Authentication Page", code: "SPK - 16", startDate: "03-06-2024", status: "Inprogress", statusColor: 'secondary', endDate: "08-06-2024", priorityColor: 'secondary', priority: "Medium", team: ["../../../assets/images/faces/10.jpg", "../../../assets/images/faces/15.jpg"], teamCount: 3, color: 'info', taskStatus: "In Review", checked: false },
    { id: 10, title: "Documentation For New Template", code: "SPK - 07", startDate: "12-06-2024", status: "New", statusColor: 'primary', endDate: "25-06-2024", priorityColor: 'danger', priority: "High", team: ["../../../assets/images/faces/12.jpg"], color: 'warning', taskStatus: "On Hold", checked: false },
];

interface TaskCardStatType {
    id: number;
    title: string;
    count: string;
    icon: string;
    iconBg: string;
    trend: string;
    percentage: string;
    arrow: string;
};

export const TicketCardStat: TaskCardStatType[] = [
    { id: 1, title: 'New Tasks', count: '45,478', icon: 'task-line', iconBg: 'primary', trend: 'Increased', percentage: '2.56%', arrow: 'up' },
    { id: 2, title: 'Completed Tasks', count: '2,345', icon: 'check-line', iconBg: 'success', trend: 'Decreased', percentage: '3.05%', arrow: 'down' },
    { id: 3, title: 'Pending Tasks', count: '1,245', icon: 'time-line', iconBg: 'info', trend: 'Increased', percentage: '2.16%', arrow: 'up' },
    { id: 4, title: 'Inprogress Tasks', count: '658', icon: 'loader-line', iconBg: 'secondary', trend: 'Increased', percentage: '2.1%', arrow: 'up' },
];

export const Status = [
    { label: 'New', value: 4 },
    { label: 'Inprogress', value: 1 },
    { label: 'On-hold', value: 2 },
    { label: 'Completed', value: 3 },
]
export const Priority = [
    { label: 'High', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'Low', value: 3 },
]
export const tags = [
    { value: 1, label: 'Angelina May' },
    { value: 2, label: 'Kiara advain' },
    { value: 3, label: 'Hercules Jhon' },
    { value: 4, label: 'Mayor Kim' },
]

