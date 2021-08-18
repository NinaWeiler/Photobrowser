import React from "react";
import { TopLeftButton, BackIcon, RoundButton } from "../styles/GalleryStyles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Tooltip from "@material-ui/core/Tooltip";

export const BackButton = ({ handleClick }) => {
  return (
    <Tooltip title={<h1>Go back</h1>} aria-label="Go back">
      <TopLeftButton onClick={handleClick}>
        <BackIcon />
      </TopLeftButton>
    </Tooltip>
  );
};

export const GoToTopButton = ({ handleClick }) => {
  return (
    <RoundButton onClick={handleClick} data-testid="#topButton">
      <ExpandLessIcon fontSize="large" />
    </RoundButton>
  );
};
