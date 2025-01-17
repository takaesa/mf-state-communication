import React, { useState, useEffect } from "react";

import { getFilms } from "./films";
import { Link } from "react-router-dom";

import { addToFavorite, useLoggedIn } from "favorite/favorite";
import { favorite } from "../../favorite/src/favorite";

export default function HomeContent() {
    const loggedIn = useLoggedIn();

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
        <div style={{ display: 'grid', justifyItems: 'center', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
            {films.map((film) => (
                <div style={{ justifyItems: 'center' }} key={film.id}>
                    <Link to={`/films/${film.id}`}>
                        <img src={film.image} alt={film.name} />
                    </Link>
                    <div className="flex">
                        <div className="flex-grow font-bold ">
                            <Link to={`/films/${film.id}`}>
                                <a style={{ display: 'flex', textAlign: 'center' }}>{film.name}</a>
                            </Link>
                        </div>
                    </div>
                    <div className="text-sm mt-4">{film.description}</div>
                    {loggedIn && (
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <button
                                style={{
                                    color: 'white',
                                    backgroundColor: 'green',
                                    padding: '.5rem 1.2rem',
                                    borderRadius: '1rem',
                                    fontSize: 18,
                                    backgroundColor: 'black',
                                    marginTop: '1rem'
                                }}
                                onClick={() => addToFavorite(film.id)} id={`addtofavorite_${film.id}`}>
                                Add to Favorite
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}