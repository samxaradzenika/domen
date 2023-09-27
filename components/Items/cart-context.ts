"use client";
import React from "react";

interface CartContextData {
  items: any[]; // Change 'any' to the actual type of your items
  totalAmount: number;
  addItem: (item: any) => void; // Change 'any' to the actual type of your item
  removeItem: (id: string) => void; // Change 'string' to the actual type of your id
}

const CartContext = React.createContext<CartContextData>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
