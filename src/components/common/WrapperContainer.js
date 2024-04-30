import React from "react";
import {
  Header,
  Slider,
  Values,
  Clients,
  Soon,
  News,
  Footer,
} from "components/common";
import mockData from "../mockData/mockData.json";
import styled from "styled-components";

const Contanier = styled.div`
  display: grid;
  min-height: 100vh;
  margin: 0px auto;
  border: 1px solid red;
  grid-template:
    "headerWrapper" 100px
    "sliderWrapper" 1fr
    "valuesWrapper" 1fr
    "clientsWrapper" 1fr
    "soonWrapper" 1fr
    "newsWrapper" 1fr
    "footerWrapper" 300px/1fr;
`;
const ContanierHeader = styled.header`
  grid-area: headerWrapper;
  border: 1px solid green;
  text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    background: #f8f9ff;
    z-index: 99;
`;


const ContanierSlider = styled.section`
  grid-area: sliderWrapper;
  border: 1px solid orange;  
`;
const ContanierValues = styled.section`
  grid-area: valuesWrapper;
  border: 1px solid purple;
`;
const ContanierClients = styled.section`
  grid-area: clientsWrapper;
  border: 1px solid black;
  display: grid; //agrege un grid para posicionar el contenido
  justify-content: center;
`;
const ContanierSoon = styled.section`
  grid-area: soonWrapper;
  border: 1px solid tomato;
`;
const ContanierNews = styled.section`
  grid-area: newsWrapper;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
`;
const ContanierFooter = styled.footer`
  grid-area: footerWrapper;
  border: 1px solid rebeccapurple;
`;

export function WrapperContainer() {
  const { logo, buttons } = mockData.header;
  const { title, subtitle, description } = mockData.slider;
  const { coreValue, listValues } = mockData.values;
  const { contentBuyer, contentSupplier } = mockData.clients;
  const { imageNews } =  mockData.news;
  const { image, navigationLinks, legalLinks } =  mockData.footer;

  const menuItems = buttons[0];
  const buttonRegister = buttons[1];
  const buttonStart = buttons[2];
  
  const iconButtonStart = (
    <img src={`images/${logo.iconPath}`} alt={logo.altTextRocket} />
  );

  const coreTitle = coreValue.title.text;
  const coreDescription = coreValue.description.text;
  const coreImage = `${coreValue.image.imagePath}`;
  const coreIcon = `${coreValue.title.iconPath}`;

  

  return (
    <Contanier>
      <ContanierHeader>
        <Header
          header={{
            logo,
            menuItems,
            buttonRegister,
            buttonStart,
            logo,           
            iconButtonStart,
          }}
        />
      </ContanierHeader>
      <ContanierSlider>
        <Slider
            slider={{
                title,
                subtitle,
                description,
                buttonRegister,
                buttonStart,
                iconButtonStart
            }}
            />
      </ContanierSlider>
      <ContanierValues>
      <Values
            values={{
                coreTitle,
                coreDescription,
                coreImage,
                coreIcon,
                listValues
            }}
            />
      </ContanierValues>
      <ContanierClients>
        <Clients
        clients ={{
          contentBuyer, 
          contentSupplier
        }}
         />
      </ContanierClients>
      <ContanierSoon>{/* <Soon/> */}</ContanierSoon>
      <ContanierNews>
        <News
        news={{
          imageNews
        }}
        />
        </ContanierNews>
      <ContanierFooter>
        <Footer
        footer={{
          image,
          navigationLinks,
          legalLinks
        }}
        />
        </ContanierFooter>
    </Contanier>
  );
}
