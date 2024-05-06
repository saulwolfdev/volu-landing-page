import React from 'react';
import styled from 'styled-components';
import {TitleCard,SubtitleCard, DescriptionCard } from './CardStyles';
const Card = styled.div`  
  /* height: 207px; */
  width: 509px;  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 24px;
`;

const Content = styled.div`
margin:12px;
`;

const Icon = styled.img`
  display: block;
  width: 32px;
  height: 32px;  
`;

const Title = styled.h2`  
  font-size: 30px;
  font-weight: 600;  
  text-align: left;
  margin-top: 16px;
  color: #363837;
  line-height: 45px;
`;

const Subtitle = styled.h3`  
  font-size: 16px;
  font-weight: 600; 
  text-align: left;  
  line-height: 24px;  
  color: #363837;
`;

const Description = styled.p`  
  font-size: 18px;  
  text-align: left;
  max-width: 481px;
  margin-top: 12px;
  color: #181919;
  line-height: 24px; 
`;

const CardList = ({ icon, title, subtitle, description }) => {
    return (
      <Card>   
        <Content>
        <Icon src={`images/${icon}`}  alt={title} />
        <TitleCard>{title}</TitleCard>
        <SubtitleCard>{subtitle}</SubtitleCard>
        <DescriptionCard>{description}</DescriptionCard>
        </Content> 
      </Card>
    );
};

export default CardList;
