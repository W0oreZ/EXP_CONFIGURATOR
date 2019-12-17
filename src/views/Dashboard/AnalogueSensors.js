import React from 'react'
import ReactApexChart from 'react-apexcharts';

function AnalogueSensors(props) {

  const data = [((parseFloat(props.ai1.value)*100)/15),((parseFloat(props.ai2.value)*100)/15)];

  const chartOptions = {
    chart: {
      offsetY: -20,
      foreColor: '#9f9ea4',
    },
    plotOptions: {
        radialBar: {
            offsetY: 10,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '50%',
                background: 'transparent',
                image: undefined,
            },
            
            dataLabels: {
                name: {
                    show: false,
                    
                },
                value: {
                    show: false,
                }
            }
        }
    },
    colors: ['#4090cb', '#eb6776'],
    stroke: {
      lineCap: 'round'
    },
    labels: [ 'ai1', 'ai2'],
    legend: {
      show: true,
      floating: true,
      fontSize: '12px',
      position: 'left',
      offsetX: -30,
      offsetY: 10,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      itemMargin: {
        horizontal: 3,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
            show: false
        }
      }
    }]
  }

  return (
    <div id="multiple-radial-chart" dir="ltr" className="social-source">
      <ReactApexChart options={chartOptions} series={data} type="radialBar" height="265" />
    </div>
  )
}

export default AnalogueSensors

