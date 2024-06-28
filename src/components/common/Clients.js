import React from "react";
import styled from "styled-components";
import { Tabs, CardList } from "components/uiElements";
import CardRates from "components/uiElements/card/CardRates";
import VerifiedStatus from "components/uiElements/card/VerifiedStatus";

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



const ContainerTabsClients=styled.div`
width: 100%;
margin: 0 auto;

@media (min-width: 320px) {
    width: 100%;
    margin: 0 auto;

  }
  @media (min-width: 500px) {
    width: 100%;

  }
  @media (min-width: 900px) {
    width: 1240px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 1240px;
    margin: 0 auto;

  }
  @media (min-width: 1920px) {
    width: 1240px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;

  }

`;

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
    font-size: 3rem;
  }
  @media (min-width: 1920px) {
    text-align: center;
    font-size: 3rem;
  }
`;

const Subtible = styled.h2`
  font-size: 1.3rem;
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
    grid-template-areas:"image list";
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
width: 1280px;
height: 781px;
display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContainerImageSupplier = styled.img`
    display: block;
    width: auto;
    height: auto;
    margin-top: 102px;
`

const TitleTwo = styled.h2`
color: #181919;
text-align: center;
font-size: 32px;
    line-height: 40px;
`;

const ContentListSupplier = styled.div`
margin-top: 100px;
`;

const ContainerClientsFeatures = styled.ul`
  grid-area: list;
  display: block;
`;

const ContentCardSupplier= styled.div`
  display: grid;
  justify-items: flex-end;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 80px;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ContentCardRates = styled.div`
margin-top: 80px;
`
export const Clients = ({clients}) => {

  const { contentBuyer, contentSupplier, rateData, verifiedStatus } = clients

  const buyerTitle = contentBuyer.title
  const buyerSubtitle = contentBuyer.subtitle

  const supplierTitle = contentSupplier.title
  const supplierSubtitle = contentSupplier.subtitle

  console.log("verifiedStatus",verifiedStatus)
const { title3, subtitle3, rangeTitle, ranges, rateTitle, rates } = rateData;
const { title4, subtitle4, cards } = verifiedStatus;
  const tabs = [
    {
      label: 'Comprador',
      content: 
      <ContainerTabsClients>
        <ContainerClientTitles>
          <Title>{buyerTitle}</Title>
          <Subtible>
            {buyerSubtitle}
          </Subtible>
        </ContainerClientTitles>
        <ContaninerClientBuyer>
          <ContainerClientsImage src={`images/${contentBuyer.image.buyerPath}`} alt={contentBuyer.image.altText} />
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
      </ContainerTabsClients>
    },
    {
      label: 'Proveedor',
      content:       
      <ContainerTabsClients>
      <ContentSupplier>
        <Title>{supplierTitle}</Title>
          <Subtible>
            {supplierSubtitle}
          </Subtible>
          <ContainerImageSupplier src={`images/${contentSupplier.image.supplierPath}`} alt={contentSupplier.image.altText} />
          </ContentSupplier>
          <ContentListSupplier>
          <TitleTwo>{contentSupplier.title2}</TitleTwo>
          <Subtible>
            {contentSupplier.subtitle2}
          </Subtible>
          <ContentCardSupplier>
            {contentSupplier.listSupplier.access.map((step) => (
                  <CardList
                    key={step.id}
                    icon={step.iconPath}
                    title={step.title}                  
                    description={step.description}
                  />
                ))}
          </ContentCardSupplier>
          <ContentCardRates>
            <CardRates 
              title3={title3}
              subtitle3={subtitle3}
              rangeTitle={rangeTitle}
              ranges={ranges}
              rateTitle={rateTitle}
              rates={rates}
            />
          </ContentCardRates>
          <VerifiedStatus
            title={title4}
            subtitle={subtitle4}
            cards={cards} 
            iconPath={cards[0]?.iconPath} 
          />
          </ContentListSupplier>
      </ContainerTabsClients>
    }
  ];

  return (
    <Tabs tabs={tabs} />
  );
};
