// To Do Tasks
interface ToDoTasksType {
    id: number;
    title: string;
    status: string;
    date: string;
    checked: boolean;
    statusClass: string;
}

export const ToDoTasks: ToDoTasksType[] = [
    { id: 1, title: 'Implement responsive design', status: 'Not Started', date: '17-Jan-2025', checked: true, statusClass: 'info', },
    { id: 2, title: 'Optimize database queries', status: 'Not Started', date: '18-Feb-2025', checked: false, statusClass: 'info', },
    { id: 3, title: 'Integrate third-party API', status: 'Pending', date: '19-Feb-2025', checked: true, statusClass: 'warning', },
    { id: 4, title: 'Create user documentation', status: 'Not Started', date: '21-Feb-2025', checked: true, statusClass: 'info', },
    { id: 5, title: 'Deploy to staging environment', status: 'In Progress', date: '24-Feb-2025', checked: false, statusClass: 'primary', },
    { id: 6, title: 'Conduct security audit', status: 'Not Started', date: '27-Feb-2025', checked: true, statusClass: 'info', },
];

// Project Documents
interface FileItem {
    id: number;
    name: string;
    size: string;
    icon: string;
    avatarClass?: string;
}
export const Documents: FileItem[] = [
    { id: 1, name: 'Project Proposal.pdf', size: '1.2MB', icon: '../../../assets/images/media/file-manager/1.png', avatarClass: "p-2" },
    { id: 2, name: 'Contracts.docx', size: '1.5MB', icon: '../../../assets/images/media/file-manager/3.png', },
    { id: 3, name: 'Meeting Notes.txt', size: '256KB', icon: '../../../assets/images/media/file-manager/1.png', avatarClass: "p-2" },
    { id: 4, name: 'User Manual.pdf', size: '1.8MB', icon: '../../../assets/images/media/file-manager/3.png', },
];

