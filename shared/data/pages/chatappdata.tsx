"use client";
import { ReactNode } from 'react';
import SpkBadge from '@/shared/@spk-reusable-components/reusable-uiElements/spk-badge';

interface ChatType {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge: ReactNode;
    status: string;
    Icon: boolean;
    activeclass?: string;
    typeingClass?: string
}

const data = <SpkBadge variant="info" Customclass="rounded-pill float-end">3</SpkBadge>

export const Chat1: ChatType[] = [
    { id: 1, src: "../../assets/images/faces/5.jpg", heading: "Rashid Khan", description: "Hey!! you are there? 😊", time: "11:12PM", badge: data, status: "online", Icon: false, },
    { id: 2, src: "../../assets/images/faces/2.jpg", heading: "Jamison Jen", typeingClass: "chat-msg-typing", description: "Typing...", time: "06:52AM", badge: "", status: "online", Icon: false, activeclass: "chat-msg-unread checkforactive" },
    { id: 3, src: "../../assets/images/faces/10.jpg", heading: "Andy Max", description: "Great! I am happy to here this from you. ☕", time: "10:15AM", badge: "", status: "online", Icon: true, },
    { id: 4, src: "../../assets/images/faces/6.jpg", heading: "Kerina Cherish", description: "Looking forward about the matter", time: "03:15PM", badge: "", status: "online", Icon: true, },

]

interface ChatType1 {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge: string;
    status: string;
}

export const Chat2: ChatType1[] = [
    { id: 1, src: "../../assets/images/faces/11.jpg", heading: "Rony Erick", description: "You should come definately🎬", time: "04:13PM", badge: "", status: "offline" },
    { id: 2, src: "../../assets/images/faces/3.jpg", heading: "Kenath kin", description: "Did you remember the date", time: "12:46AM", badge: "", status: "offline" },
    { id: 3, src: "../../assets/images/faces/13.jpg", heading: "Thomas Lie", description: "Hi, Thank you for everything", time: "07:30PM", badge: "", status: "offline" },
    { id: 4, src: "../../assets/images/faces/4.jpg", heading: "Peter Stark", description: "Going to Australia!", time: "01:18PM", badge: "", status: "offline" },
    { id: 5, src: "../../assets/images/faces/13.jpg", heading: "Monte Christ", description: "Little Busy 🍕", time: "08:07PM", badge: "", status: "offline" },
    { id: 6, src: "../../assets/images/faces/15.jpg", heading: "Regina Mos", description: "Have a Question?", time: "09:19PM", badge: "", status: "offline" },
]
interface ChatType2 {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge?: ReactNode | string;
    status: string;
    class: string;
    check: boolean;
    pTagClass?: string
}

const data1 = <SpkBadge variant="secondary" Customclass="rounded-pill float-end">2</SpkBadge>

export const Chat3: ChatType2[] = [
    { id: 1, src: "../../assets/images/faces/17.jpg", heading: "Huge Rocks 😍", description: "Mony Typing...", check: false, time: "12:24PM", badge: data1, status: "online", class: "chat-msg", pTagClass: "chat-msg-typing" },
    { id: 2, src: "../../assets/images/faces/18.jpg", heading: "Creative Group", description: "Have any updates today?", check: true, time: "06:16AM", status: "online", class: "", },
    { id: 3, src: "../../assets/images/faces/19.jpg", heading: "Anyside Spriritual 😎", description: "Samantha, Adam, Jessica, Emily, Alex", check: false, time: "2 days ago", status: "offline", class: "", },
    { id: 4, src: "../../assets/images/faces/20.jpg", heading: "Fun Time", description: "Elsa,Henry,Susan, Emily, Ashlin", check: false, time: "3 days ago", status: "offline", class: "", },
    { id: 5, src: "../../assets/images/faces/21.jpg", heading: "Latest News", description: "Emanuel, Rony, Alina, Lilly, Rush", check: false, time: "10 days ago", status: "offline", class: "", },

]
