import { Card, Typography, makeStyles } from '@material-ui/core';
import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme)=>({
    card:{
        width: '60%',
        margin: '20px auto',
        padding: '50px'
    }
}))
const Mern = ()=>{
    const styles = useStyles()
    useEffect(() => {
      Axios.get("http://localhost:4000/users").then((response) => {
          console.log(response.data)
          setMobiles(response.data)
      });
    }, []);

    const [mobiles, setMobiles] = useState(null)
    let List = <p>Loading....</p>
    if(mobiles){
    List = mobiles.map((mobile) => (
      <Card className={styles.card} key={mobile.product}>
        <Typography variant="h5">{mobile.product}</Typography>
      </Card>
    ));
    }
    return(
        <React.Fragment>
            {List}
        </React.Fragment>
    )
}

export default Mern