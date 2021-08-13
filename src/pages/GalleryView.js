import React, {useState, useEffect} from 'react'
import { getThumbnails } from '../services/imageService'
import ImageThumbnail from '../components/ImageThumbnail'
import { GalleryContainer, ButtonToTop } from '../styles/styles'


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
            <ButtonToTop onClick={goToTop}>^</ButtonToTop>
        </GalleryContainer>
    )
}

export default GalleryView