import React, { useState, useEffect } from 'react';

import styled from 'styled-components'


const RockWrapper = styled.div`
  transition: 300ms ease;
  border-radius: 50%;
  background-color:white;
  height:150px;
  width:150px;
  border: solid;
  border-width:20px;
  border-color:grey;
  display:flex;
  border-top-style: ridge;
  border-right-style: groove;
  border-bottom-style: groove;
  border-left-style: ridge;
  border-color:red;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);


`
const Title = styled.div`
  transition: cubic-bezier(0.71, 0.32, 0.58, 1) 300ms;
  color: white;
  opacity:${props => props.opacity};
  position:absolute;
  top:-35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
`

export const Rock = ({ SetPlayUi, play }) => {

  useEffect(() => {
    opacityChanger()
  }, [play])

  const [opacity, Setopacity] = useState('0')


  const Select = () => {
    if (SetPlayUi) {
      SetPlayUi('rock')
      setTimeout(() => {
        Setopacity('1')
      }, 1000)
    }
    Setopacity('0')
  }

  const opacityChanger = () => {
    Setopacity('0')
  }

  return (
    <div>
      <Title opacity={opacity} class="title"><span className="Title">YOU PICKED</span></Title>
      <RockWrapper onClick={Select}>
        <svg style={{ margin: 'auto', transform: 'scale(1.5)' }} xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#3B4262" d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z" /></svg>
      </RockWrapper>
    </div>
  )
}

