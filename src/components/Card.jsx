import React, { useContext } from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { datacontext } from "../context/UserContext";

const Card = ({ name, image, id, price, type }) => {
  const { addToCart } = useContext(datacontext);

  return (
    <div className="w-[280px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-orange-500">₹{price}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-green-600">
            {type === "veg" ? (
              <LuLeafyGreen size={20} />
            ) : (
              <GiChickenOven size={20} />
            )}

            <span className="font-medium">{type}</span>
          </div>

          <span className="text-sm text-gray-500">⏱ 20 mins</span>
        </div>

        <button
          onClick={() =>
            addToCart({
              id,
              name,
              image,
              price,
              type,
            })
          }
          className="mt-2 w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
