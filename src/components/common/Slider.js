import React from "react";
import styled from "styled-components";
import gif from "../../images/gif_pc.gif";
import stars from "../../images/Stars.svg";
import circle from "../../images/Circle.svg";
import gridCircles from "../../images/CirclesGrid.svg";
import backgroundElipse from "../../images/BackgroungElipse.svg";
const HeroContainer=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "text image";
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
    padding: 130px 0;
`;

const HeroContentImage=styled.div`
grid-area: image;
display: flex;
align-items: center;
position: relative;
`;
const HeroDesktopImage=styled.img`
    width: 130%;
    display: block;
    height: auto;
    position: absolute;
    top: 0;
    left: -38px;
    z-index: 20px;

`;
const HeroDesktopCircle=styled(HeroDesktopImage)``;
const HeroDesktopGridCircle=styled(HeroDesktopImage)``;
const HeroDesktopElipse=styled(HeroDesktopImage)``;

const HeroContent=styled.div`
width: 100%;
align-items: center;
justify-content: center;
`;
const Title=styled.h1`
  font-size: 54px;
  font-weight: 900;
  text-align: left;
  margin: 0;
  position: relative;
  display: flex;
  color:#363837;
`;

const TitleInter=styled(Title)`
 display: block;
 color:#009379;
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 16px;
;`
const TitleStar=styled.img`
    width: 60px;
    height: 60px;
    display: block;
    position: absolute;
    top: 0;
    right: 26px;
`;


const Subtitle=styled.h2`
font-size: 30px;
`;
const SubtibleContent=styled.h3`
font-size: 30px;
margin:16px 0;
color:#363837;
`;
const SubtibleContent2=styled.h4`
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 24px;
    color:#333333;
`;
const SubtibleContent3=styled.h5`
font-size: 20px;;
`;
const Paragraph=styled.p`
    font-size: 18px;
`;
const Paragraph2=styled.p`
 font-size: 16px;
`;



const ButtonsContent=styled.div`
grid-area: butttons;
display: flex;
justify-items: center;

`;

const Button=styled.button`
    display: flex;
    align-items: center;
    align-content: center;
    font-size: 16px;    
    padding: 16px 50px;
    text-align: center;
    background-color:#009379;
    color: #ffffff;
    border-radius: 20px;
    border: 0;
    margin-right: 16px;
    cursor: pointer;
`;


export const Slider=()=>{
    return(<>
    <HeroContainer>
            <HeroContent>
                <Title>
                Evoluciona tu <TitleInter>negocio</TitleInter>
                <TitleStar src={stars}/>
                </Title>
                <SubtibleContent>
                Revoluciona tus oportunidades
                </SubtibleContent>
                <SubtibleContent2>
                Conectando empresas con las mejores oportunidades del mercado mediante IA
                </SubtibleContent2>
                <ButtonsContent>
                    <Button>
                        Registrarse
                    </Button>
                    <Button>
                       Comenzar
                    </Button>
                </ButtonsContent>
            </HeroContent>
            <HeroContentImage>
                <HeroDesktopImage src={gif}/>
                
            </HeroContentImage>
          
    </HeroContainer>
    </>)
}