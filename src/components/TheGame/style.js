import styled from 'styled-components'

const ContainerMain = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Arial, Helvetica, sans-serif;
`
const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a6efff;
    border-bottom: solid 1px #a1a1a1;
    border-radius: 20px 20px 0 0;
    width:100%;
    height: 150px;
`
const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9ffa9d;
    width: 100%;
    height: 300px;
`
const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a6efff;
    border-top: solid 1px #a1a1a1;
    border-radius: 0 0 20px 20px;
    width: 100%;
    height: 100px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #9ffa9d;
    border: solid 1px #333;
    border-radius: 10px;
    width: 50%;
    height: 100px;
`

const P = styled.div`
    display: flex;
    color: black;
    font-size: 30px;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4a4a4a;
    color: white;
    font-size: 24px;
    margin: 50px;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover{
        color:#00acb1;
        border: solid 3px #00acb1;
        transform: scale(1.1);
    }
`

const CardUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e1f7fc;
    width: 20%;
    margin: 10px;
    height: 150px;
    border-radius: 10px;
    border: solid 3px #333;
    font-size: 60px;
    cursor: pointer;
    &:hover{
        color:#00acb1;
        border: solid 3px #00acb1;
        transform: scale(1.1);
    }
    &:active{
        background:black;
    }


`

export { ContainerTitle, ContainerButton, ContainerCards, ContainerMain, Title, Button, CardUp, P }