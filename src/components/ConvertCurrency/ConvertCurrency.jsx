import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

import { useStyles } from "./ConvertCurrency.style";

// Assets
import ArrowIcon from "../../assets/Home/ArrowIcon.svg";
import ShieldIcon from "../../assets/Home/ShieldIcon.svg";

export default function ConvertCurrency() {
  const classes = useStyles();

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    // myHeaders.append("apikey", "Zcr0uxQOrKgw7ZiNfHd6u6MXdUcHxPal");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    // fetch("https://api.apilayer.com/fixer/latest?base=EUR", requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result.rates);
    //     setRates(result.rates);
    //   })
    //   .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
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

  return (
    <Container
      maxWidth="xl"
      style={{ width: "90%" }}
      className={classes.currencySection}
    >
      <Grid container>
        <Grid item sm={12} md={5} style={{ display: "flex" }}>
          <div style={{ width: "64%" }}>
            <Typography variant="h2" className={classes.currency_amountHeading}>
              Amount
            </Typography>

            <TextField
              id="standard-size-normal"
              variant="standard"
              value={amount1}
              onChange={(ev) => handleAmount1Change(ev.target.value)}
              className={classes.currency_amountTextField}
              inputProps={{
                style: {
                  color: "#434343",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                },
              }}
            />
          </div>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={currency1}
            value={"INR"}
            onChange={(ev) => handleCurrency1Change(ev.target.value)}
            className={classes.currency_select}
          >
            {/* {Object.keys(rates).map((currency) => {
              return <MenuItem value={currency} className={classes.currency_currencyDropdownItems}>{currency}</MenuItem>;
            })} */}
            <MenuItem
              value={"INR"}
              className={classes.currency_currencyDropdownItems}
            >
              INR
            </MenuItem>
          </Select>
        </Grid>
        <Grid item sm={12} md={2} align="center">
          <img
            src={ArrowIcon}
            alt="ArrowIcon"
            className={classes.currency_arrowIcon}
          />
        </Grid>
        <Grid
          item
          sm={12}
          md={5}
          style={{ display: "flex", paddingLeft: "1.5rem" }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"USD"}
            // onChange={(ev) => handleCurrency2Change(ev.target.value)}
            className={classes.currency_select}
          >
            {/* {Object.keys(rates).map((currency) => {
              return <MenuItem value={currency} className={classes.currency_currencyDropdownItems}>{currency}</MenuItem>;
            })} */}
            <MenuItem
              value={"USD"}
              className={classes.currency_currencyDropdownItems}
            >
              USD
            </MenuItem>
          </Select>
          <div>
            <Typography
              variant="h2"
              style={{ marginLeft: "1.5rem" }}
              className={classes.currency_amountHeading}
            >
              Amount
            </Typography>
            <TextField
              id="standard-size-normal"
              variant="standard"
              value={amount2}
              onChange={(ev) => handleAmount2Change(ev.target.value)}
              className={classes.currency_amountTextField}
              style={{ marginLeft: "1.5rem" }}
              inputProps={{
                style: {
                  color: "#434343",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                },
              }}
            />
          </div>
        </Grid>
      </Grid>

      <div style={{ display: "flex", marginTop: "3.8rem" }}>
        <img src={ShieldIcon} alt="ShieldIcon" />
        <Typography
          variant="h2"
          className={classes.currency_conversionRateHeading}
        >
          Conversion rate of : 1 USD = 75 INR
        </Typography>
      </div>
    </Container>
  );
}
