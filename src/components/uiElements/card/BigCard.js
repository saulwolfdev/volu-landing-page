import React from "react";
import styled from "styled-components";

import { TitleCard,DescriptionCard } from './CardStyles';

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template:
    "textcard imagecard" 1fr/
    1fr auto;
  gap: 30px;
`;

const CardContainerText = styled.div`
grid-area: textcard;
`;
const CardContainerImage = styled.div`
grid-area: imagecard;
`;

const CardContainerImageImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
const IconContainer = styled.img`
  width: 20px;
  height: 20px;
`;

const LightedText = styled.span`
  color: #009379;
`;

const formatTitle = (title) => {
  const mainTitle = title.slice(0, -4);
  const highlightedTitle = title.slice(-4);

  return (
    <>
      {mainTitle}
      <LightedText>{highlightedTitle}</LightedText>
    </>
  );
};

const BigCard = ({ title, description, icon, image, altText }) => {
  const coreImage = <IconContainer src={`images/${icon}`} alt={altText} />;

  const imageBigCard = <CardContainerImageImg src={`images/${image}`} alt={altText} />;

  return (
    <CardContainer>
      <CardContainerText>
           <TitleCard>{formatTitle(title)}  {coreImage}</TitleCard>
          <DescriptionCard>{description}</DescriptionCard>
      </CardContainerText>
      <CardContainerImage>{imageBigCard}</CardContainerImage>
    </CardContainer>
  );
};

export default BigCard;
