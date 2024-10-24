import React from 'react';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <div className="bg-gray-950 shadow p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Sidebar />
      <h1 className="ml-10 text-xl px-4 text-white font-bold">Social Media Dashboard</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
};

export default Header;
