import JobDetailesSwiper from "./job-detailes-swiper";

export interface JobDetailsType {
    id: number;
    title: string;
    company: string;
    logo?: string;
    icon?: string;
    location: string;
    experience: string;
    salary: string;
    logoBgClass?: string;
};

const JobDetails: JobDetailsType[] = [
    { id: 1, title: 'Frontend Developer', company: 'InnovateZ Solutions', logo: '../../../assets/images/media/jobs/2.png', location: 'San Francisco, CA', experience: '2+ Yrs Exp.', salary: '$50k - $80k', },
    { id: 2, title: 'Backend Developer', company: 'Tech Solutions Inc.', icon: 'laptop', location: 'New York, NY', experience: '3+ Yrs Exp.', salary: '$60k - $90k', logoBgClass: 'danger', },
    { id: 3, title: 'UI/UX Designer', company: 'Creative Designs Co.', icon: 'laptop', location: 'Seattle, WA', experience: '3+ Yrs Exp.', salary: '$70k - $100k', logoBgClass: 'warning', },
    { id: 4, title: 'Full Stack Developer', company: 'TechGurus Ltd.', icon: 'laptop', location: 'Los Angeles, CA', experience: '5+ Yrs Exp.', salary: '$80k - $120k', logoBgClass: 'info', },
];

export const JobDetailsSwiper = JobDetails.map((idx, index) => (
    <div key={index}>
        <JobDetailesSwiper card={idx} />
    </div>
))
