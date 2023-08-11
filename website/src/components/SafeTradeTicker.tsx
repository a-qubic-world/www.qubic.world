// src/components/CryptoTicker.tsx
import React, { useState, useEffect } from 'react';

// import icons
import chartIcon from '../assets/icn-chart.svg'

// Define the types for our ticker data
interface TickerData {
  ticker: {
    last: string;
    open: string;
    high: string;
    low: string;
  }
}

function SafeTradeTicker() {
  const [ticker, setTicker] = useState<TickerData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch('/api/ticker')
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: TickerData) => {
        setTicker(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!ticker) return <div>No data available</div>;

  return (
    <div    className='ticker' 
            style={{right: (open) ? '-80px' : '-274px'}}
            onClick={() => setOpen(!open)}
        >
        <ul>            
            <li><img src={chartIcon} alt='chart icon' /></li>
            <li>Last: ${ticker.ticker.last}</li>
            {/* <li>Open: ${ticker.ticker.open}</li> */}
            <li>High: ${ticker.ticker.high}</li>
            <li>Low: ${ticker.ticker.low}</li>
        </ul>
    </div>
  )
}

export default SafeTradeTicker;
