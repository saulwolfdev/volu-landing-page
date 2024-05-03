import React from "react";
import styled from "styled-components";
import { MultiCard, BigCard } from "components/uiElements";

const ContainerCards = styled.div`
 width: 100%;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template:
    "itemex" 1fr
    "itemdos" 1fr
    "itemtres" 1fr
    "itemcuatro" 1fr
    "itemcinco" 1fr/
    1fr;
  gap: 30px;
  padding: 60px 0;
  border: 1px solid green;
  @media (min-width: 320px) {
    width: 100%;
    grid-template:
      "itemex" 1fr
      "itemdos" 1fr
      "itemtres" 1fr
      "itemcuatro" 1fr
      "itemcinco" 1fr/
      1fr;
    padding: 30px 0;
  }
  @media (min-width: 500px) {
    width: 100%;
    grid-template:
      "itemex" 1fr
      "itemdos" 1fr
      "itemtres" 1fr
      "itemcuatro" 1fr
      "itemcinco" 1fr/
      1fr;
    padding: 30px 0;
  }
  @media (min-width: 900px) {
    width: 1240px;
    grid-template:
      "itemex" 1fr
      "itemdos" 1fr
      "itemtres" 1fr
      "itemcuatro" 1fr
      "itemcinco" 1fr/
      1fr;
    padding: 30px 0;
  }
  @media (min-width: 1200px) {
    width: 1240px;
    grid-template:
      "itemex    itemex      itemdos" 1fr
      "itemtres  itemcuatro  itemcinco" 1fr/
      1fr 1fr 1fr;
    gap: 30px;
    padding: 60px 0;
  }
  @media (min-width: 1920px) {
    width: 1240px;
    grid-template:
      "itemex    itemex      itemdos" 1fr
      "itemtres  itemcuatro  itemcinco" 1fr/
      1fr 1fr 1fr;
    gap: 30px;
    padding: 60px 0;
  }
`;

const ContainerItemU = styled.div`
  grid-area: itemex;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
 border: 1px solid #ebebeb;
`;
const ContainerItemD = styled(ContainerItemU)`
  grid-area: itemdos;
`;
const ContainerItemT = styled(ContainerItemU)`
  grid-area: itemtres;
`;
const ContainerItemC = styled(ContainerItemU)`
  grid-area: itemcuatro;
`;
const ContainerItemCi = styled(ContainerItemU)`
  grid-area: itemcinco;
`;

export const Values = ({ values }) => {
  const { coreTitle, coreDescription, coreImage, coreIcon, listValues } =
    values;
  const { values: value, mission, vision, promise } = listValues;

  return (
    <ContainerCards>
      <ContainerItemU>
        <BigCard
                title={coreTitle}
                description={coreDescription}
                image={coreImage}
                icon={coreIcon}
            />
      </ContainerItemU>
      <ContainerItemD>
        <MultiCard
                icon={value.iconPath}
                altText={value.altText}
                title={value.title}
                subtitle={value.subtitle}
                description={value.description}
            /> 
      </ContainerItemD>
      <ContainerItemT>
        {/* <MultiCard
                icon={mission.iconPath}
                altText={mission.altText}
                title={mission.title}
                subtitle={mission.subtitle}
                description={mission.description}
            /> */}
        <h1>SMALL CARD</h1>
      </ContainerItemT>
      <ContainerItemC>
        {/* <MultiCard
                icon={vision.iconPath}
                altText={vision.altText}
                title={vision.title}
                subtitle={vision.subtitle}
                description={vision.description}
            /> */}
        <h1>SMALL CARD</h1>
      </ContainerItemC>
      <ContainerItemCi>
        {/* <MultiCard
                icon={promise.iconPath}
                altText={promise.altText}
                title={promise.title}
                subtitle={promise.subtitle}
                description={promise.description}
            /> */}
        <h1>SMALL CARD</h1>
      </ContainerItemCi>
    </ContainerCards>
  );
};
