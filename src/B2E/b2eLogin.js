import {
    Container,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Button,
    Avatar,
    Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
    container: {
        margin: "150px auto",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    paper: {
        padding: 40,
        margin: 20,
        width: "100%",
        borderRadius: 10,
        boxShadow: "1px 2px 5px 1px #ddd",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },
    form: {
        width: "100%",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0),
    },
}));
const B2ELogin = (props) => {
    const [userName, setUserName] = useState({ value: "", touched: false });
    const [password, setPassword] = useState({ value: "", touched: false });
    const classes = useStyles();
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
        console.log(props);
        props.history.push("/otp");
    };
    return (
        <Container className={classes.container} maxWidth={"xs"}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign in</Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="Email address"
                        margin="normal"
                        id="email"
                        name="email"
                        required
                        defaultValue={userName.value}
                        error={userName.touched && userName.value === ""}
                        helperText={
                            userName.touched && userName.value === ""
                                ? "Email is required!"
                                : ""
                        }
                        onChange={(e) =>
                            setUserName({
                                value: e.target.value,
                                touched: true,
                            })
                        }
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        required
                        label="Password"
                        margin="normal"
                        id="password"
                        name="password"
                        defaultValue={password.value}
                        onChange={(e) =>
                            setUserName({
                                value: e.target.value,
                                touched: true,
                            })
                        }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};
export const OtpScreen = (props) => {
    const classes = useStyles();
    const otp = [1, 2, 3, 4, 5, 6].map((item) => (
        <Grid key={Math.random() * Math.random()} item xs={2}>
            <TextField
                inputProps={{
                    maxLength: 1,
                    style: {
                        textAlign: "center",
                    },
                }}
                margin={"normal"}
            />
        </Grid>
    ));
    return (
        <Container maxWidth={"xs"} className={classes.container}>
            <Typography style={{
                marginBottom: 50
            }} variant="h5">Multi-factor authentication</Typography>
            <Paper className={classes.paper}>
                <Typography variant="h6">Enter your OTP</Typography>
                <Grid container spacing={3}>
                    {otp}
                </Grid>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={() => {
                        props.history.push('/dashboard')
                    }}
                >
                    Submit
                </Button>
            </Paper>
        </Container>
    );
};
export default B2ELogin;
