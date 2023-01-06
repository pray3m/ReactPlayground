import React from "react";
import Product from "./Product";
import { PRODUCTS } from "../../products";

const Shop = () => {
  return (
    <div>
      <h1 className="text-center mt-5 text-3xl font-bold">Premiums Best Sellers</h1>
      <div className="w-[100%] h-[auto] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
