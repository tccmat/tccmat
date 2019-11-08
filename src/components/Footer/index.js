import React from 'react'
import {ContainerFooter, P} from './style'

export default class Footer extends React.Component{
    render(){
        return(
            <ContainerFooter>
                <P>Link do gitHub: https://github.com/tccmat/tccmat</P>
                <P>Contato: Tccmat2019@gmail.com</P>
            </ContainerFooter>
        )
    }

}