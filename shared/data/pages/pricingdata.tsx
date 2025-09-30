import { JSX } from "react";

// Define types/interfaces
interface FeatureItem {
  Listitem: string;
  badge?: 'true';
  badgetxt?: string;
  badgecolor?: string;
  icon?: boolean;
  iconclass?: string;
  days?: string;
  yeardays?: string;
}

export interface PricingData {
  id: number;
  Title: string;
  Customclass: string;
  Customh6class: string;
  Customh2class: string;
  descriptionclass: string;
  footerClass?: string;
  buttonClass: string;
  Custombodyclass: string;
  price: string;
  yearPrice: string;
  pricingPlan: string;
  arrowClass: string;
  description: string;
  features: FeatureItem[];
  Ribbon: boolean;
  Customfooterclass?: string; // added since only Premium uses it
}
export const pricingsdata: PricingData[] = [

  {
    id: 1,
    Title: 'Basic',
    Customclass: "",
    Customh6class: "mb-1",
    Customh2class: "",
    descriptionclass: "mb-1 text-muted ",
    footerClass: "",
    buttonClass: "primary",
    Custombodyclass: "",
    price: "$9",
    yearPrice: "$99",
    pricingPlan: "Month",
    arrowClass: "text-primary",
    description: 'Discover the vital features that create an enchanting foundation for a magical beginning.',
    features: [
      { Listitem: 'Up to 10 users', badge: 'true', badgetxt: 'New', badgecolor: 'info-transparent' },
      { Listitem: 'Community access' },
      { Listitem: 'Basic reporting', icon: true, iconclass: "info-transparent" },
      { Listitem: 'Email support' },
      { Listitem: 'Community access' },
      { Listitem: 'Access to essential features', days: '12 Days', yeardays: '40 Days' },
      { Listitem: 'Mobile app access', days: '45 Days', yeardays: '180 Days' }
    ],
    Ribbon: false

  },
  {
    id: 2,
    Title: "Premium",
    Customclass: "hover border border-primary border-2",

    Customh6class: "mb-1 ",
    Customh2class: "",
    descriptionclass: "op-7 ",
    Customfooterclass: "",
    buttonClass: "primary",
    Custombodyclass: " ",
    price: "$29",
    yearPrice: "$349",
    pricingPlan: "Month",
    arrowClass: "text-primary",
    description: "Unlock powerful tools tailored for seasoned users, designed to take your skills to the next level.",
    features: [
      { Listitem: 'Unlimited users', badge: 'true', badgetxt: 'Unlimited', badgecolor: 'success', icon: false },
      { Listitem: 'Advanced analytics', icon: false },
      { Listitem: 'Customizable dashboards', icon: true, iconclass: "info-transparent op-8" },
      { Listitem: 'Phone support', icon: false },
      { Listitem: 'Dedicated account manager', icon: false },
      { Listitem: 'SLA guarantees', days: '30 Days', icon: false, yeardays: '90 Days' },
      { Listitem: 'On-site training for teams', days: '120 Days', icon: false, yeardays: '300 Days' }
    ],
    Ribbon: true
  },
  {
    id: 3,
    Title: 'Standard',
    Customclass: "",

    Customh6class: "mb-1",
    Customh2class: "",
    descriptionclass: "mb-1 text-muted ",
    footerClass: "",
    buttonClass: "primary",
    Custombodyclass: "",
    price: "$49",
    yearPrice: "$549",
    pricingPlan: "Month",
    arrowClass: "text-primary",
    description: 'Elevate to the highest standards with unparalleled excellence and exclusive top-tier support.',
    features: [
      { Listitem: 'Up to 50 users', badge: 'true', badgetxt: 'New', badgecolor: 'info-transparent' },
      { Listitem: 'Access to webinars' },
      { Listitem: 'Advanced reporting', icon: true, iconclass: "info-transparent" },
      { Listitem: 'Priority email support' },
      { Listitem: '24/7 chat support' },
      { Listitem: 'All Standard features', days: '52 Days', yeardays: '250 Days' },
      { Listitem: 'Team collaboration tools', days: '60 Days', yeardays: '320 Days' }
    ],
    Ribbon: false

  }
]


interface Feature {
  label: string;
  icon: boolean | null;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: string;
  features: Feature[];
  iconPath: JSX.Element;
}

export const pricingPlanMonth: PricingPlan[] = [
  {
    title: "Advance",
    description: "Lorem invidunt ea clita consetetur ea rebum sit accusam ipsum.",
    price: "$96.9",
    features: [
      { label: "Web Design", icon: null },
      { label: "Data Security and Backups", icon: null },
      { label: "3 Users", icon: null },
      { label: "2 Websites", icon: null },
      { label: "24/7 priority support", icon: null },
      { label: "Customization", icon: true }
    ],
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"> <path opacity=".5" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828-2.548-5.164A.978.978 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676 4.123-4.02a1 1 0 0 0 .253-1.025z"></path> <path d="M11.103 2.998 8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503c-.356.001-.703.167-.897.495z"></path> </svg>
    )
  },
  {
    title: "Essential",
    description: "Lorem invidunt ea clita consetetur ea rebum sit accusam ipsum.",
    price: "$79.9",
    features: [
      { label: "Web Design", icon: null },
      { label: "Data Security and Backups", icon: null },
      { label: "Business Services", icon: null },
      { label: "2 Users", icon: null },
      { label: "1 Website", icon: null },
      { label: "24/7 priority support", icon: null },
      { label: "Customization", icon: true }
    ],
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"> <path d="M12,14.19531c-0.17551-0.00004-0.34793-0.04618-0.5-0.13379l-9-5.19726C2.02161,8.58794,1.85779,7.97612,2.13411,7.49773C2.22187,7.34579,2.34806,7.2196,2.5,7.13184l9-5.19336c0.30964-0.17774,0.69036-0.17774,1,0l9,5.19336c0.4784,0.27632,0.64221,0.88814,0.36589,1.36653C21.77813,8.65031,21.65194,8.7765,21.5,8.86426l-9,5.19726C12.34793,14.14913,12.17551,14.19527,12,14.19531z"></path> <path opacity=".7" d="M21.5,11.13184l-1.96411-1.13337L12.5,14.06152c-0.30947,0.17839-0.69053,0.17839-1,0L4.46411,9.99847L2.5,11.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,12.65031,2.34806,12.7765,2.5,12.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,11.34579,21.65194,11.2196,21.5,11.13184z"></path> <path opacity=".5" d="M21.5,15.13184l-1.96411-1.13337L12.5,18.06152c-0.30947,0.17838-0.69053,0.17838-1,0l-7.03589-4.06305L2.5,15.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,16.65031,2.34806,16.7765,2.5,16.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,15.34579,21.65194,15.2196,21.5,15.13184z"></path> </svg>
    )
  },
  {
    title: "Pro",
    description: "Lorem invidunt ea clita consetetur ea rebum sit accusam ipsum.",
    price: "$125.5",
    features: [
      { label: "Web Design", icon: null },
      { label: "Data Security and Backups", icon: null },
      { label: "Unlimited Users", icon: null },
      { label: "Unlimited Websites", icon: null },
      { label: "24/7 priority support", icon: null },
      { label: "Customization", icon: true },
    ],
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"> <path opacity=".5" d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3z"></path> <path d="M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1h2zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14H8.837z"></path> </svg>
    )
  }
];
export const pricingPlansYear: PricingPlan[] = [
  {
    title: "Advance",
    description: "Lorem invidunt ea clita consetetur ea rebum sit accusam ipsum.",
    price: "$196.9",
    features: [
      { label: "Web Design", icon: null },
      { label: "Data Security and Backups", icon: null },
      { label: "2 Users", icon: null },
      { label: "Unlimited Websites", icon: null },
      { label: "24/7 priority support", icon: null },
      { label: "Customization", icon: true }
    ],
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"> <path opacity=".5" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828-2.548-5.164A.978.978 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676 4.123-4.02a1 1 0 0 0 .253-1.025z"></path> <path d="M11.103 2.998 8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503c-.356.001-.703.167-.897.495z"></path> </svg>
    )
  },
  {
    title: "Essential",
    description: "Lorem invidunt ea clita consetetur ea rebum sit accusam ipsum.",
    price: "$179.9",
    features: [
      { label: "Web Design", icon: null },
      { label: "Data Security and Backups", icon: null },
      { label: "Business Services", icon: null },
      { label: "Unlimited Users", icon: null },
      { label: "2 Websites", icon: null },
      { label: "24/7 priority support", icon: null },
      { label: "Customization", icon: true }
    ],
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"> <path d="M12,14.19531c-0.17551-0.00004-0.34793-0.04618-0.5-0.13379l-9-5.19726C2.02161,8.58794,1.85779,7.97612,2.13411,7.49773C2.22187,7.34579,2.34806,7.2196,2.5,7.13184l9-5.19336c0.30964-0.17774,0.69036-0.17774,1,0l9,5.19336c0.4784,0.27632,0.64221,0.88814,0.36589,1.36653C21.77813,8.65031,21.65194,8.7765,21.5,8.86426l-9,5.19726C12.34793,14.14913,12.17551,14.19527,12,14.19531z"></path> <path opacity=".7" d="M21.5,11.13184l-1.96411-1.13337L12.5,14.06152c-0.30947,0.17839-0.69053,0.17839-1,0L4.46411,9.99847L2.5,11.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,12.65031,2.34806,12.7765,2.5,12.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,11.34579,21.65194,11.2196,21.5,11.13184z"></path> <path opacity=".5" d="M21.5,15.13184l-1.96411-1.13337L12.5,18.06152c-0.30947,0.17838-0.69053,0.17838-1,0l-7.03589-4.06305L2.5,15.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,16.65031,2.34806,16.7765,2.5,16.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,15.34579,21.65194,15.2196,21.5,15.13184z"></path> </svg>
    )
  },
  {
    title: "Pro",
    description: "Lorem invidunt ea clita consetetur ea rebum sit accusam ipsum.",
    price: "$1125.5",
    features: [
      { label: "Web Design", icon: null },
      { label: "Data Security and Backups", icon: null },
      { label: "2 Users", icon: null },
      { label: "2 Websites", icon: null },
      { label: "24/7 priority support", icon: null },
      { label: "Customization", icon: true }
    ],
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"> <path opacity=".5" d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3z"></path> <path d="M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1h2zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14H8.837z"></path> </svg>
    )
  }
];