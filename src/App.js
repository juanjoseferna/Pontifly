import React from "react";
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import HomeBar from "./components/Homebar";
import Ayuda from "./components/Ayuda";
import Home from "./components/Home"
import Offers from "./components/Offers";
import Seats from "./components/Seats";
import {BoxAccount} from "./components/CuadroLoginUsuario";
import {AppContainer} from "./components/CuadroLoginUsuario/appContainer";

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
                        {/*TODO meter function payment*/}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;