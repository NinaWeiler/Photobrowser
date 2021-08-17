import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'

// returns photo id and thumbbnail url
export const getThumbnails = async () => {
    let response
    try {
        response = await axios.get(baseUrl + '/photos/')
        return response.data.slice(0, 200).map(r => [r.id, r.thumbnailUrl])
    } catch (err) {
        return err.response
    }
}

// returns full photo object
export const getDetails = async (id) => {
    let response
    try {
        response = await axios.get(baseUrl + '/photos/' + id)
        return response.data
    } catch (err) {
        return err.response
    }
}

