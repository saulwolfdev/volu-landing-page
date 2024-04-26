import React from "react";
import styled from "styled-components";
import IconSvgLampara from "../../images/DescubreSvg.svg";
import IconSvgValoes from "../../images/ValoresSvg.svg";
import IconSvgPromesas from "../../images/CorazonSvg.svg";
import IconSvgVisiones from "../../images/Ojo.svg";
import IconSvgMisiones from "../../images/CoheteSvg.svg";
//layout
const ContainerCards=styled.div`
width: 100%;
height: 100%;
background-color: #fff;
display: grid;
/* grid-template-columns: repeat(auto-fill,minmax(350px, 1fr));
grid-template-rows: repeat(auto-fill,minmax(350px, 1fr)); */
grid-template-areas: "itemex itemex itemdos"
                     "itemtres itemcuatro  itemcinco";
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
gap: 24px;
`;
const ContainerItemU=styled.div`
grid-area: itemex;
width: 100%;
height: 100%;
border-radius: 8px;
background-color: #fff;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .12);
background-color: #fff;
`;
const ContainerItemD=styled(ContainerItemU)`
grid-area: itemdos;
`;
const ContainerItemT=styled(ContainerItemU)`
grid-area: itemtres;
`;
const ContainerItemC=styled(ContainerItemU)`
grid-area: itemcuatro;
`;
const ContainerItemCi=styled(ContainerItemU)`
grid-area: itemcinco;
`;


//components
const SubtibleContent = styled.h3`
  font-size: 1.875rem;
  margin: 16px 0;
  color: #363837;
`;
const SubtibleContentInter = styled(SubtibleContent)`
  display: block;
  color: #009379;
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 16px;
`;

const TitleStar = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 394px;
  width: 30px;
  height: 30px;
`;

const IconSvgLight = styled.img`
  display: block;
  width: 200px;
  height: 200px;
`;
const IconSvgValues = styled.img`
  display: block;
  width: 60px;
  height: 60px;
`;
const IconSvgPromises = styled.img`
  display: block;
  width: 60px;
  height: 60px;
`;
const IconSvgVision = styled.img`
  display: block;
  width: 60px;
  height: 60px;
`;
const IconSvgMision = styled.img`
  display: block;
  width: 60px;
  height: 60px;
`;


const SubtibleContent3 = styled.h5`
  font-size: 20px;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 27px;
  margin: 0;
  margin-bottom: 16px;
  color: #333333;
  @media (min-width: 320px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }
  @media (min-width: 500px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }
  @media (min-width: 900px) {
    font-size: 1.25rem;
  font-weight: 500;
  line-height: 27px;
  margin: 0;
  margin-bottom: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 1.25rem;
  font-weight: 500;
  line-height: 27px;
  margin: 0;
  margin-bottom: 24px;
  }
  @media (min-width: 1920px) {
    font-size: 1.25rem;
  font-weight: 500;
  line-height: 27px;
  margin: 0;
  margin-bottom: 24px;
  }
`;
const Paragraph2 = styled.p`
  font-size: 16px;
`;


export const Values =()=>{
    return(
       <ContainerCards>
               <ContainerItemU>
                  <SubtibleContent>
                     Descubre cómo con Volu
                  </SubtibleContent>
               </ContainerItemU>
               <ContainerItemD>
                  2
               </ContainerItemD>
               <ContainerItemT>
                  3
               </ContainerItemT>
               <ContainerItemC>
                  4
               </ContainerItemC>
               <ContainerItemCi>
                  5
            </ContainerItemCi>
       </ContainerCards>
    )
   };