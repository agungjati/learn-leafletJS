export const getLocationsBySearch = (search) => {
    return fetch("https://nominatim.openstreetmap.org/search?format=json&q=Indonesia " + search)
            .then(res => res.json());
}