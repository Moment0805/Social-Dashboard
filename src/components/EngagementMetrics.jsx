import React from 'react';
import MetricCard from './MetricCard';

const EngagementMetrics = () => {
  return (
    <>
      <MetricCard title="posts" value="1,900" />
      <MetricCard title="likes" value="1.4k" />
    </>
  );
};

export default EngagementMetrics;