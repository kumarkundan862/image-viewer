import React, { Component } from 'react';
import './Login.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Header from '../../common/header/Header';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
            incorrectValues: "dispNone"
        };
    }

    loginClickHandler = () => {

        var userName = "user";
        var passWord = "user@123";
        var accessToken = "IGQVJVUExCa2FhNkRJSTVMUGloRTFqMEtLc2NIMEpZAYW01ZAkczRlA2MTNLUE5JMDRmWEVTRFpERXB2aTc0TUpjQkIxbDJlMHRhZATJxMkVPLVVsNVNqS21FMHZASUHdha1dtenpsb09rakpmMkJVYmp4TzE0VXAwTVZABWXB3";

          this.state.username !== "" ? this.setState({usernameRequired:"dispNone"}):this.setState({usernameRequired:"dispBlock"});
          this.state.loginPassword !== "" ? this.setState({loginPasswordRequired:"dispNone"}):this.setState({loginPasswordRequired:"dispBlock"});

          if(this.state.username === userName && this.state.loginPassword===passWord){

            sessionStorage.setItem("access-token",accessToken);
            this.props.history.push('/home');
            this.setState({incorrectValues:"dispNone"});
          }

          else if(this.state.username!=="" && this.state.loginPassword!==""){
              this.setState({incorrectValues:"dispBlock"});
          }
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="login-card">
                    <Card>
                        <CardContent style={{padding:"16px 50px 50px 50px"}}>

                            <FormControl>
                                <Typography style={{fontSize:"20px"}}>LOGIN</Typography>
                            </FormControl><br/><br/>

                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username="this.state.username"
                                    onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span
                                    className="red">required</span></FormHelperText>
                            </FormControl><br /><br />

                            <FormControl required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" loginpassword={this.state.loginPassword}
                                    onChange={this.inputLoginPasswordChangeHandler} />
                                <FormHelperText className={this.state.loginPasswordRequired}><span
                                    className="red">required</span></FormHelperText>
                            </FormControl><br /><br />

                            <FormHelperText className={this.state.incorrectValues}><span
                                className="red">Incorrect username and/or password</span></FormHelperText><br />

                                <Button variant="contained" color="primary" 
                                onClick={this.loginClickHandler}>
                                LOGIN</Button>

                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;