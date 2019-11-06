import Styled from 'styled-components';

const ContainerGame = Styled.div`
    display: flex;
    background: #e8e8e8a6;
    min-height: 649px; 
    width: 100%;
    justify-content: center;
`
const ContainerTheGame = Styled.div`
    background: white;
    border-radius: 20px;
    margin: 50px;
    min-width: 700px;
    min-height: 100px;
    border: solid 3px black;
`

export { ContainerGame, ContainerTheGame };