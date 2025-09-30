// Define the structure of the job data
export interface JobListType {
    id: number;
    title: string;
    company: string;
    companyLogo: string;
    jobCategory: string;
    applicants: number;
    postedDate: string;
    jobDuration: number;
    jobType: string;
    status: string;
    closingDate: string;
    image: string;
    postColor: string;
    statusColor: string;
    checked: boolean;
};
export const JobListData: JobListType[] = [
    { id: 1, title: "HTML Developer - Fresher", company: "HorizonTech Ventures", companyLogo: "../../../assets/images/company-logos/8.png", jobCategory: "Development", applicants: 18, postColor: 'primary', postedDate: "Nov 12 2024", jobDuration: 36, jobType: "Full Time", statusColor: 'success', status: "Approved", closingDate: "Oct 15 2024", image: "../../../assets/images/media/jobs/2.png", checked: false },
    { id: 2, title: "React Lead Developer", company: "FusionTech Industries", companyLogo: "../../../assets/images/company-logos/10.png", jobCategory: "Design", applicants: 31, postColor: 'danger', postedDate: "Oct 15 2024", jobDuration: 50, jobType: "Full Time", statusColor: 'danger', status: "Rejected", closingDate: "Sep 27 2024", image: "../../../assets/images/media/jobs/1.png", checked: true },
    { id: 3, title: "Vuejs Frontend Developer", company: "Optima Ventures Inc.", companyLogo: "../../../assets/images/company-logos/1.png", jobCategory: "Management", applicants: 36, postColor: 'primary', postedDate: "May 15 2024", jobDuration: 35, jobType: "Part Time", statusColor: 'warning', status: "Pending", closingDate: "Dec 19 2024", image: "../../../assets/images/media/jobs/3.png", checked: true },
    { id: 4, title: "Wordpress Developer - Remote", company: "Tech Innovators Ltd.", companyLogo: "../../../assets/images/company-logos/2.png", jobCategory: "Marketing", applicants: 20, postColor: 'primary', postedDate: "Feb 12 2024", jobDuration: 60, jobType: "Part Time", statusColor: 'success', status: "Approved", closingDate: "Jan 12 2024", image: "../../../assets/images/media/jobs/4.png", checked: false },
    { id: 5, title: "HTML Developer - Fresher", company: "HorizonTech Ventures", companyLogo: "../../../assets/images/company-logos/8.png", jobCategory: "Development", applicants: 18, postColor: 'primary', postedDate: "Nov 12 2024", jobDuration: 36, jobType: "Full Time", statusColor: 'success', status: "Approved", closingDate: "Oct 15 2024", image: "../../../assets/images/media/jobs/2.png", checked: false },
    { id: 6, title: "React Lead Developer", company: "FusionTech Industries", companyLogo: "../../../assets/images/company-logos/10.png", jobCategory: "Design", applicants: 31, postColor: 'danger', postedDate: "Oct 15 2024", jobDuration: 50, jobType: "Full Time", statusColor: 'danger', status: "Rejected", closingDate: "Sep 27 2024", image: "../../../assets/images/media/jobs/1.png", checked: true },
    { id: 7, title: "Vuejs Frontend Developer", company: "Optima Ventures Inc.", companyLogo: "../../../assets/images/company-logos/1.png", jobCategory: "Management", applicants: 36, postColor: 'primary', postedDate: "May 15 2024", jobDuration: 35, jobType: "Part Time", statusColor: 'warning', status: "Pending", closingDate: "Dec 19 2024", image: "../../../assets/images/media/jobs/3.png", checked: true },
    { id: 8, title: "Wordpress Developer - Remote", company: "Tech Innovators Ltd.", companyLogo: "../../../assets/images/company-logos/2.png", jobCategory: "Marketing", applicants: 20, postColor: 'primary', postedDate: "Feb 12 2024", jobDuration: 60, jobType: "Part Time", statusColor: 'success', status: "Approved", closingDate: "Jan 12 2024", image: "../../../assets/images/media/jobs/4.png", checked: false },
];
