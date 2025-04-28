//finnhub.io base URL: /api/v1
//quote URL = https://finnhub.io/api/v1/quote
//quote method: GET
//Examples: /quote?symbol=AAPL /quote?symbol=MSFT
//arguments: symbol
//response attributes: c (surrent price), d(change), dp(percent change), h(high price of day), l(low price of day), o ,pc
const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
async function fetchStockData(symbol){
    try {
        const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`); //wait for API response
        const data = await res.json(); //wait for JSON conversion
        return data; 
    } catch (error) {
        console.error("Failed to fetch stock data:", error);
    }
}

export { fetchStockData };