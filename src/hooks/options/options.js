import React, { useState, useEffect } from 'react';

import { Paper } from './paper/paper'
import { Rock } from './rock/rock'
import { Scissors } from './scissors/scissors'

import { Computer } from '../computer-play/computer-play'

import { WhoWinTitle } from '../whoWinTitle/whoWinTitle'

import styled from 'styled-components'

const OptionsWrapper = styled.div`
  margin-top:25px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;
  position:absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    transform: translate(-50%, -50%) scale(0.7);
  }
`

const TriangleWrapper = styled.div`
  opacity:${prop => prop.opacity};
  transition: ease-out 500ms;
  z-index:-1; 
  position:absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.4);
`

const PaperWrapper = styled.div`
  cursor:${props=> props.cursor};;
  opacity: ${props => props.opacityPaper};
  transition: ease-out 500ms;
  ${props => props.positionPaper}
  margin:50px;
  ${props => props.hover}
  @media (max-width: 768px) {
  ${props => props.positionPaperMedia}
  }

`

const RockWrapper = styled.div`
  cursor:${props=> props.cursor};;
  opacity:${props => props.opacityRock};
  margin:50px;
  ${props => props.positionRock}
  transition: ease-out 500ms;
  ${props => props.hover}
  @media (max-width: 768px) {
    ${props => props.positionRockMedia}
  }

`

const ScissorsWrapper = styled.div`
  cursor:${props=> props.cursor};
  opacity:${props => props.opacityScissor};
  ${props => props.positionScissor}
  justify-self:center;
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:2;
  margin:50px;
  transition: ease-out 500ms;
  ${props => props.hover}
  @media (max-width: 768px) {
    ${props => props.positionScissorMedia}
  }
`

const ComputerWrapper = styled.div`
  transition: ease-out 500ms;
  grid-column-start:2;
  grid-row-start:2;
  justify-self:right;
  ${props => props.positionComputer}
  opacity:${props => props.opacityComputer};
  z-index:-1;
  @media (max-width: 768px) {
    ${props => props.positionComputerMedia}
  }
`

const HostPicked = styled.div`
${props => props.hostPicked}
transition: ease-out 500ms;
color: white;
opacity:${props => props.opacityTitle};
position:absolute;
grid-column-start:2;
grid-row-start:2;
width: fit-content;
right:0%;
top:-79.5%;
z-index:-1;
@media (max-width: 768px) {
  ${props =>  props.hostPickedMedia}
}

`

const WhoWinWrapper= styled.div`
color:Snow;
opacity:${props => props.opacityWinner};
z-index:-2;
top:30%;
position:absolute;
align-self:center;
justify-self:center;
transition: ease-out 500ms;
@media (max-width: 768px) {
  ${props =>  props.positionTitleMedia}
}
`

const ButtonWrapper= styled.div`
  cursor:${props => props.cursorButton};
  color:Snow;
  opacity:${props => props.opacityWinner};
  top:50%;
  position:absolute;
  align-self:center;
  justify-self:center;
  transition: ease-out 200ms;
  border:solid;
  width: fit-content;
  height: fit-content;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem;
  border-width: thin;
  &:hover {
    transition: ease-in-out 300ms;
    transform: translate(0%, 8%);
  }
`



const Options = ({scoreValueSetter, valueReturner}) => {

  useEffect(() => {
    
  }, [])

  const [scoreSet, setScoreSet] = useState(0)

  const [play, setPlay] =useState('onplay')

  const [opacity, setOpacity] = useState('1')

  const [opacityTitle, setOpacityTitle] = useState('0')

  const [positionPaper, SetpositionPaper] = useState('transform:;')
  const [positionRock, SetpositionRock] = useState('transform:;')
  const [positionScissor, SetpositionScissor] = useState('transform:;')
  const [positionComputer, setPositionComputer] = useState('transform:;')
  const [hostPicked, setPositionhostPicked] = useState('transform:;')

  const [positionPaperMedia, SetpositionPaperMedia] = useState('transform:;')
  const [positionRockMedia, SetpositionRockMedia] = useState('transform:;')
  const [positionScissorMedia, SetpositionScissorMedia] = useState('transform:;')
  const [positionComputerMedia, setPositionComputerMedia] = useState('transform:;')
  const [hostPickedMedia, setPositionhostPickedMedia] = useState('transform:;')
  const [positionTitleMedia, setPositionTitleMedia]= useState('transform:translate(0%, 0%);')



  const [opacityPaper, setOpacityPaper] = useState('1')
  const [opacityRock, setOpacityRock] = useState('1')
  const [opacityScissor, setOpacityScissor] = useState('1')
  const [opacityComputer, setOpacityComputer] = useState('0')
  const [opacityWinner, setOpacityWinner] = useState('0')




  const [cursor, setCursor] = useState('pointer')

  const [cursorButton, setCursorButton] = useState('auto')

  const [computerChoice, setComputerChoice] =useState('')
  const [userChoice, setUserChoice] =useState('')

  const [hover, setHover] = useState("&:hover {transform: rotate(40deg);}")

  const computerSelects=(value)=>{
    setComputerChoice(value)
  }
  
  
  const SetPlayUi = (type) => {
    setHover("")
    setTimeout(() => {
      setOpacityTitle('1')
    }, 2000)
    if (type === 'paper') {
      setUserChoice('paper')
      setOpacity('0')
      SetpositionPaper('transform: translate(-26%, 50%);')
      setOpacityRock('0')
      setOpacityScissor('0')
      setCursor('auto')
      setTimeout(() => {
        setOpacityComputer('1')
        setPositionComputer('transform: translate(0%, -50%);');

      }, 5000)
      setTimeout(() => {
        SetpositionPaperMedia('transform: translate(-26%, 50%);')
        setPositionComputerMedia('transform: translate(0%, -50%);')
        setPositionhostPickedMedia('transform: translate(0%, 0%);')
        SetpositionPaper('transform: translate(-86%, 50%);')
        setPositionComputer('transform: translate(60%, -50%);');
        setPositionhostPicked('transform: translate(60%, 0%);')
        setOpacityWinner('1')
        setCursorButton('pointer')
        setPositionTitleMedia('transform: translate(0%, -220%);')


      }, 8000)
    }
    else if (type === 'rock') {
      setUserChoice('rock')
      setOpacity('0')
      SetpositionRock('transform: translate(-179%, 50%);')
      setOpacityPaper('0')
      setOpacityScissor('0')
      setCursor('auto')
      setTimeout(() => {
        setOpacityComputer('1')
        setPositionComputer('transform: translate(0%, -50%);');
        

      }, 5000)
      setTimeout(() => {
        setPositionhostPickedMedia('transform: translate(0%, 0%);')
        SetpositionRockMedia('transform: translate(-179%, 50%);')
        setPositionComputerMedia('transform: translate(0%, -50%);')
        SetpositionRock('transform: translate(-239%, 50%);')
        setPositionComputer('transform: translate(60%, -50%);');
        setPositionhostPicked('transform: translate(60%, 0%);')
        setOpacityWinner('1')
        setCursorButton('pointer')
        setPositionTitleMedia('transform: translate(0%, -220%);')


      }, 8000)
    }
    else if (type === 'scissor') {
      setUserChoice('scissor')
      setOpacity('0')
      SetpositionScissor('transform: translate(-102%, -103%);')
      setOpacityPaper('0')
      setOpacityRock('0')
      setCursor('auto')
      setTimeout(() => {
        setOpacityComputer('1')
        setPositionComputer('transform: translate(0%, -50%);');

      }, 5000)
      setTimeout(() => {
        setPositionhostPickedMedia('transform: translate(0%, 0%);')
        SetpositionScissorMedia('transform: translate(-102%, -103%);')
        setPositionComputerMedia('transform: translate(0%, -50%);')
        setOpacityWinner('1')
        SetpositionScissor('transform: translate(-162%, -103%);')
        setPositionComputer('transform: translate(60%, -50%);');
        setPositionhostPicked('transform: translate(60%, 0%);')
        setCursorButton('pointer')
        setPositionTitleMedia('transform: translate(0%, -220%);')

      }, 8000)
    }

  }

  const resetPlayUi = () => {

    setCursorButton('auto')

    setHover("&:hover {transform: rotate(40deg);}")

    setPlay(Math.random())

    
    setScoreSet(computerChoice)

    valueReturner(scoreSet)
    
    console.log(scoreSet)

    setOpacity('1')

    setOpacityTitle('0')
  
    SetpositionPaper('transform:;')
    SetpositionRock('transform:;')
    SetpositionScissor('transform:;')
    setPositionComputer('transform:;')
    setPositionhostPicked('transform:;')
  
    setOpacityPaper('1')
    setOpacityRock('1')
    setOpacityScissor('1')
    setOpacityComputer('0')
    setOpacityWinner('0')

    setPositionComputerMedia('transform: ;')
    SetpositionRockMedia('transform: ;')
    SetpositionScissorMedia('transform: ;')
    SetpositionPaperMedia('transform: ;')

    setPositionTitleMedia('transform: translate(0%, 0%);')



  
  
    setCursor('pointer')
  
    setComputerChoice('')
    setUserChoice('')

    
  }



  return (
    <OptionsWrapper>
      <PaperWrapper cursor={cursor} hover={hover} positionPaperMedia={positionPaperMedia} positionPaper={positionPaper} opacityPaper={opacityPaper}><Paper SetPlayUi={SetPlayUi}  play={play}/></PaperWrapper>
      <RockWrapper cursor={cursor} hover={hover} positionRockMedia={positionRockMedia} positionRock={positionRock} opacityRock={opacityRock}><Rock SetPlayUi={SetPlayUi} play={play}/></RockWrapper>
      <ScissorsWrapper cursor={cursor} hover={hover} positionScissorMedia={positionScissorMedia} positionScissor={positionScissor} opacityScissor={opacityScissor}><Scissors  SetPlayUi={SetPlayUi} play={play} /></ScissorsWrapper>
      <TriangleWrapper opacity={opacity}><svg xmlns="http://www.w3.org/2000/svg" width="305" height="277"><path fill="none" stroke="#000" stroke-width="15" d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z" opacity=".2" /></svg></TriangleWrapper>
      <HostPicked opacityTitle={opacityTitle} hostPickedMedia={hostPickedMedia} hostPicked={hostPicked}><span className="Title">THE HOUSE PICKED</span></HostPicked>
      <ComputerWrapper positionComputerMedia={positionComputerMedia} positionComputer={positionComputer} opacityComputer={opacityComputer}><Computer play={play} computerSelects={computerSelects} SetPlayUi={SetPlayUi} /></ComputerWrapper>
      <WhoWinWrapper className="Title" positionTitleMedia={positionTitleMedia} opacityWinner={opacityWinner}><WhoWinTitle play={play} scoreValueSetter={scoreValueSetter}computerChoice={computerChoice} userChoice={userChoice}/></WhoWinWrapper>
      <ButtonWrapper opacityWinner={opacityWinner} cursorButton={cursorButton}>
        <div onClick={resetPlayUi} className="Title" >RESET GAME</div>
      </ButtonWrapper>
    </OptionsWrapper>
  )
}

export default Options