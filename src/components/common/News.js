import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "components/uiElements";

const widthsMobile = ["320px", "500px", "900px", "1200px"];

function checkMediaQueries() {
  const matchedWidth = widthsMobile.find((width) => {
    return window.matchMedia(`(max-width: ${width})`).matches;
  });

  return matchedWidth || null;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 55.6% 44.4%;
  grid-template-rows: auto;
  width: 100%;
  height: 52%;
  /* margin: 0%; */
  position: relative;
  background-color: #f8f9ff;

  @media (min-width: 320px) {
    grid-template-columns: 100%;
    /* margin: 0% 3%; */
    height: 80%;
  }
  @media (min-width: 500px) {
    grid-template-columns: 100%;
    /* margin: 0% 3%; */
    height: 80%;
  }
  @media (min-width: 900px) {
    grid-template-columns: 100%;
    height: 80%;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 55.6% 44.4%;
    height: 47%;
    width: 1440px;
    top: 7%;
  }
  @media (min-width: 1920px) {
    grid-template-columns: 55.6% 44.4%;
    width: 1440px;
    height: 37.8%;
    top: 7%;
  }
`;

const NewsContainer = styled.div`
  margin: 33.5px 0 32.5px 84px;

  @media (min-width: 320px) {
    margin: 0px;
  }
  @media (min-width: 500px) {
    margin: 0px;
  }
  @media (min-width: 900px) {
    margin: 0px;
  }
  @media (min-width: 1200px) {
    margin: 33.5px 0 32.5px 84px;
  }
  @media (min-width: 1920px) {
    margin: 33.5px 0 32.5px 84px;
  }
  /* @media (max-width: 375px) {
  margin: 0%;
  display: flex;
  justify-content: center; 
  } */
`;

const LeftSection = styled.div`
  margin: 24px;

  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1920px) {
  }
`;

const TextContainer = styled.div`
  width: 93.9%;

  @media (min-width: 320px) {
    width: 52%;
    margin: 24px;
  }
  @media (min-width: 500px) {
    width: 52%;;
    margin: 24px;
  }
  @media (min-width: 900px) {
    width: 52%;
    margin: 24px;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
  @media (min-width: 1920px) {
    width: 100%;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: auto;
  height: 113.8%;
  position: absolute;
  right: 2%;
  bottom: 0px;

  @media (min-width: 320px) {
    width: auto;
    height: 45%;
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 500px) {
    width: auto;
    height: 45%;
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 900px) {
    width: auto;
    height: 45%;
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 1200px) {
    width: auto;
    height: 113.8%;
    position: absolute;
    right: 2%;
    left: auto;
    transform: none;
    bottom: 0px;
  }
  @media (min-width: 1920px) {
    width: auto;
    height: 113.8%;
    position: absolute;
    right: 2%;
    left: auto;
    transform: none;
    bottom: 0px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 36px;
  color: #363837;
  @media (min-width: 320px) {
    font-size: 3rem;
    line-height: 50px;
  }
@media (min-width: 500px) {
  font-size: 3rem;
  line-height: 50px;
  }
  @media (min-width: 900px) {
    font-size: 3rem;
    line-height: 50px;
  }
  @media (min-width: 1200px) {
    font-size: 1.5rem;
  line-height: 36px;
}
@media (min-width: 1920px) {
  font-size: 1.5rem;
  line-height: 36px;
}
  
`;
const CashContent = styled.div`
  display: flex;
  align-items: baseline;
`;

const CashText = styled.h2`
  margin-right: 8px;
  font-size: 3rem;
  margin-top: 16px;
  @media (min-width: 320px) {
    font-size: 4rem;
  }
@media (min-width: 500px) {
  font-size: 4rem;
  }
  @media (min-width: 900px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 3rem;
}
@media (min-width: 1920px) {
  font-size: 3rem;
}
`;

const Text = styled.p`
  font-size:1rem;
  font-weight: 600;
  @media (min-width: 320px) {
    font-size: 1.5rem;
  }
@media (min-width: 500px) {
  font-size: 1.5rem;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    font-size:1rem;
}
@media (min-width: 1920px) {
  font-size:1rem;
}
`;
const Description = styled.p`
  font-size: 1rem;
  line-height: 27px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #363837;
  margin-bottom: 24px;
  margin-top: 12px;
  @media (min-width: 320px) {
    font-size: 1.5rem;
  }
@media (min-width: 500px) {
  font-size: 1.5rem;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 1rem;
}
@media (min-width: 1920px) {
  font-size: 1rem;
}
`;

export const News = ({ news }) => {
  const { imageNews, text, buttonNews, iconButtonStart } = news;
  const [matchedWidth, setMatchedWidth] = useState(checkMediaQueries());

  useEffect(() => {
    const handleResize = () => {
      setMatchedWidth(checkMediaQueries());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const size = matchedWidth ? "fullwidth" : "lg";

  return (
    <Container>
      <NewsContainer>
        <LeftSection>
          <TextContainer>
            <Title>{text.title}</Title>
            <CashContent>
              <CashText>{text.titleCash}</CashText>
              <Text>{text.titleFinal}</Text>
            </CashContent>
            <Description>{text.description}</Description>

            <Button
              size={size}
              key={buttonNews.id}
              icon={iconButtonStart}
              style={{ margin: "0px" }}
            >
              Lo quiero
            </Button>
          </TextContainer>
        </LeftSection>
        <RightSection>
          <Image
            src={`images/${imageNews.imagePath}`}
            alt="Imagen descriptiva"
          />
        </RightSection>
      </NewsContainer>
    </Container>
  );
};