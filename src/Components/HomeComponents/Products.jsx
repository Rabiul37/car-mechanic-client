import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-xl font-bold text-[#FF3811]">Popular Products</h1>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p className="text-base font-normal text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
