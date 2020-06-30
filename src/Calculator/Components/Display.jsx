import React from 'react'
import { Grid, Card } from '@material-ui/core'
import { useStyles } from '../styles/styles'

const Display = ( props ) => {
    const classes = useStyles()
    return (
      <Grid className={classes.gridItem} item xs={12}>
        <Card className={classes.display}>
          <p>{props.result}</p>
        </Card>
      </Grid>
    );
}
export default Display