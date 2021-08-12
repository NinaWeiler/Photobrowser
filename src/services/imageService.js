
// returns photo id and thumbbnail url
export const getThumbnails = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos/')
    let responseJSON = await response.json()
    return responseJSON.map(r => [r.id, r.thumbnailUrl])
}