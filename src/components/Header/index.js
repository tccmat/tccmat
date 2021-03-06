import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerHeader, Button, Img, Title } from './style';

export default class Header extends React.Component{
    render(){
        return(
            <ContainerHeader>
                <Img></Img>
                <Link to='/'><Button>Home</Button></Link>
                <Link to='/game'><Button>Game</Button></Link>
                <Link to='/game1'><Button>Aumento de dificuldade</Button></Link>
                <Title>Matematizando</Title>
            </ContainerHeader>
        );
    }
}