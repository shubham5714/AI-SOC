import { ReactNode } from "react";

// Podcast Activity
export const PodcastActivitySeries = [{
    name: 'Hours',
    data: [20, 35, 66, 40, 30, 55, 45]
}]
export const PodcastActivityOPtions = {
    chart: {
        height: 260,
        fontFamily: 'Poppins, Arial, sans-serif',
        type: 'area',
        toolbar: {
            show: false
        }
    },
    grid: {
        show: false,
        borderColor: '#f2f6f7',
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'top',
        fontSize: '13px',
    },
    colors: ["var(--primary-color)"],
    stroke: {
        width: [2],
        curve: 'smooth',
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: 'var(--primary04)',
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: 'var(--primary02)',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(121, 97, 245, 0)',
                        opacity: 1
                    }
                ],
            ]
        },
    },
    tooltip: {
        enabled: true,
        theme: "dark",
    },
    labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
}

// Popular Podcasters
type PodcastersType = {
    id: number;
    name: string;
    category: string;
    followers: string;
    episodes: number;
    image: string;
    isFollowing: boolean;
    tdClass?: string;
};
export const Podcasters: PodcastersType[] = [
    { id: 1, name: "Harmony Maestro", category: "Music & Arts", followers: "12k+", episodes: 50, image: "../../assets/images/faces/1.jpg", isFollowing: false, },
    { id: 2, name: "Aria Whisper", category: "Storytelling", followers: "15k+", episodes: 80, image: "../../assets/images/faces/14.jpg", isFollowing: false, },
    { id: 3, name: "Luna Explorer", category: "Science", followers: "50k+", episodes: 30, image: "../../assets/images/faces/15.jpg", isFollowing: true, },
    { id: 4, name: "Celestial Mind", category: "Self-Improvement", followers: "13.6k+", episodes: 60, image: "../../assets/images/faces/5.jpg", isFollowing: false, },
    { id: 5, tdClass: "border-bottom-0", name: "Celestial Mind", category: "Self-Improvement", followers: "6.7k+", episodes: 60, image: "../../assets/images/faces/7.jpg", isFollowing: false, },
];

// Popular Podcasts
export interface PodcastsType {
    id: number;
    name: string;
    host: string;
    frequency: string;
    category: string;
    episode: string;
    listeners: string;
    duration: string;
    rating: number;
    image: string;
    color: string;
};
export const Podcasts: PodcastsType[] = [
    { id: 1, name: "Random Ramblings", host: "Alice Mumbleton", frequency: "Weekly", color: 'secondary', category: "Comedy", episode: "#156: Silly Stories", listeners: "10,742", duration: "45 mins", rating: 4.5, image: "../../assets/images/media/podcast/1.jpg", },
    { id: 2, name: "Mindless Musings", host: "Bob Jibberish", frequency: "Bi-weekly", color: 'success', category: "Culture", episode: "#82: Deep Nonsense", listeners: "90,742", duration: "30 mins", rating: 4.2, image: "../../assets/images/media/podcast/2.jpg", },
    { id: 3, name: "Chatterbox Chronicles", host: "Charlie Babbleworth", frequency: "Monthly", color: 'info', category: "Personal Journal", episode: "#30: Life's Random", listeners: "11,678", duration: "60 mins", rating: 4.7, image: "../../assets/images/media/podcast/3.jpg", },
    { id: 4, name: "Ramble Roundup", host: "Gary Gibberish", frequency: "Daily", color: 'warning', category: "News and Politics", episode: "#300: Current Affairs", listeners: "12,464", duration: "20 mins", rating: 4.9, image: "../../assets/images/media/podcast/4.jpg", },
    { id: 5, name: "Babble Bites", host: "Eddie Gibberoni", frequency: "Weekly", color: 'primary', category: "Food and Drink", episode: "#45: Culinary Capers", listeners: '13,475', duration: "50 mins", rating: 4.8, image: "../../assets/images/media/podcast/5.jpg", },
];

// Shortcuts :
export interface ShortcutsType {
    id: number;
    icon: ReactNode;
    bg: string;
    name: string;
}
const HitsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">    <path d="M220,128a92,92,0,1,1-92-92A92.1,92.1,0,0,1,220,128Z" opacity="0.2"></path>    <path d="M223.77,150.09a8,8,0,0,1-5.86,9.68l-24.64,6,6.46,24.11a8,8,0,0,1-5.66,9.8A8.25,8.25,0,0,1,192,200a8,8,0,0,1-7.72-5.93l-7.72-28.8L136,141.86v46.83l21.66,21.65a8,8,0,0,1-11.32,11.32L128,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L120,188.69V141.86L79.45,165.27l-7.72,28.8A8,8,0,0,1,64,200a8.25,8.25,0,0,1-2.08-.27,8,8,0,0,1-5.66-9.8l6.46-24.11-24.64-6a8,8,0,0,1,3.82-15.54l29.45,7.23L112,128,71.36,104.54l-29.45,7.23A7.85,7.85,0,0,1,40,112a8,8,0,0,1-1.91-15.77l24.64-6L56.27,66.07a8,8,0,0,1,15.46-4.14l7.72,28.8L120,114.14V67.31L98.34,45.66a8,8,0,0,1,11.32-11.32L128,52.69l18.34-18.35a8,8,0,0,1,11.32,11.32L136,67.31v46.83l40.55-23.41,7.72-28.8a8,8,0,0,1,15.46,4.14l-6.46,24.11,24.64,6A8,8,0,0,1,216,112a7.85,7.85,0,0,1-1.91-.23l-29.45-7.23L144,128l40.64,23.46,29.45-7.23A8,8,0,0,1,223.77,150.09Z">    </path></svg>
const HopIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z" opacity="0.2"></path><path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path></svg>
const JazzIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M156.5,151,59,222.45a8,8,0,0,1-10.38-.79l-14.3-14.3A8,8,0,0,1,33.55,197L105,99.5l0,0A64,64,0,0,0,156.48,151Z" opacity="0.2"></path><path d="M168,16A72.07,72.07,0,0,0,96,88a73.29,73.29,0,0,0,.63,9.42L27.12,192.22A15.93,15.93,0,0,0,28.71,213L43,227.29a15.93,15.93,0,0,0,20.78,1.59l94.81-69.53A73.29,73.29,0,0,0,168,160a72,72,0,1,0,0-144Zm56,72a55.72,55.72,0,0,1-11.16,33.52L134.49,43.16A56,56,0,0,1,224,88ZM54.32,216,40,201.68,102.14,117A72.37,72.37,0,0,0,139,153.86ZM112,88a55.67,55.67,0,0,1,11.16-33.51l78.34,78.34A56,56,0,0,1,112,88Zm-2.35,58.34a8,8,0,0,1,0,11.31l-8,8a8,8,0,1,1-11.31-11.31l8-8A8,8,0,0,1,109.67,146.33Z"></path></svg>
const AcosticIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M155.2,100.8c-23-23-55.57-27.63-72.8-10.4a34.21,34.21,0,0,0-7.61,11.66,16.23,16.23,0,0,1-14.72,10C48,112.44,37,116.61,28.8,124.8,7.6,146,13.33,186.12,41.6,214.4s68.39,34,89.6,12.8C139.39,219,143.56,208,144,195.93a16.23,16.23,0,0,1,10-14.72,34.21,34.21,0,0,0,11.66-7.61C182.83,156.37,178.17,123.78,155.2,100.8ZM112,168a24,24,0,1,1,24-24A24,24,0,0,1,112,168Z" opacity="0.2"></path><path d="M249.66,46.34l-40-40a8,8,0,0,0-11.31,11.32L200.69,20,140.52,80.16C117.73,68.3,92.21,69.29,76.75,84.74a42.27,42.27,0,0,0-9.39,14.37A8.24,8.24,0,0,1,59.81,104c-14.59.49-27.26,5.72-36.65,15.11C11.08,131.22,6,148.6,8.74,168.07,11.4,186.7,21.07,205.15,36,220s33.34,24.56,52,27.22A71.13,71.13,0,0,0,98.1,248c15.32,0,28.83-5.23,38.76-15.16,9.39-9.39,14.62-22.06,15.11-36.65a8.24,8.24,0,0,1,4.92-7.55,42.12,42.12,0,0,0,14.37-9.39c15.45-15.46,16.44-41,4.58-63.77L236,55.31l2.34,2.34a8,8,0,1,0,11.32-11.31ZM160,167.93a26.12,26.12,0,0,1-8.95,5.83,24.24,24.24,0,0,0-15,21.89c-.36,10.46-4,19.41-10.43,25.88-8.44,8.43-21,11.95-35.36,9.89C75,229.25,59.73,221.19,47.27,208.73S26.75,181,24.58,165.81c-2-14.37,1.46-26.92,9.89-35.36C40.94,124,49.89,120.37,60.35,120h0a24.22,24.22,0,0,0,21.89-15,26.12,26.12,0,0,1,5.83-9c5.49-5.49,13-8.13,21.38-8.13a49.38,49.38,0,0,1,19.13,4.19L108.5,112.19a32,32,0,1,0,35.31,35.31l20.08-20.08C170.41,142.71,169.47,158.41,160,167.93Zm-10.4-61.48a72.9,72.9,0,0,1,5.93,6.75l-15.42,15.42a32.22,32.22,0,0,0-12.68-12.68l15.42-15.43A73,73,0,0,1,149.55,106.45ZM112,128a16,16,0,0,1,16,16h0a16,16,0,1,1-16-16Zm48.85-32.85a86.94,86.94,0,0,0-6.68-6L176,67.31,188.69,80l-21.83,21.82A86.94,86.94,0,0,0,160.86,95.14ZM200,68.68,187.32,56,212,31.31,224.69,44ZM93.66,194.33a8,8,0,0,1-11.31,11.32l-32-32a8,8,0,0,1,11.32-11.31Z"></path></svg>
const PopIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M248,152a40,40,0,0,1-40,40H144V48a72,72,0,0,1,71.64,64.73A40,40,0,0,1,248,152Z" opacity="0.2"></path><path d="M24,120v48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM48,88a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V96A8,8,0,0,0,48,88Zm32-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Zm32-32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V56A8,8,0,0,0,112,48Zm110.84,58.34A80,80,0,0,0,144,40a8,8,0,0,0,0,16,63.76,63.76,0,0,1,63.68,57.53,8,8,0,0,0,6.44,7A32,32,0,0,1,208,184H144a8,8,0,0,0,0,16h64a48,48,0,0,0,14.84-93.66Z"></path></svg>
const HipIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,164a28,28,0,1,1-28-28A28,28,0,0,1,208,164ZM52,168a28,28,0,1,0,28,28A28,28,0,0,0,52,168Z" opacity="0.2"></path><path d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z"></path></svg>

export const Shortcuts: ShortcutsType[] = [
    { id: 1, icon: HitsIcon, bg: "primary", name: 'Chill Hits', },
    { id: 2, icon: HopIcon, bg: "success", name: 'Hop', },
    { id: 3, icon: JazzIcon, bg: "info", name: 'Jazz', },
    { id: 4, icon: AcosticIcon, bg: "secondary", name: 'Acostic', },
    { id: 5, icon: PopIcon, bg: "warning", name: 'Indie Pop', },
    { id: 6, icon: HipIcon, bg: "danger", name: 'Hip', },
]

interface CategoryType {
    id: number;
    icon: string;
    label: string;
    color: string;
}

export const Categories: CategoryType[] = [
    { id: 1, icon: 'mood-happy', label: 'Comedy', color: 'primary' },
    { id: 2, icon: 'news', label: 'News', color: 'secondary' },
    { id: 3, icon: 'slice', label: 'True Crime', color: 'success' },
    { id: 4, icon: 'bulb', label: 'Technology', color: 'orange' },
    { id: 5, icon: 'test-pipe', label: 'Science', color: 'info' },
    { id: 6, icon: 'book', label: 'Education', color: 'warning' },
    { id: 7, icon: 'ball-american-football', label: 'Sports', color: 'danger' },
    { id: 8, icon: 'music', label: 'Music', color: 'teal' },
];

// Recommendations
interface RecommendationsType {
    id: number;
    image: string;
    title: string;
    author: string;
}

export const Recommendations: RecommendationsType[] = [
    { id: 1, image: "../../assets/images/media/podcast/1.jpg", title: "Random Ramblings", author: "By Alice Mumbleton", },
    { id: 2, image: "../../assets/images/media/podcast/2.jpg", title: "Mindless Musings", author: "By Bob Jibberish", },
    { id: 3, image: "../../assets/images/media/podcast/3.jpg", title: "Chatterbox Chronicles", author: "By Charlie Babbleworth", },
    { id: 4, image: "../../assets/images/media/podcast/4.jpg", title: "Whimsical Whispers", author: "By Fiona Jargonova", },
    { id: 5, image: "../../assets/images/media/podcast/5.jpg", title: "The Beach Boys", author: "By Pop Rock", },
    { id: 6, image: "../../assets/images/media/podcast/6.jpg", title: "The Rolling Stones", author: "By Blues Rock", }
];

// Recently Played
interface RecentlyPlayedType {
    id: number;
    image: string;
    title: string;
    author: string;
    plays: string;
    duration: string;
}
export const RecentlyPlayed: RecentlyPlayedType[] = [
    { id: 1, image: "../../assets/images/media/podcast/1.jpg", title: "Tech Talk", author: "John Smith", plays: "10,005", duration: "45 Mins" },
    { id: 2, image: "../../assets/images/media/podcast/7.jpg", title: "Science Explorers", author: "Emily Johnson", plays: "1,11,374", duration: "30 Mins" },
    { id: 3, image: "../../assets/images/media/podcast/8.jpg", title: "Business Insights", author: "David Williams", plays: "10,742", duration: "60 Mins" },
    { id: 4, image: "../../assets/images/media/podcast/4.jpg", title: "Ransom Riblings", author: "Alish Floana", plays: "3,637", duration: "60 Mins" },
    { id: 5, image: "../../assets/images/media/podcast/3.jpg", title: "Health and Wellness", author: "Michael Brown", plays: "2,575", duration: "50 Mins" },
];