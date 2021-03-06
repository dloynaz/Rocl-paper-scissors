import React from 'react';
import styled from 'styled-components'

import Score from '../../hooks/score/score'

function LogoAndScore({scoreValue, scoreResetValue}) {

    const WrapperInstructions = styled.div`
    height:150px;
    width:700px;
    border:solid rgba(255,255,255, .7);
    border-radius:1rem;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr;
    @media (max-width: 768px) {
        width:300px;
        transform: scale(1);
      }
    `

    const Title = styled.h1`
    margin:0px;
    color:white;
    margin-left:20px;
    align-self:center;
    `

    const TitleWrapper= styled.div`
    align-self:center;
    `

    return (

        <WrapperInstructions>
            <TitleWrapper>
                <Title>ROCK</Title>
                <Title>PAPER</Title>
                <Title>SCISSORS</Title>
            </TitleWrapper>

            

        </WrapperInstructions>

    )
}

export default LogoAndScore