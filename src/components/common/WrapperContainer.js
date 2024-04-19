import React from "react";
import { Header,Slider,Values,Clients,Soon,News,Footer} from "components/common";
import styled from "styled-components";



export function WrapperContainer(){
    return(
        <>
         <Header/>
         <Slider/>
         <Values/>
         <Clients/>
         <Soon/>
         <News/>
         <Footer/>

      </>
    )
}