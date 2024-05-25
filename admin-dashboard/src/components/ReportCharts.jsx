import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {
  const [data, setData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yyyy hh:mm TT',
        },
      },
    },
  });

  useEffect(() => {
    fetch("http://localhost:5000/getReportData")
      .then(res => res.json())
      .then(data => {
        const { dieselData, gasolineData, electricData } = data;

        const convertToPST = timestamp => {
          // Convert London time to Philippine Standard Time
          const londonTime = new Date(timestamp);
          const pstTime = new Date(londonTime.getTime() + (8 * 60 * 60 * 1000)); // Add 8 hours (28800000 milliseconds) to convert from London time to PST
          return pstTime;
        };

        const dieselSeries = dieselData.map(item => [convertToPST(item._id), item.count]);
        const gasolineSeries = gasolineData.map(item => [convertToPST(item._id), item.count]);
        const electricSeries = electricData.map(item => [convertToPST(item._id), item.count]);

        setData(prevData => ({
          ...prevData,
          series: [
            { name: 'Diesel', data: dieselSeries },
            { name: 'Gasoline', data: gasolineSeries },
            { name: 'Electric', data: electricSeries }
          ],
          options: {
            ...prevData.options,
            xaxis: {
              ...prevData.options.xaxis,
              categories: dieselData.map(item => {
                const pstTime = convertToPST(item._id);
                let hours = pstTime.getHours();
                const minutes = pstTime.getMinutes() < 10 ? '0' + pstTime.getMinutes() : pstTime.getMinutes();
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12; // Convert hours to 12-hour format
                return `${hours}:${minutes} ${ampm}`;
              })
            }
          }
        }));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
}

export default ReportCharts;
