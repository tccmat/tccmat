import React from 'react';

import TheGame from './../../components/TheGame/index'
import { ContainerGame, ContainerTheGame } from './style';

export default class Game extends React.Component{
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