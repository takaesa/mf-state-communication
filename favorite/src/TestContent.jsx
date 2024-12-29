import React, { useState, useEffect } from 'react'

import { getFilmsById } from 'home/films'
export default function TestContent() {
    const [film, setFilm] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getFilmsById(1)
                setFilm(data)
            } catch (error) { setError(error.message) }
            getFilms();
        }
    }, []);

    if (!film) return null;

    return (
        <div style={{ height: 'max-content' }}>
            <div>TestContent</div>
            <div className='flex'>
                <h1 className='font-bold text-3xl flex-grow'>Film Name</h1>
            </div>
            <div className='mt-5'>
                Film Description
            </div>
            <div className='mt-5'>
                Film Type
            </div>
        </div>
    )
}
