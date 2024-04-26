import React from 'react';
import { Card, Icon, Title, Subtitle, Description } from './CardStyles';

const MultiCard = ({icon, altText, title, subtitle, description}) => {

    const iconCard = (
        <Icon src={`images/${icon}`} alt={altText} />
      );

    return (
      <Card>       
        {iconCard}
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </Card>
    );
  };
  
  export default MultiCard;
  