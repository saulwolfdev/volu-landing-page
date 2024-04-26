import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 758px;
  height: 354px;
  display: flex;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px 30px;
  border-radius: 12px;
`;

const ContentContainer = styled.div`
  width: 514px;
  height: 196px;
`;

const ImageContainer = styled.img`
  width: 220px;
  height: 204px;
`;

const TitleContainer = styled.div`
  width: 343px;
  height: 45px;
  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.img`
  width: 20px;
  height: 20px;
`;

const DescriptionContainer = styled.div`
  width: 514px;
  height: 135px;
  margin-top: 16px;
`;

const Title = styled.h1` 
  flex-grow: 0;
  font-family: PublicSans;
  font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 45px;
  letter-spacing: normal;
  text-align: left;
  color: #181919;
  margin: 0;
`;

const LightedText = styled.span`
  color: #009379;
`;

const Description = styled.p` 
  height: 135px;
  align-self: stretch;
  flex-grow: 0;
  font-family: PublicSans;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: rgba(54, 56, 55, 0.6);
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

const BigCard = ({title, description, icon, image, altText}) => {

  const coreImage = (        
        <IconContainer src={`images/${icon}`} alt={altText} />
      );

  const imageBigCard = (
    <ImageContainer src={`images/${image}`} alt={altText} />    
  );

  return (
      <CardContainer>
          <ContentContainer>
              <TitleContainer>
                  <Title>{formatTitle(title)}</Title>
                  {coreImage}
              </TitleContainer>
              <DescriptionContainer>
                  <Description>{description}</Description>
              </DescriptionContainer>
          </ContentContainer>
         {imageBigCard}
      </CardContainer>
  );
};

export default BigCard;

