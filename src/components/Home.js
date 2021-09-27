import React from "react";
import styled from "styled-components";
import {AppContainer} from "./CuadroLoginUsuario/appContainer";
import {Button, DatePicker, Form, Image, InputNumber, Radio, Select} from "antd";
import 'antd/dist/antd.css'
import {Option} from "antd/es/mentions";
import moment from "moment";
import viaje1 from "./img/Cartagena.jpg"
import viaje2 from "./img/San Andrés.png"

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

function disabledDate(current){
    return current && current < moment().endOf('day');
}

export default function Home(){
    const [value, setValue] = React.useState(1);
    const onChange = e => {
        setValue(e.target.value);
    };
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
                            <Select placeholder="From"
                                    style={{ width: 210, paddingLeft: 25,}}>
                                <Option value="Bogota" style={{fontFamily:"Balsamiq Sans"}}>Bogota</Option>
                                <Option value="Cartagena" style={{fontFamily:"Balsamiq Sans"}}>Cartagena</Option>
                                <Option value="Cali" style={{fontFamily:"Balsamiq Sans"}}>Cali</Option>
                                <Option value="San Andres" style={{fontFamily:"Balsamiq Sans"}}>San Andres</Option>
                                <Option value="Santa Marta" style={{fontFamily:"Balsamiq Sans"}}>Santa Marta</Option>
                            </Select>
                            <Select placeholder="To"
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
                            {value === 1 ? <DatePicker disabledDate={disabledDate}/>:<RangePicker
                                disabledDate={disabledDate} format={"YYYY-MM-DD"}/>}
                                ㅤㅤ<Button type="primary" href="/Help">
                                    Search
                                </Button>
                        </div>
                </Contain1>
                <br /><br />
                <Contain1>
                    <div>
                        <ViajeFoto src={viaje1}/>
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
                        <ViajeFoto src={viaje2}/>
                        <div style={{ fontFamily: "Balsamiq Sans", paddingLeft: 300, fontSize: 35 }}>
                            <br />
                            Bogota → San Andres Island<br />
                            One way from 109$
                        </div>
                    </div>
                </Contain1>
                <br/><br/>
            </AppContainer>
        </div>
    );
}