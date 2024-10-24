import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [metrics, setMetrics] = useState({
    totalUsers: 1200,
    activeUsers: 900,
    posts: 150,
    likes: 340,
  });

  return (
    <DashboardContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;