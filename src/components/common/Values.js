import { MultiCard, BigCard } from "components/uiElements";
import React from "react";

export const Values = ({ values }) => {
  const { coreTitle, coreDescription, coreImage, coreIcon, listValues } = values;    

  return (
    <>
      <BigCard
        title={coreTitle}
        description={coreDescription}
        image={coreImage}
        icon={coreIcon}
      />
      {Object.values(listValues).map((value) => (
        <MultiCard
          key={value.id}
          icon={value.iconPath}
          altText={value.altText}
          title={value.title}
          subtitle={value.subtitle}
          description={value.description}
        />
      ))}
    </>
  );
};
