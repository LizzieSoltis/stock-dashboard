import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import { fetchStockData } from '../services/api'
import  StockTable  from './components/StockTable'
function App() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getStock(){
      setLoading(true); //set loading to true -> show loading spinner/text
      try {
        const symbols = ['AAPL', 'MSFT', 'GOOG'] //list of all stock symbols to fetch data for 
        const stockPromises = symbols.map(async (symbol) => {
          const stock = await fetchStockData(symbol);
          return { ...stock, symbol }; //adding symbol to data manually
        });
        
        const stockData = await Promise.all(stockPromises); //wait for all stocks to finish fetching
        setStocks(stockData);
      }
      catch{ (error)
        setError(true);
      }
      finally{
        setLoading(false); 
      }
    }
    getStock();
  }, []);// Empty array = run only once when app loads

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Stock Dashboard</h1>
      {loading && <p>Loading stocks...</p>}
      {error && <p>Failed to load stock data.</p>}
      {!loading && !error && <StockTable stocks={stocks} />} 
    </div>
  );
}

export default App
