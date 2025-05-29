import React from "react";
import discountCards from "../utils/resources.js";

const DiscountCardGrid = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-3xl font-bold py-6 text-center">All Resources</h1>
      <p className="text-sm sm:text-lg text-gray-700 px-4 sm:px-10 text-center max-w-4xl mx-auto">
        Being a student just got better! At UniSync, we connect you with the coolest discounts on the stuff you already love – 
        from online learning platforms like Udemy and Coursera to style, food, and electronics. No hidden costs, no complicated process. 
        Just flash your student ID, and boom – you're saving big while staying smart.
      </p>

      <div className="bg-[#f5f9ff] py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {discountCards.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 object-contain mb-4"
              />
              <p className="text-sm font-medium text-gray-700 mb-3">{brand.name}</p>

              <p className="text-sm font-medium text-gray-700 mb-3">{brand.offer}</p>

              {brand.actions?.map((action, btnIndex) => (
                <a
                  key={btnIndex}
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
                >
                  <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
                    {action.label}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountCardGrid;
