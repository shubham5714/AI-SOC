export interface ProjectListType {
    id: number;
    logo: string;
    title: string;
    tasksCompleted: number;
    totalTasks: number;
    description: string;
    members: string[];
    startDate: string;
    endDate: string;
    progress: number;
    priority: string;
    color: string;
}
export const ProjectList: ProjectListType[] = [
    { id: 1, logo: '../../../assets/images/company-logos/1.png', title: 'Development of Enhanced Analytics Platform', tasksCompleted: 18, totalTasks: 22, description: 'Build an advanced analytics dashboard integrating real-time data from multiple sources.', members: ['../../../assets/images/faces/5.jpg', '../../../assets/images/faces/7.jpg', '../../../assets/images/faces/9.jpg', '../../../assets/images/faces/11.jpg',], startDate: '15,Jun 2025', endDate: '30,Aug 2025', progress: 65, color: 'warning', priority: 'Medium', },
    { id: 2, logo: '../../../assets/images/company-logos/3.png', title: 'E-commerce Platform Optimization', tasksCompleted: 10, totalTasks: 20, description: 'Enhance performance and user experience for a high-traffic e-commerce platform.', members: ['../../../assets/images/faces/4.jpg', '../../../assets/images/faces/6.jpg', '../../../assets/images/faces/12.jpg',], startDate: '02,Jul 2025', endDate: '15,Sep 2025', progress: 45, color: 'danger', priority: 'High', },
    { id: 3, logo: '../../../assets/images/company-logos/7.png', title: 'Data Migration to Cloud', tasksCompleted: 5, totalTasks: 8, description: 'Transfer legacy data systems to cloud infrastructure for scalability and accessibility.', members: ['../../../assets/images/faces/1.jpg', '../../../assets/images/faces/21.jpg',], startDate: '15,Oct 2025', endDate: '30,Dec 2025', progress: 62, color: 'success', priority: 'Low', },
    { id: 4, logo: '../../../assets/images/company-logos/8.png', title: 'Cybersecurity Audit and Enhancements', tasksCompleted: 2, totalTasks: 6, description: 'Conduct a comprehensive audit and implement security measures to protect data and systems.', members: ['../../../assets/images/faces/12.jpg', '../../../assets/images/faces/11.jpg',], startDate: '01,Nov 2025', endDate: '15,Jan 2025', progress: 40, color: 'danger', priority: 'High', },
    { id: 5, logo: '../../../assets/images/company-logos/6.png', title: 'AI-Powered Customer Support System', tasksCompleted: 3, totalTasks: 10, description: 'Implement a machine learning-driven system to automate customer support inquiries.', members: ['../../../assets/images/faces/5.jpg', '../../../assets/images/faces/12.jpg',], startDate: '05,Sep 2025', endDate: '25,Nov 2025', progress: 30, color: 'warning', priority: 'Medium', },
    { id: 6, logo: '../../../assets/images/company-logos/4.png', title: 'Mobile App Launch', tasksCompleted: 5, totalTasks: 15, description: 'Develop and release a new mobile application for iOS and Android platforms.', members: ['../../../assets/images/faces/13.jpg', '../../../assets/images/faces/14.jpg', '../../../assets/images/faces/15.jpg',], startDate: '10,Aug 2025', endDate: '30,Oct 2025', progress: 35, color: 'info', priority: 'Medium', },
    { id: 7, logo: '../../../assets/images/company-logos/5.png', title: 'IT Infrastructure Upgrade', tasksCompleted: 2, totalTasks: 12, description: 'Modernize network and server infrastructure to improve reliability and security.', members: ['../../../assets/images/faces/16.jpg', '../../../assets/images/faces/11.jpg',], startDate: '20,Jul 2025', endDate: '30,Oct 2025', progress: 15, color: 'success', priority: 'Low', },
];

export const Avatars: string[] = [
    '../../../assets/images/faces/1.jpg',
    '../../../assets/images/faces/2.jpg',
    '../../../assets/images/faces/8.jpg',
    '../../../assets/images/faces/12.jpg',
    '../../../assets/images/faces/10.jpg',
    '../../../assets/images/faces/4.jpg',
    '../../../assets/images/faces/5.jpg',
    '../../../assets/images/faces/13.jpg',
];

interface Select {
    value: string;
    label: string;
}

export const Categoryedit: Select[] = [
    { value: "Sort By", label: "Sort By" },
    { value: "Newest", label: "Newest" },
    { value: "Date Added", label: "Date Added" },
    { value: "Type", label: "Type" },
    { value: "A - Z", label: "A - Z" },
];
