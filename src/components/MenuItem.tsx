import { MenuItemT } from "../types/types"

type MenuItemPropsT = {
    item: MenuItemT,
    addItem:(item: MenuItemT) => void
}

export default function MenuItem({item, addItem} : MenuItemPropsT) {
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
