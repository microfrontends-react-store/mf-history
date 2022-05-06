import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard/ProductCard";

export const ProductsHistory = () => {
  const [products, setProdutcs] = useState([]);

  useEffect(() => {
    const history = window.localStorage.getItem("productsHistory");
    if (history) {
      setProdutcs(JSON.parse(history));
    }
  }, []);

  return (
    <section className="container mt-5">
      <h1 className="display-5">Otros productos que puedes añadir a tu carrito</h1>
      <div className="row row-cols-auto">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
