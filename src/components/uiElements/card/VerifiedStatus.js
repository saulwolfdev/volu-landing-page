import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background-color: #f7f7f7;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
`;

const Subtitle = styled.p`
  color: #666;
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
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
`;

const ItemSubtitle = styled.p`
  font-size: 14px;
  color: #666;
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
            <ItemTitle>{card.title}</ItemTitle>
            <ItemSubtitle>{card.subtitle}</ItemSubtitle>
          </Item>
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default VerifiedStatus;
