import { Component } from "react";
import { Grid, TextField, Button } from '@material-ui/core';


class Auth extends Component
{
    constructor()
    {
        super();
        this.state = { newAccount: true, username: "", email: "", password: "" };
    }

    handleInputChange = (event) =>
    {
        this.setState({[event.target.name]: event.target.value});
    }

    submitNewUser = () =>
    {
        this.props.socket.emit(this.state.newAccount ? "2" : "1", this.state);
    }
    
    render()
    {
        if (this.state.newAccount)
        {
            return (
                <div>
                    <Grid container direction="column">
                        <Grid item>
                            <TextField variant="standard"
                            id="nadddme-input"
                                name="username"
                                label="Nom d'utilisateur"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </Grid>
    
                        <Grid item>
                            <TextField variant="standard"
                                name="email"
                                label="Adresse courriel"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </Grid>
    
                        <Grid item>
                            <TextField variant="standard"
                                id="password-input"
                                name="password"
                                label="Mot de passe"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </Grid>
    
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit">
                                S'inscrire
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    
        else
        {
            return (
                <div>
    
                </div>
            );
        }
    }
}


export default Auth;