import React from 'react';

import { ContainerHome, ContainerTutorial, Text, Title } from './style';

export default class Home extends React.Component{
    render(){
        return(
            <ContainerHome>
                <ContainerTutorial>
                    <Text style={{marginTop: "50px"}}>
                        <h1>Bem Vindo ao Matematizando</h1>
                    </Text>
                    <Text>
                        <Title>Objetivo do Jogo</Title>
                        <p>Utilizar da memorização para reforçar os conteúdos aprendidos em sala.
                        Extimular a melhora da memória do jogador, para que fique cada vez mais fácil fixar qualquer tipo de conteúdo,
                        seja de matemática ou não, pois com uma boa memória o aprendizado fica bem mais fluido e facil de alcançar</p>
                    </Text>
                    <Text>
                        <Title>Tutorial</Title>
                        <p>Serão mostradas 5 cartas, cada uma com um valor.</p>
                        <p><strong>Passo 1</strong>- Observe os números nas cartas e os decore.</p>
                        <p>Depois de 10 segundos as cartas irão esconder seus conteúdos</p>
                        <p><strong>Passo 2 </strong>- Observe a operação que irá aparecer na parte escrita "Operação"</p>
                        <p><strong>Passo 3 </strong>- Resolva a operação(da maneira que conseguir)</p>
                        <p><strong>Passo 4 </strong>- Selecione a carta que contem o resultado correto para a operação mostrada.</p>
                        <p><strong>Passo 5 </strong>- Aperte no botão "conferir resposta" para verificar se a carta selecionada é a correta.</p>
                        <p>Caso esteja correta, sera somado ao placar 10 pontos</p>
                    </Text>
                </ContainerTutorial>
            </ContainerHome>
        );
    }
}