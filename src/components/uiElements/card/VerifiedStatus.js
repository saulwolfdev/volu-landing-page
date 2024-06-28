import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;  
  padding: 20px;
`;

const Title = styled.h2`
    font-size: 1.6rem;
    line-height: 45px;
    color: #181919;
    margin-bottom: 10px;
`;

const Subtitle = styled.p`
    font-size: 1.1rem;
    line-height: 24px;
    color: rgba(54, 56, 55, 0.6);
    margin-bottom: 48px;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Item = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  display: flex;
  align-items: center;  
  text-align: left;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  color: #181919;
  padding-bottom: 8px;
`;

const ItemSubtitle = styled.p`  
  font-size: 1.1rem;  
  color: rgba(54, 56, 55, 0.6);
`;

const VerifiedStatus = ({ title, subtitle, cards }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ItemsContainer>
        {cards.map((card, index) => (
          <Item key={index}>
            <Icon src={`images/${card.iconPath}`} alt={card.title} />
            <ItemTextContainer>
              <ItemTitle>{card.title}</ItemTitle>
              <ItemSubtitle>{card.subtitle}</ItemSubtitle>
            </ItemTextContainer>
          </Item>
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default VerifiedStatus;
