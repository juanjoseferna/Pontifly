import React from "react";
import './Ayuda.css'
import {Button} from 'antd';
import 'antd/dist/antd.css'

function Ayuda() {
    return (
        <div className= "Ayuda">
            <br/><br/><br/>
            <h1>Customer Support</h1>
            <p>In case you have had any problems using the application,</p>
            <p>please contact the following email to receive immediate </p>
            <p>help from Pontifly technical support, thank you very much </p>
            <p>for flying with us and we apologize for the inconvenience.</p>
            <br /><br />
            <br /><br />
            <h1>pontiflygestionusuarios@gmail.com</h1>
            <Button type = "primary" href='/' size = 'large' style = {{background:"#111129"}}> Home </Button>
        </div>

    );
}

export default Ayuda;