import styled from '@emotion/styled';
import {ImageProps} from '../../GameItem/GameItem';



export const BackgroundLayout = styled.div<ImageProps>`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  
  & h1 {
    margin-top: 0;
  }
`









