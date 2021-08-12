import React, {useState, useEffect} from 'react'
import { getDetails } from '../services/imageService'
import { ImageDetails } from '../styles/styles'

const DetailsView = (props) => {
    const id = props.history.location.state.id
    const [image, setImage] = useState({})
    
    useEffect(() => {
        const fetchData = async () => {
            const data =  await getDetails(id)
            await setImage(data)
        }
        fetchData()
    }, [])
    console.log('image', image)

    return (
        <ImageDetails>
        <h1>{image.title}</h1>
        <img src={image.url} alt='placeholder' />
        </ImageDetails>
    )
}

export default DetailsView