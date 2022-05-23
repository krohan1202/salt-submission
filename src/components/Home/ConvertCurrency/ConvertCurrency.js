import { useState, useEffect } from "react";

export const ConvertCurrencyLogic = () => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("INR");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();

    myHeaders.append("apikey", process.env.REACT_APP_CURRENCY_API);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      "https://api.apilayer.com/fixer/latest?symbols=GBP%2CEUR%2CINR%2CUSD%2CAUD&base=INR",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setRates(result.rates);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(0);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return {
    amount1,
    handleAmount1Change,
    currency1,
    handleCurrency1Change,
    amount2,
    handleAmount2Change,
    currency2,
    handleCurrency2Change,
    rates,
  };
};
