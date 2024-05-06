import React from "react";
import styled from "styled-components";
import { Tabs, CardList } from "components/uiElements";

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  margin: 0;
  position: relative;
  line-height: 90px;
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
  margin: 16px 0;
  text-align: center;
  line-height: 30px;
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
const ContaninerClientBuyer = styled.div`
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
    grid-template-columns: 60% 40%;
    margin-top: 102px;
  }
  @media (min-width: 1920px) {
    display: grid;
    grid-template-areas: "image list";
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
    margin-top: 102px;
  }
`;

const ContainerClientsImage = styled.img`
  grid-area: image;
  display: none;
  width: 100;
  height: 100;
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
    height: 100vh;
    position: relative;
    z-index: 10;
  }
  @media (min-width: 1920px) {
    grid-area: image;
    display: block;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 10;
  }
`;

const ContentSupplier = styled.div`  
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
`;

const ContainerImageSupplier = styled.img`
  display: block;
  width: 68%;
  height: 100vh;
  position: relative;
  top: 1px;
  margin-top: 102px;
`;

const TitleTwo = styled.h2`
  color: #181919;
  text-align: center;
  font-size: 32px;
  line-height: 40px;
`;

const ContentListSupplier = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "list";
  
  grid-template-rows: 1fr;
  @media (min-width: 320px) {
    display: flex;
        flex-direction: column;
  }
  @media (min-width: 500px) {
    display: flex;
        flex-direction: column;
  }
  @media (min-width: 900px) {
    display: grid;
    display: flex;
        flex-direction: column;
  }
  @media (min-width: 1200px) {
    display: flex;
        flex-direction: column;
  }
  @media (min-width: 1920px) {
    display: flex;
        flex-direction: column;
  }
`;

const ContainerClientsFeatures = styled.ul`  
  width: auto;
  height: 100vh;
`;

const ContaninerClientSupplier = styled.div`
width: 100%;
  display: grid;
  grid-template-areas: "list";
  
  grid-template-rows: 1fr;
  @media (min-width: 320px) {
    display: flex;
        flex-direction: column;
  }
  @media (min-width: 500px) {
    display: flex;
        flex-direction: column;
  }
  @media (min-width: 900px) {
    display: grid;
    display: flex;
        flex-direction: column;
  }
  @media (min-width: 1200px) {
    display: flex;
        flex-direction: column;
  }
  @media (min-width: 1920px) {
    display: flex;
        flex-direction: column;
  }
`;

export const Clients = ({ clients }) => {
  const { contentBuyer, contentSupplier } = clients;

  const buyerTitle = contentBuyer.title;
  const buyerSubtitle = contentBuyer.subtitle;

  const supplierTitle = contentSupplier.title;
  const supplierSubtitle = contentSupplier.subtitle;
  console.log("contentBuyer", contentBuyer);
  console.log("contentSupplier", contentSupplier);
  const tabs = [
    {
      label: "Comprador",
      content: (
        <ContaninerClientTabs>
          <ContainerClientTitles>
            <Title>{buyerTitle}</Title>
            <Subtible>{buyerSubtitle}</Subtible>
          </ContainerClientTitles>
          <ContaninerClientBuyer>
            <ContainerClientsImage
              src={`images/${contentBuyer.image.buyerPath}`}
              alt={contentBuyer.image.altText}
            />
            <ContainerClientsFeatures>
              {contentBuyer.listBuyer.steps.map((step) => (
                <CardList
                  key={step.id}
                  icon={step.iconPath}
                  title={step.title}
                  subtitle={step.subtitle}
                  description={step.description}
                />
              ))}
            </ContainerClientsFeatures>
          </ContaninerClientBuyer>
        </ContaninerClientTabs>
      ),
    },
    {
      label: "Proveedor",
      content: (
        <ContaninerClientTabs>          
            <ContentSupplier>
              <Title>{supplierTitle}</Title>
              <Subtible>{supplierSubtitle}</Subtible>
            </ContentSupplier>
            <ContaninerClientSupplier>
              <ContainerClientsImage
                src={`images/${contentSupplier.image.supplierPath}`}
                alt={contentSupplier.image.altText}
              />
            <ContentListSupplier>
              <TitleTwo>{contentSupplier.title2}</TitleTwo>
              <Subtible>{contentSupplier.subtitle2}</Subtible>
              {/* {contentSupplier.listSupplier.access.map((step) => (
                <CardList
                  key={step.id}
                  icon={step.iconPath}
                  title={step.title}
                  description={step.description}
                />
              ))} */}
            </ContentListSupplier>
          </ContaninerClientSupplier>
        </ContaninerClientTabs>
      ),
    },
  ];

  return <Tabs tabs={tabs} />;
};
