import React from "react";
import styled from "styled-components";

import ImageSupplier from "../../images/ImagenProveedor.png";

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  margin: 0;
  position: relative;
  color: #363837;
  @media (min-width: 320px) {
    font-size: 2rem;
    text-align: center;
  }
  @media (min-width: 500px) {
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 1200px) {
    text-align: center;
    font-size: 3.375rem;
  }
  @media (min-width: 1920px) {
    text-align: center;
    font-size: 3.375rem;
  }
`;

const Subtible = styled.h2`
  font-size: 1.5rem;
  margin: 8px 0;
  text-align: center;
  color: #363837;
  @media (min-width: 320px) {
    font-size: 1.5rem;
    margin: 8px 0;
  }
`;

const ContaninerClientTabs = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;

const ContainerClientTitles = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
`;
const ContaninerClientSupplier = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: "list";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  @media (min-width: 320px) {
    display: grid;
    grid-template-areas: "list";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 500px) {
    display: grid;
    grid-template-areas: "list";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 900px) {
    display: grid;
    grid-template-areas: "list";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-areas: "image list";
    grid-template-columns: 50% 50%;
  }
  @media (min-width: 1920px) {
    display: grid;
    grid-template-areas:"image list";
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
  }
`;

const ContainerClientsImage = styled.img`
  grid-area: image;
  display: none;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  display: block;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 500px) {
    display: none;
  }
  @media (min-width: 900px) {
    display: none;
  }
  @media (min-width: 1200px) {
    grid-area: image;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  }
  @media (min-width: 1920px) {
    grid-area: image;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  }
`;

const ContainerClientsFeatures = styled.ul`
  grid-area: list;
  display: block;
`;

const ContaninerClientBuyer = styled.div``;

export const Clients = () => {
  return (
    <>
      <ContaninerClientTabs>
        <ContainerClientTitles>
          <Title>Soy comprador</Title>
          <Subtible>
            Lleva a cabo tus operaciones con confianza y eficiencia en volu
          </Subtible>
        </ContainerClientTitles>
        <ContaninerClientSupplier>
          <ContainerClientsImage src={ImageSupplier} />
          <ContainerClientsFeatures>
            <li>LISTA</li>
          </ContainerClientsFeatures>
        </ContaninerClientSupplier>
      </ContaninerClientTabs>
      <ContaninerClientBuyer></ContaninerClientBuyer>
    </>
  );
};
