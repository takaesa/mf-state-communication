import React, { useState, useEffect } from "react";

import { favorite, clearFavorite } from "./favorite";
const MiniFavorite = () => {
  const [items, setItems] = useState(undefined);
  const [showFavorite, setShowFavorite] = useState(false);

  useEffect(() => {
    setItems(favorite.value?.favoriteItems);

    const subscription = favorite.subscribe((c) => setItems(c?.favoriteItems));
    return () => {
      if (subscription && typeof subscription.unsubscribe === "function") {
        subscription.unsubscribe();
      }
    };
  }, []);

  if (!items) {
    return null;
  }
  return (
    <div>
      <span
        onClick={() => setShowFavorite(!showFavorite)}
        id="showFavorite_span"
      >
        <i
          className="ri-heart-line"
          style={{ fontSize: 24 }}
          id="showFavorite"
        ></i>
        {items.length}
      </span>
      {showFavorite && (
        <div
          style={{
            position: "absolute",
            padding: "1rem",
            border: "1px solid #2E7EA3",
            width: 300,
            top: "1rem",
            right: "1rem",
            borderRadius: '1rem',
            backgroundColor: 'white'
          }}
        >
          <div
            style={{
              display: "grid",
              gap: ".3rem",
              gridTemplateColumns: "1fr 3fr",
              color: 'black'
            }}
          >
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <img src={item.image} alt="" />
                <div style={{ fontSize: 16 }}>{item.name}</div>
              </React.Fragment>
            ))}
          </div>

          <div style={{ display: "flex" }}>
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
        </div>
      )}
    </div>
  );
};

export default MiniFavorite;
