import React from "react";
import styled from "styled-components";
import gif from "../../images/gif_pc.gif";
console.log(gif)

const HeroContainer=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "text image";
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    padding: 20px 0;
`;

const HeroContentImage=styled.div`
grid-area: image;
display: flex;
align-items: center;
`;
const HeroImage=styled.img`
width: 100%;
display: block;
height: auto;
`;
const HeroContent=styled.div`
grid-area: text;
display: grid;
grid-template-areas: "title"
                     "subttitle"
                     "paragraph"
                     "buttons";
`;

const Title=styled.h1`
font-size: 60px;
grid-area:title;
`;
const Subtitle=styled.h2`
font-size: 30px;
`;
const SubtibleContent=styled.h3`
grid-area: subttitle;
font-size: 28px;
`;
const SubtibleContent2=styled.h4`
font-size: 24px;
`;
const SubtibleContent3=styled.h5`
font-size: 20px;;
`;
const Paragraph=styled.p`
    font-size: 18px;
`;
const Paragraph2=styled.p`
grid-area: paragraph;
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
    cursor: pointer;
`;


export const Slider=()=>{
    return(<>
    <HeroContainer>
            <HeroContent>
                <Title>
                Evoluciona tu negocio
                </Title>
                <SubtibleContent>
                Revoluciona tus oportunidades
                </SubtibleContent>
                <Paragraph2>
                Conectando empresas con las mejores oportunidades del mercado mediante IA
                </Paragraph2>
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
                <HeroImage src={gif}/>
            </HeroContentImage>
          
    </HeroContainer>
    </>)
}