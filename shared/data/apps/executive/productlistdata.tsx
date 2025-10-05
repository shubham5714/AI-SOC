export interface dataType {
  id: number;
  imageSrc: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  stock: number;
  status: string;
  author: string;
  authorImage: string;
  createdAt: string;
};

export const ProductList: dataType[] = [
  {
    id: 1,
    imageSrc: '../../../assets/images/ecommerce/png/6.png',
    name: "Men's Casual Shoes",
    brand: 'Nike',
    category: 'Footwear',
    price: '$149',
    stock: 283,
    status: 'Published',
    author: 'Mayor Kelly',
    authorImage: '../../../assets/images/faces/4.jpg',
    createdAt: '24,Nov 2025 - 04:42PM',
  },
  {
    id: 2,
    imageSrc: '../../../assets/images/ecommerce/png/7.png',
    name: 'Wireless Headphones',
    brand: 'Sony',
    category: 'Electronics',
    price: '$99',
    stock: 98,
    status: 'Unpublished',
    author: 'Andrew Garfield',
    authorImage: '../../../assets/images/faces/15.jpg',
    createdAt: '18,Nov 2025 - 06:53AM',
  },
  {
    id: 3,
    imageSrc: '../../../assets/images/ecommerce/png/8.png',
    name: "Ladies' Handbag",
    brand: 'Gucci',
    category: 'Accessories',
    price: '$79',
    stock: 194,
    status: 'Published',
    author: 'Simon Cowel',
    authorImage: '../../../assets/images/faces/11.jpg',
    createdAt: '12,Aug 2025 - 11:21AM',
  },
  {
    id: 4,
    imageSrc: "../../../assets/images/ecommerce/png/9.png",
    name: "Smartphone",
    brand: "Samsung",
    category: "Electronics	",
    price: "$899",
    stock: 267,
    status: "Unpublished",
    author: "Mirinda Hers",
    authorImage: "../../../assets/images/faces/8.jpg",
    createdAt: "05,Sep 2023 - 10:14AM"
  },
  {
    id: 5,
    imageSrc: "../../../assets/images/ecommerce/png/10.png",
    name: "Smartwatch",
    brand: "Apple",
    category: "Electronics",
    price: "$199",
    stock: 143,
    status: "Published",
    author: "Simon Cowel",
    authorImage: "../../../assets/images/faces/1.jpg",
    createdAt: "18,Nov 2023 - 14:35PM"
  },
  {
    id: 6,
    imageSrc: "../../../assets/images/ecommerce/png/11.png",
    name: "Gaming Mouse",
    brand: "Logitech",
    category: "Electronics",
    price: "$49",
    stock: 365,
    status: "Published",
    author: "Mirinda Hers",
    authorImage: "../../../assets/images/faces/2.jpg",
    createdAt: "27,Nov 2023 - 05:12AM"
  },
  {
    id: 7,
    imageSrc: "../../../assets/images/ecommerce/png/12.png",
    name: "DSLR Camera",
    brand: "Canon",
    category: "Electronics",
    price: "$999",
    stock: 257,
    status: "Unpublished",
    author: "Jhon Trendy",
    authorImage: "../../../assets/images/faces/9.jpg",
    createdAt: "29,Nov 2023 - 16:32PM"
  },
  // Add more products as needed
];
