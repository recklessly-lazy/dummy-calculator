import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
    margin: "auto",
  },
  display: {
    backgroundColor: "black",
    border: "2px solid grey",
    height: "50px",
    textAlign: "right",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    color: "white",
    padding: "12px 15px 3px 0px",
    fontSize: "20px",
    fontFamily: "verdana",
    fontWeight: "300",
    boxShadow: "1px 3px 4px black",
    marginBottom: "40px",
  },
  paper: {
    position: "relative",
    backgroundColor: theme.palette.primary.dark,
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    margin: "50px auto",
    width: "85%",
    maxWidth: "329px",
    "@media(min-width: 600px)": {
      minWidth: "330px",
      maxWidth: "450px",
      width: "50%",
    },
    padding: "20px 10px 30px ",
    boxShadow: "2px 5px 15px 3px rgb(120,120,120,1)",
    borderRadius: "10px 10px 50% 50% / 2%",
  },
  gridItem: {
    // margin: "auto",
    textAlign: "center",
    "@media(max-width: 349px)": {
      width: "50%",
    },
  },
  button: {
    padding: "5px",
    fontWeight: "bolder",
    fontFamily: "balsamiq sans",
    width: "70%",
    textAlign: "center",
    background: theme.palette.warning.light,
    borderRadius: "10px",
    boxShadow: "0px 5px 2px rgb(60,60,60)",
    border: "2px solid white",
    "&:hover": {
      background: theme.palette.warning.main,
      boxShadow: `0px 0px 18px 6px ${theme.palette.warning.dark}`,
    },
    "&:active": {
      background: theme.palette.warning.dark,
      transform: "translate(0px, 2px)",
      boxShadow: "0px 1px 2px 1px rgb(40,40,40)",
    },
  },
  functionButtons: {
    padding: "5px",
    fontWeight: "bold",
    fontFamily: "roboto",
    width: "70%",
    textAlign: "center",
    background: theme.palette.secondary.light,
    borderRadius: "10px",
    boxShadow: "0px 5px 2px rgb(60,60,60)",
    border: "2px solid white",
    "&:hover": {
      background: theme.palette.secondary.main,
      boxShadow: `0px 0px 20px 5px red`,
    },
    "&:active": {
      background: theme.palette.secondary.dark,
      transform: "translate(0px, 2px)",
      boxShadow: "0px 1px 2px 1px rgb(40,40,40)",
    },
  },
  spanButtons: {
    padding: "0px",
    "@media(min-width: 550px)": {
      padding: "8px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    borderRadius: "5px",
    // boxShadow: '1px 8px 10px 3px rgb(40,40,40,0.7)'
  },
  githubSvg: {
    height: "32px",
    width: "32px",
    "&:hover": {
      fill: "red",
      filter: 'drop-shadow(0px 0px 4px red)',
    },
  },
}));

export const useToolTipStyles = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));
