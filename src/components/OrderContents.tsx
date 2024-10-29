import { formatCurrency } from "../helpers/helpers";
import { MenuItemT, OrderItemT } from "../types/types";

type OrderContentsPropsT = {
  order: OrderItemT[];
  removeItem: (id: MenuItemT["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsPropsT) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
