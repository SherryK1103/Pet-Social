// import React, { useState } from 'react';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

class Login extends Component {
    state = {
        username: '',
        password: '',
    };
};

const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({ [key]: value });

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleChange}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;