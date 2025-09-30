export interface CategoryType {
    id: number;
    name: string;
    items: number;
    image: string;
    filter: string;
    active?: boolean;
}
export const categories: CategoryType[] = [
    { id: 1, name: "All Menu", items: 43, image: "../../assets/images/pos-system/1.png", filter: "*", active: true, },
    { id: 2, name: "Pizza", items: 80, image: "../../assets/images/pos-system/2.png", filter: ".Pizza", },
    { id: 3, name: "Burger", items: 36, image: "../../assets/images/pos-system/3.png", filter: ".burger", },
    { id: 4, name: "Waffle", items: 25, image: "../../assets/images/pos-system/4.png", filter: ".Waffle", },
    { id: 5, name: "Ice Cream", items: 58, image: "../../assets/images/pos-system/5.png", filter: ".IceCream", },
    { id: 6, name: "Coffee", items: 38, image: "../../assets/images/pos-system/6.png", filter: ".Coffee", },
    { id: 7, name: "CupCakes", items: 38, image: "../../assets/images/pos-system/7.png", filter: ".CupCakes", },
];

export interface ItemsListType {
    id: number;
    name: string;
    category: string;
    subcategory: string;
    image: string;
    price: string;
    inStock: boolean;
}
export const ItemsList: ItemsListType[] = [
    { id: 1, name: "Classic Cheeseburger", category: "burger", subcategory: "Classic Burgers", image: "../../assets/images/pos-system/9.jpg", price: "$78.99", inStock: true, },
    { id: 2, name: "Coconut Almond Fudge", category: "Icecream", subcategory: "Specialty Flavors", image: "../../assets/images/pos-system/18.jpg", price: "$29.99", inStock: false, },
    { id: 3, name: "Cappuccino", category: "Coffee", subcategory: "Espresso Beverages", image: "../../assets/images/pos-system/17.jpg", price: "$7.99", inStock: false, },
    { id: 4, name: "Frosting Choices", category: "CupCakes", subcategory: "Cupcake Creations", image: "../../assets/images/pos-system/11.jpg", price: "$19.99", inStock: true, },
    { id: 5, name: "Nutella Cupcake", category: "CupCakes", subcategory: "Specialty Cupcakes", image: "../../assets/images/pos-system/12.jpg", price: "$123.99", inStock: true, },
    { id: 6, name: "Mediterranean", category: "Pizza", subcategory: "Specialty Pizzas", image: "../../assets/images/pos-system/16.jpg", price: "$2.79", inStock: true, },
    { id: 7, name: "Cold Brew Concentrate", category: "Coffee", subcategory: "Cold Brews", image: "../../assets/images/pos-system/14.jpg", price: "$1.29", inStock: true, },
    { id: 8, name: "Blue Cheese Burger", category: "burger", subcategory: "Gourmet Burgers", image: "../../assets/images/pos-system/15.jpg", price: "$24.99", inStock: true, },
    { id: 9, name: "Apple Cinnamon Waffle", category: "Waffle", subcategory: "Specialty Waffles", image: "../../assets/images/pos-system/19.jpg", price: "$24.99", inStock: true, },
    { id: 10, name: "Pesto Delight", category: "Pizza", subcategory: "Specialty Pizzas", image: "../../assets/images/pos-system/10.jpg", price: "$24.99", inStock: true, },
    { id: 11, name: "Cookie Dough Sundae", category: "IceCream", subcategory: "Sundae Creations", image: "../../assets/images/pos-system/8.jpg", price: "$24.99", inStock: true, },
    { id: 12, name: "Americano", category: "Coffee", subcategory: "Espresso Beverages", image: "../../assets/images/pos-system/13.jpg", price: "$24.99", inStock: true, },
];
interface CartItem {
    id: number;
    name: string;
    category: string;
    image: string;
}
export const CartItems: CartItem[] = [
    { id: 1, name: "Cappuccino", category: "Coffee", image: "../../assets/images/pos-system/17.jpg", },
    { id: 2, name: "Frosting", category: "Cupcakes", image: "../../assets/images/pos-system/11.jpg", },
    { id: 3, name: "Cheeseburger", category: "Burger", image: "../../assets/images/pos-system/9.jpg", },
    { id: 4, name: "Cheese Pizza", category: "Pizza", image: "../../assets/images/pos-system/16.jpg", },
    { id: 5, name: "Normal Pizza", category: "Pizza", image: "../../assets/images/pos-system/10.jpg", },
];