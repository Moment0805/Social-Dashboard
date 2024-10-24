import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Register necessary components for the Line chart
Chart.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const UserGrowthChart = () => {
  const chartRef = useRef(null); // Ref to track the chart instance

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'User Growth',
        data: [50, 100, 150, 200, 250, 300, 400],
        fill: true,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
     plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#fff', 
         },
      },
      title: {
        display: true,
        text: 'User Growth Over Time',
        color: '#fff', 
      },
    },
    scales: {
      x: {
        ticks: { color: '#fff' }, 
      },
      y: {
        ticks: { color: '#fff' }, 
      },
    },
  };

  useEffect(() => {
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen  pt-10">
      <div className="w-full  h-[80vh] p-5 bg-gray-800 rounded-lg shadow-lg">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default UserGrowthChart;
