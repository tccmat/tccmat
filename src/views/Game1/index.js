import React from 'react';

import TheGame from './../../components/TheGame1/index'
import { ContainerGame, ContainerTheGame } from './style';

export default class Game1 extends React.Component{
    render(){
        return(
            <ContainerGame>
                <ContainerTheGame>
                    <TheGame />
                </ContainerTheGame>
            </ContainerGame>
        );
    }
}