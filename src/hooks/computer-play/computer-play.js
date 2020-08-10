import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { Paper } from '../options/paper/paper'
import { Rock } from '../options/rock/rock'
import { Scissors } from '../options/scissors/scissors'


const ComputerWrapper = styled.div`
`


export const Computer = ({ computerSelects, play }) => {



  useEffect(() => {
    computerSelecting();
  }, [play])

  const [computerSelection, setComputerSelection] = useState('')
  
  const computerSelecting = () => {
    const randomNum = Math.floor(Math.random()*31)
    if(randomNum < 10){
      computerSelects("paper")
      setComputerSelection((
        <Paper />
      ))
    }
    else if(randomNum >= 10 && randomNum < 20){
      computerSelects("rock")
      setComputerSelection((
        <Rock  />
      ))
    }
    else{
      computerSelects("scissor")
      setComputerSelection((
        <Scissors />
      ))
    }
  }

    return (
        <ComputerWrapper>
        {computerSelection}
        </ComputerWrapper>
    )
}

