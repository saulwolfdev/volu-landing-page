import React from "react";
import styled from "styled-components";
import { Tabs } from "components/uiElements";



const Title = styled.h1`
  font-size: 2rem;
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




const ContaninerClientTabs=styled.div`
width: 100%;
height: 100%;
text-align: center;
`;

const ContainerBuyer= styled.div`
width: 100%
`

const ContaninerClientBuyer=styled.div`
width: 100%;
display: grid;
grid-template-areas: "image list";
;
grid-template-columns: 50% 50%;
grid-template-rows: 1fr;
`;

const ContainerClientsImage=styled.img`
grid-area: image;
display: block;
width: 100%;
height: 100%;

`;

const ContainerClientsFeatures=styled.ul`
grid-area: list;
display: block;

`;

const ContaninerClientSupplier=styled.div`

`;


export const Clients=()=>{
  const tabs = [
    {
      label: 'Comprador',
      content: 
      <div>
      <ContainerBuyer>
                <Title>
                    Soy comprador
                </Title>
                <Subtible>
                Lleva a cabo tus operaciones con confianza y eficiencia en volu
                </Subtible>
            <ContaninerClientBuyer>
                <ContainerClientsImage src={""}/>
                <ContainerClientsFeatures>
                    <li>LISTA</li>
                </ContainerClientsFeatures>
            </ContaninerClientBuyer>
            </ContainerBuyer>
      </div>
    },
    {
      label: 'Proveedor',
      content: 
      <div>
      <ContainerBuyer>
                <Title>
                    Soy proveedor
                </Title>
                <Subtible>
                Lleva a cabo tus operaciones con confianza y eficiencia en volu
                </Subtible>
            <ContaninerClientBuyer>
                <ContainerClientsImage src={""}/>
                <ContainerClientsFeatures>
                    <li>LISTA</li>
                </ContainerClientsFeatures>
            </ContaninerClientBuyer>
            </ContainerBuyer>
      </div>
    }
  ];

    return(
      <>
      <Tabs tabs={tabs} />
      <ContaninerClientTabs>
          
            <ContaninerClientSupplier>

            </ContaninerClientSupplier>
        </ContaninerClientTabs>
      </>
    )
};