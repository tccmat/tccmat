import React from 'react';

import { ContainerTitle, ContainerButton, ContainerCards, ContainerMain, Title, Button, CardUp, P } from './style';

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

            Clicked:0,
            
            corBordaC1: "black",
            corBordaC2: "black",
            corBordaC3: "black",
            corBordaC4: "black",
            corBordaC5: "black",
        };
    }

    carta1(){  
        if(this.state.Clicked == 0){
                this.setState({ cartaSelecionada: 1, Clicked: 1, corBordaC1:"#00acb1"});
        }else if(this.state.Clicked == 1 && this.state.cartaSelecionada != 1){
            alert("Voce nao pode selecionar outra carta!!")
        } 
    }
    carta2(){
        if(this.state.Clicked == 0){
            this.setState({ cartaSelecionada: 2, Clicked: 1, corBordaC2:"#00acb1"});
        }else if(this.state.Clicked == 1 && this.state.cartaSelecionada != 2){
            alert("Voce nao pode selecionar outra carta!!")
        } 
    }
    carta3(){;
        if(this.state.Clicked == 0){
            this.setState({ cartaSelecionada: 3, Clicked: 1, corBordaC3:"#00acb1"});
        }else if(this.state.Clicked == 1 && this.state.cartaSelecionada != 3){
            alert("Voce nao pode selecionar outra carta!!")
        } 
    }
    carta4(){
        if(this.state.Clicked == 0){
            this.setState({ cartaSelecionada: 4, Clicked: 1, corBordaC4:"#00acb1"});
        }else if(this.state.Clicked == 1 && this.state.cartaSelecionada != 4){
            alert("Voce nao pode selecionar outra carta!!")
        } 
    }
    carta5(){
        if(this.state.Clicked == 0){
            this.setState({ cartaSelecionada: 5, Clicked: 1, corBordaC5:"#00acb1"});
        }else if(this.state.Clicked == 1 && this.state.cartaSelecionada != 5){
            alert("Voce nao pode selecionar outra carta!!")
        }
    }

    componentDidMount() {
        this.zerarP();
        this.setarNumeros();
    }

    resetarClick(){
        setTimeout(() => {
            this.setState({
                Clicked : 0
            })
        }, 100);
    }

    resetarCor(){
        setTimeout(() => {
            this.setState({
                corBordaC1: "black",
                corBordaC2: "black",
                corBordaC3: "black",
                corBordaC4: "black",
                corBordaC5: "black",
            });
        }, 100);
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
        }, 5000)

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
                this.resetarClick();
                this.sumirConteudo();
                this.apagarOperacao();
                this.setarNumeros();
                this.resetarCor();
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
            this.resetarClick();
            this.descelecionar();
            this.setarNumeros();
            this.apagarOperacao();
            this.zerarP();
            this.resetarCor();
        },100);
    }

    apagarOperacao = () => {
        this.setState({ n1:null, n2:null});
    }

    mostarOperacao = (x1,x2) => {
        setTimeout(() => {
            this.setState({ n1:x1, n2:x2});
        }, 5000)
    }

    setarOperacao = (op) => {
        this.setState({
            Operacao: op
        });
    }

    setarNumeros() {
        setTimeout(() => {
            this.descelecionar();
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
                } 
            }else if(tipoOperacao == 3){
                let x =Math.floor(Math.random() * 5 + 1);

                do{
                    var x1 = Math.floor(Math.random() * 5 + 1);               
                    var x2 = Math.floor(Math.random() * 5 + 1);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
                } 
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
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
                    })
                    this.sumirConteudo();
                    this.mostarOperacao(x1,x2);
                } 
            }
        }, 10)             
    }

    render(){      
        return(
           <ContainerMain>
               <ContainerTitle>
                   <Title><P>Operação:</P><P>{this.state.n1}{this.state.Operacao}{this.state.n2}</P></Title>
                   <Title><P>Pontuação:</P><P>{this.state.pontuação}</P></Title>
               </ContainerTitle>
               <ContainerCards>
                   <CardUp onClick={this.carta1} cor={this.state.corBordaC1}>{this.state.c1}</CardUp>
                   <CardUp onClick={this.carta2} cor={this.state.corBordaC2}>{this.state.c2}</CardUp>
                   <CardUp onClick={this.carta3} cor={this.state.corBordaC3}>{this.state.c3}</CardUp>
                   <CardUp onClick={this.carta4} cor={this.state.corBordaC4}>{this.state.c4}</CardUp>
                   <CardUp onClick={this.carta5} cor={this.state.corBordaC5}>{this.state.c5}</CardUp>            
               </ContainerCards>
               <ContainerButton>
                   <Button onClick={this.tentarNovamente}>Reiniciar jogo</Button>
                   <Button onClick={this.conferirResposta}>Conferir resposta</Button>
               </ContainerButton>
           </ContainerMain>
        );
    }
}