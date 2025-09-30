interface KanbanBadge {
    text: string;
    color: string;
}
interface CategoryBadge {
    text: string;
    color: string;
}
interface KanbanBoardType {
    id: number;
    title: string;
    badges: KanbanBadge[];
    category: CategoryBadge[];
    likes: number;
    comments: number | string;
    avatars: string[];
}

export const KanbanBoardData: KanbanBoardType[] = [
    { id: 1, title: 'Update Website Content', badges: [{ text: '#SHG - 01', color: 'success' }, { text: 'Development', color: 'info' }], category: [{ text: 'High Priority', color: 'primary' }, { text: 'In Progress', color: 'secondary' }], likes: 11, comments: "02", avatars: ['../../../assets/images/faces/1.jpg', '../../../assets/images/faces/2.jpg', '../../../assets/images/faces/3.jpg', '../../../assets/images/faces/4.jpg',], },
    { id: 2, title: 'Implement new feature for Karban app.', badges: [{ text: '#SHG - 02', color: 'success' }, { text: 'Development', color: 'info' }], category: [{ text: 'Low', color: 'warning' }, { text: 'In Progress', color: 'secondary' }], likes: 15, comments: "03", avatars: ['../../../assets/images/faces/1.jpg', '../../../assets/images/faces/2.jpg', '../../../assets/images/faces/3.jpg', '../../../assets/images/faces/4.jpg',], },
    { id: 3, title: 'Develop new feature for Karban app', badges: [{ text: '#SHG - 03', color: 'success' }, { text: 'Development', color: 'secondary' }, { text: 'UI/UX', color: 'info' }], category: [{ text: 'Low', color: 'warning' }, { text: 'In Progress', color: 'secondary' }], likes: 25, comments: "05", avatars: ['../../../assets/images/faces/5.jpg', '../../../assets/images/faces/9.jpg',], },
    { id: 4, title: 'Design multi-usage landing page.', badges: [{ text: '#SHG - 04', color: 'success' }, { text: 'Development', color: 'info' }, { text: 'Designing', color: 'secondary' }], category: [{ text: 'Low', color: 'warning' }, { text: 'In Progress', color: 'secondary' }], likes: 25, comments: "05", avatars: ['../../../assets/images/faces/5.jpg', '../../../assets/images/faces/9.jpg',], },
];

export const KanbanBoardData1: KanbanBoardType[] = [
    { id: 1, title: 'Adding Authentication Pages.', badges: [{ text: '#SHG - 05', color: 'info' }, { text: 'Authentication', color: 'info' }], category: [{ text: 'Low', color: 'warning' }, { text: 'In Progress', color: 'secondary' }], likes: 8, comments: "04", avatars: ['../../../assets/images/faces/4.jpg', '../../../assets/images/faces/13.jpg', '../../../assets/images/faces/5.jpg',], },
    { id: 2, title: 'New Marketing Campaign Strategy', badges: [{ text: '#SHG - 06', color: 'info' }, { text: 'Marketing', color: 'secondary' }], category: [{ text: 'High', color: 'primary' }, { text: 'In Progress', color: 'secondary' }], likes: 23, comments: 12, avatars: ['../../../assets/images/faces/4.jpg', '../../../assets/images/faces/13.jpg', '../../../assets/images/faces/5.jpg',], },
];

export const KanbanBoardData2: KanbanBoardType[] = [
    { id: 1, title: 'Developing Calendar & Mail pages.', badges: [{ text: '#SHG - 07', color: 'success' }, { text: 'UI Design', color: 'primary' }, { text: 'Development', color: 'secondary' }], category: [{ text: 'Medium', color: 'info' }, { text: 'In Progress', color: 'secondary' }], likes: 10, comments: 18, avatars: ['../../../assets/images/faces/7.jpg', '../../../assets/images/faces/10.jpg', '../../../assets/images/faces/11.jpg',], },
    { id: 2, title: 'Project Design in Figma and Sketch', badges: [{ text: '#SHG - 08', color: 'success' }, { text: 'Design', color: 'secondary' }], category: [{ text: 'Medium', color: 'info' }, { text: 'In Progress', color: 'secondary' }], likes: 5, comments: "02", avatars: ['../../../assets/images/faces/13.jpg', '../../../assets/images/faces/6.jpg',], },
];

export const KanbanBoardData3: KanbanBoardType[] = [
    { id: 1, title: 'Design Architecture Strategy', badges: [{ text: '#SHG - 10', color: 'success' }, { text: 'Review', color: 'secondary' }], category: [{ text: 'Medium', color: 'info' }, { text: 'In Progress', color: 'secondary' }], likes: 9, comments: 35, avatars: ['../../../assets/images/faces/3.jpg', '../../../assets/images/faces/5.jpg', '../../../assets/images/faces/7.jpg',], },
];

export const KanbanBoardData4: KanbanBoardType[] = [
    { id: 1, title: 'New Project Update', badges: [{ text: '#SHG - 11', color: 'success' }, { text: 'Review', color: 'secondary' }], category: [{ text: 'High', color: 'primary' }, { text: 'Complete', color: 'success' }], likes: 9, comments: 35, avatars: ['../../../assets/images/faces/6.jpg', '../../../assets/images/faces/13.jpg'], },
    { id: 2, title: 'React JS New Version Update', badges: [{ text: '#SHG - 12', color: 'success' }, { text: 'Review', color: 'secondary' }], category: [{ text: 'High', color: 'primary' }, { text: 'Complete', color: 'success' }], likes: 22, comments: 12, avatars: ['../../../assets/images/faces/10.jpg', '../../../assets/images/faces/11.jpg', '../../../assets/images/faces/3.jpg',], },
    { id: 3, title: 'Project Discussion with Client', badges: [{ text: '#SHG - 12', color: 'success' }, { text: 'Review', color: 'secondary' }], category: [{ text: 'High', color: 'primary' }, { text: 'Complete', color: 'success' }], likes: 11, comments: 12, avatars: ['../../../assets/images/faces/4.jpg',], },
];


export const cars = [
    { value: 1, label: 'Admin' },
    { value: 2, label: 'Authentication' },
    { value: 3, label: 'Designing' },
    { value: 4, label: 'Development' },
    { value: 5, label: 'Finance' },
    { value: 5, label: 'Marketing' },
];
export const simpleItems1 = [
    { value: 1, label: 'Angelina May' },
    { value: 2, label: 'Hercules Jhon' },
    { value: 3, label: 'Kairar Advin' },
    { value: 4, label: 'Mayour Kim' },
];

export const simpleItems2 = [
    { value: 1, label: 'Sort By' },
    { value: 2, label: 'Newest' },
    { value: 3, label: 'Date Added' },
    { value: 4, label: 'Type' },
    { value: 5, label: 'A - Z' },
];
