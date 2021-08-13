import React, {useState, useEffect} from 'react'
import { getThumbnails } from '../services/imageService'
import ImageThumbnail from '../components/ImageThumbnail'
import { GalleryContainer, RoundButton } from '../styles/styles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


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
            <RoundButton onClick={goToTop}><ExpandLessIcon fontSize='large'/></RoundButton>
        </GalleryContainer>
    )
}

export default GalleryView