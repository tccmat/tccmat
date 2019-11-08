import Styled from 'styled-components';
import background from '../../assets/background.png'

const ContainerGame = Styled.div`
    background-image: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px;
    max-height: 900px; 
    width: 100%;
    justify-content: center;
`
const ContainerTheGame = Styled.div`
    border-radius: 20px;
    margin: 50px;
    min-width: 700px;
    min-height: 100px;
    max-height: 550px;
`

export { ContainerGame, ContainerTheGame };