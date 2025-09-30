// MailData.ts
export interface MailData {
    title: string;
    icon: string;
    count?: number; // Optional count for badges
    active?: boolean; // Optional flag to mark the active state
    badgeColor?: string
}

export const MAILS: MailData[] = [
    { title: "All Mails", icon: "ti-mail", count: 64, active: true },
    { title: "Inbox", icon: "ti-inbox" },
    { title: "Sent", icon: "ti-send" },
    { title: "Drafts", icon: "ti-notes" },
    { title: "Spam", icon: "ti-alert-circle" },
    { title: "Archive", icon: "ti-archive", count: 3, badgeColor: "bg-secondary" },
    { title: "Important", icon: "ti-bookmark" },
    { title: "Trash", icon: "ti-trash", count: 43, badgeColor: "bg-warning" },
    { title: "Starred", icon: "ti-star" },
];

interface Countryoptions1 {
    value: string;
    label: string;
}
export const Maildata: Countryoptions1[] = [
    { value: 'jay@gmail.com', label: 'jay@gmail.com' },
    { value: 'kia@gmail.com', label: 'kia@gmail.com' },
    { value: 'don@gmail.com', label: 'don@gmail.com' },
    { value: 'kimo@gmail.com', label: 'kimo@gmail.com' },
]
interface mail1 {
    id: number;
    checked: boolean;
    img?: string;
    active: string;
    name: string;
    title: string;
    text: string;
    time: string;
    icon: string;
    star: string;
    badge: string;
    badgetxt: string;
    bordercls: string;
    avatar?: string;
    avatarColor?: string
}
export const Mails1: mail1[] = [
    { id: 1, checked: false, img: "../../../assets/images/faces/5.jpg", active: 'online', name: 'Iliana Lilly', title: 'Meeting Agenda', text: "Reviewing the agenda for tomorrow's meeting. We'll be discussing the project timeline and budget allocation.", time: '12:12AM', icon: 'ri-attachment-2 align-middle fs-12', star: 'true', badge: '', badgetxt: '', bordercls: '' },
    { id: 2, checked: true, img: "../../../assets/images/faces/12.jpg", active: 'online', name: 'Priceton Gray', title: 'Exclusive Offers Inside!', text: "Unlock exclusive deals and discounts inside! Don't miss out on this limited-time opportunity to save big on your favorite products and services.", time: '03:18PM', icon: '', star: '', badge: '', badgetxt: '', bordercls: 'active ' },
    { id: 3, checked: false, avatar: "CH", avatarColor: 'primary', active: 'offline', name: 'Charlie Edson', title: 'Limited-Time Offer: Save on Your Next Trip!', text: "Unlock exclusive deals and discounts inside! Don't miss out on this limited-time opportunity to save big on your favorite products and services.", time: 'Yesterday, 06:45AM', icon: '', star: '', badge: 'badge bg-warning ms-2', badgetxt: 'Promotion', bordercls: '' },
    { id: 4, checked: true, img: "../../../assets/images/faces/7.jpg", active: 'offline', name: 'Isha Bella', title: 'You Have New Notifications', text: "Stay connected with your friends and family. See who's commented on your latest post and catch up on messages from loved ones.", time: 'May 15 2024, 08:16PM', icon: '', star: '', badge: 'badge bg-success ms-2', badgetxt: 'Social', bordercls: '' },
    { id: 5, checked: false, img: "../../../assets/images/faces/15.jpg", active: 'offline', name: 'Danny Raj', title: 'New Connection Request', text: 'Expand your professional network with a new connection. Accept the request to connect and start networking today to explore new opportunities.', time: 'May 13 2024, 11:24AM', icon: '', star: 'true', badge: '', badgetxt: '', bordercls: '' },
    { id: 6, checked: false, avatar: "SR", avatarColor: 'info', active: 'offline', name: 'Spencer Robin  ', title: 'Invitation By Summer Soiree Under the Stars!', text: 'Hello, You are cordially invited to join us for an unforgettable evening of summer magic at our Summer Soiree Under the Stars!', time: 'May 18 2024, 11:15PM', icon: '', star: 'true', badge: 'badge bg-secondary ms-2', badgetxt: 'Personal', bordercls: '' },
    { id: 7, checked: false, avatar: "HJ", avatarColor: 'warning', active: 'offline', name: 'Harry Justin', title: 'New Connection Request', text: 'Expand your professional network with a new connection. Accept the request to connect and start networking today to explore new opportunities.', time: 'April 05 2024, 08:12AM', icon: '', star: '', badge: '', badgetxt: '', bordercls: '' },
    { id: 8, checked: false, img: "../../../assets/images/faces/13.jpg", active: 'offline', name: 'Nicolas Noor', title: 'Claim Your Prize Now!', text: "Congratulations! You've won a prize! Click here to claim your reward before it's too late and enjoy your well-deserved prize..", time: 'March 20, 08:30PM', icon: '', star: '', badge: '', badgetxt: '', bordercls: '' },
]