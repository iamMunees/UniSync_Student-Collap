import React from 'react'
import ResourcesNav from '../components/ResourcesNav';
import FashionList from '../utils/fashion';

const Fashion = () => {
  return (
     <div>
      <ResourcesNav />
      <h1 className='flex justify-center text-3xl font-bold'>Fashion</h1>
      <div className="bg-[#f5f9ff] py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FashionList.map((brand, index) => (
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

  )
}

export default Fashion;