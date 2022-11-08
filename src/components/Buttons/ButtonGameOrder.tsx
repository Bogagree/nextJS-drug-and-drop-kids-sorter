import styled from '@emotion/styled';

export const ButtonGameOrder = styled.button`
  cursor: pointer;
  font-family: 'Calibri', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 0;
  padding: 3px 22px;
  background: #FFD748;
  color: #423F45;
  &:hover {
    opacity: 0.8;
  }
  &:disabled{
    opacity: 0.56;
  }
`