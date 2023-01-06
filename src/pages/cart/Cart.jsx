import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContextProvider";
import { useContext } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center mt-5 text-3xl font-bold">Your Cart Items</h1>
      <div className="grid place-items-center">
        <div>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="text-center m-3">
            <h3 className="text-2xl m-3">
              Total Amount : <span className="font-bold">$ {totalAmount} </span>{" "}
            </h3>
            <button
              className="text-white rounded-lg px-3 py-2 bg-gray-800 m-3 hover:bg-black"
              onClick={() => navigate("/")}
            >
              Continue Shopping{" "}
            </button>
            <button className=" hover:bg-black rounded-lg px-3 py-2 bg-gray-800 text-white  m-3">
              Checkout
            </button>
          </div>
        ) : (
          <div className="grid place-items-center text-center m-10 p-[40px]">
            <h1 className="text-5xl font-semibold text-red-800 m-4">
              Your Cart is Empty!
            </h1>
            <button
              className="text-white rounded-lg px-3 py-2 bg-gray-800 m-3 hover:bg-black"
              onClick={() => navigate("/")}
            >
              Continue Shopping{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
