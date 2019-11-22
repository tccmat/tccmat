import Styled from 'styled-components';
import Logo from '../../assets/Logo.png'

const ContainerHeader = Styled.div`
    background: #25008c;
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    max-height: 100px;
    color: white;
`

const Button = Styled.button`
    background: #4b00ff;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-left: 20px;
    min-width: 100px;
    max-width: 100px;
    min-height: 90px;
    max-height: 90px;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    &:hover{
        transform: scale(1.1);
        color: #d75dff;
        cursor: pointer;
    }
    border: none;
    box-shadow: 2px 2px 4px #e6e5e5a6;
`
const Title = Styled.div`
    display: flex;
    background: #25008c;
    color: white;
    margin-right: 20px;
    margin-left: 300px;
    font-size: 80px;                                                                                                                                                                                 px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
const Img = Styled.div`
    background-image: url(${Logo});
    background-position: center bottom;
    border-radius: 50%;
    min-width: 300px;
    min-height: 300px;
`

export { ContainerHeader, Button, Img, Title };