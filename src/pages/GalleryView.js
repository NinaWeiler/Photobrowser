import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { getThumbnails } from '../services/imageService'


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
        {images && images.map(item => (
            <Link to={{pathname:`/image/${item[0]}`, state: {id:`${item[0]}`} }} key={item[0]}><img  src={item[1]} alt='placeholder' /></Link>
        ))}
        
        </>
    )
}

export default GalleryView