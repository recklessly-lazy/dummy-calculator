import React, { Fragment, memo, useCallback, useEffect, useState } from "react";
import { Button, Grid, Paper, Tooltip } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles, useToolTipStyles } from "../styles/styles";
import GitHubIcon from "../Components/githubIcon";
import inputHandling from "../logic/valueChangedHandler.js";
import operationHandling from "../logic/operationsHandler.js";
import evaluation from "../logic/evaluate";
import NumberButtons from "../Components/NumberButtons";
import OperatorButtons from "../Components/OperatorButtons";
import Display from "../Components/Display";
import ToolBar from "../Components/Toolbar";

const numberKeys = "1234567890".split("");
const operatorKeys = "+-*/=";

const Calculator = memo(() => {

  const [result, setResult] = useState("0");
  const [disabled, setDisabled] = useState(false);
  
  const handleKeyDown = useCallback((event) => {
    const input = event.key;
    if (numberKeys.includes(input)) {
      console.log("Number pressed: ", input);
      valueChangedHandler(result, input);
    } else if (operatorKeys.includes(input)) {
      operationsHandler(result, input)
      console.log("Operation: ", input);
    } else if (input === 'Enter') {
      evaluate(result)
    }
  },[result]) 
  useEffect(() => {
    console.log("Mounted the App!");
    window.addEventListener("keydown", handleKeyDown);
    return (() => {
      console.log('Removed !')
      window.removeEventListener("keydown", handleKeyDown);
    })
  }, [result, handleKeyDown]);

  const valueChangedHandler = (oldValue, input) => {
    const [newResult, disabled] = inputHandling(oldValue, input);
    setDisabled(disabled);
    setResult(newResult);
  };

  const operationsHandler = (result, operation) => {
    const newResult = operationHandling(result, operation);
    setResult(newResult);
  };

  const evaluate = (result) => {
    const [output, disabled] = evaluation(result);
    setDisabled(disabled);
    setResult(output);
  };

  const classes = useStyles();
  const tooltipClasses = useToolTipStyles();

  const acButton = (
    <Grid className={classes.gridItem} item xs={4}>
      <Tooltip classes={tooltipClasses} title="Clear All" arrow>
        <span className={classes.spanButtons}>
          <Button
            className={classes.functionButtons}
            onClick={() => {
              setResult("0");
              setDisabled(false);
            }}
          >
            {"AC"}
          </Button>
        </span>
      </Tooltip>
    </Grid>
  );

  const backSpaceButton = (
    <Grid className={classes.gridItem} item xs={4}>
      <Tooltip
        classes={tooltipClasses}
        title={disabled ? "Press AC or a number" : "Clear last entry"}
        arrow
      >
        <span className={classes.spanButtons}>
          <Button
            disabled={disabled}
            className={classes.functionButtons}
            onClick={() => {
              setResult(result.length === 1 ? "0" : result.slice(0, -1));
            }}
          >
            <ArrowBackIcon></ArrowBackIcon>
          </Button>
        </span>
      </Tooltip>
    </Grid>
  );

  return (
    <Fragment>
      <ToolBar />
      <Paper className={classes.paper}>
        <Grid className={classes.gridContainer} container spacing={2}>
          <Display result={result} />
          <NumberButtons
            valueChangedHandler={valueChangedHandler}
            result={result}
          />
          <OperatorButtons
            operationsHandler={operationsHandler}
            disabled={disabled}
            result={result}
            evaluate={evaluate}
          />
          {acButton}
          {backSpaceButton}
        </Grid>
      </Paper>
      <footer style={{ textAlign: "center", margin: "60px 0px 60px 0px" }}>
        <GitHubIcon />
      </footer>
    </Fragment>
  );
});
export default Calculator;
//Changing repo..
