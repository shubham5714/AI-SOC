interface SearchCompanyType {
    id: number;
    name: string;
    logo: string;
    location: string;
    established: number;
    employees: number;
    vacancies: number;
    ratingCount: number;
};
export const SearchCompany: SearchCompanyType[] = [
    { id: 1, name: 'TechGurus Ltd.', logo: '../../../assets/images/company-logos/1.png', location: 'Los Angeles, CA', established: 2015, employees: 345, vacancies: 50,  ratingCount: 245, },
    { id: 2, name: 'XYZ Solutions Ltd.', logo: '../../../assets/images/company-logos/2.png', location: 'New York, NY', established: 2010, employees: 146, vacancies: 40,  ratingCount: 318, },
    { id: 3, name: 'Innovate Labs Inc.', logo: '../../../assets/images/company-logos/3.png', location: 'San Francisco, CA', established: 2013, employees: 56, vacancies: 35,  ratingCount: 198, },
    { id: 4, name: 'GlobalTech Innovations', logo: '../../../assets/images/company-logos/7.png', location: 'London, UK', established: 2011, employees: 120, vacancies: 10,  ratingCount: 367, },
    { id: 5, name: 'Innovision Software Solutions', logo: '../../../assets/images/company-logos/5.png', location: 'Sydney, Aus', established: 2005, employees: 120, vacancies: 10,  ratingCount: 276, },
    { id: 6, name: 'Digital Nexus Solutions', logo: '../../../assets/images/company-logos/6.png', location: 'Chicago, IL', established: 2012, employees: 120, vacancies: 10,  ratingCount: 389, },
    { id: 7, name: 'Innovate IT Solutions', logo: '../../../assets/images/company-logos/10.png', location: 'Mumbai, India', established: 2009, employees: 345, vacancies: 50,  ratingCount: 312, },
    { id: 8, name: 'CloudSoft Technologies', logo: '../../../assets/images/company-logos/9.png', location: 'Seattle, WA', established: 2014, employees: 146, vacancies: 40,  ratingCount: 424, },
];

export const Data = [
    { value: 'All Categories', label: 'All Categories' },
    { value: 'Angular Dveloper', label: 'Angular Dveloper' },
    { value: 'IT Hardware', label: 'IT Hardware' },
    { value: 'Network Engineer', label: 'Network Engineer' },
    { value: 'React Developer', label: 'React Developer' },
    { value: 'Software Architect', label: 'Software Architect' },
    { value: 'Software Developer', label: 'Software Developer' },
    { value: 'Web Developer', label: 'Web Developer' },
];
