import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex  items-center m-4 sm:w-[450px] p-5 shadow-md shadow-gray-400 rounded-md">
      <img src={productImage} width="140" />
      <div>
        <h2 className="font-bold text-xl">{productName}</h2>
        <h3 className="font-semibold text-lg">${price}</h3>
        <div>
          <button
            className="bg-blue-600 font-semibold px-3 text-white rounded-md"
            onClick={() => addToCart(id)}
          >
            +
          </button>
          <input
            className="w-[30px] text-center font-semibold"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="bg-red-600 font-semibold px-3 text-white rounded-md"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
