import React, { useState } from "react";

import { login, useLoggedIn } from "./favorite";

const Login = () => {
    const loggedIn = useLoggedIn();
    const [showLogin, setShowLogin] = useState(false);

    const [username, setUsername] = useState("sally");
    const [password, setPassword] = useState("123");

    if (loggedIn) {
        return null;
    }
    return (
        <div>
            <span onClick={() => setShowLogin(!showLogin)}>
                <i
                    className="ri-fingerprint-line"
                    style={{ fontSize: 20 }}
                    id="showlogin"
                ></i>
            </span>
            {showLogin && (
                <div
                    style={{
                        position: "absolute",
                        padding: 5,
                        borderWidth: 1,
                        borderColor: "blue",
                        widows: 300,
                        top: "2rem",
                    }}
                >
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(evt) => setUsername(evt.target.value)}
                        style={{
                            fontSize: 14,
                            border: "1px solid gray",
                            padding: 2,
                            width: "100%",
                            borderRadius: "1rem",
                        }}
                    />
                    <input
                        type="text"
                        placeholder="password"
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                        style={{
                            fontSize: 14,
                            border: "1px solid gray",
                            padding: 2,
                            width: "100%",
                            borderRadius: "1rem",
                        }}
                    />
                    <button
                        style={{
                            color: 'white',
                            backgroundColor: 'green',
                            padding: '1rem 2rem',
                            borderRadius: '1rem'
                        }}
                        onClick={() => login(username, password)}
                        id="loginbtn">
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
