import React from "react";
import styled from "styled-components";
import {AppContainer} from "./CuadroLoginUsuario/appContainer";

const Contain1 = styled.div`
  width: 1280px;
  min-height: auto; 
  flex-direction: column;
  border-radius: 19px;
  background-color: white;
  box-shadow: black;
  position: center;
  overflow: hidden;
`;

export default function Offers(){
    return(
        <div>
            <AppContainer style={{paddingTop:150}}>
                <Contain1 style={{paddingLeft: 15, paddingTop:15, fontFamily: "Balsamiq Sans", paddingBottom: 15, color:"red"}}>
                    <div>
                        Not offers found: 401
                    </div>
                </Contain1>
            </AppContainer>
        </div>
    );
}