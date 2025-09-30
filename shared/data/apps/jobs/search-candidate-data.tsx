
interface CandidateType {
    id: number;
    name: string;
    role: string;
    location: string;
    image: string;
    degree: string;
    experience: string;
    shift: string;
    salaryRange: string;
    languages: string[];
    totalRatings: number;
}
export const CandidateData: CandidateType[] = [
    { id: 1, name: "Samantha", role: "UI/UX Designer", location: "Silicon Valley, CA", image: "../../../assets/images/faces/1.jpg", totalRatings: 245, degree: "Master's Degree", experience: "UI Designer (2+ yrs)", shift: "Full Time", salaryRange: '$55,000 - $80,000', languages: ["English, Spanish"], },
    { id: 2, name: "Michael", role: "Frontend Developer", location: "New York City, NY", image: "../../../assets/images/faces/2.jpg", totalRatings: 189, degree: "Bachelor's Degree", experience: "Frontend Developer (4+ yrs)", shift: "Full Time", salaryRange: '$65,000 - $90,000', languages: ["English, French"], },
    { id: 3, name: "Emily", role: "Graphic Designer", location: "Los Angeles, CA", image: "../../../assets/images/faces/3.jpg", totalRatings: 201, degree: "Master's Degree", experience: "Graphic Designer (3+ yrs)", shift: "Part Time", salaryRange: '$50,000 - $70,000', languages: ["English, German"], },
    { id: 4, name: "James", role: "Software Engineer", location: "Seattle, WA", image: "../../../assets/images/faces/4.jpg", totalRatings: 172, degree: "Bachelor's Degree", experience: "Software Engineer (5+ yrs)", shift: "Contract", salaryRange: "$80,000  -  $110,000", languages: ["English, Mandarin"], },
    { id: 5, name: "Alexander", role: "Digital Marketing Specialist", location: "Toronto, Canada", image: "../../../assets/images/faces/5.jpg", totalRatings: 156, degree: "Bachelor's Degree", experience: "Digital Marketing (3+ yrs)", shift: "Full Time", salaryRange: "$60,000  -  $85,000", languages: ["English, French"], },
    { id: 6, name: "Sophia", role: "Data Analyst", location: "London, UK", image: "../../../assets/images/faces/6.jpg", totalRatings: 178, degree: "Master's Degree", experience: "Data Analyst (4+ yrs)", shift: "Part Time", salaryRange: "$70,000  -  $95,000", languages: ["English, Spanish"], },
];


interface SelectType {
    value: string;
    label: string;
}
export const Data: SelectType[] = [
    { value: 'All Categories', label: 'All Categories' },
    { value: 'Software Developer', label: 'Software Developer' },
    { value: 'Web Developer', label: 'Web Developer' },
    { value: 'Software Architect', label: 'Software Architect' },
    { value: 'IT Hardware', label: 'IT Hardware' },
    { value: 'Network Engineer', label: 'Network Engineer' },
    { value: 'React Developer', label: 'React Developer' },
];

export const Data2: SelectType[] = [
    { value: 'Fresher', label: 'Fresher' },
    { value: '1 Year Exp', label: '1 Year Exp' },
    { value: '2 Year Exp', label: '2 Year Exp' },
    { value: '3 Year Exp', label: '3 Year Exp' },
    { value: '4 Year Exp', label: '4 Year Exp' },
    { value: '5+ Year Exp', label: '5+ Year Exp' },
  ];
