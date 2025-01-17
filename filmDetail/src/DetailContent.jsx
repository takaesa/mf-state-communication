import React, { useState, useEffect, useRef } from 'react'

import { useParams } from "react-router-dom";

import placeAddToFavorite from "addtofavorite/placeAddToFavorite";

const DetailContent = () => {

  const { filmId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchFilm = async () => {
      fetch(`http://localhost:8080/films/${filmId}`)
        .then((res) => res.json())
        .then(data => {
          setFilm(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchFilm();
  }, [filmId]);

  const addToFavorite = useRef(null);

  useEffect(() => {
    if (addToFavorite.current) {
      placeAddToFavorite(addToFavorite.current, film.id);
    }
  }, [film]);

  if (!film) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }} >
      <div className='ratio ratio-16x9'>
        <iframe
          src={film.trailer}
          title="YouTube video player"
          allowFullScreen
          width="1200"
          height="600"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />

      </div>
      <div>
        <h1 style={{ fontWeight: 800, marginTop: 10 }}>{film.name}</h1>
        <h3 style={{ fontWeight: 600, marginTop: 10 }}>{film.type}</h3>
        <p style={{ fontSize: 18, fontWeight: 500, marginTop: 10 }}>{film.description}</p>
        <p style={{ fontSize: 18, fontWeight: 500, marginTop: 10 }}>Release Date: {film.releaseDate}</p>
        <div ref={addToFavorite}></div>
      </div>
    </div>
  )
}

export default DetailContent