import React from 'react';
import styled from 'styled-components';
import './App.css';

import LogoAndScore from '../logoAndScore/logoAndScore'
import Rules from '../Rules/Rules'

function App() {
  const Wrapper = styled.div`
  height:100%;
  width:100%;
  display:grid;

  justify-content:center;
  margin-top:3%;

  `



  return (
    <Wrapper>
      <LogoAndScore/>
      <Rules/>
    </Wrapper>
  );
}

export default App;
