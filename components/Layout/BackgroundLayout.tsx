import styled from '@emotion/styled';
import bg from "../../public/img/backgrounds/background_settings.png"



const BackgroundLayout = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  background-image: url(${bg.src});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  
  & h1 {
    margin-top: 0;
  }
`

export default BackgroundLayout