import Link from "next/link";
import { JSX } from "react/jsx-runtime";


// Define a type for the product
type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  imageUrl: string;
  sku: string;
  price: string;
  quantity: number;
  totalPrice: string;
  offer?: string; // Optional property for any offers (e.g., "20% Off")
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "Sony",
    imageUrl: "../../../assets/images/ecommerce/png/7.png",
    sku: "SPK1218153635",
    price: "$99",
    quantity: 1,
    totalPrice: "$99",
  },
  {
    id: 2,
    name: "Ladies' Handbag",
    category: "Accessories",
    brand: "Gucci",
    imageUrl: "../../../assets/images/ecommerce/png/8.png",
    sku: "SPK3789423789",
    price: "$79",
    quantity: 2,
    totalPrice: "$158",
    offer: "In Offer", // Offer available for this product
  },
  {
    id: 3,
    name: "Smartwatch",
    category: "Electronics",
    brand: "Apple",
    imageUrl: "../../../assets/images/ecommerce/png/10.png",
    sku: "SPK1120324532",
    price: "$199",
    quantity: 1,
    totalPrice: "$199",
    offer: "20% Off", // Offer available for this product
  },
  {
    id: 4,
    name: "Gaming Mouse",
    category: "Electronics",
    brand: "Logitech",
    imageUrl: "../../../assets/images/ecommerce/png/11.png",
    sku: "SPK1218153635",
    price: "$49",
    quantity: 1,
    totalPrice: "$49",
  },
  {
    id: 5,
    name: "DSLR Camera",
    category: "Electronics",
    brand: "Canon",
    imageUrl: "../../../assets/images/ecommerce/png/12.png",
    sku: "SPK3789423789",
    price: "$999",
    quantity: 2,
    totalPrice: "$1,998",
    offer: "In Offer", // Offer available for this product
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Electronics",
    brand: "JBL",
    imageUrl: "../../../assets/images/ecommerce/png/13.png",
    sku: "SPK1120324532",
    price: "$149",
    quantity: 1,
    totalPrice: "$149",
    offer: "25% Off", // Offer available for this product
  },
];

interface SummaryItem {
  label: string;
  value: string | JSX.Element; // Can be a string or JSX (like a badge)
}

// Define the data for each row
export const summaryData: SummaryItem[] = [
  { label: 'Total Items :', value: '06' },
  { label: 'Applied Coupon :', value: <span className="badge bg-success-transparent">SP0578A</span> },
  { label: 'Delivery Fees :', value: <span className="text-danger">+$29</span> },
  { label: 'Sub Total :', value: <span className="fs-14 fw-medium">$3,799</span> },
  { label: 'Total Price :', value: <span className="fs-20 fw-medium">$3,129</span> },
];
export const Accordion1 = [
  {
    id: '0', // Unique ID for the accordion item
    title: (

      <Link scroll={false} className="px-0 pt-0" href="#!" role="button" data-bs-toggle="collapse" data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
        <div className="d-flex align-items-center mb-0 lh-1">
          <div className="me-2 p-1 border border-primary border-opacity-25 rounded-pill">
            <span className="avatar avatar-sm avatar-rounded p-2 bg-primary">
              <i className="ri-shopping-cart-2-line fs-16"></i>
            </span>
          </div>
          <div className="flex-fill">
            <p className="fw-semibold mb-0 fs-15 mb-0">Order Placed</p>
          </div>
        </div>
      </Link>
    ),
    content: (
      <>
        <p className="mb-0">Order placed successfully by <Link href="#!" scroll={false} className="font-weight-semibold text-primary">Sansa Taylor</Link></p>
        <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
      </>
    ),
    itemClass: "border-0 bg-transparent",
    bodyClass: "pt-0 ps-5"
  },
  // You can add more items here if needed
]

export const Accordion2 = [
  {
    id: '0',
    title: (
      <a className="px-0 pt-0" href="#!" role="button" data-bs-toggle="collapse" data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
        <div className="d-flex align-items-center mb-0 lh-1">
          <div className="me-2 p-1 border border-success border-opacity-25 rounded-pill">
            <span className="avatar avatar-sm avatar-rounded p-2 bg-success">
              <i className="ri-check-double-line fs-16"></i>
            </span>
          </div>
          <div className="flex-fill">
            <p className="fw-semibold mb-0 fs-15">Picked</p>
          </div>
        </div>
      </a>
    ),
    content: (
      <div className="">
        <p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
        <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
      </div>
    ),
    itemClass: "accordion-item-class-0 border-0 mb-2",
    bodyClass: "pt-0 ps-5"
  },

]

export const Accordion3 = [
  {
    id: '0',
    title: (
      <a className="px-0 pt-0" href="#!" role="button" data-bs-toggle="collapse" data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree">
        <div className="d-flex align-items-center  lh-1">
          <div className="me-2 p-1 border border-info border-opacity-25 rounded-pill">
            <span className="avatar avatar-sm avatar-rounded p-2 bg-info">
              <i className="ri-caravan-line fs-16"></i>
            </span>
          </div>
          <div className="flex-fill">
            <p className="fw-semibold mb-0 fs-15">Shipping</p>
          </div>
        </div>
      </a>
    ),
    content: (
      <div className="">
        <div className=" mb-3">
          <p className="mb-0">Arrived USA <span className="font-weight-semibold">SGS Warehouse</span></p>
          <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
        </div>
        <div className=" mb-3">
          <p className="mb-0">picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
          <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
        </div>
      </div>
    ),
    itemClass: "accordion-item-class-0 border-0 mb-0",
    bodyClass: "pt-0 ps-5"
  },

]

export const Accordion4 = [
  {
    title: (
      <a className="px-0 pt-0 collapsed" href="#!" role="button" data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="false" aria-controls="basicFour">
        <div className="d-flex mb-0 lh-1">
          <div className="me-2 p-1 border border-secondary border-opacity-25 rounded-pill">
            <span className="avatar avatar-sm avatar-rounded bg-secondary border"><i className="ri-box-3-line fs-16"></i></span>
          </div>
          <div className="flex-fill">
            <p className="fw-semibold mb-2 fs-15">Out For Delivery</p>
            <span className="text-muted fs-12">Nov 03, 15:10 (expected)</span>
          </div>
        </div>
      </a>
    ),
    content: (
      <div className="mt-2">
        <p className="mb-2">Your order is out for devlivery</p>
        <span className="text-muted fs-12">Nov 03, 2024, 15:36 (expected)</span>
      </div>
    ),
    itemClass: "accordion-item-class-0 border-0 mb-3",
    bodyClass: "pt-0 ps-5"
  },

]

export const Accordion5 = [
  {
    title: (
      <a className="collapsed px-0 pt-0" href="#!" role="button" data-bs-toggle="collapse" aria-expanded="true">
        <div className="d-flex mb-2 lh-1">
          <div className="me-2 p-1 border border-warning border-opacity-25 rounded-pill">
            <span className="avatar avatar-sm avatar-rounded bg-warning border"><i className="ri-box-3-line fs-16"></i></span>
          </div>
          <div className="flex-fill">
            <p className="fw-semibold mb-2 fs-15">Delivered</p>
            <span className="fs-12 text-muted">Nov 03, 18:42</span>
          </div>
        </div>
      </a>
    ),
    itemClass: "border-0 bg-transparent next-step",
  },

]
