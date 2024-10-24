import React from 'react';
import UserMetrics from './UserMetrics';
import EngagementMetrics from './EngagementMetrics';
import UserGrowthChart from './UserGrowthChart';
import ErrorBoundary from './ErrorBoundary';

const MainContent = () => {
  return (
    <div className="p-4 pt-20 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UserMetrics />
      <EngagementMetrics />
      <ErrorBoundary>
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <UserGrowthChart />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default MainContent;
