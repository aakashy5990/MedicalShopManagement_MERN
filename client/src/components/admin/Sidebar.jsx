import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return(
  <div className="w-64 bg-white border-r border-gray-200 h-full">
    {/* Navigation Links */}
    <div className="py-4">
      <NavLink 
        end={true} 
        to='/admin' 
        className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-6 cursor-pointer transition-all duration-200 rounded-r-lg mx-2 ${isActive 
          ? "bg-brand/10 border-r-4 border-brand text-brand shadow-sm" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
        }`}
      >
        {({ isActive }) => (
          <>
            <svg className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-brand" : "text-gray-500 group-hover:text-gray-700"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
            </svg>
            <p className='text-sm font-medium'>Dashboard</p>
          </>
        )}
      </NavLink>

      <NavLink 
        to='/admin/dealer' 
        className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-6 cursor-pointer transition-all duration-200 rounded-r-lg mx-2 ${isActive 
          ? "bg-brand/10 border-r-4 border-brand text-brand shadow-sm" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
        }`}
      >
        {({ isActive }) => (
          <>
            <svg className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-brand" : "text-gray-500 group-hover:text-gray-700"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p className='text-sm font-medium'>Dealer</p>
          </>
        )}
      </NavLink>

      <NavLink 
        to='/admin/medicine' 
        className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-6 cursor-pointer transition-all duration-200 rounded-r-lg mx-2 ${isActive 
          ? "bg-brand/10 border-r-4 border-brand text-brand shadow-sm" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
        }`}
      >
        {({ isActive }) => (
          <>
            <svg className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-brand" : "text-gray-500 group-hover:text-gray-700"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <p className='text-sm font-medium'>Medicine</p>
          </>
        )}
      </NavLink>

      <NavLink 
        to='/admin/employee' 
        className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-6 cursor-pointer transition-all duration-200 rounded-r-lg mx-2 ${isActive 
          ? "bg-brand/10 border-r-4 border-brand text-brand shadow-sm" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
        }`}
      >
        {({ isActive }) => (
          <>
            <svg className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-brand" : "text-gray-500 group-hover:text-gray-700"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <p className='text-sm font-medium'>Employee</p>
          </>
        )}
      </NavLink>
      
      <NavLink 
        to='/admin/customer' 
        className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-6 cursor-pointer transition-all duration-200 rounded-r-lg mx-2 ${isActive 
          ? "bg-brand/10 border-r-4 border-brand text-brand shadow-sm" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
        }`}
      >
        {({ isActive }) => (
          <>
            <svg className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-brand" : "text-gray-500 group-hover:text-gray-700"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p className='text-sm font-medium'>Customer</p>
          </>
        )}
      </NavLink>
      
      <NavLink 
        to='/admin/purchase' 
        className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-6 cursor-pointer transition-all duration-200 rounded-r-lg mx-2 ${isActive 
          ? "bg-brand/10 border-r-4 border-brand text-brand shadow-sm" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
        }`}
      >
        {({ isActive }) => (
          <>
            <svg className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-brand" : "text-gray-500 group-hover:text-gray-700"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p className='text-sm font-medium'>Purchase</p>
          </>
        )}
      </NavLink>
    </div>
  </div>
  )
};

export default Sidebar;