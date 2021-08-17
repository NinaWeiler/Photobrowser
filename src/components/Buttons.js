import React from 'react';
import { Link } from 'react-router-dom'
import { TopLeftButton, BackIcon, RoundButton } from '../styles/GalleryStyles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';



export const BackButton = () => {
    return (
        <Link to='/' >
            <TopLeftButton><BackIcon/></TopLeftButton>
        </Link>
    )
}

export const GoToTopButton = ({handleClick}) => {
    return (
        <RoundButton onClick={handleClick}><ExpandLessIcon fontSize='large'/></RoundButton>
    )
}