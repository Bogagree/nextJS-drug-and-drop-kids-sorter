import styled from '@emotion/styled';
import {ImageProps} from '../GameItem/GameItem';

export const ItemsSlotWrapper = styled.div<ImageProps>`
  width: 100%;
  min-width: 890px;
  height: 222px;

  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemsDropContainer = styled.div`
  width: 84%;
  height: 77%;
  
  background: green;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`

export const DropItemContainer = styled.div`
  width: 20%;
  height: 100%;
  background: yellow;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`