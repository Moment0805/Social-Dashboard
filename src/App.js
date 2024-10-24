import React from 'react';
import Layout from './layout';
import DashboardProvider from './components/DashboardContext';

function App() {
  return (
    <DashboardProvider>
      <Layout />
    </DashboardProvider>
  );
}

export default App;