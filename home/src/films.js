const API_SERVER = "http://localhost:8080";

export const getFilms = () => {
    fetch(`${API_SERVER}/films`)
    .then((res) => res.json())

}

export const getFilmsById = (id) => {
    fetch(`${API_SERVER}/films/${id}`)
    .then((res) => res.json())
}