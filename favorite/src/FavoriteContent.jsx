import React, { useState, useEffect } from 'react'

<<<<<<< HEAD
const FavoriteContent = () => {
    const [token, setToken] = useState("");

    useEffect(() => {

    },[])
    return (
        <div>JWT: {token}</div>
=======
import { getFilmsById } from '../../home/src/films'

const FavoriteContent = () => {
    const id = 1;
    const [film, setFilm] = useState(null)
    if (!film)
        return (null)

    useEffect(() => {
        if (id) {
            getFilmsById(id)
                .then((res) =>res.json())
                .then((data) => {
                    setFilm(data);
                })
                .catch((error) => {
                    console.log(error);
                    console.log(data);
                });
        }
        else {
            setFilm(null);
        }
    }, [id])

    return (
        <div className='grid grid-cols-2 gap-5'>
            <div>
                <img src={film.image} alt={film.name} />
            </div>
            <div className='flex'>
                <h1 className='font-bold text-3xl flex-grow'>{film.name}</h1>
            </div>
            <div className='mt-5'>{film.description}</div>
            <div className='mt-5'>{film.type}</div>
            <div>abc</div>
        </div>
>>>>>>> parent of 6753eb5 (create communication in favorite)
    )
}

export default FavoriteContent