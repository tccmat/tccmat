import React from 'react';

import { ContainerHome, ContainerTutorial, Text, Title } from './style';

export default class Home extends React.Component{
    render(){
        return(
            <ContainerHome>
                <ContainerTutorial>
                    <Title>Tutorial</Title>
                    <Text>Serão mostradas 5 cartas, cada uma com um valor.</Text>
                    <Text><strong>Passo 1</strong>- Observe os numeros nas cartas e os decore.</Text>
                    <Text>Depois de 10 segundos as cartas irão esconder seus conteúdos</Text>
                    <Text><strong>Passo 2</strong>- Observe a operação que ira aparecer na parte escrita "Operação"</Text>
                    <Text><strong>Passo 3 </strong>Resolva a operação(da maneira que conseguir)</Text>
                    <Text><strong>Passo 4 </strong> - Selecione a carta que contem o resultado correto para a operação mostrada.</Text>
                    <Text><strong>Passo 5 </strong> - Aperte no botão "conferir resposta" para verificar se a carta selecionada é a correta.</Text>
                    <Text>Caso esteja correta, sera somado ao placar 10 pontos</Text>
                </ContainerTutorial>
            </ContainerHome>
        );
    }
}