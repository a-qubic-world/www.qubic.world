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
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        return response.json();
      })
      .then((data: TickerData) => {
        setTicker(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error('Ticker fetch error:', error.message);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!ticker) return <div>No data available</div>;

  return (
    <div    className='ticker' 
            style={{right: (open) ? '-10px' : '-274px'}}
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
        >
        <ul>            
            <li><img src={chartIcon} alt='chart icon' /></li>
            <li><span>Last:<br />${ticker.ticker.last}</span></li>
            {/* <li>Open: ${ticker.ticker.open}</li> */}
            <li><span>High:<br />${ticker.ticker.high}</span></li>
            <li><span>Low:<br />${ticker.ticker.low}</span></li>
        </ul>
    </div>
  )
}

export default SafeTradeTicker;
