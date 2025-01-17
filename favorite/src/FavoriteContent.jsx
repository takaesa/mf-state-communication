import React, { useState, useEffect } from "react";

import { favorite, clearFavorite } from "favorite/favorite";

const FavoriteContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = favorite.subscribe((val) => {
      setItems(val?.favoriteItems ?? []);
    });

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  return (
    <>

      {items.map((item) => (
        <React.Fragment key={item.id}>
          <div
            style={{
              display: "grid",
              gap: ".3rem",
              gridTemplateColumns: "1fr 3fr",
              color: 'black',
              marginTop: '1rem'
            }}
          >
            <img src={item.image} alt="" style={{ display: 'flex', justifySelf: 'center' }} />
            <div >
              <div style={{ fontSize: 24 }}>{item.name}</div>
              <div style={{ fontSize: 20, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {item.type}
              </div>
              <div style={{ fontSize: 16 }}>{item.description}</div>
              <div style={{ fontSize: 16 }}> <span style={{ fontSize: 18, fontWeight: 'bold' }}>Release Date:</span>  {item.releaseDate}</div>
            </div>
          </div >
        </React.Fragment>
      ))}

      {items.length > 0 && (
        <div style={{ display: "flex", justifyContent:'flex-end' }}>
          <button
            id="clearFavorite"
            style={{
              background: "black",
              border: "1px solid green",
              borderRadius: ".5rem",
              color: "white",
              padding: '.5rem 1.2rem',
              fontSize: 18,
              marginTop: '1rem'
            }}
            onClick={clearFavorite}
          >
            Clear Favorite
          </button>
        </div>
      )}
    </>
  );
};

export default FavoriteContent;
