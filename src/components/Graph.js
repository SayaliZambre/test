import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Labels from './Labels';

Chart.register(ArcElement);

export default function Graph() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(128, 0, 128)', // Purple
          'rgb(0, 128, 0)',   // Green
          'rgb(255, 165, 0)', // Orange
        ],
        hoverOffset: 4,
      },
    ],
  };
  
  const options = {
    cutout: 115,
  };

  return (
    <div className="flex flex-col items-center max-w-xs mx-auto">
      <div className="chart relative">
        <Doughnut data={data} options={options} />
        <h3 className="mb-4 font-bold title">
          Total
          <span className="block text-3xl text-emerald-400">
            {/* Add your logic for total here */}
          </span>
        </h3>
      </div>
      <div className="py-10">
        <Labels />
      </div>
    </div>
  );
}
