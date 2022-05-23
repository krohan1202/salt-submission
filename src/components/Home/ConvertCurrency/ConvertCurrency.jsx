import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

import { useStyles } from "./ConvertCurrency.style";

import { ConvertCurrencyLogic } from "./ConvertCurrency.js";

// Assets
import ArrowIcon from "../../../assets/Home/ArrowIcon.svg";
import ShieldIcon from "../../../assets/Home/ShieldIcon.svg";

export default function ConvertCurrency() {
  const classes = useStyles();

  const {
    amount1,
    handleAmount1Change,
    currency1,
    handleCurrency1Change,
    amount2,
    handleAmount2Change,
    currency2,
    handleCurrency2Change,
    rates,
  } = ConvertCurrencyLogic();

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
            value={currency1}
            onChange={(ev) => handleCurrency1Change(ev.target.value)}
            className={classes.currency_select}
          >
            {Object.keys(rates).map((currency) => {
              return (
                <MenuItem
                  value={currency}
                  className={classes.currency_currencyDropdownItems}
                >
                  {currency}
                </MenuItem>
              );
            })}
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
            value={currency2}
            onChange={(ev) => handleCurrency2Change(ev.target.value)}
            className={classes.currency_select}
          >
            {Object.keys(rates).map((currency) => {
              return (
                <MenuItem
                  value={currency}
                  className={classes.currency_currencyDropdownItems}
                >
                  {currency}
                </MenuItem>
              );
            })}
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
          Conversion rate of : 1 USD = 77.54 INR
        </Typography>
      </div>
    </Container>
  );
}
