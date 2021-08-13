import React, {useState, useEffect} from 'react'
import { getThumbnails } from '../services/imageService'
import ImageThumbnail from '../components/ImageThumbnail'
import { GalleryContainer } from '../styles/styles'
import { GoToTopButton } from '../components/Buttons'


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
    
    const goToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    return (
        <GalleryContainer>
            <h1>Welcome to the gallery</h1>
            {images && images.map(image => (
                <ImageThumbnail image={image} key={image[0]}/>
            ))}
        <GoToTopButton handleClick={goToTop} />
        </GalleryContainer>
    )
}

export default GalleryView