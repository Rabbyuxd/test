import React from 'react'
import styles from './Dashboard.module.css';
import { useState,useEffect,useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar,Pie } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,20,30,3,5,1],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [20,40,30,8,4,8],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 3',
      data: [30,20,10,4,9,1],
      backgroundColor: 'rgb(53, 162, 235)',
    }
  ],
};

const BarChart = () => {
  return (
      <>
    <h3>BarChart</h3>
    <div className={styles.barControl}>
    <Bar options={options} data={data} height={100} width={100}/>
    </div>
    </>
  )
}

export default BarChart