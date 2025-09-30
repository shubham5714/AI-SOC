import { ReactNode } from "react";

// Patients Statistics
export const PatientsStatisticsSeries = [
    {
        type: "line",
        name: "This Year",
        data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
    },
    {
        type: "line",
        name: "Previous Year",
        data: [8, 40, 15, 32, 45, 30, 20, 25, 18, 23, 20, 40],
    }
]
export const PatientsStatisticsOptions = {
    chart: {
        type: "line",
        height: 292,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 4,
        }
    },
    colors: [
        "var(--primary07)",
        "rgba(244, 110, 244, 1)",
    ],
    fill: {
        type: 'solid',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
        }
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
    },
    stroke: {
        curve: 'smooth',
        width: [2, 2],
        lineCap: 'round',
        dashArray: [4, 0]
    },
    grid: {
        borderColor: "#edeef1",
        strokeDashArray: 4,
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
    yaxis: {
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
    },
    xaxis: {
        type: "month",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
        ],
        axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            rotate: -90,
        },
    },
    tooltip: {
        enabled: true,
        theme: "dark",
    }
}

// Patients Overview
export const PatientsOverviewSeries = [
    {
        name: "Male",
        data: [80, 50, 30, 40, 100, 20, 80],
    },
    {
        name: "Female",
        data: [20, 100, 60, 50, 50, 80, 33],
    },
]
export const PatientsOverviewOptions = {
    chart: {
        height: 215,
        type: "radar",
        toolbar: {
            show: false,
        },
    },
    colors: ["rgba(244, 110, 244, 0.1)", "var(--primary01)"],
    stroke: {
        width: 1.5,
        colors: ["rgb(244, 110, 244)", "var(--primary-color)"],
    },
    fill: {
        opacity: 0.1,
    },
    markers: {
        size: 0,
    },
    legend: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        fontSize: "12px",
        markers: {
            width: 6,
            height: 6,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 5,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
        },
    },
    xaxis: {
        categories: ["Cardiology", "Pediatrics", "Orthopedic", "Neurology", "Psychiatry", "Radiology", "Others"],
        axisBorder: { show: false },
        labels: {
            style: {
                fontSize: "9px",
            }
        }
    },
    yaxis: {
        axisBorder: { show: false },
    },
    grid: {
        padding: {
            bottom: -25
        }
    },
}

// Latest Appointments
interface Appointment {
    id: number;
    icon: string;
    bgColor: string;
    name: string;
    code: string;
    date: string;
    text: string;
    color: string;
    tdClass?: string;
};
export const Appointments: Appointment[] = [
    { id: 1, icon: "stethoscope", bgColor: "primary", name: "General Checkup", code: "#SPK101", date: "22 Jan 2024", text: "completed", color: "primary", },
    { id: 2, icon: "report-medical", bgColor: "secondary", name: "Follow-up appointment", code: "#SPK121", date: "12 Feb 2024", text: "completed", color: "primary", },
    { id: 3, icon: "heartbeat", bgColor: "success", name: "Heart Checkup", code: "#SPK114", date: "20 Dec 2024", text: "ReScheduled", color: "success", },
    { id: 4, icon: "vaccine", bgColor: "info", name: "Blood test results review", code: "#SPK132", date: "09 Oct 2024", text: "cancelled", color: "danger", },
    { id: 5, icon: "vaccine-bottle", bgColor: "warning", name: "Vaccination", code: "#SPK115", date: "22 Nov 2024", text: "Completed", color: "primary", },
    { id: 6, tdClass: "border-bottom-0", icon: "dental", bgColor: "danger", name: "Dental Cleanup", code: "#SPK115", date: "22 Nov 2024", text: "Scheduled", color: "warning", },
];

// Patients List
interface PatientType {
    id: number;
    patientId: string;
    avatar: string;
    name: string;
    gender: "Male" | "Female";
    phone: string;
    nextVisit: string;
    label: string;
    color: string;
    createdAt: string;
    checked: boolean;
};
export const Patients: PatientType[] = [
    { id: 1, patientId: "SPK-9ABC", avatar: "../../assets/images/faces/11.jpg", name: "Jhon Doe", gender: "Male", phone: "123-456-7890", nextVisit: "2024-10-20", label: "Hypertension", color: "primary", createdAt: "2024-03-15", checked: false, },
    { id: 2, patientId: "SPK-3SFW", avatar: "../../assets/images/faces/2.jpg", name: "Jane Smith", gender: "Female", phone: "987-654-3210", nextVisit: "2024-09-15", label: "Diabetes", color: "secondary", createdAt: "2024-02-28", checked: true, },
    { id: 3, patientId: "SPK-6SKF", avatar: "../../assets/images/faces/12.jpg", name: "Robert Jhonson", gender: "Male", phone: "456-789-0123", nextVisit: "2024-11-05", label: "Asthma", color: "success", createdAt: "2024-04-10", checked: false, },
    { id: 4, patientId: "SPK-3ESD", avatar: "../../assets/images/faces/5.jpg", name: "Emiley Davis", gender: "Female", phone: "789-012-3456", nextVisit: "2024-08-12", label: "Allergies", color: "orange", createdAt: "2024-01-20", checked: true, },
    { id: 5, patientId: "SPK-3KSE", avatar: "../../assets/images/faces/11.jpg", name: "William Martinez", gender: "Male", phone: "234-567-8901", nextVisit: "2024-12-08", label: "General", color: "info", createdAt: "2024-05-05", checked: true, },
    { id: 6, patientId: "SPK-4DFS", avatar: "../../assets/images/faces/4.jpg", name: "Sarah Wilson", gender: "Female", phone: "567-890-1234", nextVisit: "2024-07-25", label: "High Cholesterol", color: "warning", createdAt: "2024-03-01", checked: false, },
];

export interface SummaryCard {
    id: number;
    label: string;
    value: string;
    icon: ReactNode;
    trend: string;
    trendColor: string;
    trendPercent: string;
    bgColor: string;
    cardClass: string;
};
const PatientsIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="152" cy="48" r="24" opacity="0.2" /><circle cx="152" cy="48" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M48,129s56-52.65,88-24.87C153.94,119.67,168,144,208,144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="152 232 152 176 109.54 145.67" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="129.53" y1="99.69" x2="72" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const AppointmentsIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z" opacity="0.2" /><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M57.78,216a72,72,0,0,1,140.44,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const DoctorsIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="200" cy="152" r="32" opacity="0.2" /><circle cx="200" cy="152" r="12" /><circle cx="200" cy="152" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M96,136v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M128,32h16a8,8,0,0,1,8,8V79.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,40,80V40a8,8,0,0,1,8-8H64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
const RoomsIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M48,40H208a8,8,0,0,1,8,8V200a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A8,8,0,0,1,48,40Z" opacity="0.2" /><line x1="128" y1="40" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="160" y1="72" x2="184" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="160" y1="104" x2="184" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="72" y1="72" x2="96" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="72" y1="104" x2="96" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M48,40H208a8,8,0,0,1,8,8V200a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A8,8,0,0,1,48,40Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="40" y1="200" x2="40" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="216" y1="200" x2="216" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>

export const SummaryCards: SummaryCard[] = [
    { id: 1, label: "Total Patients", value: "1.2K", icon: PatientsIcon, trend: "up", trendColor: "success", trendPercent: "0.67%", bgColor: "primary", cardClass: "total-pateints", },
    { id: 2, label: "Appointments", value: "256", icon: AppointmentsIcon, trend: "down", trendColor: "danger", trendPercent: "1.44%", bgColor: "secondary", cardClass: "appointments", },
    { id: 3, label: "Available Doctors", value: "53", icon: DoctorsIcon, trend: "up", trendColor: "success", trendPercent: "2.75%", bgColor: "success", cardClass: "available-doctors", },
    { id: 4, label: "Available Rooms", value: "142", icon: RoomsIcon, trend: "up", trendColor: "success", trendPercent: "1.16%", bgColor: "orange", cardClass: "available-rooms", },
];

// Appointments History
interface HistoryType {
    id: number;
    historyid: string;
    title: string;
    icon: string;
    colorClass: string;
    dateTime: string;
    status: string;
    color: string;
}
export const AppointmentsHistory: HistoryType[] = [
    { id: 1, historyid: 'ASPK101', title: 'General Checkup', icon: 'stethoscope', colorClass: 'primary', dateTime: '13 Feb 2024, 10:25am', status: 'Completed', color: "primary", },
    { id: 2, historyid: 'ASPK121', title: 'Follow-up appointment', icon: 'report-medical', colorClass: 'secondary', dateTime: '13 Feb 2024, 11:15am', status: 'Rescheduled', color: "secondary", },
    { id: 3, historyid: 'ASPK114', title: 'Heart Checkup', icon: 'heartbeat', colorClass: 'success', dateTime: '13 Feb 2024, 02:30pm', status: 'Scheduled', color: "success", },
    { id: 4, historyid: 'ASPK132', title: 'Blood test results review', icon: 'vaccine', colorClass: 'orange', dateTime: '13 Feb 2024, 03:45pm', status: 'Cancelled', color: "orange", },
    { id: 5, historyid: 'ASPK115', title: 'Dental Cleanup', icon: 'dental', colorClass: 'info', dateTime: '14 Feb 2024, 10:15am', status: 'Completed', color: "info", },
];
// Available Doctors
interface DoctorType {
    id: number;
    name: string;
    specialty: string;
    image: string;
    status: string;
}
export const Doctors: DoctorType[] = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiology', image: '../../assets/images/faces/doctors/1.jpg', status: 'Available', },
    { id: 2, name: 'Dr. Johnson', specialty: 'Orthopedics', image: '../../assets/images/faces/doctors/2.jpg', status: 'Available', },
    { id: 3, name: 'Dr. Davis', specialty: 'Dermatology', image: '../../assets/images/faces/doctors/3.jpg', status: 'Not Available', },
    { id: 4, name: 'Dr. Miller', specialty: 'Neurology', image: '../../assets/images/faces/doctors/4.jpg', status: 'Available', },
    { id: 5, name: 'Dr. Anderson', specialty: 'Ophthalmology', image: '../../assets/images/faces/doctors/5.jpg', status: 'Available', },
    { id: 6, name: 'Dr. Martinez', specialty: 'Gastroenterology', image: '../../assets/images/faces/doctors/6.jpg', status: 'Not Available', },
];

// Available Treatments
interface TreatmentsType {
    id: number;
    name: string;
    icon: string;
    bgColorClass: string;
    doctorCount: number;
    timings: string;
}
export const Treatments: TreatmentsType[] = [
    { id: 1, name: 'Cardiology', icon: 'heartbeat', bgColorClass: 'primary', doctorCount: 120, timings: '10:00AM - 6:00PM', },
    { id: 2, name: 'Pediatrics', icon: 'baby-carriage', bgColorClass: 'secondary', doctorCount: 150, timings: '9:00AM - 12:00PM', },
    { id: 3, name: 'Orthopedic', icon: 'bone', bgColorClass: 'success', doctorCount: 132, timings: '11:00AM - 4:00PM', },
    { id: 4, name: 'Neurology', icon: 'brain', bgColorClass: 'info', doctorCount: 16, timings: '1:00PM - 7:00PM', },
    { id: 5, name: 'Psychiatry', icon: 'brand-debian', bgColorClass: 'warning', doctorCount: 132, timings: '12:00PM - 6:00PM', },
    { id: 6, name: 'Gastroenterology', icon: 'activity-heartbeat', bgColorClass: 'danger', doctorCount: 173, timings: '11:00PM - 7:00PM', },
];