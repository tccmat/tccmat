import React from 'react'
import {ContainerFooter, P, A} from './style'

export default class Footer extends React.Component{
    render(){
        return(
            <ContainerFooter>
                <P>Link do gitHub: https://github.com/tccmat/tccmat</P>
                <P>Contato: email.com</P>
            </ContainerFooter>
        )
    }

}