import { useState } from "react";
import type { MenuItemT, OrderItemT } from "../types/types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItemT[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItemT) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItemT["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  }

  return {
    order, // This will contain all the items in the order
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}
