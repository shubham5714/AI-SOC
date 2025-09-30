export interface Badge {
  text: string;
  className: string;
}

export interface BorderCardType {
  Title: string;
  badges: Badge[];
  images: string[];
  Color: string;
  Class: string;
}


export const Bordercarddata: BorderCardType[] = [
  {
    Title: "Home Page Design",
    badges: [
      { text: 'Framework', className: 'bg-primary-transparent' },
      { text: 'Angular', className: 'bg-secondary-transparent' },
      { text: 'Php', className: 'bg-info-transparent' },
    ],
    images: [
      '../../assets/images/faces/2.jpg',
      '../../assets/images/faces/8.jpg',
      '../../assets/images/faces/2.jpg',
    ],
    Color: 'primary',
    Class: 'primary'

  },
  {
    Title: "Home Page Design",
    badges: [
      { text: 'Framework', className: 'bg-success-transparent' },
      { text: 'Angular', className: 'bg-secondary-transparent' },
      { text: 'Php', className: 'bg-info-transparent' },
    ],
    images: [
      '../../assets/images/faces/5.jpg',
      '../../assets/images/faces/1.jpg',
      '../../assets/images/faces/14.jpg',
    ],
    Color: 'success',
    Class: 'success'
  },
  {
    Title: "Home Page Design",
    badges: [
      { text: 'Framework', className: 'bg-info-transparent' },
      { text: 'Angular', className: 'bg-secondary-transparent' },
      { text: 'Php', className: 'bg-info-transparent' },
    ],
    images: [
      "../../assets/images/faces/6.jpg",
      "../../assets/images/faces/3.jpg",
    ],
    Color: 'info',
    Class: 'info',
  },
  {
    Title: "Home Page Design",
    badges: [
      { text: 'Framework', className: 'bg-secondary-transparent' },
      { text: 'Angular', className: 'bg-warning-transparent' },
      { text: 'Php', className: 'bg-info-transparent' },
    ],
    images: [
      "../../assets/images/faces/11.jpg",
      "../../assets/images/faces/10.jpg",
      "../../assets/images/faces/8.jpg",
    ],
    Color: 'secondary',
    Class: 'secondary'
  },
  {
    Title: "Landing Page Design",
    badges: [
      { text: 'Laravel', className: 'bg-danger-transparent' },
      { text: 'Codeignitor', className: 'bg-teal-transparent' },
      { text: 'Php', className: 'bg-success-transparent' },
    ],
    images: [
      "../../assets/images/faces/4.jpg",
      "../../assets/images/faces/6.jpg",
    ],
    Color: 'secondary',
    Class: 'secondary',
  },
  {
    Title: "Update New Project",
    badges: [
      { text: 'Html', className: 'bg-warning-transparent' },
      { text: 'Bootstrap', className: 'bg-secondary-transparent' },
      { text: 'React', className: 'bg-info-transparent' },
    ],
    images: [
      "../../assets/images/faces/1.jpg",
      "../../assets/images/faces/12.jpg",
      "../../assets/images/faces/10.jpg",
      "../../assets/images/faces/16.jpg",
    ],
    Color: 'warning',
    Class: 'warning',
  },
  {
    Title: "New Project Discussion",
    badges: [
      { text: 'React', className: 'bg-info-transparent' },
      { text: 'Typescript', className: 'bg-primary-transparent' },
    ],
    images: [
      "../../assets/images/faces/3.jpg",
      "../../assets/images/faces/14.jpg",
      "../../assets/images/faces/11.jpg",
    ],
    Color: 'info',
    Class: 'info',
  },
  {
    Title: "Recent Projects Testing",
    badges: [
      { text: 'Ui', className: 'bg-primary-transparent' },
      { text: 'Angular', className: 'bg-secondary-transparent' },
      { text: 'Java', className: 'bg-info-transparent' },
    ],
    images: [
      "../../assets/images/faces/15.jpg",
    ],
    Color: 'danger',
    Class: 'danger',
  },
  {
    Title: "About Us Page redesign",
    badges: [
      { text: 'Html', className: 'bg-danger-transparent' },
      { text: 'Symphony', className: 'bg-warning-transparent' },
      { text: 'Php', className: 'bg-success-transparent' },
    ],
    images: [
      "../../assets/images/faces/6.jpg",
      "../../assets/images/faces/9.jpg",
    ],
    Color: 'success',
    Class: 'success',
  },
  {
    Title: "New Employees",
    badges: [
      { text: 'Html', className: 'bg-warning-transparent' },
      { text: 'Cake Php', className: 'bg-info-transparent' },
      { text: 'React', className: 'bg-success-transparent' },
    ],
    images: [
      "../../assets/images/faces/5.jpg",
      "../../assets/images/faces/6.jpg",
      "../../assets/images/faces/7.jpg",
    ],
    Color: 'light',
    Class: 'default ',
  },
  {
    Title: "Terminated Employees",
    badges: [
      { text: 'Angular', className: 'bg-primary-transparent' },
    ],
    images: [
      "../../assets/images/faces/9.jpg",
      "../../assets/images/faces/11.jpg",
      "../../assets/images/faces/12.jpg",
      "../../assets/images/faces/15.jpg",
    ],
    Color: 'dark',
    Class: 'dark'
  }
]