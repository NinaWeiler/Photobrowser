import React, { useState, useEffect } from "react";
import { getThumbnails } from "../services/imageService";
import ImageThumbnail from "../components/ImageThumbnail";
import { GalleryContainer } from "../styles/GalleryStyles";
import { GoToTopButton } from "../components/Buttons";

const GalleryView = () => {
  const [images, setImages] = useState(
    JSON.parse(sessionStorage.getItem("data"))
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let data = await getThumbnails();
      if (data.status === 404) {
        sessionStorage.clear();
        setError("Error fetching images");
        setLoading(false);
        return;
      }
      setError("");
      sessionStorage.setItem("data", JSON.stringify(data));
      setImages(data);
      setLoading(false);
    };
    const data = sessionStorage.getItem("data");
    if (!data) {
      fetchData();
    }
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loading ? <h2>Loading... </h2> : <h2>Welcome to the gallery</h2>}
      {error ? error : <></>}
      <GalleryContainer>
        {images &&
          images.map((image) => (
            <ImageThumbnail image={image} key={image[0]} />
          ))}
        <GoToTopButton handleClick={goToTop} />
      </GalleryContainer>
    </>
  );
};

export default GalleryView;
