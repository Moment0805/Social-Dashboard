import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

const Layout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen background bg-gradient-to-r from-slate-800 via-slate-900 to-gray-800">
      <div className="flex flex-col w-full">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;