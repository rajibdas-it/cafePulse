/* eslint-disable react/prop-types */

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
const ReviewCard = (props) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
      <div className="flex flex-row items-center justify-center lg:justify-start">
        <div className="w-1/4">
          <img className="rounded-full" src={props.img} alt="img" />
        </div>

        <div className="mx-3">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="flex">
            <BsStarFill size={25} className="text-brightColor" />
            <BsStarFill size={25} className="text-brightColor" />
            <BsStarFill size={25} className="text-brightColor" />
            <BsStarFill size={25} className="text-brightColor" />
            <BsStarHalf size={25} className="text-brightColor" />
          </div>
        </div>
        <span className="ml-16">
          <FaQuoteRight size={42} className="text-brightColor" />
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
        odit vitae tempora itaque consequuntur possimus a. Necessitatibus, qui
        sequi.
      </p>
    </div>
  );
};

export default ReviewCard;
