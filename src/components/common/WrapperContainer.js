import React from "react";
import { Header,Slider,Values,Clients,Soon,News,Footer} from "components/common";
import mockData from "../mockData/mockData.json";
import styled from "styled-components";

const Contanier = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  max-width: 1240px;
  margin: 0px auto;
  grid-template-areas:
                    "contanierheader"
                    "contanierslider"
                    "containervalues"
                    "containerclients"
                    "containersoon"
                    "containernews"
                    "containerfooter";
  grid-template-rows:50px 3fr 2fr 1fr 1fr 1fr auto;
`;
const ContanierHeader = styled.header`
  width: 100%;
  height: 100%;
  background-color: #f8f9ff;
  grid-area: contanierheader;
`;
const ContanierSlider = styled.section`
  width: 100%;
  height: 100%;
  grid-area: contanierslider;
`;
const ContanierValues = styled.section`
  width: 100%;
  height: 100%;
  grid-area: containerclients;
`;
const ContanierClients = styled.section`
  width: 100%;
  height: 100%;
  grid-area: containervalues;
`;
const ContanierSoon = styled.section`
  width: 100%;
  height: 100%;
  grid-area: containersoon;
`;
const ContanierNews = styled.section`
  width: 100%;
  height: 100%;
  grid-area: containernews;
`;
const ContanierFooter = styled.footer`

  grid-area: containerfooter;
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