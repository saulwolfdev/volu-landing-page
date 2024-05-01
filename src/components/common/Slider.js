import React from "react";
import styled from "styled-components";
import gif from "../../images/gif_pc.gif";
import stars from "../../images/Stars.svg";
import circle from "../../images/Circle.svg";
import gridCircles from "../../images/CirclesGrid.svg";
import backgroundElipse from "../../images/BackgroungElipse.svg";
import { Button } from "components/uiElements";

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "text";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media (min-width: 320px) {
    grid-template-areas: "text";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

  }
  @media (min-width: 500px) {
    grid-template-areas: "text";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

  }
  @media (min-width: 900px) {
    grid-template-areas: "text";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-areas: "text image";
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1920px) {
    display: grid;
    grid-template-areas: "text image";
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
  }
`;


const HeroSlider=styled.div`

margin: 0 auto;
  width: 1240px;
  height: 100%;
  display: grid;
  grid-template:
    "heroslidertitle herosliderimages" 1fr/
     1fr             1fr;
place-items: center;
`;

const HeroContentImage = styled.div`
  grid-area: image;
  display: flex;
  align-items: center;
  position: relative;
  display: none;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 500px) {
    display: none;
  }
  @media (min-width: 900px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: block;
  }
  @media (min-width: 1920px) {
    display: block;
  }
`;
const HeroDesktopImage = styled.img`
  width: 130%;
  display: block;
  height: auto;
  position: absolute;
  top: 0;
  left: -38px;
  z-index: 20;
`;
const HeroDesktopCircle = styled(HeroDesktopImage)`
  width: 12%;
  z-index: 10;
  top: -24px;
  left: 3px;
`;
const HeroDesktopGridCircle = styled(HeroDesktopImage)`
  width: 60%;
  z-index: 10;
  left: -208px;
  top: 235px;
`;
const HeroDesktopElipse = styled(HeroDesktopImage)`
  width: 142%;
  z-index: 10;
  top: -50px;
  left: 90px;
`;

const HeroContent = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-align: left;
  margin: 0;
  /* position: relative; */
  position: inherit;
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

const TitleInter = styled.span`
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
  @media (min-width: 320px) {
    top: 0;
    left: 394px;
    width: 30px;
    height: 30px;
  }
  @media (min-width: 500px) {
    top: 0;
    left: 394px;
    width: 30px;
    height: 30px;
    position: inherit;
  }
  @media (min-width: 900px) {
    display: block;
    /* position: absolute; 
    top: 0;
    left: 394px;*/
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1200px) {
    display: block;
    /* position: absolute;
    top: -10px;
    left: 641px; */
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1920px) {
    display: block;
    /* position: absolute;
    top: -10px;
    left: 641px; */
    width: 50px;
    height: 50px;
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
  @media (min-width: 500px) {
    font-size: 1.5rem;
    margin: 8px 0;
  }
  @media (min-width: 900px) {
    font-size: 1.875rem;
    margin: 16px 0;
  }
  @media (min-width: 1200px) {
    font-size: 1.875rem;
    margin: 16px 0;
  }
  @media (min-width: 1920px) {
    font-size: 1.875rem;
    margin: 16px 0;
  }
`;
const SubtibleContent = styled.h3`
  font-size: 1.875rem;
  margin: 16px 0;
  color: #363837;
`;
const SubtibleContent2 = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 27px;
  margin: 0;
  margin-bottom: 24px;
  color: #333333;
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

const ButtonsContent = styled.div`
  grid-area: butttons;
  display: flex;
  justify-items: center;
`;

export const Slider = ({slider}) => {
  const { title, subtitle, description,buttonRegister, buttonStart, iconButtonStart } = slider
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <Title>
            Evoluciona tu <TitleInter>negocio</TitleInter>
            <TitleStar src={stars} />
          </Title>
          <Subtible>{subtitle.text}</Subtible>
          <Paragraph>
          {description.text}
          </Paragraph>
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
          <HeroDesktopImage src={gif} />
          <HeroDesktopCircle src={circle} />
          <HeroDesktopGridCircle src={gridCircles} />
          <HeroDesktopElipse src={backgroundElipse} />
        </HeroContentImage>
      </HeroContainer>
    </>
  );
};