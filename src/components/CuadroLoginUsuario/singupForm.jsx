import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitBottom} from "./common";
import {Marginer} from "../marginer";
import React, {useContext} from "react";
import {AccountContex} from "./accountContex";

export function SingupForm(props){
    const { switchToSingin } = useContext(AccountContex);

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Full Name"/>
            <Marginer direction="vertical" margin={5}/>
            <Input type="email" placeholder="Email"/>
            <Marginer direction="vertical" margin={5}/>
            <Input type="password" placeholder="Password"/>
            <Marginer direction="vertical" margin={5}/>
            <Input type="email" placeholder="Confirm Password"/>
        </FormContainer>
        <Marginer direction="vertical" margin={15}/>
        <SubmitBottom type="submit">Enter</SubmitBottom>
        <Marginer direction="vertical" margin={10}/>
        <MutedLink>
            Already have an account? <BoldLink href="#" onClick={switchToSingin}>Login</BoldLink>
        </MutedLink>
    </BoxContainer>
}

