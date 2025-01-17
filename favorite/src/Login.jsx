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
                        padding: '1rem',
                        borderWidth: 1,
                        borderColor: "#2E7EA3",
                        width: 300,
                        top: "2rem",
                        right: '1rem',
                        borderRadius: '1rem',
                        backgroundColor:'white'
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
                            borderRadius: ".8rem",
                            color: 'black'
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
                            borderRadius: ".8rem",
                            color: 'black',
                            marginTop:'1rem'
                        }}
                    />
                    <button
                        style={{
                            color: 'white',
                            backgroundColor: 'green',
                            padding:'.5rem 1.2rem',
                            borderRadius: '1rem',
                            fontSize: 18,
                            backgroundColor: 'black',
                            marginTop:'1rem'
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
