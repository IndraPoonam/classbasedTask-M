import { Box, Button, TextField, Typography } from '@mui/material';
import React, { Component, ChangeEvent } from 'react';

interface State {
    fullName: string;
    email: string;
    password: string;
    showData: boolean;
}

export default class SignIn extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            showData: false,
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        } as unknown as Pick<State, keyof State>);
    };

    handleSubmit = () => {
        this.setState({ showData: true });
        console.log(this.state);
    };

    render() {
        return (
            <Box sx={{ height: 'auto', width: '20%', border: '2px solid red', padding: '4rem' }}>
                <TextField
                    margin="normal"
                    label="Full Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                />
                <TextField
                    margin="normal"
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <TextField
                    margin="normal"
                    label="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                />
                <Button variant="contained" onClick={this.handleSubmit}>Sign In</Button>
                
                {this.state.showData && (
                    <Box sx={{ marginTop: '2rem' }}>
                        <Typography>Full Name: {this.state.fullName}</Typography>
                        <Typography>Email: {this.state.email}</Typography>
                        <Typography>Password: {this.state.password}</Typography>
                    </Box>
                )}
            </Box>



        );
    }
}
