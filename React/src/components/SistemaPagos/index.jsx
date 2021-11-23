import styled from "styled-components";
import {Marginer} from "../marginer";
import {Button} from "antd";

const ContenedorDatos = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  box-shadow: black;
  background-color: white;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
  background-color: #111129;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  justify-content: flex-end;
`;

const TextoEncabezado = styled.h2`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.24;
  color: white;
  font-family: "Balsamiq Sans", sans-serif;
`;

const TextoFormulario = styled.h4`
  font-family: "Balsamiq Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-left: 50px;
  color: black;
`;

const Input = styled.input`
  width: 50%;
  height: 35px;
  outline: none;
  margin-left: 100px;
  padding: 10px;
  border-radius: 100px 100px 100px 100px;
  border-color: black;
  font-family: "Balsamiq Sans", sans-serif;
  
  &::placeholder {
    color: rgba(200, 200, 200, 1);
    font-family: "Balsamiq Sans", sans-serif;
    font-size: 18px;
  }
`;

const ContendorFormulario = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.input`
  border-radius: 19px;
  border-color: black;
  height: 37px;
  width: 50%;
  font-family: "Balsamiq Sans", sans-serif;
  font-size: 18px;
  color: rgba(200, 200, 200, 1);
  margin-left: 100px;
`;

const ContenedorBotones = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export function BoxPagos(props){
    return(
        <ContenedorDatos>
            <TopContainer>
                <TextoEncabezado>Payment Method</TextoEncabezado>
            </TopContainer>
            <ContendorFormulario>
                <Marginer direction="vertical" margin={30}/>
                <TextoFormulario>
                    Cardholder Name:
                </TextoFormulario>
                <Input type="text" placeholder="Cardholder Name"/>
                <Marginer direction="vertical" margin={15}/>
                <TextoFormulario>
                    Card Number:
                </TextoFormulario>
                <Input type="number" placeholder="Card Number:" />
                <Marginer direction="vertical" margin={15}/>
                <TextoFormulario>
                    Expiration Date:
                </TextoFormulario>
                <InputContainer type="date"/>
                <Marginer direction="vertical" margin={15}/>
                <TextoFormulario>
                    CVC:
                </TextoFormulario>
                <Input type="number" placeholder="CVC"/>
                <Marginer direction="vertical" margin={20}/> 
                <ContenedorBotones>
                    <Button type = "primary" href='/' style={
                        {
                            borderRadius:100,
                            width:"150px",
                            height: "40px",
                            marginLeft:"70px",
                            fontFamily:"Balsamiq Sans",
                            fontSize: "17px",
                            backgroundColor: "#111129",
                        }
                    }>Cancel
                    </Button>
                    <Button type = "primary" href='/Flight/Seats' style={
                        {
                            borderRadius:100,
                            width:"150px",
                            height: "40px",
                            marginLeft:"50px",
                            fontFamily:"Balsamiq Sans",
                            fontSize: "17px",
                            backgroundColor: "#111129",
                        }
                    }>Go Back
                    </Button>
                    <Button type = "primary" href='/' style={
                        {
                            borderRadius:100,
                            width:"150px",
                            height: "40px",
                            marginLeft: "50px",
                            marginRight: "40px",
                            fontFamily:"Balsamiq Sans",
                            fontSize: "17px",
                            backgroundColor: "#111129",
                        }
                    }>Pay
                    </Button>
                </ContenedorBotones>
            </ContendorFormulario>
        </ContenedorDatos>
    );
}

