import React from "react";
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import HomeBar from "./components/Homebar";
import Ayuda from "./components/Ayuda";
import Home from "./components/Home"
import Offers from "./components/Offers";
import Seats from "./components/Seats";
import Flights from "./components/Flights";
import {BoxAccount} from "./components/CuadroLoginUsuario";
import {AppContainer} from "./components/CuadroLoginUsuario/appContainer";
import {BoxPagos} from "./components/SistemaPagos";
import {Marginer} from "./components/marginer";


const App = () =>{
    return (
        <Router>
            <div>
                <HomeBar/>
                <Switch>
                    <Route exact path = '/'>
                        <Home/>
                    </Route>
                    <Route exact path = '/Help'>
                        <Ayuda/>
                    </Route>
                    <Route exact path = '/Login'>
                        <AppContainer>
                            <BoxAccount/>
                        </AppContainer>
                    </Route>
                    <Route exact path = '/Offers'>
                        <Offers/>
                    </Route>
                    <Route exact path = '/Flight/Seats'>
                        <Seats/>
                    </Route>
                    <Route exact path = '/Flight/Payment'>
                        <AppContainer>
                            <Marginer direction="vertical" margin={140}/>
                            <BoxPagos/>
                        </AppContainer>
                    </Route>
                    <Route exact path = '/Flights/:origen/:destino/:fecha1/:fecha2'>
                        <Flights/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;