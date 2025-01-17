import { render } from "solid-js/web";
import AddToFavorite from "./AddToFavorite";

export default function addToFavorite(el, id) {
    render(() => <AddToFavorite id={id} />, el);
}

