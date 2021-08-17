import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDetails } from "../services/imageService";
import { ImageDetails, Container, FlexCenterContainer, LeftArrow, RightArrow } from "../styles/GalleryStyles";
import { BackButton } from "../components/Buttons";



const DetailsView = (props) => {
  const id = Number(props.match.params.id)
  const [image, setImage] = useState({});
  const [error, setError] = useState('')

  const { title, url } = image;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetails(id);
      if (data.status === 404) {
        setError('Failed to find image')
      }
      await setImage(data);
    };
    fetchData();
  }, [id]);

  const handleClick = () => {
    window.history.back();
  };

  const Previous = () => {
    return (
      <>
        {id <= 1 ? (
          <></>
        ) : (
          <FlexCenterContainer>
            <Link to={{ pathname: `/image/${id - 1}`}}>
              <LeftArrow />
            </Link>
          </FlexCenterContainer>
        )}
      </>
    );
  };

  const Next = () => {
    return (
      <>
        {id >= 200 ? (
          <></>
        ) : (
          <FlexCenterContainer>
            <Link to={{ pathname: `/image/${id + 1}`}}>
              <RightArrow />
            </Link>
          </FlexCenterContainer>
        )}
      </>
    );
  };

  return (
    <>
      <BackButton handleClick={handleClick} />
      {error ? error :(
      <Container>
        <Previous />
        <ImageDetails>
          <h1>{title}</h1>
          <img src={url} alt="block of color" />
        </ImageDetails>
        <Next />
      </Container>
      )}
    </>
  );
};

export default DetailsView;
