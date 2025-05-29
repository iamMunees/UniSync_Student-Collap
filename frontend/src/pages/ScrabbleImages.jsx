import React from "react";
import img1 from '../../public/resources/resources1.jpeg'
import img2 from '../../public/resources/resources2.jpeg'
import img3 from '../../public/resources/resources3.jpeg'
import img4 from '../../public/resources/resources4.jpeg'
import img5 from '../../public/resources/resources5.jpeg'
import img6 from '../../public/resources/resources6.jpeg'
import img7 from '../../public/resources/resources7.jpeg'
import img8 from '../../public/resources/resources8.jpeg'
import img9 from '../../public/resources/resources9.jpeg'
import img10 from '../../public/resources/resources10.jpeg'
import img11 from '../../public/resources/resources11.jpeg'
import img12 from '../../public/resources/resources12.jpeg'
import img13 from '../../public/resources/resources13.jpeg'
import img14 from '../../public/resources/resources14.jpeg'
import img15 from '../../public/resources/resources15.jpeg'
import img16 from '../../public/resources/resources16.jpeg'
import img17 from '../../public/resources/resources17.jpeg'
import img18 from '../../public/resources/resources18.jpeg'
import img19 from '../../public/resources/resources19.jpeg'
const brandLogos = [
  { name: "Coursera", logo: img1 },
  { name: "Udemy", logo: img2 },
  { name: "Samsung", logo: img3 },
  { name: "Meesho", logo: img4  },
  { name: "Amazon", logo: img5 },
  { name: "Flipkart", logo: img6 },
  { name: "Spotify", logo:  img7},
  { name: "Coursera", logo: img8 },
  { name: "Udemy", logo: img9 },
  { name: "Samsung", logo: img10 },
  { name: "Coursera", logo: img11 },
  { name: "Udemy", logo: img12 },
  { name: "Samsung", logo: img13 },
  { name: "Meesho", logo: img14  },
  { name: "Amazon", logo: img15 },
  { name: "Flipkart", logo: img16 },
  { name: "Spotify", logo:  img17},
  { name: "Coursera", logo: img18 },
  { name: "Udemy", logo: img19 },
];

const BrandLogoScroller = () => {
  return (
    <div className="w-full overflow-x-auto py-6 bg-gray-50">
      <div className="flex gap-6 animate-scroll whitespace-nowrap px-4">
        {brandLogos.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 h-28 bg-white shadow-md rounded-xl border border-gray-200 flex items-center justify-center p-3 hover:scale-105 transition-transform"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-16 max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogoScroller;
