/* eslint-disable react/prop-types */

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "./Button";

const ProductCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg ">
      <img className="rounded-lg" src={props.img} alt="" />
      <div className="flex flex-col items-center mt-5 gap-3">
        <h2 className="font-semibold text-xl">{props.title}</h2>
        <div className="flex flex-row gap-2">
          <BsStarFill size={25} className="text-brightColor" />
          <BsStarFill size={25} className="text-brightColor" />
          <BsStarFill size={25} className="text-brightColor" />
          <BsStarFill size={25} className="text-brightColor" />
          <BsStarHalf size={25} className="text-brightColor" />
        </div>
        <h3 className="font-semibold text-xl">$15.99</h3>
        <Button title="ADD TO CART" />
      </div>
    </div>
  );
};

export default ProductCard;
