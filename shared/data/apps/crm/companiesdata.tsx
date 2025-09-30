export interface CompanyType {
    id: number;
    name: string;
    email: string;
    phone: string;
    logo: string;
    type: string;
    industry: string;
    contactPerson: string;
    avatar: string;
    revenue: number;
    typeColor: string;
};
export const CompaniesData: CompanyType[] = [
    { id: 1, name: 'Alpha Solutions', email: 'alpha.solutions@example.com', phone: '1234-567-890', logo: '../../../assets/images/company-logos/2.png', typeColor: 'success', type: 'Enterprise', industry: 'Software Development', contactPerson: 'Michael', avatar: '../../../assets/images/faces/5.jpg', revenue: 350, },
    { id: 2, name: 'Beta Innovations', email: 'contact@betainnovations.com', phone: '9876-543-210', logo: '../../../assets/images/company-logos/3.png', typeColor: 'primary', type: 'Startup', industry: 'Biotechnology', contactPerson: 'Sophia', avatar: '../../../assets/images/faces/6.jpg', revenue: 420, },
    { id: 3, name: 'Gamma Solutions', email: 'info@gammasolutions.com', phone: '555-123-4567', logo: '../../../assets/images/company-logos/4.png', typeColor: 'success', type: 'Enterprise', industry: 'Consulting Services', contactPerson: 'Oliver', avatar: '../../../assets/images/faces/7.jpg', revenue: 390, },
    { id: 4, name: 'Delta Tech Solutions', email: 'contact@deltatech.com', phone: '678-987-6543', logo: '../../../assets/images/company-logos/5.png', typeColor: 'primary', type: 'Startup', industry: 'Technology Solutions', contactPerson: 'Sophie', avatar: '../../../assets/images/faces/8.jpg', revenue: 280, },
    { id: 5, name: 'Epsilon Innovations', email: 'info@epsiloninnovations.com', phone: '111-222-3333', logo: '../../../assets/images/company-logos/6.png', typeColor: 'primary', type: 'Startup', industry: 'Innovation Services', contactPerson: 'Emma', avatar: '../../../assets/images/faces/9.jpg', revenue: 320, },
    { id: 6, name: 'Theta Systems', email: 'info@thetasystems.com', phone: '456-789-0123', logo: '../../../assets/images/company-logos/8.png', typeColor: 'success', type: 'Enterprise', industry: 'Software Solutions', contactPerson: 'Liam', avatar: '../../../assets/images/faces/10.jpg', revenue: 410, },
    { id: 7, name: 'Iota Innovations', email: 'contact@iotainnovations.com', phone: '333-444-5555', logo: '../../../assets/images/company-logos/9.png', typeColor: 'primary', type: 'Startup', industry: 'Digital Marketing', contactPerson: 'Ava', avatar: '../../../assets/images/faces/11.jpg', revenue: 290, },
    { id: 8, name: 'Alpha Solutions', email: 'info@alphasolutions.com', phone: '1234-567-890', logo: '../../../assets/images/company-logos/4.png', typeColor: 'success', type: 'Enterprise', industry: 'Technology Services', contactPerson: 'John', avatar: '../../../assets/images/faces/7.jpg', revenue: 570, },
    { id: 9, name: 'Gamma Industries', email: 'contact@gammatech.com', phone: '8765-432-109', logo: '../../../assets/images/company-logos/5.png', typeColor: 'primary', type: 'Startup', industry: 'Engineering', contactPerson: 'Emily', avatar: '../../../assets/images/faces/9.jpg', revenue: 320, },
];

export const Tags = [
    { label: 'Information Technology', value: 1 },
    { label: 'Telecommunications', value: 2 },
    { label: 'Logistics', value: 3 },
    { label: 'Professional Services', value: 4 },
    { label: 'Education', value: 5 },
    { label: 'Manufacturing', value: 6 },
    { label: 'Healthcare', value: 7 },
]
export const companiesSize = [
    { label: 'Company Size', value: 1 },
    { label: 'Corporate', value: 2 },
    { label: 'Small Business', value: 3 },
    { label: 'Micro Business', value: 4 },
    { label: 'Startup', value: 5 },
    { label: 'Large Enterprise', value: 6 },
    { label: 'Medium Size', value: 7 },
]
