import styled from "styled-components";
import Logo from "./logoPagTransparente.png"
import {LoginForm} from "./loginForm";
import {Marginer} from "../marginer";
import React, {useState} from "react";
import {AccountContex} from "./accountContex";
import {SingupForm} from "./singupForm";



const LoginContainer = styled.div`
  width: 450px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: white;
  box-shadow: black;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
`;

const BackDrop = styled.div`
  width: 140%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -65px;
  transform: rotate(150deg);
  border: black;
  background-color: #111129;
`;

const ContenidoEncabezado = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  position: center;
  flex-direction: column;
`;

const LogoPonty = styled.img`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  left: 25px;
  top: -45px;
  margin: 20px;
  background: transparent;
  position: relative;
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  padding: 0 1.8em;
`;

export function BoxAccount(props){
    const [active, setActive] = useState("singin")

    const switchToSingup = () => {
        setTimeout(() => {
            setActive("singup")
        }, 400);
    }

    const switchToSingin = () => {
        setTimeout(() => {
           setActive("singin")
        }, 400);
    }

    const contextValue = { switchToSingin, switchToSingup}

    return(
        <AccountContex.Provider value={contextValue}>
            <br />
        <LoginContainer>
        <TopContainer>
            <BackDrop/>
            <ContenidoEncabezado>
                <LogoPonty src={Logo}/>
            </ContenidoEncabezado>
        </TopContainer>
        <InnerContainer>
            <Marginer direction="vertical" margin={100}/>
            {active === "singin" && <LoginForm/>}
            {active === "singup" && <SingupForm/>}
        </InnerContainer>
        </LoginContainer>
        </AccountContex.Provider>
    );
}