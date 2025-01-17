import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = 'http://localhost:8080';

export const jwt = new BehaviorSubject(null)
export const favorite = new BehaviorSubject(null)

export const getFavorite = () =>
    fetch(`${API_SERVER}/favorite`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
        },
    })
        .then((res) => res.json())
        .then((res) => {
            favorite.next(res)
            return res;
        });

export const addToFavorite = (id) =>
    fetch(`${API_SERVER}/favorite`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
        },
        body: JSON.stringify({ id }),
    })
        .then((res) => res.json())
        .then(() => {
            getFavorite();
        });

export const clearFavorite = () =>
    fetch(`${API_SERVER}/favorite`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
        },
    })
        .then((res) => res.json())
        .then(() => {
            getFavorite();
        });

export const login = (username, password) =>
    fetch(`${API_SERVER}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            jwt.next(data.access_token);
            getFavorite();
            return data.access_token;
        });

export function useLoggedIn() {
    const [loggedIn, setLoggedIn] = useState(!!jwt.value);
    useEffect(() => {
        setLoggedIn(!!jwt.value);

        const unsubscribe = jwt.subscribe(() => {
            setLoggedIn(!!jwt.value);
        });

        return () => {
            if (typeof unsubscribe === "function") {
                unsubscribe();
            }
        };
    }, []);
    return loggedIn;
}