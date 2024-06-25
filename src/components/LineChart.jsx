import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title as ChartTitle,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ChartTitle,
  Tooltip,
  Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const timeStamp = [];
  console.log(coinHistory);
  for (let i = 0; i < coinHistory?.data?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.data.history[i].price);
    timeStamp.push(new Date(coinHistory.data.data.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Row className='chart-header'>
        <Title className='chart-title' level={2}>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title className='price-change' level={5}>{coinHistory?.data?.data?.change}</Title>
          <Title className='current-price' level={5}>Current {coinName} Price : $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
