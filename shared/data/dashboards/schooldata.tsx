import { ReactNode } from "react";

// Earnings Report
export const EarningsReportSeries = [{
    name: 'Total Present',
    type: "column",
    data: [44, 30, 57, 80, 90, 55, 70, 43, 23, 54, 77, 34]
}, {
    name: 'Total Absent',
    type: "area",
    data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
}]
export const EarningsReportOptions = {
    chart: {
        fontFamily: 'Montserrat',
        height: 295,
        type: 'line',
        stacked: !1,
        toolbar: {
            show: !1
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 0,
            blur: 0,
            color: 'var(--primary-color)',
            opacity: 0.05
        },
    },
    grid: {
        borderColor: '#f2f6f7',
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'top',
        show: true,
    },
    colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
    fill: {
        type: ['solid', 'gradient'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            type: "vertical",
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'var(--primary-color)',
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: 'rgba(244, 110, 244, 0.4)',
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: 'rgba(244, 110, 244, 0.2)',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgba(244, 110, 244, 0)',
                        opacity: 1
                    }
                ],
            ]
        }
    },
    stroke: {
        width: [1.5, 1.5],
        curve: ['smooth', 'smooth'],
        dashArray: [0, 4]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    plotOptions: {
        bar: {
            columnWidth: "25%",
            borderRadius: 2
        }
    },
    tooltip: {
        enabled: true,
        theme: "dark",
    }
}

// Attendance Overview
export const AttendanceOverviewSeries = [72, 84]
export const AttendanceOverviewOptions = {
    chart: {
        height: 199,
        type: "radialBar",
    },
    colors: ["var(--primary-color)", "rgba(244, 110, 244, 1)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "60%",
                background: "#fff",
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "16px",
                    show: false,
                },
                value: {
                    offsetY: 10,
                    color: "#4b9bfa",
                    fontSize: "22px",
                    show: true,
                },
                total: {
                    show: true,
                    label: 'Total',
                }
            },
        },
    },
    stroke: {
        lineCap: "round",
    },
}

// Top Students
interface StudentType {
    id: number;
    rollNo: string;
    name: string;
    score: string;
    percentage: string;
    year: string;
    image: string;
    color: string;
    tdClass?:string
}
export const Students: StudentType[] = [
    { id: 1, rollNo: "#1116", name: "Studar Little", score: "99/100", color: 'primary', percentage: "99%", year: "2022", image: "../../assets/images/faces/2.jpg", },
    { id: 2, rollNo: "#8547", name: "Ion Somer", score: "95/100", color: 'secondary', percentage: "95%", year: "2019", image: "../../assets/images/faces/4.jpg", },
    { id: 3, rollNo: "#7564", name: "Shakira", score: "92/100", color: 'success', percentage: "92%", year: "2021", image: "../../assets/images/faces/6.jpg", },
    { id: 4, rollNo: "#1254", name: "Thomas Shelby", score: "85/100", color: 'info', percentage: "85%", year: "2024", image: "../../assets/images/faces/8.jpg", },
    { id: 5, rollNo: "#7458", name: "Stefan U", score: "82/100", color: 'warning', percentage: "82%", year: "2022", image: "../../assets/images/faces/10.jpg", },
    { id: 6, rollNo: "#15643", name: "Jessica T", score: "75/100", color: 'danger', percentage: "75%", year: "2018", image: "../../assets/images/faces/11.jpg",tdClass:"border-bottom-0" },
];

// Student Marks
export interface StudentMarksType {
    id: number;
    name: string;
    studentId: string;
    age: string;
    gender: string;
    class: string;
    grade: string;
    percentage: string;
    score: string;
    status: string;
    image: string;
}
export const StudentMarks: StudentMarksType[] = [
    { id: 1, name: "Studar Little", studentId: "#1116", age: "12 Years", gender: "Boy", class: "IX", grade: "B", percentage: "75%", score: "7.5", status: "Pass", image: "../../assets/images/faces/2.jpg", },
    { id: 2, name: "Ion Somer", studentId: "#8547", age: "10 Years", gender: "Boy", class: "X", grade: "A", percentage: "65%", score: "6.5", status: "Pass", image: "../../assets/images/faces/4.jpg", },
    { id: 3, name: "Shakira", studentId: "#7564", age: "12 Years", gender: "Girl", class: "X", grade: "B", percentage: "25%", score: "2.5", status: "Fail", image: "../../assets/images/faces/6.jpg", },
    { id: 4, name: "Thomas Shelby", studentId: "#1254", age: "8 Years", gender: "Boy", class: "IX", grade: "A", percentage: "95%", score: "9.5", status: "Pass", image: "../../assets/images/faces/8.jpg", },
    { id: 5, name: "Stefan U", studentId: "#7458", age: "10 Years", gender: "Girl", class: "IX", grade: "B", percentage: "62%", score: "6.2", status: "Pass", image: "../../assets/images/faces/10.jpg", },
    { id: 6, name: "Michael Shreff", studentId: "#6325", age: "15 Years", gender: "Boy", class: "X", grade: "A", percentage: "15%", score: "1.5", status: "Fail", image: "../../assets/images/faces/12.jpg", },
];

// Upcoming Assignments
interface AssignmentsType {
    id: number;
    title: string;
    dateRange: string;
    badgeText: string;
    badgeColor: string;
}
export const Assignments: AssignmentsType[] = [
    { id: 1, title: "Assignment-4", dateRange: "1,Jul 2024 - 24,Jul 2024", badgeText: "3 Days Left", badgeColor: "danger", },
    { id: 2, title: "Class Test-3", dateRange: "14,Aug 2024 - 20,Aug 2024", badgeText: "10 Days Left", badgeColor: "danger", },
    { id: 3, title: "Unit Test-1", dateRange: "20,Sep 2024 - 30,Sep 2024", badgeText: "2 Months Left", badgeColor: "success", },
    { id: 4, title: "Assignment-5", dateRange: "1,Nov 2024 - 10,Nov 2024", badgeText: "3 Months Left", badgeColor: "success", },
    { id: 5, title: "Class Test-4", dateRange: "2,Jan 2025 - 12,Jan 2024", badgeText: "4 Months Left", badgeColor: "success", },
];

const StudentsIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="224 64 128 96 32 64 128 32 224 64" opacity="0.2"></polygon><line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polygon><path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
const AwardsIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="96" r="48" opacity="0.2"></circle><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg>
const RevenueIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"></path><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"></path><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>

export interface SchoolCardInfo {
    id: number;
    title: string;
    value: string;
    percentage: string;
    trendIcon: string;
    changePeriod: string;
    avatarColor: string;
    svgIcon: ReactNode;
    chart: boolean
    fs: string;
    avatarsize: string
}
export const SchoolCardData: SchoolCardInfo[] = [
    { id: 1, fs: '25', avatarsize: "lg", title: 'Students', value: '12,765', percentage: '0.25%', trendIcon: 'up', changePeriod: 'This Month', avatarColor: 'primary', svgIcon: StudentsIcon, chart: false },
    { id: 2, fs: '25', avatarsize: "lg", title: 'Awards', value: '45+', percentage: '6.56%', trendIcon: 'up', changePeriod: 'This Year', avatarColor: 'secondary', svgIcon: AwardsIcon, chart: false },
    { id: 3, fs: '25', avatarsize: "lg", title: 'Revenue', value: '$3,24,289', percentage: '2.45%', trendIcon: 'down', changePeriod: 'This Year', avatarColor: 'success', svgIcon: RevenueIcon, chart: false },
    { id: 4, fs: '25', avatarsize: "lg", title: 'Total Teachers', value: '721', percentage: '2.45%', trendIcon: 'down', changePeriod: 'This Year', avatarColor: 'info', svgIcon: RevenueIcon, chart: false },
];

// Activity
export interface ActivityType {
    id: number;
    name: string;
    time: string;
    message: React.ReactNode;
}

export const Activity: ActivityType[] = [
    {
        id: 1,
        name: 'Mr. Thomas Brown',
        time: '02:30PM',
        message: (
            <>Liked a post from <span className="badge bg-secondary-transparent">Ms. Sarah Parker</span> about the upcoming school event</>
        )
    },
    {
        id: 2,
        name: 'Mr. John Doe',
        time: '12:47PM',
        message: <>Updated class schedule</>
    },
    {
        id: 3,
        name: 'Ms. Jane Smith',
        time: '10:22AM',
        message: (
            <>
                Posted a <span className="text-primary3 fw-medium">new announcement</span>
                <div className="p-2 rounded-1 bg-light fs-13 mt-1">
                    Reminder: Parent-Teacher meeting on Friday at 3 PM 📅
                </div>
            </>
        )
    },
    {
        id: 4,
        name: 'Mrs. Emily Davis',
        time: '11:30AM',
        message: (
            <>Commented on a student's project - <span className="fw-medium text-secondary me-1 d-inline-block">"Excellent Work"</span></>
        )
    },
    {
        id: 5,
        name: 'Alice Johnson',
        time: '11:45AM',
        message: (
            <>Submitted a report - <span className="fw-medium text-warning me-1 d-inline-block">"Science Project"</span></>
        )
    }
];

// Teachers List
export interface TeachersListType {
    id: number;
    name: string;
    qualification: string;
    subject: string;
    subjectClass: string;
    image: string;
}
export const TeachersList: TeachersListType[] = [
    { id: 1, name: 'John Smith', qualification: 'M.Ed', subject: 'Mathematics', subjectClass: 'primary', image: '../../assets/images/faces/11.jpg' },
    { id: 2, name: 'Mary Johnson', qualification: 'B.A. in English', subject: 'English', subjectClass: 'secondary', image: '../../assets/images/faces/3.jpg' },
    { id: 3, name: 'Robert Davis', qualification: 'Ph.D. in Science', subject: 'Physics', subjectClass: 'warning', image: '../../assets/images/faces/14.jpg' },
    { id: 4, name: 'Sarah Thompson', qualification: 'M.A. in History', subject: 'History', subjectClass: 'info', image: '../../assets/images/faces/7.jpg' },
    { id: 5, name: 'Emily Wilson', qualification: 'M.A. in Geography', subject: 'Geography', subjectClass: 'orange', image: '../../assets/images/faces/2.jpg' },
    { id: 6, name: 'Michael Brown', qualification: 'B.Ed', subject: 'Chemistry', subjectClass: 'success', image: '../../assets/images/faces/9.jpg' },
    { id: 7, name: 'Sara Smith', qualification: 'M.A', subject: 'English Literature', subjectClass: 'danger', image: '../../assets/images/faces/4.jpg' },
    { id: 8, name: 'Leo Phillip', qualification: 'B.Com', subject: 'Arts & Sciences', subjectClass: 'teal', image: '../../assets/images/faces/12.jpg' },
];

