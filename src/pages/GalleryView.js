import React, {useState, useEffect} from 'react'
import { getThumbnails } from '../services/imageService'
import ImageThumbnail from '../components/ImageThumbnail'
import { GalleryContainer } from '../styles/styles'


const GalleryView = () => {
    const [images, setImages] = useState([])
   
    useEffect(() => {
        const fetchData = async () => {
            let data = await getThumbnails()
            setImages(data)
            console.log('images', images.length)

        }
        fetchData()
    }, [])
    
    
    return (
        <>
        <h2>Welcome to the gallery</h2>
        <GalleryContainer>
        {images && images.map(image => (
            <ImageThumbnail image={image} key={image[0]}/>
        ))}
        </GalleryContainer>
        </>
    )
}

export default GalleryView