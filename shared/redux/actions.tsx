import { Dispatch } from "@reduxjs/toolkit";
import { ProductProps } from "../data/apps/ecommerce/reduxdata";

// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';

// Theme type
type Theme = 'light' | 'dark' | string;

// Interfaces
interface ThemeChangerAction {
    type: 'ThemeChanger';
    payload: Theme;
}

interface SetSelectedItemAction {
    type: "SET_SELECTED_ITEM";
    payload: ProductProps;
}

interface WishlistAction {
    type: "ADD_TO_WISHLIST" | "REMOVE_FROM_WISHLIST";
    payload: ProductProps | string | number;
}

interface CartAction {
    type: typeof ADD_TO_CART | typeof REMOVE_FROM_CART | typeof UPDATE_CART_QUANTITY;
    payload: ProductProps | string | number | { id: string | number; quantity: number };
}

interface CheckoutAction {
    type: 'ADD_TO_CHECKOUT' | 'Buynow_checkout';
    payload: ProductProps | ProductProps[];
    actionType: string;
}

// Action Creators
export const ThemeChanger = (value: Theme) => async (dispatch: Dispatch<ThemeChangerAction>) => {
    dispatch({
        type: 'ThemeChanger',
        payload: value
    });
};

export const setSelectedItem = (item: ProductProps): SetSelectedItemAction => ({
    type: "SET_SELECTED_ITEM",
    payload: item
});

export const addToWishlist = (item: Omit<ProductProps, 'id'>, id: string | number): WishlistAction => ({
    type: "ADD_TO_WISHLIST",
    payload: { ...item, id }
});

export const removeFromWishlist = (id: string | number): WishlistAction => ({
    type: "REMOVE_FROM_WISHLIST",
    payload: id
});

export const addToCart = (item: ProductProps): CartAction => ({
    type: ADD_TO_CART,
    payload: item
});

export const addToCheckout = (items: ProductProps[]): CheckoutAction => ({
    type: 'ADD_TO_CHECKOUT',
    payload: items,
    actionType: 'shoppingCartCheckOut'
});

export const buynow = (item: ProductProps): CheckoutAction => ({
    type: 'Buynow_checkout',
    payload: item,
    actionType: 'shopDetailsBuyNow'
});

export const removeFromCart = (id: string | number): CartAction => ({
    type: REMOVE_FROM_CART,
    payload: id
});

export const updateCartQuantity = (id: string | number, quantity: number): CartAction => ({
    type: UPDATE_CART_QUANTITY,
    payload: { id, quantity }
});
