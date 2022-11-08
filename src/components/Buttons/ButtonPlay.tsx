import styled from '@emotion/styled';

export const ButtonPlay = styled.button`
  cursor: pointer;
  width: 260px;
  height: 60px;
  background: #38DF7A;
  color: #ffffff;
  border: 0;
  border-radius: 20px;
  font-family: 'Helvetica', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: #7F75F0FF;
  }
`