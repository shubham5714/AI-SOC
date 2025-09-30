interface LeadsType {
    id: number;
    name: string;
    avatar: string;
    companyLogo: string;
    company: string;
    email: string;
    status: string;
    statusClass: string;
    phone: string;
    source: string;
    assignedTo: string;
    date: string;
    image: string;
};

export const LeadsData: LeadsType[] = [
    { id: 1, name: "Catalina", avatar: "../../../assets/images/faces/4.jpg", companyLogo: "../../../assets/images/company-logos/1.png", company: "Spruko Technologies", email: "Catalina2981@gmail.com", status: "New Lead", statusClass: "success", phone: "1678-28993-223", source: "Social Media", assignedTo: "Jane Smith", image: "../../../assets/images/faces/2.jpg", date: "2024-06-15", },
    { id: 2, name: "David Johnson", avatar: "../../../assets/images/faces/5.jpg", companyLogo: "../../../assets/images/company-logos/2.png", company: "Global Solutions Ltd.", email: "david.johnson@example.com", status: "Prospect", statusClass: "primary", phone: "+1-987-654-3210", source: "Email Campaign", assignedTo: "Michael Brown", image: "../../../assets/images/faces/3.jpg", date: "2024-06-14", },
    { id: 3, name: "Sophia Adams", avatar: "../../../assets/images/faces/6.jpg", companyLogo: "../../../assets/images/company-logos/3.png", company: "Beta Innovations", email: "sophia.adams@example.com", status: "Lead", statusClass: "success", phone: "9876-543-210", source: "Website", assignedTo: "Emma Wilson", image: "../../../assets/images/faces/7.jpg", date: "2024-06-13", },
    { id: 4, name: "Sophie Turner", avatar: "../../../assets/images/faces/10.jpg", companyLogo: "../../../assets/images/company-logos/5.png", company: "Delta Enterprises", email: "sophie.turner@example.com", status: "Prospect", statusClass: "primary", phone: "+61-9876-543-210", source: "Cold Call", assignedTo: "Olivia Moore", image: "../../../assets/images/faces/11.jpg", date: "2024-06-11", },
    { id: 5, name: "Emma Garcia", avatar: "../../../assets/images/faces/12.jpg", companyLogo: "../../../assets/images/company-logos/6.png", company: "Gamma Solutions", email: "emma.garcia@example.com", status: "Lead", statusClass: "success", phone: "+55-1234-5678", source: "Referral", assignedTo: "Daniel Harris", image: "../../../assets/images/faces/13.jpg", date: "2024-06-10", },
    { id: 6, name: "Sophia Lee", avatar: "../../../assets/images/faces/14.jpg", companyLogo: "../../../assets/images/company-logos/7.png", company: "Omega Solutions", email: "sophia.lee@example.com", status: "Lead", statusClass: "success", phone: "+91-987-654-3210", source: "Website", assignedTo: "Sophie Turner", image: "../../../assets/images/faces/15.jpg", date: "2024-06-09", },
    { id: 7, name: "Lucas Martin", avatar: "../../../assets/images/faces/16.jpg", companyLogo: "../../../assets/images/company-logos/8.png", company: "Phoenix Innovations", email: "lucas.martin@example.com", status: "Prospect", statusClass: "primary", phone: "+1-234-567-8901", source: "Cold Call", assignedTo: "Olivia Moore", image: "../../../assets/images/faces/11.jpg", date: "2024-06-08", },
    { id: 8, name: "Catalina", avatar: "../../../assets/images/faces/4.jpg", companyLogo: "../../../assets/images/company-logos/1.png", company: "Spruko Technologies", email: "Catalina2981@gmail.com", status: "New Lead", statusClass: "success", phone: "1678-28993-223", source: "Social Media", assignedTo: "Jane Smith", image: "../../../assets/images/faces/2.jpg", date: "2024-06-15", },
    { id: 9, name: "Isabella Adams", avatar: "../../../assets/images/faces/5.jpg", companyLogo: "../../../assets/images/company-logos/9.png", company: "Gamma Technologies", email: "isabella.adams@example.com", status: "Lead", statusClass: "success", phone: "+7-987-654-3210", source: "Advertisement", assignedTo: "Sophia Lee", image: "../../../assets/images/faces/12.jpg", date: "2024-06-07", },
];


export const Leadsstatus = [
    { label: 'New', value: 1 },
    { label: 'Follow-up', value: 2 },
    { label: 'Closed', value: 3 },
    { label: 'Contacted', value: 4 },
    { label: 'Disqualified', value: 5 },
    { label: 'Qualified', value: 6 },
]
export const Leadssource = [
    { label: 'Social Media', value: 1 },
    { label: 'Direct mail', value: 2 },
    { label: 'Blog Articles', value: 3 },
    { label: 'Affiliates', value: 4 },
    { label: 'Organic search', value: 5 },
]
export const Tags = [
    { label: 'New Lead', value: 1 },
    { label: 'Prospect', value: 2 },
    { label: 'Customer', value: 3 },
    { label: 'Hot Lead', value: 4 },
    { label: 'Partner', value: 5 },
    { label: 'LostCustomer', value: 6 },
    { label: 'Influencer', value: 4 },
    { label: 'Subscriber', value: 5 },
]


export const leadsColumn = [
    { header: "Contact Name", field: "Contact Name" },
    { header: "Email", field: "Email" },
    { header: "Phone", field: "Phone" },
    { header: "Lead Status", field: "Lead Status" },
    { header: "Company", field: "Company" },
    { header: "Lead Source", field: "Lead Source" },
    { header: "Tags", field: "Tags" },
    { header: "Actions", field: "Actions" },
]

