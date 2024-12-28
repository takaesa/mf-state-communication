import React, { useState, useEffect } from "react";

import { getFilms, currency } from "./films";

export default function HomeContent() {
    const [films, setFilms] = useState([]);

    const filmsLink = 'http://localhost:8080/films'

    useEffect(() => {
        fetch(filmsLink)
            .then((res) => res.json())
            .then((data) => {
                setFilms(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
            
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%', gap: 5 }}>
            {films.map((film) => (
                <div key={film.id}>
                    <img src={film.image} alt={film.name} />
                </div>
            ))}
        </div>
    );
}