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
    min-width: 50px;
    min-height: 20px;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    &:hover{
        transform: scale(1.1);
        color: black;
    }
`

const Img = Styled.div`
    background-image: url(${Logo});
    background-position: center bottom;
    border-radius: 50%;
    min-width: 300px;
    min-height: 300px;
`

export { ContainerHeader, Button, Img };