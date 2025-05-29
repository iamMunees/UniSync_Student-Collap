import React from 'react'
import { Link } from "react-router-dom";

const ResourcesNav = () => {
  return (
    <div>
        
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-4 overflow-x-auto whitespace-nowrap">
              
               <Link
                to="/resources/home"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/resources/all"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                All
              </Link>
              <Link
                to="/resources/courses"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Learning & Wellbeing
              </Link>
              <Link
                to="/resources/fashion"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Fashion
              </Link>
              <Link
                to="/resources/entertainment"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Entertainment & Lifestyle
              </Link>
              <Link
                to="/resources/technology"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Technology
              </Link>
              <Link
                to="/resources/personalcare"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Personal Care
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ResourcesNav;