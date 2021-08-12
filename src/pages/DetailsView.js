import React, {useState, useEffect} from 'react'
import { getDetails } from '../services/imageService'

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
        <p>{image.title}</p>
        <img src={image.url} alt='placeholder' />
        </>
    )
}

export default DetailsView