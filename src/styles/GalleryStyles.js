import styled from "styled-components";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

// used in GalleryView
export const Thumbnail = styled.img`
    border-radius: 3px;
    margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    :hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const GalleryContainer = styled.div`
  padding: 0 1rem 9rem 1rem;
  h1 {
    font-size: calc(10px + 2vmin);
  }

  @media (min-width: 900px) {
    padding: 0 5rem 9rem 5rem;
  }

  @media (min-width: 1068px) {
    padding: 0 10rem 9rem 10rem;
  }
`;

// used in DetailsView
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 9rem;
`;

export const FlexCenterContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ImageDetails = styled(Container)`
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  h1 {
    font-size: calc(10px + 2vmin);
    width: 500px;
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

// button to top of page
export const RoundButton = styled.button`
  display: block;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #00868b;
  color: #fafafa;
  cursor: pointer;
  padding: 8px;
  border-radius: 100%;
  :hover {
    background-color: #4a777a;
  }
`;

// back button
export const TopLeftButton = styled.button`
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 99;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: inherit;
`;

export const BackIcon = styled(KeyboardBackspaceIcon)`
  width: 30px !important;
  height: 30px !important;
  font-size: 30px !important;
`;

// navigation arrows in details view
export const LeftArrow = styled(KeyboardArrowLeftIcon)`
  width: 40px !important;
  height: 40px !important;
  font-size: 40px !important;
`;

export const RightArrow = styled(KeyboardArrowRightIcon)`
  width: 40px !important;
  height: 40px !important;
  font-size: 40px !important;
`;
