import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();

  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null);
    navigate('/');
  };

  return (
    <>
    <div className='flex items-center justify-between py-4 h-[80px] px-4 sm:px-12 border-b border-gray-200 bg-white shadow-sm'>
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
        <img src="/fvc.svg" alt="logo" className='w-10 h-10' />
        <div>
          <h1 className="text-xl font-bold text-gray-800">Quick Medi</h1>
          <p className="text-sm text-gray-500">Management System</p>
        </div>
      </div>
      <button 
        onClick={logout}
        className='flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer transition-colors duration-200 shadow-sm'
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </button>
    </div>
    <div className='flex h-[calc(100vh-80px)]'>
      <Sidebar/>
      <div className="flex-1 bg-gray-50">
        <Outlet/>
      </div>
    </div>
    </>
  );
};

export default Layout;
