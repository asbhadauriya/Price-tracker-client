import { Chart as ChartJS,CategoryScale,LinearScale,PointElement } from 'chart.js';
import React, { useState, useEffect, useRef } from 'react';

import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale,LinearScale,PointElement)
// import  ChartTrack  from './ChartTr';



const PriceTracker = () => {
  const [selectedStock, setSelectedStock] = useState('AAPL');
  const[allStock,setAllStock]=useState([]);
  const [stockPrice, setStockPrice] = useState(null);

  const fetchStockPrice = async () => {
    try {
      const response = await fetch(`https://price-tracker-4wvhqyk1m-asbhadauriya.vercel.app/stock/${selectedStock}`);
      const data = await response.json();
      setStockPrice(data.price);
    } catch (error) {
      console.error('Error fetching stock price:', error);
    }
  };
  const fetchAllStocks=async()=>{
    try {
        const response = await fetch(`https://price-tracker-4wvhqyk1m-asbhadauriya.vercel.app/stocks/all`);
        const data = await response.json();
        setAllStock(data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }

  }
  useEffect(()=>{
    fetchAllStocks();

  },[])

  useEffect(() => {
    fetchStockPrice();
    const interval = setInterval(fetchStockPrice, 1000); // Poll every minute
    return () => clearInterval(interval);
  }, [selectedStock]);

  return (
    <div>
    <div className='head'>
    <h1 >Mini Stock Price Tracker</h1>
    <p>Select the stock from the list to see the lastest Price</p>
    
    </div>
      <div className='select'>
      <p className='para-head'>Pick Stock :-    </p>
      <select value={selectedStock} onChange={e => setSelectedStock(e.target.value)}>
      {allStock?.map((d)=>{
        return(
          
          <option value={d.symbol}>{d.symbol}</option>
          )
          
        })}
        {/* Add more stock options */}
        </select>
        </div><br/>
        <div  className='head'>
       <b> {selectedStock}</b>
        {stockPrice !== null ? <p>Current Market Price:<b> ${stockPrice}</b></p> : <p>Loading...</p>}
        <div className='chart'>

        <StockChart price={stockPrice} selectedStock={selectedStock}/>
        </div>
        </div>
    </div>
  );
};

export default PriceTracker;



const StockChart = ({price,selectedStock}) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Stock Price',
        data: [],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });
useEffect(()=>{
setChartData({  labels: [],
  datasets: [
    {
      label: selectedStock,
      data: [],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
})
},[selectedStock])


  // Simulate receiving data from the API every second
  useEffect(() => {
 
    const newData = {
      x: new Date().toLocaleTimeString(),
      y: price, // Replace with your actual API data
    };

    setChartData((prevData) => ({
      labels: [...prevData.labels, newData.x],
      datasets: [
        {
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, newData.y],
        },
      ],
    }));


  
  }, [price]);
  
    return (
      <div>
        <Line data={chartData} options={{ responsive: true }} />
      </div>
    );
  };
  
  





