import React from 'react'
import {Link} from 'react-router-dom' 
import { Thumbnail } from '../styles/styles'

const ImageThumbnail = ({image}) => {
    return (
        
        <Link
        to={{ pathname: `/image/${image[0]}`, state: { id: `${image[0]}` } }}
        key={image[0]}
      >
        <Thumbnail src={image[1]} alt="placeholder" />
      </Link>
    )
}

export default ImageThumbnail