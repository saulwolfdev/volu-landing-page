import React from "react";
import { Header,Slider,Values,Clients,Soon,News,Footer} from "components/common";
import styled from "styled-components";

const Contanier=styled.div`
     display:grid;
     height: 100vh;
     background-color: gray;
     grid-template-areas: "contanierheader"
                           "contanierslider"
                           "containervalues"
                           "containerclients"
                           "containersoon"
                           "containernews"
                           "containerfooter";
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        
`;
 const ContanierHeader=styled.div`
 width: 100%;
 height: 100%;
 background-color:red;
 grid-area: contanierheader;
 `;
 const ContanierSlider=styled.div`
 background-color:yellow;
 grid-area: contanierslider; 
 `;


  const ContanierValues=styled.div`
background-color:green;
 grid-area: containerclients; 
  `;


 const ContanierClients=styled.div`
background-color:orange;
 grid-area: containervalues; 
 
 `;
 const ContanierSoon=styled.div`
background-color:aliceblue;
 grid-area: containersoon; 
 `;
 const ContanierNews=styled.div`
  background-color:aqua;
grid-area: containernews; 
 `;
 const ContanierFooter=styled.div`
   background-color:tomato;
grid-area: containerfooter; 
 
 `;
export function WrapperContainer(){
    return(
        
        <Contanier>
            <ContanierHeader>
                    <Header/>
            </ContanierHeader>
        <ContanierSlider>
                    <Slider/>
        </ContanierSlider>
         <ContanierValues>
                    <Values/>
         </ContanierValues>
         <ContanierClients>
                    <Clients/>
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