import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {AppContainer} from "./CuadroLoginUsuario/appContainer";
import {Button, DatePicker, InputNumber, Radio, Select} from "antd";
import 'antd/dist/antd.css'
import { Option } from "antd/es/mentions";
import moment from "moment";
import { getVuelos } from "./Store/Actions/vuelos";
import { connect } from "react-redux";

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


function disabledDate(current){
    return current && current < moment().endOf('day');
}


function Home({getVuelos, vuelos}){

    const [ loading, setLoading ] = useState(false);

    const [ destino, setDestino ] = useState('');
    const [ origen, setOrigen ] = useState('');
    const [ fecha1, setFecha1 ] = useState('');
    const [ fecha2, setFecha2 ] = useState(null);

    useEffect(() => {
        if (vuelos.length === 0)
            getAllVuelos();
    },  [getVuelos, vuelos]);

    const getAllVuelos = () => {
        setLoading(true);
        getVuelos();
        setLoading(false);
    }

    useEffect(() => {
        return () => {

        }
    });

    const [value, setValue] = React.useState(1);

    const onChange = e => {
        setValue(e.target.value);
    };

    const fecha = (e) => {
        try {
            setFecha1(e.format("DD-MM-YYYY"));
            setFecha2(null)
        } catch (error){
            setFecha1(null)
            setFecha2(null)
        }
    };

    const fechas = (e) => {
        try {
            setFecha1(e[0].format("DD-MM-YYYY"));
            setFecha2(e[1].format("DD-MM-YYYY"));
        } catch (error){
            setFecha1(null)
            setFecha2(null)
        }
    }

    const fechasNull = () => {
        setFecha1(null)
        setFecha2(null)
    }

    return(
        <div>
            <AppContainer style = {{paddingTop: 150}}>
                <Contain1 style={{paddingLeft: 15, fontFamily: "Balsamiq Sans", paddingBottom: 15}}>
                        <div>
                            <br/>
                            <Radio.Group onChange={onChange} value = {value} >
                                <Radio value={1} onClick={fechasNull} >One-way</Radio>
                                <Radio value={2} onClick={fechasNull}>Round-trip</Radio>
                            </Radio.Group>
                        </div>
                        <div>
                            <br />
                                Where are you flying?
                            <Select placeholder="From" onSelect={setOrigen}
                                    style={{ width: 210, paddingLeft: 25,}}>
                                <Option value="Bogota" style={{fontFamily:"Balsamiq Sans"}}>Bogota</Option>
                                <Option value="Cartagena" style={{fontFamily:"Balsamiq Sans"}}>Cartagena</Option>
                                <Option value="Cali" style={{fontFamily:"Balsamiq Sans"}}>Cali</Option>
                                <Option value="San Andres" style={{fontFamily:"Balsamiq Sans"}}>San Andres</Option>
                                <Option value="Santa Marta" style={{fontFamily:"Balsamiq Sans"}}>Santa Marta</Option>
                            </Select>
                            <Select placeholder="To" onSelect={setDestino}
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
                            {value === 1 ? <DatePicker onChange={fecha}
                                                       disabledDate={disabledDate}
                                                       format={"DD-MM-YYYY"}/>:
                                            <RangePicker onChange={fechas}
                                             disabledDate={disabledDate}
                                             format={"DD-MM-YYYY"}  />}
                        </div>
                </Contain1>
                <br/><br/>
                {loading ?
                    <div>
                        cargando
                    </div>
                    :
                    <div>
                        {
                            vuelos.length === 0 ?
                                <p>No se encontraron vuelos</p>
                                :
                                vuelos.map((vuelo, i) => (
                                    vuelo.origen === origen && vuelo.destino === destino && vuelo.fecha1 === fecha1 && vuelo.fecha2 === fecha2 ?
                                    <a href={'/Flight/Seats'}>
                                        <Contain1 style={{paddingLeft: 15, fontFamily: "Balsamiq Sans", paddingBottom: 15, paddingTop: 15}}>
                                            From {vuelo.origen} to {vuelo.destino} <br />
                                            {vuelo.fecha1}<br />
                                            {vuelo.fecha2}
                                        </Contain1>
                                        <br />
                                    </a>
                                        :
                                        <div/>
                                ))
                        }
                    </div>
                }
            </AppContainer>
        </div>
    );
}

const mapActionsToProps = {
    getVuelos
};

const mapStateToProps = (state) => {
    return {
        vuelos: state.vuelosReducer.vuelos
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Home);