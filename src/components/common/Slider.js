import React from "react";
import styled from "styled-components";
import gif from "../../images/gif_pc.gif";
import stars from "../../images/Stars.svg";
import circle from "../../images/Circle.svg";
import gridCircles from "../../images/CirclesGrid.svg";
import backgroundElipse from "../../images/BackgroungElipse.svg";
import { Button } from "components/uiElements";

//LAYOUT

const HeroSlider = styled.div`
  margin: 0 auto;
  width: 1240px;
  height: 100%;
  display: grid;
  grid-template:
    "heroslidertitles" 1fr
    "herosliderimages" 1fr/
    1fr;
  place-items: center;
  border: 1px rebeccapurple;
  //background-color: aqua;
  @media (min-width: 320px) {
    grid-template:
      "heroslidertitles" 1fr
      "herosliderimages" 1fr/
      1fr;
  }
  @media (min-width: 500px) {
    grid-template:
      "heroslidertitles" 1fr
      "herosliderimages" 1fr/
      1fr;
  }
  @media (min-width: 900px) {
    grid-template:
      "heroslidertitles" 1fr
      "herosliderimages" 1fr/
      1fr;
  }
  @media (min-width: 1200px) {
    grid-template:
      "heroslidertitles herosliderimages" 1fr/
      1fr 1fr;
  }
  @media (min-width: 1920px) {
    grid-template:
      "heroslidertitles herosliderimages" 1fr/
      1fr 1fr;
  }
`;

const HeroSliderTitles = styled.div`
  grid-area: heroslidertitles;
`;
const HeroSliderImages = styled.div`
  grid-area: herosliderimages;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
const HeroSliderImagesImgs = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  place-items: center;
`;
//TITLES
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: left;
  margin: 0;
  color: #363837;
  position: relative;
  /* @media (min-width: 320px) {
    font-size: 2rem;
  }
  @media (min-width: 500px) {
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    font-size: 2rem;
  }
  @media (min-width: 1200px) {
    font-size: 3rem;
  }
  @media (min-width: 1920px) {
    font-size: 3rem;
  } */
`;
const TitleInter = styled.span`
  display: inline;
  color: #009379;
  font-size: 3rem;
  font-weight: 900;
`;
const TitleStar = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 394px;
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: -15px;
  left: 574px;
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

//IMAGE

const HeroDesktopImage = styled.img`
  width: 45%;
  display: block;
  height: auto;
  position: absolute;
  z-index: 20;

  @media (min-width: 320px) {
    width: 45%;
    display: block;
    height: auto;
    position: absolute;
    z-index: 20;
  }
  @media (min-width: 500px) {
    width: 45%;
    display: block;
    height: auto;
    position: absolute;
    z-index: 20;
  }
  @media (min-width: 900px) {
    width: 45%;
    display: block;
    height: auto;
    position: absolute;
    z-index: 20;
  }
  @media (min-width: 1200px) {
    width: 100%;
    display: block;
    height: auto;
    position: absolute;
    z-index: 20;
  }
  @media (min-width: 1920px) {
    width: 100%;
    display: block;
    height: auto;
    position: absolute;
    z-index: 20;
  }
`;
const HeroDesktopCircle = styled(HeroDesktopImage)`

width: 8%;
    z-index: 10;
    top: -46px;
    left: 366px;


  
  @media (min-width: 320px) {
    width: 8%;
    z-index: 10;
    top: -46px;
    left: 366px;
  }
  @media (min-width: 500px) {
    width: 8%;
    z-index: 10;
    top: -46px;
    left: 366px;
  }
  @media (min-width: 900px) {
    width: 8%;
    z-index: 10;
    top: -46px;
    left: 366px;lute;
  z-index: 20;
  }
  @media (min-width: 1200px) {
    width: 12%;
  z-index: 10;
  top: 65px;
  left: 30px;
  }
  @media (min-width: 1920px) {
    width: 12%;
  z-index: 10;
  top: 65px;
  left: 30px;
  }


`;
const HeroDesktopGridCircle = styled(HeroDesktopImage)`
  width: 26%;
  z-index: 10;
  bottom: 2px;
  left: 221px;

  @media (min-width: 320px) {
    width: 26%;
    z-index: 10;
    bottom: 2px;
    left: 221px;
  }
  @media (min-width: 500px) {
    width: 26%;
    z-index: 10;
    bottom: 2px;
    left: 221px;
  }
  @media (min-width: 900px) {
    width: 26%;
    z-index: 10;
    bottom: 2px;
    left: 221px;
  }
  @media (min-width: 1200px) {
    width: 50%;
    z-index: 10;
    bottom: 101px;
    left: -108px;
  }
  @media (min-width: 1920px) {
    width: 50%;
    z-index: 10;
    bottom: 101;
    left: -108px;
  }

  //
`;
const HeroDesktopElipse = styled(HeroDesktopImage)`
  width: 50%;
  z-index: 10;
  right: 109px;
  bottom: -173px;
  position: absolute;
  @media (min-width: 320px) {
    width: 50%;
    z-index: 10;
    right: 109px;
    bottom: -173px;
  }
  @media (min-width: 500px) {
    width: 50%;
    z-index: 10;
    right: 109px;
    bottom: -173px;
  }
  @media (min-width: 900px) {
    width: 50%;
    z-index: 10;
    right: 109px;
    bottom: -173px;
  }
  @media (min-width: 1200px) {
    width: 130%;
    z-index: 10;
    right: -228px;
    bottom: -122px;
  }
  @media (min-width: 1920px) {
    width: 130%;
    z-index: 10;
    right: -228px;
    bottom: -122px;
  }

  //
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

const ButtonsContent = styled.div`
  grid-area: butttons;
  display: flex;
  justify-items: center;
`;

export const Slider = ({ slider }) => {
  const {
    subtitle,
    description,
    buttonRegister,
    buttonStart,
    iconButtonStart,
  } = slider;
  return (
    <>
      <HeroSlider>
        <HeroSliderTitles>
          <Title>
            Evoluciona tu <TitleInter>negocio</TitleInter>
            <TitleStar src={stars} />
          </Title>
          <Subtible>{subtitle.text}</Subtible>
          <Paragraph>{description.text}</Paragraph>
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
        </HeroSliderTitles>
        <HeroSliderImages>
          <HeroSliderImagesImgs>
            <HeroDesktopImage src={gif} />
            <HeroDesktopCircle src={circle} />
            <HeroDesktopGridCircle src={gridCircles} />
            <HeroDesktopElipse src={backgroundElipse} />
          </HeroSliderImagesImgs>
        </HeroSliderImages>
      </HeroSlider>
    </>
  );
};
