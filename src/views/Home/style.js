import Styled from 'styled-components';

const ContainerHome = Styled.div`
    display: flex;
    background: #e8e8e8a6;
    min-height: 649px; 
    width: 100%;
    justify-content: center;
`
const Text = Styled.div`
    font-size: 20px;
    font-family: arial;
    padding: 10px;
`

const Title = Styled.div`
    font-size: 50px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`

const ContainerTutorial = Styled.div`
    background: white;
    margin: 50px;
    min-width: 700px;
    min-height: 100px;
`

export { ContainerHome, ContainerTutorial, Text, Title };