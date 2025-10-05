import SpkProducts from "@/shared/@spk-reusable-components/reusable-apps/spk-products";
import { Ecommerceproducts } from "./reduxdata";
import SpkProductDetails from "@/shared/@spk-reusable-components/reusable-apps/spk-product-details";

export const RelatedSwiper = Ecommerceproducts.map((idx) => (
	<SpkProducts card={idx} />
));

export interface ReviewsType {
	id: number,
	name: string,
	reviewDate: string,
	reviewText: string,
	images: string[]
}


const reviews: ReviewsType[] = [
	{
		id: 1,
		name: 'Simon Cowall',
		reviewDate: '24 Nov, 2024',
		reviewText: 'unmatched stability, and the AeroVent Breathability kept my feet cool even during intense workouts. A must-have for anyone serious about comfort.',
		images: ['../../../assets/images/ecommerce/png/2.png', '../../../assets/images/ecommerce/png/4.png'],
	},
	{
		id: 2,
		name: 'Meisha Kerr',
		reviewDate: '31 Nov, 2024',
		reviewText: 'The ShockShield technology is a game-changer for my daily runs. The FlexiFit Customization is a nice touch, ensuring a snug fit. Plus, the Galactic Blue Nebula color is an attention-grabber.',
		images: ['../../../assets/images/ecommerce/png/4.png', '../../../assets/images/ecommerce/png/1.png'],
	},
	// Add more reviews here as needed
];

export const RatingsSwiper = reviews.map((idx) => (
	<SpkProductDetails card={idx} />
));
export const Slides = [
	{ src: "../../../assets/images/ecommerce/png/3.png" },
	{ src: "../../../assets/images/ecommerce/png/2.png" },
	{ src: "../../../assets/images/ecommerce/png/1.png" },
	{ src: "../../../assets/images/ecommerce/png/4.png" },
]