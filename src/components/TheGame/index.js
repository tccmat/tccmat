import React from 'react';

import { ContainerTitle, ContainerButton, ContainerCards, ContainerMain, Title, Button, CardUp, P, A} from './style';

export default class TheGame extends React.Component{

    constructor(props) {
        super(props);
        this.setarNumeros = this.setarNumeros.bind(this);
        this.carta1 = this.carta1.bind(this);
        this.carta2 = this.carta2.bind(this);
        this.carta3 = this.carta3.bind(this);
        this.carta4 = this.carta4.bind(this);
        this.carta5 = this.carta5.bind(this);
        this.conferirResposta = this.conferirResposta.bind(this);
        this.tentarNovamente = this.tentarNovamente.bind(this);
        this.adicionarP = this.adicionarP.bind(this);
        this.mostarOperacao = this.mostarOperacao.bind(this);
        this.mostrarConteudo = this.mostrarConteudo.bind(this);

        this.state = {
            m1: null,
            m2: null,

            n1: null,
            n2: null,

            c1: null,
            c2: null,
            c3: null,
            c4: null,
            c5: null,

            card1: null,
            card2: null,
            card3: null,
            card4: null,
            card5: null,

            tipo: null,

            resposta: null,

            pontuação: 0,

            cartaSelecionada: 0,

            Operacao: null,

            contador: 10,    
        };
    }

    carta1(){  
        setTimeout(() => {
            this.setState({ cartaSelecionada: 1},this.mostrarConteudo());
        }, 100)  
    }
    carta2(){
        setTimeout(() => {
            this.setState({ cartaSelecionada: 2},this.mostrarConteudo());
        }, 100)
    }
    carta3(){;
        setTimeout(() => {
            this.setState({ cartaSelecionada: 3},this.mostrarConteudo());
        }, 100)
    }
    carta4(){
        setTimeout(() => {
            this.setState({ cartaSelecionada: 4},this.mostrarConteudo());
        }, 100)
    }
    carta5(){
        setTimeout(() => {
            this.setState({ cartaSelecionada: 5},this.mostrarConteudo());
        }, 100)
    }

    componentDidMount() {
        this.zerarP();
        this.setarNumeros();
    }

    mostrarConteudo = () => {
        setTimeout(() => {
            if(this.state.cartaSelecionada == 1){
                let a = this.state.card1;
                this.setState({
                    c1: a,
                    c2: null,
                    c3: null,
                    c4: null,
                    c5: null,
                }); 
            }else if(this.state.cartaSelecionada == 2){
                let a = this.state.card2;
                this.setState({
                    c1: null,
                    c2: a,
                    c3: null,
                    c4: null,
                    c5: null,
                }); 
            }else if(this.state.cartaSelecionada == 3){
                let a = this.state.card3;
                this.setState({
                    c1: null,
                    c2: null,
                    c3: a,
                    c4: null,
                    c5: null,
                }); 
            }else if(this.state.cartaSelecionada == 4){
                let a = this.state.card4;
                this.setState({
                    c1: null,
                    c2: null,
                    c3: null,
                    c4: a,
                    c5: null,
                }); 
            }else if(this.state.cartaSelecionada == 5){
                let a = this.state.card5;
                this.setState({
                    c1: null,
                    c2: null,
                    c3: null,
                    c4: null,
                    c5: a,
                }); 
            }
        }, 100)
    }

    sumirConteudo = () => {
        setTimeout(() => {
            this.setState({ 
                c1: null,
                c2: null,
                c3: null,
                c4: null,
                c5: null,

            });
        }, 10000)

    }

    adicionarP(){
        this.setState(function(state) {
            return {
                pontuação: state.pontuação + 10,
            };
        });              
    }

    zerarP(){
        this.setState(function() {
            return {
              pontuação: 0,
            };
        }); 
    }


    conferirResposta(){
        setTimeout(() => {
            if(this.state.cartaSelecionada == 0){
                alert("selecione uma carta");
            }else{
                if(this.state.tipo == 1){
                    if(this.state.cartaSelecionada == 5){
                        this.adicionarP();
                        alert("Acertou")
                    }else {
                        alert("Errou")
                    }
                }else if(this.state.tipo == 2){
                    if(this.state.cartaSelecionada == 2){
                        this.adicionarP();
                        alert("Acertou")
                    }else {
                        alert("Errou")
                    }
                }else if(this.state.tipo == 3){
                    if(this.state.cartaSelecionada == 1){
                        this.adicionarP();
                        alert("Acertou")
                    }else {
                        alert("Errou")
                    }
                }else if(this.state.tipo == 4){
                    if(this.state.cartaSelecionada == 4){
                        this.adicionarP();
                        alert("Acertou")
                    }else {
                        alert("Errou")
                    }
                }else if(this.state.tipo == 5){
                    if(this.state.cartaSelecionada == 3){
                        this.adicionarP();
                        alert("Acertou")
                    }else {
                        alert("Errou")
                    }
                }
                this.descelecionar();
                this.sumirConteudo();
                this.apagarOperacao();
                this.setarNumeros();
            }   
        }, 100)       
    }



    descelecionar(){
        this.setState({
            cartaSelecionada: 0,
        });
    }

    tentarNovamente(){
        setTimeout(() => {
            this.limparCards()
            this.descelecionar();
            this.setarNumeros();
            this.apagarOperacao();
            this.zerarP();
        },10);
    }

    apagarOperacao = () => {
        this.setState({ n1:null, n2:null});
    }

    mostarOperacao = (x1,x2) => {
        setTimeout(() => {
            this.setState({ n1:x1, n2:x2});
        }, 10000)
    }

    setarOperacao = (op) => {
        this.setState({
            Operacao: op
        });
    }

    limparCards(){
        this.setState({
            c1: null,
            c2: null,
            c3: null,
            c4: null,
            c5: null,

            card1: null,
            card2: null,
            card3: null,
            card4: null,
            card5: null,
        });
    }

    setarNumeros() {
        setTimeout(() => {
            let tipoOperacao = Math.floor(Math.random() * 3 + 1);
            //console.log(tipoOperacao)

            if(tipoOperacao == 1){
                let x =Math.floor(Math.random() * 5 + 1);

                let x1 = Math.floor(Math.random() * 11);
                let x2 = Math.floor(Math.random() * 11);

                let r1 = Math.floor(Math.random() * 20 + 10);
                let r2 = Math.floor(Math.random() * 30 + 20);
                let r3 = Math.floor(Math.random() * 40 + 30);
                let r4 = Math.floor(Math.random() * 50 + 40);

                this.setarOperacao("x");

                let r = x1*x2;
                
                if(x == 1){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r3,
                        c4: r4,
                        c5: r,

                        card1: r1,
                        card2: r2,
                        card3: r3,
                        card4: r4,
                        card5: r,
                        
                        tipo: 1,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 2){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r,
                        c3: r3,
                        c4: r4,
                        c5: r2,

                        card1: r1,
                        card2: r,
                        card3: r3,
                        card4: r4,
                        card5: r2,

                        tipo: 2,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 3){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r,
                        c2: r2,
                        c3: r3,
                        c4: r4,
                        c5: r1,

                        card1: r,
                        card2: r2,
                        card3: r3,
                        card4: r4,
                        card5: r1,

                        tipo: 3,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 4){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r3,
                        c4: r,
                        c5: r4,

                        card1: r1,
                        card2: r2,
                        card3: r3,
                        card4: r,
                        card5: r4,

                        tipo: 4,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 5){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r,
                        c4: r4,
                        c5: r3,

                        card1: r1,
                        card2: r2,
                        card3: r,
                        card4: r4,
                        card5: r3,

                        tipo: 5,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
            } 
            }else if(tipoOperacao == 2){
                let x =Math.floor(Math.random() * 5 + 1);

                let x1 = Math.floor(Math.random() * 11);
                let x2 = Math.floor(Math.random() * 11);

                let r1 = Math.floor(Math.random() * 20 + 10);
                let r2 = Math.floor(Math.random() * 30 + 21);
                let r3 = Math.floor(Math.random() * 40 + 31);
                let r4 = Math.floor(Math.random() * 50 + 41);

                this.setarOperacao("+");

                let r = x1+x2;
                
                if(x == 1){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r3,
                        c4: r4,
                        c5: r,

                        card1: r1,
                        card2: r2,
                        card3: r3,
                        card4: r4,
                        card5: r,
                        
                        tipo: 1,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 2){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r,
                        c3: r3,
                        c4: r4,
                        c5: r2,

                        card1: r1,
                        card2: r,
                        card3: r3,
                        card4: r4,
                        card5: r2,

                        tipo: 2,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 3){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r,
                        c2: r2,
                        c3: r3,
                        c4: r4,
                        c5: r1,

                        card1: r,
                        card2: r2,
                        card3: r3,
                        card4: r4,
                        card5: r1,

                        tipo: 3,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 4){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r3,
                        c4: r,
                        c5: r4,

                        card1: r1,
                        card2: r2,
                        card3: r3,
                        card4: r,
                        card5: r4,

                        tipo: 4,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 5){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r,
                        c4: r4,
                        c5: r3,

                        card1: r1,
                        card2: r2,
                        card3: r,
                        card4: r4,
                        card5: r3,

                        tipo: 5,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                } 
            }else if(tipoOperacao == 3){
                setTimeout(() => {
                    let x =Math.floor(Math.random() * 5 + 1);

                    do{
                        var x1 = Math.floor(Math.random() * 20 + 2);               
                        var x2 = Math.floor(Math.random() * 10 + 2);
                    }while(x1%x2!=0); 
    
                    let r1 = Math.floor(Math.random() * 20 + 10);
                    let r2 = Math.floor(Math.random() * 30 + 21);
                    let r3 = Math.floor(Math.random() * 40 + 31);
                    let r4 = Math.floor(Math.random() * 50 + 41);
    
                    this.setarOperacao("/");
    
                    let r = x1/x2;
                    
                    if(x == 1){
                        this.setState({
                            m1: x1,
                            m2: x2,
    
                            c1: r1,
                            c2: r2,
                            c3: r3,
                            c4: r4,
                            c5: r,
    
                            card1: r1,
                            card2: r2,
                            card3: r3,
                            card4: r4,
                            card5: r,
                            
                            tipo: 1,
    
                            resposta: r,
                        },this.sumirConteudo(),this.mostarOperacao(x1,x2));
                        
                    }else if(x == 2){
                        this.setState({
                            m1: x1,
                            m2: x2,
    
                            c1: r1,
                            c2: r,
                            c3: r3,
                            c4: r4,
                            c5: r2,
    
                            card1: r1,
                            card2: r,
                            card3: r3,
                            card4: r4,
                            card5: r2,
    
                            tipo: 2,
    
                            resposta: r,
                        },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                    }else if(x == 3){
                        this.setState({
                            m1: x1,
                            m2: x2,
    
                            c1: r,
                            c2: r2,
                            c3: r3,
                            c4: r4,
                            c5: r1,
    
                            card1: r,
                            card2: r2,
                            card3: r3,
                            card4: r4,
                            card5: r1,
    
                            tipo: 3,
    
                            resposta: r,
                        },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                    }else if(x == 4){
                        this.setState({
                            m1: x1,
                            m2: x2,
    
                            c1: r1,
                            c2: r2,
                            c3: r3,
                            c4: r,
                            c5: r4,
    
                            card1: r1,
                            card2: r2,
                            card3: r3,
                            card4: r,
                            card5: r4,
    
                            tipo: 4,
    
                            resposta: r,
                        },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                    }else if(x == 5){
                        this.setState({
                            m1: x1,
                            m2: x2,
    
                            c1: r1,
                            c2: r2,
                            c3: r,
                            c4: r4,
                            c5: r3,
    
                            card1: r1,
                            card2: r2,
                            card3: r,
                            card4: r4,
                            card5: r3,
    
                            tipo: 5,
    
                            resposta: r,
                        },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                    } 
                }); 
            }else if(tipoOperacao == 4){
                let x =Math.floor(Math.random() * 5 + 1);

                let x1 = Math.floor(Math.random() * 20 + 1);   
                let x2 = Math.floor(Math.random() * 19 + 1);

                let r1 = Math.floor(Math.random() * 20 + 10);
                let r2 = Math.floor(Math.random() * 30 + 21);
                let r3 = Math.floor(Math.random() * 40 + 31);
                let r4 = Math.floor(Math.random() * 50 + 41);

                this.setarOperacao("-");

                let r = x1-x2;
                
                if(x == 1){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r3,
                        c4: r4,
                        c5: r,

                        card1: r1,
                        card2: r2,
                        card3: r3,
                        card4: r4,
                        card5: r,
                        
                        tipo: 1,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 2){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r,
                        c3: r3,
                        c4: r4,
                        c5: r2,

                        card1: r1,
                        card2: r,
                        card3: r3,
                        card4: r4,
                        card5: r2,

                        tipo: 2,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 3){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r,
                        c2: r2,
                        c3: r3,
                        c4: r4,
                        c5: r1,

                        card1: r,
                        card2: r2,
                        card3: r3,
                        card4: r4,
                        card5: r1,

                        tipo: 3,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 4){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r3,
                        c4: r,
                        c5: r4,

                        card1: r1,
                        card2: r2,
                        card3: r3,
                        card4: r,
                        card5: r4,

                        tipo: 4,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                }else if(x == 5){
                    this.setState({
                        m1: x1,
                        m2: x2,

                        c1: r1,
                        c2: r2,
                        c3: r,
                        c4: r4,
                        c5: r3,

                        card1: r1,
                        card2: r2,
                        card3: r,
                        card4: r4,
                        card5: r3,

                        tipo: 5,

                        resposta: r,
                    },this.sumirConteudo(),this.mostarOperacao(x1,x2))
                } 
            }
        }, 10)             
    }

    render(){      
        return(
           <ContainerMain>
               <ContainerTitle>
                   <Title><P style={{color:"#0309da"}}>Operação:</P><P style={{color:"#ec6d0c", fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>{this.state.n1}{this.state.Operacao}{this.state.n2}</P></Title>
                   <Title><P>Pontuação:</P><P>{this.state.pontuação}</P></Title>
               </ContainerTitle>
               <ContainerCards>
                   <CardUp onClick={this.carta1}>{this.state.c1}</CardUp>
                   <CardUp onClick={this.carta2}>{this.state.c2}</CardUp>
                   <CardUp onClick={this.carta3}>{this.state.c3}</CardUp>
                   <CardUp onClick={this.carta4}>{this.state.c4}</CardUp>
                   <CardUp onClick={this.carta5}>{this.state.c5}</CardUp>            
               </ContainerCards>
               <ContainerButton>
                   <Button onClick={this.tentarNovamente}>Reiniciar jogo</Button>
                   <Button onClick={this.conferirResposta}>Conferir resposta</Button>
               </ContainerButton>
           </ContainerMain>
        );
    }
}