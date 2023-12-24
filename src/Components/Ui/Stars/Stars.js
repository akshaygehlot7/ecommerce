import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const Stars = ({stars, reviews}) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
  return (
    <span key={index}>
      {stars >= index + 1 ? (
        <FaStar className="fill-yellow-200" />
      ) : stars >= number ? (
        <FaStarHalfAlt className="fill-yellow-200" />
      ) : (
        <AiOutlineStar className="icon" />
      )}
    </span>
  );
});

return(
    <div className="flex text-center items-center">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
    </div>
)
}

export default Stars