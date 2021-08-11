import React, {useState} from 'react'
import { getThumbnails } from '../services/imageService'


const ImageGridView = () => {
    const [urls, setUrls] = useState([])
    console.log(urls)

    const addUrls = async () => {
        let thumbnails = await getThumbnails()
        setUrls(thumbnails)
    }

    return (
        <>
        <h2>Welcome to the gallery</h2>
        <button onClick={() => addUrls()}>fetch</button>
        <>
        {urls.map(u => (
            <img key={u[0]} src={u[1]} alt='placeholder' />
        ))}
        </>
        
        
        
        </>
    )
}

export default ImageGridView