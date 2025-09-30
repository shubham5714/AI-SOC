interface LeadStage {
    id: number;
    title: string;
    count: number;
    bgColor: string;
    className: string;
}
export const leadStages: LeadStage[] = [
    { id: 1, title: "Leads Discovered", count: 24, bgColor: "primary", className: "lead-discovered" },
    { id: 2, title: "Qualified Leads", count: 17, bgColor: "success", className: "lead-qualified" },
    { id: 3, title: "Contact Initiated", count: 5, bgColor: "info", className: "contact-initiated" },
    { id: 4, title: "Needs Identified", count: 43, bgColor: "secondary", className: "need-identified" },
    { id: 5, title: "Negotiation", count: 15, bgColor: "warning", className: "negotiation" },
    { id: 6, title: "Deals Finalized", count: 127, bgColor: "danger", className: "deal-finalized" },
];

// leads-qualified
export interface DealCardType {
    id: number;
    name: string;
    avatar: string;
    dateTime: string;
    title: string;
    amount: string;
    company: string;
    lable: string;
    budget?: string
}

export const DiscoveredData: DealCardType[] = [
    { id: 1, budget: "Amount", name: 'John Doe', avatar: '../../../assets/images/faces/11.jpg', dateTime: '21, May 2024 - 10:25AM', title: 'Beta Innovations', amount: "$50,000", company: 'Initech Info', lable: 'Amount:' },
    { id: 2, budget: "Amount", name: 'Jane Smith', avatar: '../../../assets/images/faces/12.jpg', dateTime: '15, April 2024 - 02:15PM', title: 'Alpha Solutions', amount: "$75,000", company: 'TechCorp', lable: 'Amount:' },
    { id: 3, budget: "Amount", name: 'Michael Johnson', avatar: '../../../assets/images/faces/13.jpg', dateTime: '05, March 2024 - 11:30AM', title: 'Gamma Enterprises', amount: "$100,000", company: 'NextGen Inc', lable: 'Amount:' },
    { id: 4, budget: "Amount", name: 'Emma Wilson', avatar: '../../../assets/images/faces/14.jpg', dateTime: '10, February 2024 - 09:45AM', title: 'Delta Dynamics', amount: "$120,000", company: 'InnovateX', lable: 'Amount:' },
];

export const QualifiedData: DealCardType[] = [
    { id: 1, budget: "Amount", name: 'Daniel Brown', avatar: '../../../assets/images/faces/15.jpg', dateTime: '18, January 2024 - 03:20PM', title: 'Omega Solutions', amount: "$95,000", company: 'SkyTech', lable: 'Amount:' },
    { id: 2, budget: "Amount", name: 'Emily Brown', avatar: '../../../assets/images/faces/12.jpg', dateTime: '18, June 2024 - 11:15AM', title: 'Delta Innovations', amount: "$65,000", company: 'Tech Dynamics', lable: 'Amount:' },
    { id: 3, budget: "Amount", name: 'James Wilson', avatar: '../../../assets/images/faces/13.jpg', dateTime: '12, June 2024 - 09:30AM', title: 'Gamma Enterprises', amount: "$80,000", company: 'Tech Solutions Inc.', lable: 'Amount:' },
    { id: 4, budget: "Agreed Amount", name: 'Liam Smith', avatar: '../../../assets/images/faces/12.jpg', dateTime: '30, June 2024 - 01:45PM', title: 'Zeta Corporation', amount: "$105,000", company: 'TechVision Ltd.', lable: 'Agreed Amount:' },
];

export const ContactInitiated: DealCardType[] = [
    { id: 1, budget: "Amount", name: 'Sarah Martinez', avatar: '../../../assets/images/faces/14.jpg', dateTime: '05, June 2024 - 10:45AM', title: 'AlphaTech Solutions', amount: "$75,000", company: 'InnovateX', lable: 'Amount:' },
    { id: 2, budget: "Amount", name: 'Robert Lee', avatar: '../../../assets/images/faces/15.jpg', dateTime: '30, May 2024 - 02:00PM', title: 'Omega Ventures', amount: "$90,000", company: 'NextGen Tech', lable: 'Amount:' },
];

export const NeedsIdentified: DealCardType[] = [
    { id: 11, budget: "Amount", name: 'David Wilson', avatar: '../../../assets/images/faces/11.jpg', dateTime: '08, June 2024 - 09:45AM', title: 'Alpha Solutions', amount: "$70,000", company: 'Tech Innovations', lable: 'Amount:' },
    { id: 12, budget: "Amount", name: 'Emma Clark', avatar: '../../../assets/images/faces/16.jpg', dateTime: '20, May 2024 - 03:30PM', title: 'Zeta Dynamics', amount: "$85,000", company: 'TechStar Solutions', lable: 'Amount:' },
    { id: 13, budget: "Budget", name: 'David Wilson', avatar: '../../../assets/images/faces/11.jpg', dateTime: '07, June 2024 - 09:45AM', title: 'AlphaTech Solutions', amount: "$100,000", company: 'Tech Innovations', lable: 'Budget:' },
    { id: 14, budget: "Estimated Revenue", name: 'Sophie Adams', avatar: '../../../assets/images/faces/15.jpg', dateTime: '14, June 2024 - 11:30AM', title: 'GammaTech Solutions', amount: "$120,000", company: 'InnovateX', lable: 'Estimated Revenue:' },
];

export const Negotiation: DealCardType[] = [
    { id: 15, budget: "Expected Investment", name: 'Olivia Moore', avatar: '../../../assets/images/faces/9.jpg', dateTime: '25, May 2024 - 02:15PM', title: 'Delta Dynamics', amount: "$90,000", company: 'TechStar Solutions', lable: 'Expected Investment:' },
    { id: 16, budget: "Proposed Amount", name: 'Michael Johnson', avatar: '../../../assets/images/faces/15.jpg', dateTime: '15, June 2024 - 11:00AM', title: 'AlphaTech Solutions', amount: "$120,000", company: 'Tech Innovations', lable: 'Proposed Amount:' },
    { id: 17, budget: "Estimated Revenue", name: 'Emily Davis', avatar: '../../../assets/images/faces/16.jpg', dateTime: '10, June 2024 - 09:30AM', title: 'BetaTech Innovations', amount: "$150,000", company: 'Tech Solutions Ltd.', lable: 'Estimated Budget:' },
];

export const Finalized: DealCardType[] = [
    { id: 18, budget: "Amount", name: 'Emma Thompson', avatar: '../../../assets/images/faces/12.jpg', dateTime: '25, June 2024 - 03:45PM', title: 'Delta Dynamics', amount: "$120,000", company: 'TechStar Innovations', lable: 'Amount:' },
    { id: 19, budget: "Investment", name: 'Sophia Garcia', avatar: '../../../assets/images/faces/3.jpg', dateTime: '18, June 2024 - 09:30AM', title: 'Completed Gamma Technologies', amount: "$85,000", company: 'TechSolutions Inc.', lable: 'Investment:' },
];



