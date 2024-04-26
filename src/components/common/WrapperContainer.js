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

export function WrapperContainer() {
  return (
    <Contanier>
      <ContanierHeader>
        <Header />
      </ContanierHeader>
      <ContanierSlider>
        <Slider />
      </ContanierSlider> 
      <ContanierValues>
        <Values />
      </ContanierValues>
      {/* <ContanierClients>
        <Clients />
      </ContanierClients>
      <ContanierSoon>
        <Soon />
      </ContanierSoon>
      <ContanierNews>
        <News />
      </ContanierNews>
      <ContanierFooter>
        <Footer />
      </ContanierFooter> */}
    </Contanier>
  );
}
