import ProductCard from "../layouts/ProductCard";

import img from "../assets/img/product1.jpg";
import img1 from "../assets/img/product2.jpg";
import img2 from "../assets/img/product3.jpg";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brightColor px-5 lg:px-32">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-14 mt-024 mb-8">
        Our Products
      </h1>
      <div>
        <ProductCard img={img} title="Nespresso" />
        <ProductCard img={img1} title="Nespresso" />
        <ProductCard img={img2} title="Nespresso" />
      </div>
    </div>
  );
};

export default Product;
