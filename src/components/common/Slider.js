import React from "react";
import styled from "styled-components";
import gif from "../../images/gif_pc.gif";
import { Button } from "components/uiElements";

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

export const Slider=({slider})=>{
    const { title, subtitle, description,buttonRegister, buttonStart, iconButtonStart } = slider
        
    
    return(<>
    <HeroContainer>
            <HeroContent>
                <Title>
                {title.text}
                </Title>
                <SubtibleContent>
                {subtitle.text}
                </SubtibleContent>
                <Paragraph2>
                {description.text}
                </Paragraph2>
                <ButtonsContent>
                <Button
                    key={buttonRegister.id}
                    color={buttonRegister.color}
                    size={buttonRegister.size}
                >
                    {buttonRegister.text}
                </Button>
                <Button
                    key={buttonStart.id}
                    color={buttonStart.color}
                    size={buttonStart.size}
                    icon={iconButtonStart}
                >
                    {buttonStart.text}
                </Button>
                </ButtonsContent>
            </HeroContent>
            <HeroContentImage>
                <HeroImage src={gif}/>
            </HeroContentImage>
          
    </HeroContainer>
    </>)
}