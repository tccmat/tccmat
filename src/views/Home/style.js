import Styled from 'styled-components';
import Fundo from '../../assets/background.jpg'

const ContainerHome = Styled.div`
    display: flex;
    background-image: url(${Fundo});
    min-height: 900px; 
    width: 100%;
    justify-content: center;
`
const Text = Styled.div`
    background: #dedede;
    font-size: 30px;
    font-family: arial;
    padding: 20px;
    border-radius: 20px;
    margin: 10px;
`

const Title = Styled.div`
    font-size: 80px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`

const ContainerTutorial = Styled.div`
    background: none;
    margin: 50px;
    min-width: 700px;
    min-height: 100px;

`

export { ContainerHome, ContainerTutorial, Text, Title };