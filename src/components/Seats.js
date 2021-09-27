import React from "react";
import styled from "styled-components";
import {AppContainer} from "./CuadroLoginUsuario/appContainer";
import Asientos from './img/Asientos.png'
import {Option} from "antd/es/mentions";
import {Button, InputNumber, Select} from "antd";


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

const Foto = styled.img`
  width: 200px;
  height: auto;
  display: flex;
  direction: inherit;
  flex-direction: column;
  background: transparent;
  position: relative;
  float: left;
  z-index: 10;
`;

export default function Seats({pasajeros = 1}){
    return(
        <div>
            <AppContainer style={{paddingTop:150}}>
                <Contain1 style={{paddingLeft: 15, paddingTop:15, fontFamily: "Balsamiq Sans", paddingBottom: 15}}>
                    <div>
                        <Foto src={Asientos}/>
                        <div style={{ fontFamily: "Balsamiq Sans", paddingLeft: 220, fontSize: 20}}>
                            {/*{for(let step = 0; step < pasajeros; step++)}*/}
                            <br />
                            Select your column:<br/>
                            <Select placeholder="Column"
                                    style={{ width: 210, paddingLeft: 25,}}>
                                <Option value="A" style={{fontFamily:"Balsamiq Sans"}}>A</Option>
                                <Option value="B" style={{fontFamily:"Balsamiq Sans"}}>B</Option>
                                <Option value="C" style={{fontFamily:"Balsamiq Sans"}}>C</Option>
                                <Option value="D" style={{fontFamily:"Balsamiq Sans"}}>D</Option>
                                <Option value="E" style={{fontFamily:"Balsamiq Sans"}}>E</Option>
                                <Option value="F" style={{fontFamily:"Balsamiq Sans"}}>F</Option>
                            </Select>
                            <br/><br/>
                            Select your row:
                            <div style={{paddingLeft: 25}}>
                                <InputNumber min={1} max={29} placeholder="Row" style={{ width: 210}}/>
                                <br/><br/><br/>
                                <Button type="delfault" size="large" href="/Flights/Payment">
                                    Go Payment
                                </Button>
                            </div>
                        </div>
                    </div>
                </Contain1>
                <br/><br/>
            </AppContainer>
        </div>
    );
}