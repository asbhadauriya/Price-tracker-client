import React, { useState, useEffect } from 'react';

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
        </div>
    </div>
  );
};

export default PriceTracker;
