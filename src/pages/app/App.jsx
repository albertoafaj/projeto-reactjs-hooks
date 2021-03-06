import React, { useState } from 'react';
import styled  from "styled-components";
import narutoImg from "../../images/naruto.png";
import { Quotes } from "./../../components";
import { getQuote } from '../../services';
import soundJutso from '../../sounds/jutso.mp3';

const audio = new Audio(soundJutso);

export function App(){

    const [quoteState, setQuoteState] = useState({
        quote: 'Ok',
        speaker: ' Speaker'
    });

    const onUpdate = async () => {
        const quote = await getQuote();
        audio.play();
        setQuoteState(quote);
        
    }

    return (
        <Content>
            <Quotes {...quoteState} onUpdate={onUpdate}/>
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
