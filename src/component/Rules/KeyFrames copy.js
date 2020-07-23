
import styled, { keyframes } from 'styled-components';
 
export const keyFrameExampleOne = keyframes`
  0% {
    transform: translate(-50%, -40%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`

export const keyFrameExampleTwo = keyframes`
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  90% {
    transform: translate(-50%, -40%);
    opacity: 0;
  }
  100% {
      display:none
  }
`