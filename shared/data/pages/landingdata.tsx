import LandingTeamSwiper from "./landingteamswiper";
import LandingTestimonialsSwiper from "./landingtestimonialsswiper";

// Services
interface ServiceType {
    id: number;
    title: string;
    imgSrc: string;
}
export const ServiceData: ServiceType[] = [
    { id: 1, title: "Health Services", imgSrc: "../assets/images/media/landing/services/1.png" },
    { id: 2, title: "Financial Services", imgSrc: "../assets/images/media/landing/services/2.png" },
    { id: 3, title: "Transportation Services", imgSrc: "../assets/images/media/landing/services/3.png" },
    { id: 4, title: "Educational Services", imgSrc: "../assets/images/media/landing/services/4.png" },
    { id: 5, title: "Home Services", imgSrc: "../assets/images/media/landing/services/5.png" },
    { id: 6, title: "Communication Services", imgSrc: "../assets/images/media/landing/services/6.png" },
    { id: 7, title: "Professional Services", imgSrc: "../assets/images/media/landing/services/7.png" },
    { id: 8, title: "Hospitality Services", imgSrc: "../assets/images/media/landing/services/8.png" },
];

// Highlight Features
interface FeaturesType {
    id: number;
        iconClass: string;
    title: string;
    description: string;
    colorClass: string;
}
export const FeaturesData: FeaturesType[] = [
    { id: 1, iconClass: "code-square", title: "Quality of Code", description: "Justo aliquyam duo vero clita aliqua vero eirmod.", colorClass: "primary" },
    { id: 2, iconClass: "bootstrap", title: "Bootstrap 5", description: "Justo aliquyam duo vero clita aliqua vero eirmod.", colorClass: "secondary" },
    { id: 3, iconClass: "layers", title: "60+ Pages", description: "Justo aliquyam duo vero clita aliqua vero eirmod.", colorClass: "info" },
    { id: 4, iconClass: "layout-text-sidebar", title: "Ready RTL", description: "Easy to switch. clita aliqua vero eirmod stet.", colorClass: "warning" },
    { id: 5, iconClass: "person-lock", title: "Custom Pages", description: "Justo aliquyam duo vero clita aliqua vero eirmod.", colorClass: "pink" },
    { id: 6, iconClass: "display", title: "Layout Styles", description: "Justo aliquyam duo vero clita aliqua vero eirmod.", colorClass: "success" },
    { id: 7, iconClass: "palette", title: "Theme Colors", description: "Theme Background and Theme primary were there.", colorClass: "danger" },
    { id: 8, iconClass: "grid-1x2", title: "Widgets", description: "Justo aliquyam duo vero clita aliqua vero eirmod.", colorClass: "purple" },
];

// Our Team
export interface TeamMemberType {
    id: number;
    name: string;
    role: string;
    image: string;
}
export const TeamMembers: TeamMemberType[] = [
    { id: 1, name: "Walter White", role: "Frontend Developer", image: "../assets/images/faces/1.jpg", },
    { id: 2, name: "Rose Bush", role: "UI Developer", image: "../assets/images/faces/5.jpg", },
    { id: 3, name: "Laura Biding", role: "Team Leader", image: "../assets/images/faces/10.jpg", },
    { id: 4, name: "Simon Sais", role: "Manager", image: "../assets/images/faces/6.jpg", },
    { id: 5, name: "Penny Black", role: "Backend Developer", image: "../assets/images/faces/4.jpg", },
    { id: 6, name: "Willie Makit", role: "Co-Founder", image: "../assets/images/faces/14.jpg", },
];

// Testimonials
export interface TestimonialsType {
    id: number;
    name: string;
    email: string;
    image: string;
    timeAgo: string;
    userName: string;
}
export const Testimonials: TestimonialsType[] = [
    { id: 1, name: 'Jenny Kingston', email: 'jennykingston345@gmail.com', image: '../assets/images/faces/1.jpg', timeAgo: '16 days ago', userName: 'Jenny Kingston', },
    { id: 2, name: 'Alex Carey', email: 'alexcarey21@gmail.com', image: '../assets/images/faces/5.jpg', timeAgo: '1 month ago', userName: 'Alex Carey', },
    { id: 3, name: 'Brenda Hans', email: 'brendahans@gmail.com', image: '../assets/images/faces/3.jpg', timeAgo: '12 days ago', userName: 'Brenda Hans', },
    { id: 4, name: 'Json Taylor', email: 'jsontaylor@gmail.com', image: '../assets/images/faces/9.jpg', timeAgo: '9 days ago', userName: 'Json Taylor', },
    { id: 5, name: 'Amanda Nanes', email: 'amandananes212@gmail.com', image: '../assets/images/faces/8.jpg', timeAgo: '6 days ago', userName: 'Amanda Nanes', },
    { id: 6, name: 'Lucas Tope', email: 'lucastope1999@gmail.com', image: '../assets/images/faces/10.jpg', timeAgo: '10 days ago', userName: 'Lucas Tope', },
];

interface ContactInfo {
    id: number;
    icon: string;
    bgColor: string;
    title: string;
    content: string;
}
export const ContactData: ContactInfo[] = [
    { id: 1, icon: 'map-pin', bgColor: 'primary', title: 'Main Branch Address', content: 'San Francisco, CA', },
    { id: 2, icon: 'phone', bgColor: 'success', title: 'Phone Number', content: '+125 254 3561', },
    { id: 3, icon: 'mail', bgColor: 'info', title: 'Email Address', content: 'georgeabc@abc.com', },
    { id: 4, icon: 'clock', bgColor: 'secondary', title: 'Working Hours', content: 'Mon - Fri : 9am - 6pm', },
];



export const TestimonialsSwiperData = Testimonials.map((idx, index) => (
    <div key={index}>
        <LandingTestimonialsSwiper card={idx} />
    </div>
))

export const OurTeamSwiperData = TeamMembers.map((idx, index) => (
    <div key={index}>
        <LandingTeamSwiper card={idx} />
    </div>
))


