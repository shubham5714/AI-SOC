interface ContactType {
    id: number;
    name: string;
    email: string;
    company: string;
    companyLogo: string;
    phone: string;
    priority: string;
    clientType: string;
    source: string;
    lastContacted: string;
    avatar: string;
    leadScore: string;
    priorityColor: string;
}

export const ContactsData: ContactType[] = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", company: "Example Corp", companyLogo: "../../../assets/images/company-logos/2.png", phone: "123-456-7890", priorityColor: 'danger', priority: "High Priority", clientType: "VIP Client", source: "Referral", lastContacted: "Jun, 15 2024 - 10:30 AM", avatar: "../../../assets/images/faces/4.jpg", leadScore: '380', },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com", company: "Smith & Co", companyLogo: "../../../assets/images/company-logos/3.png", phone: "987-654-3210", priorityColor: 'warning', priority: "Medium Priority", clientType: "Regular Client", source: "LinkedIn", lastContacted: "Jun, 14 2024 - 3:15 PM", avatar: "../../../assets/images/faces/5.jpg", leadScore: '425', },
    { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com", company: "Johnson Enterprises", companyLogo: "../../../assets/images/company-logos/4.png", phone: "555-123-4567", priorityColor: 'success', priority: "Low Priority", clientType: "Potential Client", source: "Website", lastContacted: "Jun, 13 2024 - 9:00 AM", avatar: "../../../assets/images/faces/6.jpg", leadScore: '300', },
    { id: 4, name: "Sophia Martinez", email: "sophia.martinez@example.com", company: "Martinez Enterprises", companyLogo: "../../../assets/images/company-logos/5.png", phone: "234-567-8901", priorityColor: 'warning', priority: "Medium Priority", clientType: "Potential Lead", source: "Cold Call", lastContacted: "Jun, 12 2024 - 2:00 PM", avatar: "../../../assets/images/faces/8.jpg", leadScore: '500', },
    { id: 5, name: 'David Wilson', email: 'david.wilson@example.com', company: 'Wilson & Sons', companyLogo: '../../../assets/images/company-logos/6.png', phone: '345-678-9012', lastContacted: 'Jun, 11 2024 - 11:45 AM', priorityColor: 'success', priority: 'Low Priority', clientType: 'Regular Client', source: 'Email Campaign', avatar: '../../../assets/images/faces/9.jpg', leadScore: '320', },
    { id: 6, name: 'Emma Brown', email: 'emma.brown@example.com', company: 'Brown Solutions', companyLogo: '../../../assets/images/company-logos/7.png', phone: '456-789-0123', lastContacted: 'Jun, 10 2024 - 1:30 PM', priorityColor: 'danger', priority: 'High Priority', clientType: 'VIP Client', source: 'Trade Show', avatar: '../../../assets/images/faces/10.jpg', leadScore: '280', },
    { id: 7, name: 'Olivia Davis', email: 'olivia.davis@example.com', company: 'Davis Consulting', companyLogo: '../../../assets/images/company-logos/8.png', phone: '567-890-1234', lastContacted: 'Jun, 9 2024 - 9:15 AM', priorityColor: 'warning', priority: 'Medium Priority', clientType: 'Regular Client', source: 'Webinar', avatar: '../../../assets/images/faces/12.jpg', leadScore: '280', },
    { id: 8, name: 'William Clark', email: 'william.clark@example.com', company: 'Clark Solutions', companyLogo: '../../../assets/images/company-logos/9.png', phone: '678-901-2345', lastContacted: 'Jun, 8 2024 - 4:30 PM', priorityColor: 'danger', priority: 'High Priority', clientType: 'VIP Client', source: 'Advertisement', avatar: '../../../assets/images/faces/13.jpg', leadScore: '350', },
];

export const leads = [
    { label: 'Social Media', value: 1 },
    { label: 'Direct mail', value: 2 },
    { label: 'Blog Articles', value: 3 },
    { label: 'Affiliates', value: 4 },
    { label: 'Organic search', value: 5 },
]

export const Tags = [
    { label: 'Select Tag', value: 1 },
    { label: 'New Lead', value: 2 },
    { label: 'Prospect', value: 3 },
    { label: 'Customer', value: 4 },
    { label: 'Hot Lead', value: 5 },
    { label: 'Partner', value: 6 },
    { label: 'LostCustomer', value: 7 },
    { label: 'Influencer', value: 8 },
    { label: 'Subscriber', value: 9 },
]
