import React, { useContext, useEffect, useState } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitBottom } from "./common";
import { Marginer } from "../marginer";
import { AccountContex } from "./accountContex";

export function LoginForm(props){

    const { switchToSingup } = useContext(AccountContex);

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email"/>
            <Marginer direction="vertical" margin={5}/>
            <Input type="password" placeholder="Password"/>
        </FormContainer>
        <Marginer direction="vertical" margin={15}/>
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin={10}/>
        <SubmitBottom type="submit">Enter</SubmitBottom>
        <Marginer direction="vertical" margin={10}/>
        <MutedLink>
            Dont have an account? <BoldLink href="#" onClick={switchToSingup}>Sing-up</BoldLink>
        </MutedLink>
    </BoxContainer>
}
