import React from "react";
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import HomeBar from "./components/Homebar";
import Ayuda from "./components/Ayuda";
import Home from "./components/Home"
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
                </Switch>
            </div>
        </Router>
    );
}

export default App;