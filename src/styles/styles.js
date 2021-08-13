import styled from "styled-components";

export const Thumbnail = styled.img`
    border-radius: 3px;
    margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    :hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const GalleryContainer = styled.div`
  padding: 0 1rem;
  h1 {
    font-size: calc(10px + 2vmin);
  }

  @media (min-width: 900px) {
    padding: 0 5rem;
  }

  @media (min-width: 1068px) {
    padding: 0 10rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageDetails = styled(Container)`
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  h1 {
    font-size: calc(10px + 2vmin);
  }

  img {
    width: 80%;
    border-radius: 3px;
    margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  @media (max-width: 768px) {
    img {
      width: 300px;
    }
  }
`;

export const ButtonToTop = styled.button`
  display: block; 
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: red; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 100%;
  font-size: 18px; /* Increase font size */

  :hover {
      background-color: #555;
  }
`;
