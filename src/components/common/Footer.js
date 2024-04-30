import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 1440px;
  height: 317px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 1200px;
  height: 237px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ebebeb;
`;

const Image = styled.img`
  width: 78.6px;
  height: 24px;
  padding-bottom: 24px;
`;

// const ListItem = styled.li`
//   list-style-type: none;
//   color: #ebebeb;
// `;

const Line = styled.hr`
  width: 100%; 
  border-bottom: 1px solid #ebebeb;
  text-decoration: underline;  
`;

const ListContent= styled.div`
display: flex;
    width: 100%;
    flex-direction: column;
`

const Ul = styled.ul`
padding-bottom: 24px;
`

const ContentLegals = styled.div`
display: flex;
padding-bottom: 24px;
`
const Link = styled.a`
color: #ebebeb; 
margin: 0px 2px;
    text-decoration: none;    
    &:visited {
        color: #ebebeb;
    }
`

export const Footer = ({ footer }) => {

    const { image, navigationLinks, legalLinks } = footer
    
  return (
    <Container>
      <FooterContainer>
        <TextContainer>
            <ListContent>
          <Image src={`images/${image.iconPath}`} alt="Logo" />
          <Ul>
            {navigationLinks.map(link => (
                <li key={link.id}>
                <Link href={link.url}>{link.text}</Link>
                </li>
            ))}
          </Ul>
          <ContentLegals>
          {legalLinks.map((link, index) => (
                <React.Fragment key={link.id}>
                  <Link key={Math.random()} href={link.url}>{link.text}</Link>
                  {index < legalLinks.length - 1 &&  " | "}
                </React.Fragment>
              ))}
            </ContentLegals>          
          </ListContent>
          <Line />
          <p style={{paddingTop: "27.5px"}}>
            © Volu. Technologies S.A.P.I. de C.V. - 2022 Todos los derechos
            reservados.
          </p>
        </TextContainer>
      </FooterContainer>
    </Container>
  );
};
