import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <div className="fixed top-4 left-4 pt-1  z-50">
        <button onClick={toggleSidebar} className="text-white text-3xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />} 
          </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-60 bg-gray-800 text-white w-64 p-6 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
        <ul className="flex flex-col items-center space-y-6">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/" className="hover:text-gray-400">Users</a></li>
          <li><a href="/" className="hover:text-gray-400">Posts</a></li>
        </ul>
      </div>

     
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar} >

          </div>
      )}
    </>
  );
};

export default Sidebar;
