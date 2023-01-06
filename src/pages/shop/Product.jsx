import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="rounded-[15px] m-12 flex flex-col items-center transition-all duration-150 hover:scale-105 cursor-pointer hover:ease-in">
      <img src={productImage} className="w-[300px]" />
      <div className="text-center m-2">
        <h2 className="font-bold">{productName}</h2>
        <span className="font-semibold">${price}</span>
      </div>
      <div>
        <button
          className="text-gray-800 outline rounded-lg px-3 py-2 hover:bg-gray-800 hover:text-white hover:outline-none m-3"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add To Cart {" "}
          {cartItemAmount > 0 && (
            <span className="bg-blue-600 font-semibold px-2 py-1 text-white rounded-md">
              {cartItemAmount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
