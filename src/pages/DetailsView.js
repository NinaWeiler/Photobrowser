import React, {useState, useEffect} from 'react'
import { getDetails } from '../services/imageService'
import { ImageDetails, Container } from '../styles/styles'
import { BackButton } from '../components/Buttons'

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
        <>
        <BackButton/>
        <Container>
        <ImageDetails>
        <h1>{image.title}</h1>
        <img src={image.url} alt='placeholder' />
        </ImageDetails>
        </Container>
        </>
    )
}

export default DetailsView