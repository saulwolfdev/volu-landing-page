import React from 'react';
import { Card, Icon,TitleCard,SubtitleCard, DescriptionCard } from './CardStyles';

const MultiCard = ({icon, altText, title, subtitle, description}) => {

    const iconCard = (
        <Icon src={`images/${icon}`} alt={altText} />
      );

    return (
      <>       
        {iconCard}
        <TitleCard>{title}</TitleCard>
        <SubtitleCard>{subtitle}</SubtitleCard>
        <DescriptionCard>{description}</DescriptionCard>
      </>
    );
  };
  
  export default MultiCard;
  