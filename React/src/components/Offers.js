import React from "react";
import styled from "styled-components";
import {AppContainer} from "./CuadroLoginUsuario/appContainer";
import viaje1 from "./img/Cartagena.jpg";
import viaje2 from "./img/San Andrés.png";
import {PercentageOutlined} from "@ant-design/icons";

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

const ViajeFoto = styled.img`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: transparent;
  position: relative;
  float: left;
  z-index: 10;
`;

export default function Offers(){
    return(
        <div>
            <AppContainer style={{paddingTop:30}}>
                <h1 style={{ fontFamily: "Balsamiq Sans", fontSize: 75 }}> Offers <PercentageOutlined /></h1>
                <Contain1>
                    <div>
                        <a href={'/Flight/Seats'}>
                            <ViajeFoto src={viaje1} href={'/Flight/Seats'}/>
                        </a>
                        <div style={{ fontFamily: "Balsamiq Sans", paddingLeft: 330, fontSize: 35 }}>
                            <br />
                            Cali → Cartagena<br />
                            One way from 99$
                        </div>
                    </div>
                </Contain1>
                <br/><br/>
                <Contain1>
                    <div>
                        <a href={'/Flight/Seats'}>
                            <ViajeFoto src={viaje2}/>
                        </a>
                        <div style={{ fontFamily: "Balsamiq Sans", paddingLeft: 330, fontSize: 35 }}>
                            <br />
                            Bogota → San Andres Island<br />
                            One way from 109$
                        </div>
                    </div>
                </Contain1>
            </AppContainer>
        </div>
    );
}