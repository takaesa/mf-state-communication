import React, { useState, useEffect } from "react";

import { getFilms, currency } from "./films";

export default function HomeContent() {
    const [films, setFilms] = useState([]);

    const filmsLink = 'http://localhost:8080/films'

    useEffect(() => {
        fetch(filmsLink, )
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
        <div style={{ display: 'grid', justifyItems:'center',gridTemplateColumns: '20% 20% 20% 20% 20%'}}>
            {films.map((film) => (
                <div style={{justifyItems:'center'}} key={film.id}>
                    <img src={film.image} alt={film.name} />
                    <div className="flex">
                        <div className="flex-grow font-bold ">
                            <a style={{display:'flex'   , textAlign:'center'}}>{film.name}</a>
                        </div>
                    </div>
                    <div className="text-sm mt-4">{film.description}</div>
                </div>
            ))}
        </div>
    );
}