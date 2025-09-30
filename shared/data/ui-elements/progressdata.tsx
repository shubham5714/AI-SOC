
interface ProgressType {
    id: number;
    data: number;
    mbClass: string
}
export const progressdata: ProgressType[] = [
    { id: 1, data: 0, mbClass: 'mb-3' },
    { id: 2, data: 25, mbClass: 'mb-3' },
    { id: 3, data: 50, mbClass: 'mb-3' },
    { id: 4, data: 75, mbClass: 'mb-3' },
    { id: 5, data: 100, mbClass: '' },
]
interface StripType {
    id: number;
    data: number;
    color: string;
    mbClass?: string
}
export const Stripeddata: StripType[] = [
    { id: 1, data: 10, color: "primary", mbClass: 'mb-3' },
    { id: 2, data: 25, color: "secondary", mbClass: 'mb-3' },
    { id: 3, data: 50, color: "success", mbClass: 'mb-3' },
    { id: 4, data: 75, color: "warning", mbClass: 'mb-3' },
    { id: 5, data: 100, color: "info", mbClass: '' },
]

export const Labeldata: StripType[] = [
    { id: 1, data: 10, color: "primary" },
    { id: 2, data: 20, color: "secondary" },
    { id: 3, data: 40, color: "success" },
    { id: 4, data: 60, color: "warning" },
    { id: 5, data: 80, color: "info" },
]
interface HeightType {
    id: number;
    data: number;
    class: string;
}
export const Heightdata: HeightType[] = [
    { id: 1, data: 10, class: "progress progress-xs mb-3",  },
    { id: 2, data: 25, class: "progress progress-sm mb-3",  },
    { id: 3, data: 50, class: "progress  mb-3",  },
    { id: 4, data: 75, class: "progress progress-lg mb-3",  },
    { id: 5, data: 100, class: "progress progress-xl ",  },
]

export const Coloreddata: StripType[] = [
    { id: 1, data: 20, color: "secondary" },
    { id: 2, data: 40, color: "success" },
    { id: 3, data: 60, color: "warning" },
    { id: 4, data: 80, color: "info" },
    { id: 5, data: 100, color: "danger" },
]
interface HeightType1 {
    id: number;
    data: number;
    class: string;
    color: string;
}
export const Animatedata: HeightType1[] = [
    { id: 1, data: 10, color: "primary", class: "mb-3" },
    { id: 2, data: 20, color: "secondary", class: "mb-3" },
    { id: 3, data: 40, color: "success", class: "mb-3" },
    { id: 4, data: 60, color: "warning", class: "mb-3" },
    { id: 5, data: 80, color: "info", class: "" },
]


interface multiple {
    now1: number
    now2: number
    now3: number
    size: string
    class1: string
    class2: string
    class3: string
    id: number
    mbClass: string
}
export const Multipleprogress: multiple[] = [
    { id: 1, class1: "primary", class2: "secondary", class3: "success", now1: 5, now2: 10, now3: 15, size: "xs", mbClass: 'mb-3' },
    { id: 2, class1: "warning", class2: "info", class3: "danger", now1: 10, now2: 15, now3: 20, size: "sm", mbClass: 'mb-3' },
    { id: 3, class1: "info", class2: "success", class3: "primary", now1: 15, now2: 20, now3: 25, size: "", mbClass: 'mb-3' },
    { id: 4, class1: "purple", class2: "teal", class3: "orange", now1: 20, now2: 25, now3: 30, size: "lg", mbClass: 'mb-3' },
    { id: 5, class1: "success", class2: "danger", class3: "warning", now1: 25, now2: 30, now3: 35, size: "xl", mbClass: '' },

];
interface custom2 {
    now: number
    class: string
    class1: string
    class2: string
    class3: string
    id: number
}
export const CustomProgress2data: custom2[] = [
    { id: 1, class: "primary", now: 50, class1: "", class2: "", class3: "mb-4" },
    { id: 2, class: "secondary", now: 60, class1: "", class2: "secondary", class3: "mb-4" },
    { id: 3, class: "success", now: 70, class1: "", class2: "success", class3: "mb-4" },
    { id: 4, class: "info", now: 80, class1: "info", class2: "info", class3: "mb-4" },
    { id: 5, class: "warning", now: 90, class1: "warning", class2: "warning", class3: "" },
];

