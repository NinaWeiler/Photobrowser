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

  @media (min-width: 900px) {
      padding: 0 5rem;
  }

  @media (min-width: 1068px) {
    padding: 0 10rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageDetails = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  max-width: 600px

  h1 {
    font-size: calc(10px + 2vmin);
  }

  img {
    flex-shrink: 0 1 100%;
    border-radius: 3px;
    margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
