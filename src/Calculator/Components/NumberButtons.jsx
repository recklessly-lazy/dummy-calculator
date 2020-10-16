import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useStyles }  from '../styles/styles'

const NumberButtons = ( props ) => {
    const classes = useStyles()
    // console.log( props )
    const buttons = "7894561230".split("").map((button) =>
      button === "0" ? (
        <Grid key={button} className={classes.gridItem} item xs={4}>
          <Button
            className={classes.button}
            onClick={() =>
              props.valueChangedHandler(props.result.toString(), "0")
            }
          >
            {0}
          </Button>
        </Grid>
      ) : (
        <Grid key={button} className={classes.gridItem} item xs={4}>
          <Button
            className={classes.button}
            onClick={() =>
              props.valueChangedHandler(
                props.result.toString(),
                button.toString()
              )
            }
          >
            {button}
          </Button>
        </Grid>
      )
    );
    return buttons;
}
export default NumberButtons;
