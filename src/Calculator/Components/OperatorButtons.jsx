import React from 'react'
import { Grid, Button, Tooltip } from "@material-ui/core";
import { useStyles, useToolTipStyles } from "../styles/styles";

const OperatorButtons = ( props ) => {

    const classes = useStyles();
    const tooltipClasses = useToolTipStyles()
    const operatorsAndFunctions = "+-*/=".split("").map((button) =>
      button === "=" ? (
        <Grid key={button} className={classes.gridItem} item xs={4}>
          <Tooltip
            title={props.disabled ? "Press AC or a number" : "Evaluate"}
            classes={tooltipClasses}
            arrow
          >
            <span className={classes.spanButtons}>
              <Button
                disabled={props.disabled}
                className={classes.functionButtons}
                onClick={() => props.evaluate(props.result)}
              >
                {button}
              </Button>
            </span>
          </Tooltip>
        </Grid>
      ) : (
        <Grid key={button} className={classes.gridItem} item xs={4}>
          <Tooltip
            title={
              props.disabled
                ? "Press AC or a number"
                : `${
                    button === "+"
                      ? "Add"
                      : button === "-"
                      ? "Subtract"
                      : button === "*"
                      ? "Multiply"
                      : "Divide"
                  }`
            }
            arrow
            placement="right-start"
            classes={tooltipClasses}
          >
            <span>
              <Button
                className={classes.functionButtons}
                disabled={props.disabled}
                // disabled={result === "Infinity" || result === "NaN" ? true : false}
                onClick={() =>
                  props.operationsHandler( props.result.toString(), button.toString())
                }
              >
                {button}
              </Button>
            </span>
          </Tooltip>
        </Grid>
      )
    );
    return operatorsAndFunctions;
}
export default OperatorButtons
