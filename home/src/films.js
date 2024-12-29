const API_SERVER = "http://localhost:8080";

export const getFilms = () => {
    fetch(`${API_SERVER}/films`)
    .then((res) => res.json())
    .catch((error) => {
        console.log(error);
    });
}

export async function getFilmsById(id) {
    fetch(`http://localhost:8080/films/${id}`)
    .then((res) => res.json())
    .then(data => {
        console.log("1");
        console.log(data); 
    })
    .catch((error) => {
        console.log(error);
    });
}
