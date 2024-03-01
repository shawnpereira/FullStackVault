import { useEffect, useState } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  //Without useEffect the website will go in a loop or rendering again and again
  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 300,
      });
    }, 1000);
  }, []); // we add [] dependency array as it will make it run only once when the website loads
  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100,
      });
    }, 1000);
  }, []);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default App;
