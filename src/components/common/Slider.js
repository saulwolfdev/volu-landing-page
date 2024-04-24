import React from "react";
import styled from "styled-components";
import gif from "../../images/gif_pc.gif";
console.log(gif)
const HeroContainer=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "text image";
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    padding: 60px 0;
`;
const TitleHero=styled.h1`
font-size: 60px;
`;
const Subtitle=styled.h2`
font-size: 30px;
`;
const SubtibleContent=styled.h3`
font-size: 28px;
`;
const SubtibleContent2=styled.h4`
font-size: 24px;
`;
const SubtibleContent3=styled.h5`
font-size: 20px;;
`;
const paragraph=styled.p`
    font-size: 18px;
`;
const paragraph2=styled.p`
 font-size: 16px;
`;
const HeroContent=styled.div`
grid-area: content;
`;
const HeroImage=styled.img`
width: 100%;
display: block;
height: auto;
grid-area: image;

`;

export const Slider=()=>{
    return(<>
    <HeroContainer>
            <HeroContent>

            </HeroContent>
            <HeroImage src={gif}/>
    </HeroContainer>
    </>)
}