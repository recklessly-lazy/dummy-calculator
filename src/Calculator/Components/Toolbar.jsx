import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "../styles/styles";

const ToolBar = () => {
  const classes = useStyles();
  return (
    <div style={{ flexGrow: "1" }}>
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
          <Typography style={{ flexGrow: "1" }} variant={"h6"}>
            Calculator
          </Typography>
          <FormControlLabel
            control={
              <Switch
                // checked={state.checkedA}
                // onChange={handleChange}
                name="checkedB"
              />
            }
            label="Dark"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default ToolBar;
