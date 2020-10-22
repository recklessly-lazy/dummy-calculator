import { Card, makeStyles, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import React, { useState } from 'react'
import CSSTranstion from 'react-transition-group/CSSTransition'
// import ReactTransition from 'react-transition-group'
// import ReactCSSTransitionGroup from 'react-transition-group'; 
const useStyles = makeStyles(theme => ({
    card: {
        width: 300,
        height: 420,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'wheat',
        margin: '20px 40px',
        transition: 'all 1s'
    },
    button: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: '50px 100px',
        transition: 'all 1s'

        // backgroundColor: theme.palette.primary.main
    },
    enter: {
        opacity: 0
    },
    enterActive: {
        opacity: 1
    },
    exit: {
        opacity:1
    },
    exitActive: {
        opacity:0
    }
}))
export default function Chatbox() {
    const [display, setDisplay] = useState(false)
    const classes = useStyles()
    const body = (
      <Card
        className={classes.card}
        onClick={()=>setDisplay((display) => !display)}
      ></Card>
    );
    const chatIcon = (
      <IconButton size="medium" className={classes.button} onClick={()=>setDisplay((display) => !display)}>
        <ChatIcon fontSize="large" />
      </IconButton>
    );
    return (
      <div>
        <CSSTranstion
          mountOnEnter
          unmountOnExit
          timeout={1000}
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
        {<CSSTranstion
          mountOnEnter
          unmountOnExit
          timeout={1000}
          in={!display}
          classNames={{
            enter: classes.enter,
            enterActive: classes.enterActive,
            exit: classes.exit,
            exitActive: classes.exitActive,
          }}
        >
        {chatIcon}
        </CSSTranstion>}
        {/* <Component/> */}
        {/* <Button variant='contained' color='secondary' className={classes.button}>Chat</Button> */}
      </div>
    );
}