export function apiCars() {
  const endPoint = 'http://localhost:8000/cars';
  return fetch(endPoint)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}