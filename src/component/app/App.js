import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';

import LogoAndScore from '../logoAndScore/logoAndScore'
import Rules from '../Rules/Rules'
import Options from '../../hooks/options/options'

const ExternalWrapper = styled.div`
height:100%;
width:100%;
display:grid;
justify-content:center;
margin-top:3%;
`

const InternalWrapper = styled.div`
opacity:${props => props.opacity};
transition:1s;
display:grid;
grid-template-columns:1fr;
grid-template-rows: 1fr 4fr 150px;
`


function App() {



  useEffect( () => {
    changeDisplay();
  }, [])

  const [scoreResetValue, setScoreResetValue]=useState("");
  const [scoreValue, setScoreValue] = useState("Nothing")

  const [opacity, setOpacity] = useState('0.5');
  const [display, setDisplay] = useState(true);

  const [rules, setRules] = useState(true);
  const [rulesBoolean, setRulesBoolean] = useState(false);

  


  const changeDisplay = (displayValue) => {
    if(!displayValue){
      setDisplay(displayValue)
      setOpacity('0.5')
    }else if(displayValue){
      setDisplay(displayValue)
      setOpacity('1')
    }
  }

  const rulesSet = () => {
    if(rules){
      setRules(false)
      setRulesBoolean(false)


    } else {
      setRules(true)
      setRulesBoolean(true)
    }
  }

  const setStateRulesBoolean = () => {
    rulesBoolean ? setRulesBoolean(false) : setRulesBoolean(true);
  }



  const scoreValueSetter = (value) => {
    setScoreValue(value)
  }

  const valueReturner = (value) => {
    setScoreResetValue(value)
    console.log(scoreResetValue)
  }

  



  return (
    <div id='backgroundImg'>
    <ExternalWrapper>
      <InternalWrapper opacity={opacity}>
        <LogoAndScore scoreValue={scoreValue} scoreResetValue={scoreResetValue}/>
        <Options scoreValueSetter={scoreValueSetter} valueReturner={valueReturner}/>
        <div  id="rulesButton" onClick={rulesSet}><h2>RULES</h2></div>
      </InternalWrapper>
        <Rules changeDisplay={changeDisplay} rules={rules} opacity={opacity} setStateRulesBoolean={setStateRulesBoolean} rulesBoolean={rulesBoolean}/>
    </ExternalWrapper>
    </div>
  );
}

export default App;
