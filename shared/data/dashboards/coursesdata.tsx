// Courses Completed
export const CoursesCompletedSeries = [{
    name: 'This Month',
    data: [44, 55, 41, 42, 22, 43, 21, 35, 56, 27, 43, 27]
}, {
    name: 'This Week',
    data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
}, {
    name: 'This Year',
    data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
}]
export const CoursesCompletedOptions = {
    chart: {
        type: 'bar',
        height: 370,
        fontFamily: 'Poppins, sans-serif',
        foreColor: '#8c9097',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        },
    },
    grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 2,
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    stroke: {
        show: true,
        width: [4, 4, 4],
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
            borderRadius: 3,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'all',
        },
    },
    legend: {
        position: 'right',
        offsetY: 40,
        show: false
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        enabled: true,
        shared: true,
        intersect: false,
    },
    colors: ['var(--primary-color)', 'rgb(40, 200, 235)', 'rgb(133, 204, 65)'],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
}

// Top Course Categories
export const CourseCategoriesSeries = [31, 21, 15, 10, 23]
export const CourseCategoriesOptions = {
    chart: {
        type: 'donut',
        sparkline: {
            enabled: true
        }
    },
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '85%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -4
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: 8,
                        formatter: function (val: string) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    stroke: {
        width: 0
    },
    colors: ["var(--primary-color)", "rgba(40, 200, 235, 1)", "rgba(133, 204, 65, 1)", "rgba(244, 110, 244, 1)", "rgba(250, 182, 50, 1)"],
    labels: ['Sales', 'Marketing', 'IT', 'Consultancy', 'Finance'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                enabled: true,
                position: 'bottom',
            }
        }
    }]
}

// Top Instructors
interface InstructorsType {
    id: number;
    name: string;
    avatar?: string;
    category: string;
    bgcolor?: string;
    icon?: string;
    text?: string;
    tdClass?: string;
}

export const Instructors: InstructorsType[] = [
    { id: 1, name: 'Athlean Y', bgcolor: "secondary", text: "T", category: 'Arts and Crafts', },
    { id: 2, name: 'Dia Xclose', avatar: '../../assets/images/faces/13.jpg', category: 'History', },
    { id: 3, name: 'Geroge P', bgcolor: "success", icon: "lightning-fill", category: 'Science and Nature', },
    { id: 4, name: 'TLV James', avatar: '../../assets/images/faces/16.jpg', category: 'Designing', },
    { id: 5, name: 'Techmortom', avatar: '../../assets/images/faces/15.jpg', category: 'Math and Statistics', tdClass: "border-bottom-0" },
];

// Top Courses
interface TopCoursesType {
    id: number
    avatar: string;
    name: string;
    company: string;
    applicants: number;
    jobs: number;
    status?: string;
    color?: string;
    tdClass?: string
}

export const TopCourses: TopCoursesType[] = [
    { id: 1, avatar: '../../assets/images/faces/7.jpg', name: 'Miss X Matched', company: 'Deil Sata', applicants: 116, jobs: 25, },
    { id: 2, avatar: '../../assets/images/faces/15.jpg', name: 'Phanmanthu', company: 'Nucleus OP', applicants: 0, jobs: 235, color: 'primary', status: 'Starter', },
    { id: 3, avatar: '../../assets/images/faces/14.jpg', name: 'Barbell PM', company: 'Data SC', applicants: 15, jobs: 2, color: 'info', status: 'Pro', },
    { id: 4, avatar: '../../assets/images/faces/10.jpg', name: 'Bean Bag', company: 'Delooit XP', applicants: 773, jobs: 114, },
    { id: 5, avatar: '../../assets/images/faces/13.jpg', name: 'Techmortom', company: 'Tech IP', applicants: 23, jobs: 14, color: 'danger', status: 'Premium', tdClass: "border-bottom-0" },
];

// Courses List
export interface CoursesListType {
    id: number;
    image: string;
    title: string;
    category: string;
    students: number;
    date: string;
    instructor: string;
    views: string;
    color: string;
}

export const CoursesList: CoursesListType[] = [
    { id: 1, image: '../../assets/images/nft-images/1.jpg', title: 'Ray Optics & Optical Fibre Master Class', color: 'primary', category: 'Science', students: 20, date: '29-05-2023', instructor: 'Shin Opran', views: "25", },
    { id: 2, image: '../../assets/images/nft-images/2.jpg', title: 'Master Linear Algebra Medium Level', color: 'warning', category: 'Mathematics', students: 90, date: '11-06-2023', instructor: 'Arya Neo', views: "773", },
    { id: 3, image: '../../assets/images/nft-images/8.jpg', title: 'Learn How To Trade And Invest For Absolute Beginners', color: 'success', category: 'Stocks & Trading', students: 161, date: '10-06-2023', instructor: 'Sia Niu', views: "51", },
    { id: 4, image: '../../assets/images/nft-images/7.jpg', title: 'Digital Marketing Course from Scratch', color: 'info', category: 'Marketing', students: 115, date: '21-06-2023', instructor: 'Stuart George', views: "1,189", },
    { id: 5, image: '../../assets/images/nft-images/5.jpg', title: 'Data Structures & Algorithms For Beginners', color: 'danger', category: 'Programming', students: 30, date: '15-06-2023', instructor: 'Boran Ray', views: "3,368", },
    { id: 6, image: '../../assets/images/nft-images/6.jpg', title: 'Css Zero to Hero Master Class', color: 'teal', category: 'UI/UX', students: 51, date: '22-06-2023', instructor: 'Burak Oin', views: "252", },
];

export interface CourseCardDataType {
    id: number;
    title: string;
    value: string | number;
    trend: string;
    trendPercentage: string;
    icon: string;
    iconBg: string;
}
export const CourseCardData: CourseCardDataType[] = [
    { id: 1, title: 'Total Courses', value: 231, trend: 'up', trendPercentage: '0.5%', icon: 'article-line', iconBg: 'primary', },
    { id: 2, title: 'Total Earnings', value: '$1,116', trend: 'down', trendPercentage: '5.1%', icon: 'exchange-dollar-line', iconBg: 'success', },
    { id: 3, title: 'Engagement ratio', value: '45%', trend: 'up', trendPercentage: '3.5%', icon: 'service-line', iconBg: 'info', },
    { id: 4, title: 'Total Videos', value: '1,986', trend: 'up', trendPercentage: '3.4%', icon: 'video-line', iconBg: 'secondary', },
];

// Top Course Categories
interface CourseCategoriesType {
    id: number;
    category: string;
    percentage: string;
    iconColor: string;
}
export const CourseCategories: CourseCategoriesType[] = [
    { id: 1, category: 'Sales', percentage: '31%', iconColor: 'primary' },
    { id: 2, category: 'Marketing', percentage: '21%', iconColor: 'info' },
    { id: 3, category: 'IT', percentage: '15%', iconColor: 'success' },
    { id: 4, category: 'Consultancy', percentage: '10%', iconColor: 'secondary' },
    { id: 5, category: 'Finance', percentage: '23%', iconColor: 'warning' },
];

// Recent Courses
interface RecentCoursesType {
    id: number;
    letter: string;
    title: string;
    date: string;
    color: string;
}
export const RecentCourses: RecentCoursesType[] = [
    { id: 1, letter: 'W', title: 'Introduction to Web Development', date: '2024-11-15', color: 'primary', },
    { id: 2, letter: 'A', title: 'Advanced Data Analytics', date: '2024-10-20', color: 'success', },
    { id: 3, letter: 'U', title: 'UI/UX Design Principles', date: '2024-12-01', color: 'info', },
    { id: 4, letter: 'C', title: 'Cloud Computing Basics', date: '2024-11-05', color: 'secondary', },
];