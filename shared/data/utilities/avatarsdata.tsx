//Avatars
interface AvatarType {
    id: number;
    class: string;
    src: string;
}
export const Avatardata: AvatarType[] = [
    { id: 1, class: "avatar-radius-0", src: "../../assets/images/faces/1.jpg" },
    { id: 2, class: "", src: "../../assets/images/faces/2.jpg" },
    { id: 4, class: "avatar-rounded", src: "../../assets/images/faces/3.jpg" },
]

interface Icontype {
    id: number;
    class: string;
    src: string;
    icon: string;
    class1: string;
}
export const Avataricon: Icontype[] = [
    { id: 1, class: "xs", src: "../../assets/images/faces/2.jpg", icon: "camera", class1: "success" },
    { id: 2, class: "sm", src: "../../assets/images/faces/3.jpg", icon: "edit", class1: "secondary" },
    { id: 3, class: "md", src: "../../assets/images/faces/14.jpg", icon: "plus", class1: "warning" },
    { id: 4, class: "lg", src: "../../assets/images/faces/13.jpg", icon: "edit", class1: "info" },
    { id: 5, class: "xl", src: "../../assets/images/faces/15.jpg", icon: "camera", class1: "success" },
    { id: 6, class: "xxl", src: "../../assets/images/faces/9.jpg", icon: "plus", class1: "danger" },
]

//Avatar Sizes
export const Avatarsize: AvatarType[] = [
    { id: 1, class: "xs", src: "../../assets/images/faces/4.jpg" },
    { id: 2, class: "sm", src: "../../assets/images/faces/5.jpg" },
    { id: 3, class: "md", src: "../../assets/images/faces/6.jpg" },
    { id: 4, class: "lg", src: "../../assets/images/faces/7.jpg" },
    { id: 5, class: "xl", src: "../../assets/images/faces/8.jpg" },
    { id: 6, class: "xxl", src: "../../assets/images/faces/9.jpg" },
]

//Avatar With Online
export const Avataronline: AvatarType[] = [
    { id: 1, class: "xs online", src: "../../assets/images/faces/8.jpg" },
    { id: 2, class: "sm online", src: "../../assets/images/faces/10.jpg" },
    { id: 3, class: "md online", src: "../../assets/images/faces/12.jpg" },
    { id: 4, class: "lg online", src: "../../assets/images/faces/13.jpg" },
    { id: 5, class: "xl online", src: "../../assets/images/faces/14.jpg" },
    { id: 6, class: "xxl online", src: "../../assets/images/faces/15.jpg" },
]

//Avatar With Offline
export const Avataroffline: AvatarType[] = [
    { id: 1, class: "xs offline", src: "../../assets/images/faces/2.jpg" },
    { id: 2, class: "sm offline", src: "../../assets/images/faces/3.jpg" },
    { id: 3, class: "md offline", src: "../../assets/images/faces/4.jpg" },
    { id: 4, class: "lg offline", src: "../../assets/images/faces/5.jpg" },
    { id: 5, class: "xl offline", src: "../../assets/images/faces/6.jpg" },
    { id: 6, class: "xxl offline", src: "../../assets/images/faces/7.jpg" },
]

//Avatars With Number
export const Avatarnumber = [
    { id: 1, class: "xs", src: "../../assets/images/faces/2.jpg", icon: "camera", class1: "primary", data: '2' },
    { id: 2, class: "sm", src: "../../assets/images/faces/3.jpg", icon: "edit", class1: "secondary", data: '5' },
    { id: 3, class: "md", src: "../../assets/images/faces/14.jpg", icon: "plus", class1: "warning", data: '1' },
    { id: 4, class: "lg", src: "../../assets/images/faces/13.jpg", icon: "edit", class1: "info", data: '7' },
    { id: 5, class: "xl", src: "../../assets/images/faces/15.jpg", icon: "camera", class1: "success", data: '3' },
    { id: 6, class: "xxl", src: "../../assets/images/faces/9.jpg", icon: "plus", class1: "danger", data: '9' },
]

//Avatars With Number
interface StackType {
    id: number;
    src: string;
}
export const Avatarstack: StackType[] = [
    { id: 1, src: "../../assets/images/faces/2.jpg" },
    { id: 2, src: "../../assets/images/faces/8.jpg" },
    { id: 3, src: "../../assets/images/faces/2.jpg" },
    { id: 4, src: "../../assets/images/faces/10.jpg" },
    { id: 5, src: "../../assets/images/faces/4.jpg" },
    { id: 6, src: "../../assets/images/faces/13.jpg" },
]

//Avatar With Initials
interface InitialType {
    id: number;
    data: string;
    color: string;
    data1: string
}
export const Avatarinitial: InitialType[] = [
    { id: 1, data: "xs", color: "primary", data1: "XS" },
    { id: 2, data: "sm", color: "secondary", data1: "SM" },
    { id: 3, data: "md", color: "warning", data1: "MD" },
    { id: 4, data: "lg", color: "danger", data1: "LG" },
    { id: 5, data: "xl", color: "success", data1: "XL" },
    { id: 6, data: "xxl", color: "info", data1: "XXL" },
]