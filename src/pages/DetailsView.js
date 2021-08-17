import React, { useState, useEffect } from "react";
import { getDetails } from "../services/imageService";
import { ImageDetails, Container } from "../styles/GalleryStyles";
import { BackButton } from "../components/Buttons";

const DetailsView = (props) => {
  const id = props.history.location.state.id;
  const [image, setImage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetails(id);
      await setImage(data);
    };
    fetchData();
  }, []);

  const { title, url } = image;

  return (
    <>
      <BackButton />
      <Container>
        <ImageDetails>
          <h1>{title}</h1>
          <img src={url} alt="block of color" />
        </ImageDetails>
      </Container>
    </>
  );
};

export default DetailsView;
