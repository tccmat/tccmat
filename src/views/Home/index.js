import React from 'react';

import { ContainerHome, ContainerTutorial, Text, Title } from './style';

export default class Home extends React.Component{
    render(){
        return(
            <ContainerHome>
                <ContainerTutorial>
                    <Title>Tutorial</Title>
                    <Text>Passo 1 - Observe os numeros nas cartas.</Text>
                    <Text>Passo 2 - Observe a operação que ira aparecer.</Text>
                    <Text>Passo 3 - Selecione a carta que devera conter o resultado correto para a operação mostrada anteriormente.</Text>
                    <Text>Passo 4 - Aperte no botão conferir resposta para verificar se a carta certa foi selecionada.</Text>
                    <Text>*Sera somado ao placar 10 pontos para cada acerto</Text>
                </ContainerTutorial>
            </ContainerHome>
        );
    }
}