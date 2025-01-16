import React, { useState, useEffect } from 'react'

import { favorite, clearFavorite } from './favorite'
const MiniFavorite = () => {
    const [items, setItems] = useState(undefined);
    const [showFavorite, setShowFavorite] = useState(false);

    useEffect(() => {
        setItems(favorite.value?.favoriteItems);
        return favorite.subscribe((c) => {
            setItems(c?.favoriteItems);
        });
    }, []);

    if (!items) {
        return null;
    }
    return (
        <div>
            <span onClick={() => setShowFavorite(!showFavorite)} id='showFavorite_span'>
                <i className='ri-shopping-cart-2-fill' style={{ fontSize: 24 }} id='showFavorite'></i>
                {items.length}
            </span>
            {showFavorite && (
                <div style={{ position: 'absolute', padding: '1rem', border: '1px solid blue', width: 300, top: '1rem', right:'1rem' }}>
                    <div style={{ display: 'grid', gap: '.3rem', gridTemplateColumns: '1fr 3fr' }}>
                        {items.map((item) => (
                            <React.Fragment key={item.id}>
                                <img src={item.image} alt="" />
                                <div style={{ fontSize: 16 }}>{item.name}</div>
                            </React.Fragment>
                        ))}
                    </div>

                    <div style={{ display: 'flex' }}>
                        <button
                            id='clearFavorite'
                            style={{ background: 'white', border: '1px solid green', borderRadius: '2rem', color:'black' }}
                            onClick={clearFavorite}>
                            Clear Favorite
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MiniFavorite