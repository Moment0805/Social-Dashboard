import React, { useContext } from 'react';
import MetricCard from './MetricCard';
import { DashboardContext } from './DashboardContext';

const UserMetrics = () => {
  const { metrics } = useContext(DashboardContext);

  return (
    <>
      <MetricCard title="Total Users" value={metrics.totalUsers} />
      <MetricCard title="Active Users" value={metrics.activeUsers} />
    </>
  );
};

export default UserMetrics;