import React from "react";
import styled from "styled-components";
import {AppContainer} from "./CuadroLoginUsuario/appContainer";
import {Button, DatePicker, InputNumber, Radio, Select} from "antd";
import 'antd/dist/antd.css'
import {Option} from "antd/es/mentions";
import moment from "moment";
import viaje1 from "./img/Cartagena.jpg"
import viaje2 from "./img/San Andrés.png"
import vuelo from "./claseGlobal";

const { RangePicker } = DatePicker;

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
  width: auto;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: transparent;
  position: relative;
  float: left;
  z-index: 10;
`;

let destino;
let origen;
let fecha1;
let fecha2;
<<<<<<< HEAD:React/src/components/Home.js
var buscar1 = 0;
=======
>>>>>>> f205f0a0dfd19ae0e611fb7f03dcb3bfd762621d:src/components/Home.js
let vueloABuscar = new vuelo();

function disabledDate(current){
    return current && current < moment().endOf('day');
}

<<<<<<< HEAD:React/src/components/Home.js
function buscar2(){
    return
}
=======
>>>>>>> f205f0a0dfd19ae0e611fb7f03dcb3bfd762621d:src/components/Home.js

export default function Home(){
    const [value, setValue] = React.useState(1);
    const onChange = e => {
        setValue(e.target.value);
    };
    const seleccionarDestino = (e) =>{
        destino = e;
        console.log(destino);
    }
    const seleccionarOrigen = (e) =>{
        origen = e;
<<<<<<< HEAD:React/src/components/Home.js
        console.log(origen.toString());
=======
        console.log(origen);
>>>>>>> f205f0a0dfd19ae0e611fb7f03dcb3bfd762621d:src/components/Home.js
    }
    const seleccionarFecha = (e) =>{
        fecha1 = (e.format("DD-MM-YYYY"));
        console.log(fecha1);
    }
    const seleccionarFecha2 = (e) =>{
        try {
            fecha1 = (e[0].format("DD-MM-YYYY"));
            fecha2 = (e[1].format("DD-MM-YYYY"));
            console.log(fecha1, fecha2);
        } catch (error){
            console.log("NULL")
        }
    }
    const buscar = () => {
        console.log(fecha1)
        vueloABuscar = new vuelo(fecha1,destino,origen)
<<<<<<< HEAD:React/src/components/Home.js
        buscar1 = 1
=======
>>>>>>> f205f0a0dfd19ae0e611fb7f03dcb3bfd762621d:src/components/Home.js
        if (value===2)
            vueloABuscar.setFecha2(fecha2)
    }
    return(
        <div>
            <AppContainer style = {{paddingTop: 150}}>
                <Contain1 style={{paddingLeft: 15, fontFamily: "Balsamiq Sans", paddingBottom: 15}}>
                        <div>
                            <br/>
                            <Radio.Group onChange={onChange} value = {value} >
                                <Radio value={1}>One-way</Radio>
                                <Radio value={2}>Round-trip</Radio>
                            </Radio.Group>
                        </div>
                        <div>
                            <br />
                                Where are you flying?
                            <Select placeholder="From"  onSelect={seleccionarOrigen} ref={origen}
                                    style={{ width: 210, paddingLeft: 25,}}>
                                <Option value="Bogota" style={{fontFamily:"Balsamiq Sans"}}>Bogota</Option>
                                <Option value="Cartagena" style={{fontFamily:"Balsamiq Sans"}}>Cartagena</Option>
                                <Option value="Cali" style={{fontFamily:"Balsamiq Sans"}}>Cali</Option>
                                <Option value="San Andres" style={{fontFamily:"Balsamiq Sans"}}>San Andres</Option>
                                <Option value="Santa Marta" style={{fontFamily:"Balsamiq Sans"}}>Santa Marta</Option>
                            </Select>
                            <Select placeholder="To" onSelect={seleccionarDestino} ref={destino}
                                    style={{ width: 210, paddingLeft: 25,}}>
                                <Option value="Bogota" style={{fontFamily:"Balsamiq Sans"}}>Bogota</Option>
                                <Option value="Cartagena" style={{fontFamily:"Balsamiq Sans"}}>Cartagena</Option>
                                <Option value="Cali" style={{fontFamily:"Balsamiq Sans"}}>Cali</Option>
                                <Option value="San Andres" style={{fontFamily:"Balsamiq Sans"}}>San Andres</Option>
                                <Option value="Santa Marta" style={{fontFamily:"Balsamiq Sans"}}>Santa Marta</Option>
                            </Select>
                        </div>
                        <div>
                            <br />
                                Who is traveling?ㅤㅤㅤㅤ
                            <InputNumber min={1} max={20} defaultValue={1}/>
                        </div>
                        <div>
                            <br />
                                When are you flying?ㅤㅤ
                            {value === 1 ? <DatePicker onSelect = {seleccionarFecha}
                                                       disabledDate={disabledDate}
                                                       format={"DD/MM/YYYY"}/>:
                                            <RangePicker onChange = {seleccionarFecha2}
                                             disabledDate={disabledDate}
                                             format={"DD/MM/YYYY"}  />}
<<<<<<< HEAD:React/src/components/Home.js
                            {origen}
                            <Button type="primary" onClick={buscar} href={'/Flights' + origen.toString()}>
=======
                            <Button type="primary" onClick={buscar} href={'/Flight/Seats'}>
>>>>>>> f205f0a0dfd19ae0e611fb7f03dcb3bfd762621d:src/components/Home.js
                                Search
                            </Button>
                        </div>
                </Contain1>
                <br/><br/>
            </AppContainer>
        </div>
    );
}

export {vueloABuscar};