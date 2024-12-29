import React, {useState, useEffect} from 'react'

import { getFilmsById } from '../../home/src/films';
// const filmdata = {
//     "id": Number,
//     "description": String,
//     "image": String,
//     "name": String,
//     "releaseDate": String,
//     "type" : [String]
// }
const DetailContent = () => {
    const idtest=1;
    const [film, setFilm] = useState(null);

    useEffect(() => {
        const fetchFilm = async () => {
            fetch(`http://localhost:8080/films/${idtest}`)
            .then((res) => res.json())
            .then(data => {
                setFilm(data);
            })
            .catch((error) => {
                console.log(error);
            });
        };
        fetchFilm();
    }, [idtest]);
    if(!film) return null;

  return (
    <div>
      <h1>{film.name}</h1>
      <p>{film.description}</p>
    </div>
  )
}

export default DetailContent