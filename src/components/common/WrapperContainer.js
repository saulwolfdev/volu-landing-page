import React from "react";
import { Header,Slider,Values,Clients,Soon,News,Footer} from "components/common";
import mockData from "../mockData/mockData.json";
import styled from "styled-components";

const Contanier=styled.div`
     display:grid;
     height: 100vh;
     width: 100%;
     max-width: 1200px;
     margin: 0px auto;
     padding: 0px 16px;
     grid-template-areas: "contanierheader"
                           "contanierslider"
                           "containervalues"
                           "containerclients"
                           "containersoon"
                           "containernews"
                           "containerfooter";
    grid-template-rows: 50px 3fr 1fr 1fr 1fr 1fr auto;
    border: 1px solid black;
    @media(min-width: 320px){
        //background-color: rebeccapurple;
    }
    @media(min-width: 500px){
        //background-color: red;
    } 
    @media(min-width:900px){
        //background-color: yellow;
    }
    @media(min-width: 1200px){
        //background-color: green;
    }
    @media(min-width: 1920px){
        //ackground-color: aqua;
    }
             
`;
 const ContanierHeader=styled.header`
 width: 100%;
 height: 100%;
 background-color:#F8F9FF;
 grid-area: contanierheader;
//padding: 10px 0;
 `;
 const ContanierSlider=styled.div`
 //background-color:yellow;
 grid-area: contanierslider;

 
 `;
  const ContanierValues=styled.section`
//background-color:green;
 grid-area: containerclients; 
  `;
 const ContanierClients=styled.div`
//background-color:orange;
 grid-area: containervalues; 
 `;
 const ContanierSoon=styled.div`
//background-color:aliceblue;
 grid-area: containersoon; 
 `;
 const ContanierNews=styled.div`
  //background-color:aqua;
grid-area: containernews; 
 `;
 const ContanierFooter=styled.footer`
   background-color:tomato;
grid-area: containerfooter; 
 
 `;

 const Logo = styled.img`
  display: block;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function WrapperContainer(){
    const { logo, buttons }= mockData.header;
    const { title, subtitle, description } = mockData.slider;

    const menuItems = buttons[0];
    const buttonRegister = buttons[1];
    const buttonStart = buttons[2];

    const logoButtonSart = (
        <Logo src={`images/${logo.logoPath}`} alt={logo.altText} />
      );
    const iconButtonStart = (
        <img src={`images/${logo.iconPath}`} alt={logo.altTextRocket} />
      );
    return(
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
                    <Values/>
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
    )
}