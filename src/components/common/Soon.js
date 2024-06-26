import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 1440px;
  height: 744px;
  margin: 120px 0px;
`;

const SoonContainer = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.h3`
  color: #009379;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 60px;
  /* width: 517px;
    height: 90px; */
  width: 41.7%;
  height: auto;
  line-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #181919;
  margin-top: 12px;
`;

const ListContainer = styled.div`
  /* width: 1038px;
  height: 408px; */
  width: 83.7%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 80px;
`;

const ListItem = styled.div`
  /* width: 1038px;
  height: 79px; */
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: auto;
  height: 79px;
  margin-right: 24px;
`;

const ItemTitle = styled.h2`
  font-size: 24px;
  line-height: 36px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #363837;
`;

export const Soon = ({ soon }) => {
  const { textSoon, features } = soon;

  return (
    <MainContainer>
      <SoonContainer>
        <TextContainer>{textSoon.subtitle}</TextContainer>
        <Title>{textSoon.title}</Title>
        <ListContainer>
          {features.map((feature) => (
            <ListItem key={feature.id}>
              <Icon src={`images/${feature.iconPath}`} alt="icono" />
              <div>
                <ItemTitle>{feature.title}</ItemTitle>
                <Description>{feature.description}</Description>
              </div>
            </ListItem>
          ))}
        </ListContainer>
      </SoonContainer>
    </MainContainer>
  );
};