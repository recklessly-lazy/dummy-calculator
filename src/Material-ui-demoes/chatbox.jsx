import { Card, makeStyles, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import React, { useState, useEffect } from "react";
import CSSTranstion from "react-transition-group/CSSTransition";
// import ReactTransition from 'react-transition-group'
// import ReactCSSTransitionGroup from 'react-transition-group';
const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    height: 420,
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "wheat",
    margin: "20px 40px",
    transition: "all 500ms",
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: "50px 100px",
    // transition: "all 500ms",
    // opacity: 1
    // transform: "translateX(-100vw)",
    // animation: `$init 500ms ${theme.transitions.easing.easeOut} forwards`,
    // animationIterationCount: 1
    // backgroundColor: theme.palette.primary.main
  },
  once: {
    transform: "translateX(-100vw)",
    animation: `$init 500ms ${theme.transitions.easing.easeOut} forwards`,
  },
  "@keyframes init": {
    "0%": {
      transform: "translateX(-100vw)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  "@keyframes entry": {
    "0%": {
      // transform: "translateX(-100vw)",
      opacity: 0,
    },
    "100%": {
      // transform: "translateX(0)",
      opacity: 1,
    },
  },
  "@keyframes exit": {
    "0%": {
      // transform: "translateX(-100vw)",
      opacity: 1,
    },
    "100%": {
      // transform: "translateX(0)",
      opacity: 0,
    },
  },
  enterActive: {
    animation: `$entry 500ms forwards`,
  },

  exitActive: {
    animation: `$exit 500ms forwards`,
  },
}));
export default function Chatbox() {
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(0)
  const classes = useStyles();

  let buttonClasses = [classes.button, classes.once];
  if (count > 0) {
    buttonClasses = [classes.button];
  }
  let buttonClassesToAttach = buttonClasses.join(" ");
  useEffect(() => {}, []);
  const body = (
    <Card
      className={classes.card}
      onClick={() => setDisplay((display) => !display)}
    ></Card>
  );
  const chatIcon = (
    <IconButton
      size="medium"
      // className={classes.button}
      className={buttonClassesToAttach}
      onClick={() => setDisplay((display) => !display)}
    >
      <ChatIcon fontSize="large" />
    </IconButton>
  );
  return (
    <div>
      <CSSTranstion
        mountOnEnter
        unmountOnExit
        timeout={500}
        in={display}
        classNames={{
          enter: classes.enter,
          enterActive: classes.enterActive,
          exit: classes.exit,
          exitActive: classes.exitActive,
        }}
      >
        {body}
      </CSSTranstion>
      {
        <CSSTranstion
          mountOnEnter
          unmountOnExit
          timeout={500}
          in={!display}
          classNames={{
            enter: classes.enter,
            enterActive: classes.enterActive,
            exit: classes.exit,
            exitActive: classes.exitActive,
          }}
          onExited={() => {
            setCount(1)
          }}
        >
          {chatIcon}
        </CSSTranstion>
      }
      {/* <Component/> */}
      {/* <Button variant='contained' color='secondary' className={classes.button}>Chat</Button> */}
    </div>
  );
}
