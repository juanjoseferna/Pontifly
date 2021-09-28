import React from 'react'
import {Button} from 'antd';
import { UserOutlined, HomeOutlined, QuestionCircleOutlined, PercentageOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import logo from './img/logo.png'
import './Homebar.css'
import {Link} from "react-router-dom";

function HomeBar(){
    return(
        <div className= 'Home-logo'>
            <Link to={'/'}><img src={logo} alt="logo" width={100}/> </Link>
            <Button type = "text" href='/' style={{ color: 'white' }} size = 'small'> Home <HomeOutlined /> </Button>
            <Button type = "text" href='/Help' style={{ color: 'white' }} size = 'small'> Help <QuestionCircleOutlined/> </Button>
            <Button type = "text" href='/Offers' style ={{color: 'white'}} size = 'small'> Offers <PercentageOutlined /> </Button>
            <Button type = "text" href='/Login' size = 'small' style={{ color: 'white' }} > Profile <UserOutlined/> </Button>
        </div>
    );
}

export default HomeBar;