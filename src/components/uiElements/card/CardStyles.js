import styled from "styled-components";

export const Card = styled.div`
  width: 337px;
  height: 327px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
  padding: 32px 30px;
  /* display: flex;
  flex-direction: column;   */
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

export const Title = styled.h1`   
  /* align-self: stretch;
  flex-grow: 0; */
  font-family: PublicSans;
  font-size: 30;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #363837;
  margin: 0;
`;

export const Subtitle = styled.h2`  
  /* align-self: stretch;
  flex-grow: 0; */
  font-family: PublicSans;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #363837;
  margin: 0;
`;

export const Description = styled.p` 
  height: 162; 
  align-self: stretch;
  flex-grow: 0;
  font-family: PublicSans;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: rgba(54, 56, 55, 0.6);
  margin-top: 16px;
`;