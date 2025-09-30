
interface Mailtype {
    id: number;
    title: string;
}

export const mailtype: Mailtype[] = [
    { id: 1, title: 'Project testing ...' },
    { id: 2, title: 'Bug Fixes and Issue Tracking..' },
    { id: 3, title: 'New Feature Development...' },
    { id: 4, title: 'Admin Template review...' },
];
export const tasks = [
    { id: 1, title: 'All Tasks', icon: 'ri-checkbox-multiple-line', count: "167", badgeClass: 'bg-info-transparent', active: true },
    { id: 2, title: 'Completed', icon: 'ri-checkbox-circle-line', count: "12", badgeClass: 'bg-success-transparent' },
    { id: 3, title: 'Today', icon: 'ri-calendar-line', count: null, badgeClass: '' },
    { id: 4, title: 'Starred', icon: 'ri-star-line', count: "04", badgeClass: 'bg-secondary-transparent' },
    { id: 5, title: 'Personal', icon: 'ri-user-line', count: null, badgeClass: '' },
    { id: 6, title: 'Work', icon: 'ri-briefcase-line', count: "03", badgeClass: 'bg-success-transparent' },
    { id: 7, title: 'Trash', icon: 'ri-delete-bin-5-line', count: null, badgeClass: '' },
];
export const Status = [
    { label: 'In progress', value: 1 },
    { label: 'Not Started', value: 2 },
    { label: 'Completed', value: 3 },
    { label: 'Pending', value: 4 },
]
export const Priority = [
    { label: 'Critical', value: 1 },
    { label: 'High', value: 2 },
    { label: 'Medium', value: 3 },
    { label: 'Low', value: 4 },

]
export const tags = [
    { value: 1, label: 'Angelina May' },
    { value: 2, label: 'Kiara advain' },
    { value: 3, label: 'Hercules Jhon' },
    { value: 4, label: 'Mayor Kim' },
]
export interface TaskType {
    id: number;
    title: string;
    status: string;
    dueDate: string;
    priority: string;
    assignee: string;
    name: string;
    progress: number;
    color: string;
    color1: string;
    data: number;
    color2: string;
    checked: string | any;
}

export const TodoData: TaskType[] = [
    {
        id: 1,
        title: "Software Development Tasks",
        status: "In Progress",
        dueDate: "15-Jan-2024",
        priority: "Medium",
        assignee: "../../assets/images/faces/7.jpg",
        name: "Mehtha",
        progress: 32,
        color: "primary",
        color1: "info",
        data: 32,
        color2: "primary",
        checked: '',
    },
    {
        id: 2,
        title: "Bug Fixes and Issue Tracking",
        status: "Not Started",
        dueDate: "16-Jan-2024",
        priority: "High",
        assignee: "../../assets/images/faces/12.jpg",
        name: "Ranjeeth",
        progress: 80,
        color: "info",
        color1: "secondary",
        data: 80,
        color2: "secondary",
        checked: "defaultChecked"
    },
    {
        id: 3,
        title: "IT Infrastructure Upgrades",
        status: "Not Started",
        dueDate: "18-Feb-2024",
        priority: "Low",
        assignee: "../../assets/images/faces/8.jpg",
        name: "Vency",
        progress: 90,
        color: "info",
        color1: "success",
        data: 90,
        color2: "orange",
        checked: false
    },
    {
        id: 4,
        title: "Network Configuration",
        status: "Pending",
        dueDate: "19-Feb-2024",
        priority: "Medium",
        assignee: "../../assets/images/faces/15.jpg",
        name: "Cimen Sobs",
        progress: 69,
        color: "warning",
        color1: "info",
        data: 69,
        color2: "info",
        checked: "defaultChecked"
    },
    {
        id: 5,
        title: "Backup and Recovery Report",
        status: "Not Started",
        dueDate: "21-Feb-2024",
        priority: "High",
        assignee: "../../assets/images/faces/14.jpg",
        name: "Dhruv Dany",
        progress: 96,
        color: "info",
        color1: "secondary",
        data: 96,
        color2: "warning",
        checked: "defaultChecked"
    },
    {
        id: 6,
        title: "User Account Management",
        status: "In Progress",
        dueDate: "24-Feb-2024",
        priority: "Low",
        assignee: "../../assets/images/faces/11.jpg",
        name: "Rony Parker",
        progress: 88,
        color: "primary",
        color1: "success",
        data: 88,
        color2: "danger",
        checked: false
    }, {
        id: 7,
        title: "Deployment Schedule",
        status: "Not Started",
        dueDate: "27-Feb-2024",
        priority: "High",
        assignee: "../../assets/images/faces/4.jpg",
        name: "Monjitha",
        progress: 36,
        color: "info",
        color1: "secondary",
        data: 36,
        color2: "teal",
        checked: "defaultChecked"
    },
    {
        id: 8,
        title: "Database Management",
        status: "Not Started",
        dueDate: "03-Mar-2024",
        priority: "Medium",
        assignee: "../../assets/images/faces/3.jpg",
        name: "Killies",
        progress: 57,
        color: "info",
        color1: "info",
        data: 57,
        color2: "pink",
        checked: false
    },
    {
        id: 9,
        title: "Monitoring and Alert",
        status: "Not Started",
        dueDate: "05-Mar-2024",
        priority: "Low",
        assignee: "../../assets/images/faces/13.jpg",
        name: "Tom Cruz",
        progress: 79,
        color: "info",
        color1: "success",
        data: 79,
        color2: "dark",
        checked: false
    },
    {
        id: 10,
        title: "Server Maintenance",
        status: "Completed",
        dueDate: "17-Jan-2024",
        priority: "Low",
        assignee: "../../assets/images/faces/13.jpg",
        name: "Palam Nath",
        progress: 58,
        color: "success",
        color1: "success",
        data: 58,
        color2: "success",
        checked: false
    },
];