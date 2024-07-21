import React, { useState, useContext } from 'react';
import Usercontext from '../context/Usercontext';

function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const { setuser } = useContext(Usercontext);

    const handlesubmit = (e) => {
        e.preventDefault();
        setuser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                <input
                    type="password" // Changed to password type for security
                    placeholder="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
