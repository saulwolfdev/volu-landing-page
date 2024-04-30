import React from "react";
import styled from "styled-components";
import { Button } from "components/uiElements";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 1439px;
  height: 376px;
  position: relative;
  background-color: #f8f9ff;
`;

const LeftSection = styled.div`
  margin: 33.5px 0px 32.5px 84px;
`;

const TextContainer = styled.div`
  width: 716px;
  height: 310px;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 512px;
  height: 433.7px;
  position: absolute;
  right: 60px;
  bottom: 0px;
`;

const Title = styled.h1`
  font-size: 26px;
  line-height: 36px;
  color: #363837;
`;
const CashContent = styled.div`
  display: flex;
  align-items: baseline;
`;

const CashText = styled.h2`
  margin-right: 8px;
  font-size: 48px;
  margin-top: 16px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
const Description = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #363837;
  margin-bottom: 24px;
  margin-top: 12px;
`;

export const News = ({ news }) => {
  const { imageNews, text, buttonNews, iconButtonStart } = news;

  return (
    <Container>
      <LeftSection>
        <TextContainer>
          <div style={{ padding: "24px", width: "620px", height: "262px" }}>
            <Title>{text.title}</Title>
            <CashContent>
              <CashText>{text.titleCash}</CashText>
              {""}
              <Text>{text.titleFinal}</Text>
            </CashContent>
            <Description>{text.description}</Description>
            <Button key={buttonNews.id} icon={iconButtonStart}>
              Lo quiero
            </Button>
          </div>
        </TextContainer>
      </LeftSection>
      <RightSection>
        <Image src={`images/${imageNews.imagePath}`} alt="Imagen descriptiva" />
      </RightSection>
    </Container>
  );
};
