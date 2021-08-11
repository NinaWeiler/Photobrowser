/*
export const getThumbnails = () => {
    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
    .then(json => json.map(j => [j.id, j.thumbnailUrl]))
    .then(json => console.log(json))

} */

export const getThumbnails = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos/')
    let responseJSON = await response.json()
    return responseJSON.map(r => [r.id, r.thumbnailUrl])
}