import React from 'react';
import styled  from "styled-components";
import narutoImg from "../../images/naruto.png";
import { Quotes } from "./../../components";

export function App(){
    return (
        <Content>
            <Quotes quote={'ok'} speaker={'Speaker'} />
            <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
        </Content>

    );
};

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display:flex;
    justify-content: center;
    align-items: center;    
`;

const NarutoImg = styled.img` 
    max-width: 50vw;
    aling-self: flex-end
`;
