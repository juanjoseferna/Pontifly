import React from "react";
import './Flights.css'
import {AppContainer} from "./CuadroLoginUsuario/appContainer";
import styled from "styled-components";
import {useParams} from "react-router-dom";

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

function Flights() {
    let vueloABuscar = useParams()
    return (
        <div>
            <AppContainer className="Flights-vuelos">
                <Contain1>
                    asa {vueloABuscar.value}
                </Contain1>
            </AppContainer>
        </div>
    );
}

export default Flights;