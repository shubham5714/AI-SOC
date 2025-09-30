export interface BlogsDataType {
    id: number,
    imageSrc: string,
    title: string,
    extra?: boolean,
    description: string,
    morecolor: string,
    authorImage: string,
    author: string,
    date: string,
}
export const BlogsData: BlogsDataType[] = [
    {
        id: 1,
        imageSrc: "../../../assets/images/media/blog/6.jpg",
        title: "Harmony in the Wilderness",
        extra: true,
        description: "The wilderness is a sanctuary of life, where plants and creatures coexist in perfect balance.",
        morecolor: "primary",
        authorImage: "../../../assets/images/faces/12.jpg",
        author: "Michael Smith",
        date: "24, Mar 2024 - 12:45",
    },
    {
        id: 2,
        imageSrc: "../../../assets/images/media/blog/4.jpg",
        title: "The Calming Sounds of Nature",
        description: "The gentle rustling of leaves, flowing rivers, and soothing melodies of wildlife create a natural symphony. These sounds help us reconnect with the earth and find inner peace.",
        morecolor: "primary",
        authorImage: "../../../assets/images/faces/5.jpg",
        author: "Sophia Johnson",
        date: "23, Mar 2024 - 10:30",
    },
    {
        id: 3,
        imageSrc: "../../../assets/images/media/blog/5.jpg",
        title: "Nature's Ever-Changing Canvas",
        description: "Each season paints nature in different hues, offering vibrant blossoms in spring, lush greenery in summer, golden foliage in autumn, and tranquil snow in winter.",
        morecolor: "primary",
        author: "William Brown",
        date: "22, Mar 2024 - 16:50",
        authorImage: "../../../assets/images/faces/14.jpg"
    },
    {
        id: 4,
        imageSrc: "../../../assets/images/media/blog/8.jpg",
        title: "The Diversity of Natural Habitats",
        description: "From dense forests to expansive deserts, nature's variety is awe-inspiring. Each habitat supports unique forms.",
        morecolor: "primary",
        author: "Olivia Martinez",
        date: "21, Mar 2024 - 11:15",
        authorImage: "../../../assets/images/faces/7.jpg"
    },
    {
        id: 5,
        imageSrc: "../../../assets/images/media/blog/9.jpg",
        title: "The Role of Animals in Nature's Balance",
        description: "Animals play a crucial role in maintaining ecosystems, from pollination to soil aeration. Their movements, behaviors.",
        morecolor: "primary",
        author: "James Wilson",
        date: "20, Mar 2024 - 09:05",
        authorImage: "../../../assets/images/faces/15.jpg"
    },
    {
        id: 6,
        imageSrc: "../../../assets/images/media/blog/12.jpg",
        title: "The Tranquility of Water Bodies",
        description: "Rivers, lakes, and oceans not only provide sustenance but also offer stunning views.",
        morecolor: "primary",
        author: "Charlotte Garcia",
        date: "19, Mar 2024 - 17:40",
        authorImage: "../../../assets/images/faces/2.jpg"
    },
    {
        id: 7,
        imageSrc: "../../../assets/images/media/blog/10.jpg",
        title: "Connection Between Flora and Fauna",
        description: "The relationship between plants and animals is essential for life.",
        morecolor: "info",
        author: "Benjamin Moore",
        authorImage: "../../../assets/images/faces/13.jpg",
        date: "18, Mar 2024 - 13:25",
    },
    {
        id: 8,
        imageSrc: "../../../assets/images/media/blog/13.jpg",
        title: "Nature's Role in Human Inspiration",
        description: "The beauty of nature has inspired art, literature, and science for centuries.",
        morecolor: "secondary",
        author: "Amelia Taylor",
        authorImage: "../../../assets/images/faces/6.jpg",
        date: "17, Mar 2024 - 14:50",
    },
    {
        id: 9,
        imageSrc: "../../../assets/images/media/blog/11.jpg",
        title: "Protecting the Beauty of Nature",
        description: "Conservation is essential to preserve the magnificence of nature for future generations.",
        morecolor: "primary",
        author: "Ethan White",
        authorImage: "../../../assets/images/faces/10.jpg",
        date: "16, Mar 2024 - 08:35",
    },
];

type ListItem = {
    id: number;
    icon: string;
    name: string;
    badgeColor: string;
    count: number;
};

export const categories: ListItem[] = [
    {
        id: 1,
        icon: 'ri-leaf-fill',
        name: 'Nature Life',
        badgeColor: 'primary',
        count: 12,
    },
    {
        id: 2,
        icon: 'ri-flight-takeoff-fill',
        name: 'Tourism & Trips',
        badgeColor: 'success',
        count: 36,
    },
    {
        id: 3,
        icon: 'ri-global-fill',
        name: 'Technology',
        badgeColor: 'info',
        count: 45,
    },
    {
        id: 4,
        icon: 'ri-cloud-fill',
        name: 'Data Networking',
        badgeColor: 'secondary',
        count: 124,
    },
    {
        id: 5,
        icon: 'ri-home-wifi-fill',
        name: 'Modern Living',
        badgeColor: 'warning',
        count: 16,
    },
];
interface featured {
    id?: number;
    src: string;
    title?: string;
    text?: string;
    class?: string;
}
export const Featuredblogdata: featured[] = [
    { id: 1, src: '../../../assets/images/media/blog/11.jpg', title: 'Jack Diamond', text: '  To generate Lorem Ipsum ', class: "" },
    { id: 2, src: '../../../assets/images/media/blog/12.jpg', title: 'Dhruva Gen', text: ' Generators on the Internet ', class: "" },
    { id: 3, src: '../../../assets/images/media/blog/10.jpg', title: 'Henry Milo', text: ' Always free from repetition ', class: "" },
    { id: 4, src: '../../../assets/images/media/blog/13.jpg', title: 'Peter Paul', text: ' Lorem Ipsum is not simply text ', class: "" },
    { id: 5, src: '../../../assets/images/media/blog/12.jpg', title: 'Fahad Rafi', text: ' Electronic typesetting, remaining ', class: "" },
    { id: 6, src: '../../../assets/images/media/blog/5.jpg', title: 'Khanu Milo', text: '  Trending habits  ', class: "border-bottom-0" }
]
type Relatedblog = {
    id: number;
    imageSrc: string;
    name: string;
    description: string;
    date: string;
};

export const Relatedblogdata: Relatedblog[] = [
    {
        id: 1,
        imageSrc: '../../../assets/images/media/blog/5.jpg',
        name: 'Isabella Thomas',
        description: 'From dense forests to expansive deserts',
        date: '26, Mar 2024 - 15:37',
    },
    {
        id: 2,
        imageSrc: '../../../assets/images/media/blog/6.jpg',
        name: 'Justin Roy',
        description: 'Rivers, lakes, and oceans',
        date: '25, Mar 2024 - 14:20',
    },
    {
        id: 3,
        imageSrc: '../../../assets/images/media/blog/8.jpg',
        name: 'Emily Davis',
        description: 'The relationship between plants and animals',
        date: '24, Mar 2024 - 12:45',
    },
    {
        id: 4,
        imageSrc: '../../../assets/images/media/blog/9.jpg',
        name: 'William Brown',
        description: 'The beauty of nature has inspired art',
        date: '22, Mar 2024 - 16:50',
    },
];


