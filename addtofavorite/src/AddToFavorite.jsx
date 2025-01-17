import { createEffect, createSignal, Show } from "solid-js"

import { jwt, addToFavorite } from "favorite/favorite"

export default ({ id }) => {
    const [loggedIn, setLoggedIn] = createSignal(false);

    createEffect(() => {
        const unsubscribe = jwt.subscribe((token) => {
            setLoggedIn(!!token);
        });
        return () => unsubscribe();
    });


    return (
        <Show when={loggedIn}>
            <button onClick={() => addToFavorite(id)}
                style={{ border: '1px solid #2E7EA3', color: '#2E7EA3', padding: '1rem .5rem' }}>
                Add to Favorite
            </button>
        </Show>
    )
}