import React, { useState, useEffect } from "react";
import { getDetails } from "../services/imageService";
import { Link } from "react-router-dom";
import { ImageDetails, Container, LeftArrow, RightArrow } from "../styles/GalleryStyles";
import { BackButton } from "../components/Buttons";

const DetailsView = (props) => {
  const id = Number(props.match.params.id)
  const [image, setImage] = useState({});

  const { title, url } = image;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetails(id);
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={{ pathname: `/image/${id - 1}`}}>
              <LeftArrow />
            </Link>
          </div>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={{ pathname: `/image/${id + 1}`}}>
              <RightArrow />
            </Link>
          </div>
        )}
      </>
    );
  };


  return (
    <>
      <BackButton handleClick={handleClick} />
      <Container>
        <Previous />
        <ImageDetails>
          <h1>{title}</h1>
          <img src={url} alt="block of color" />
        </ImageDetails>
        <Next />
      </Container>
    </>
  );
};

export default DetailsView;
