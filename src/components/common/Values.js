import React from "react";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-align: left;
  margin: 0;
  position: relative;
  display: flex;
  color: #363837;
  @media (min-width: 320px) {
    font-size: 2rem;
  }
  @media (min-width: 500px) {
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    font-size: 2rem;
  }
  @media (min-width: 1200px) {
    font-size: 3.375rem;
  }
  @media (min-width: 1920px) {
    font-size: 3.375rem;
  }
`;


const Subtible = styled.h2`
  font-size: 1.5rem;
  margin: 8px 0;
  color: #363837;
  @media (min-width: 320px) {
    font-size: 1.5rem;
    margin: 8px 0;
  }
  `;

const ContainerCards=styled.div`
`;
const ContainerItemExtend=styled.div`


`;
const ContainerItemStandar=styled(ContainerItemExtend)`

`;

export const Values =()=>{
    return(
       <>
       Values
       </>
    )
   };