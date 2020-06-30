import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from '../styles/styles'

const ToolBar = () => {
    const classes = useStyles()
    return (
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => alert("Nothing")}
          >
            <MenuIcon titleAccess={"Menu"} />
          </IconButton>
          <Typography variant={"h6"}>Calculator</Typography>
        </Toolbar>
      </AppBar>
    );
}
export default ToolBar