import { useState } from "react";
import type { MenuItemT, OrderItemT } from "../types/types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItemT[]>([]);
    
    const addItem = (item: MenuItemT) => {
        console.log(item);
    }

    return {
        addItem
    }

}