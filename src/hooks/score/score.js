import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import './score.css'


const ScoreWrapper = styled.div`
height:120px;
width:160px;
border: solid;
border-color:white;
border-radius: 1rem;
align-self:center;
justify-self:right;
margin-right:50px;
background-color:WhiteSmoke;
display:flex;
flex-direction:column;
justify-content:center;
`

const ScoreTitle = styled.h3`
margin:auto;
align-self:flex-start;
color:#464646;
`
const ScoreNumber = styled.h1`
margin:auto;
font-size:4rem;
margin-top:-10%;
color:#464646;
`

let score = 0


const Score = ({ scoreValue, scoreResetValue }) => {




  useEffect(() => {
    scoreSelector();
  }, [scoreResetValue])


  const scoreSelector = () => {
      if (scoreValue === "computer") {
        score -= 1
      } else if (scoreValue === "user") {
        score += 1
      } else if (scoreValue === "tie") {
        score += 0
      }
  }

  return (
    <ScoreWrapper>
      <ScoreTitle className="Title">SCORE</ScoreTitle>
      <ScoreNumber>{score}</ScoreNumber>
    </ScoreWrapper>
  )
}

export default Score

