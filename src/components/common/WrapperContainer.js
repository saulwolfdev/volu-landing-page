import React from "react";
import { Header,Slider,Values,Clients,Soon,News,Footer} from "components/common";
import mockData from "../mockData/mockData.json";
import styled from "styled-components";

const Contanier = styled.div`
  display: grid;
  min-height: 100vh;
  margin: 0px auto;
  border: 1px solid red;
  grid-template:
                "headerWrapper"     60px
                "sliderWrapper"     1fr
                "valuesWrapper"     1fr 
                "clientsWrapper"    1fr
                "soonWrapper"       1fr
                "newsWrapper"       1fr
                "footerWrapper"     300px/1fr;
`;
const ContanierHeader = styled.header`
  grid-area: headerWrapper;
  border: 1px solid green;
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
`;
const ContanierSoon = styled.section`
  grid-area: soonWrapper;
  border: 1px solid tomato;
`;
const ContanierNews = styled.section`
  grid-area: newsWrapper;
  border: 1px solid gray;
`;
const ContanierFooter = styled.footer`
  grid-area: footerWrapper;
  border: 1px solid rebeccapurple;
`;
const Logo = styled.img`  
height: auto;
display: flex;
align-items: center;
justify-content: center;
`;
export function WrapperContainer() {
  const { logo, buttons }= mockData.header;
  const { title, subtitle, description } = mockData.slider;
  const { coreValue, listValues } = mockData.values;
  
  const menuItems = buttons[0];
  const buttonRegister = buttons[1];
  const buttonStart = buttons[2];

  const logoButtonSart = (
      <Logo src={`images/${logo.logoPath}`} alt={logo.altText} />
    );

    const logoButtonStart = (
      <Logo src={`images/${logo.logoPath}`} alt={logo.altText} />
    );
  const iconButtonStart = (
      <img src={`images/${logo.iconPath}`} alt={logo.altTextRocket} />
    );

    const coreTitle = coreValue.title.text;
  const coreDescription = coreValue.description.text;   
  const coreImage = `${coreValue.image.imagePath}`
  const coreIcon = `${coreValue.title.iconPath}`
  return (
    <Contanier> 
    <ContanierHeader>
            <Header
            header={{
                logo, 
                menuItems,
                buttonRegister,
                buttonStart,
                logoButtonSart,
                iconButtonStart
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
            <Clients/>
 </ContanierValues>
 <ContanierClients>
            <Values
            values={{
                coreTitle,
                coreDescription,
                coreImage,
                coreIcon,
                listValues
            }}
            />
 </ContanierClients>
 <ContanierSoon>
            <Soon/>
 </ContanierSoon>
  <ContanierNews>
          <News/>
  </ContanierNews>
  <ContanierFooter>
          <Footer/>
  </ContanierFooter>
</Contanier>
  );
}