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
    background: #c7cbff;
    font-size: 30px;
    font-family: arial;
    padding: 30px;   
    border-radius: 20px;
    margin: 10px;
    margin-bottom: 40px;
    margin-left: 120px;
    max-width: 70%; 
`

const Title = Styled.div`
    background: #dedede;  
    font-size: 80px;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 20px;
    font-family:  Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #25008c;
`

const ContainerTutorial = Styled.div`
    background: none;
    margin: 50px;
    min-width: 700px;
    min-height: 100px;
    border-radius: 10px; 

`

export { ContainerHome, ContainerTutorial, Text, Title };