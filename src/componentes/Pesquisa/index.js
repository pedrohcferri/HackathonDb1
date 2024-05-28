import Input from "../Input"
import styled from "styled-components"
import { useState} from 'react'
// import { produtos} from'./dadosPesquisa'

const PesquisaContainer = styled.section`
    color: #0b0b0cf6;
    text-align: center;
    padding: 30px 10px;
    height: 470px;
    width: 100%;
    flex-direction:column;
`

const Titulo = styled.h2`
    padding: 20px 10px
    color: black;
    font-size: 36px;
    text-align: center;
    width: 30%;
`
const Paragrafo = styled.p`
    padding: 20px 10px
    display: flex;
    color: black;
    width: 30%;

`
function Pesquisa (){
    const  [textoDigitado, setTextoDigitado]= useState('')
    return(
        <PesquisaContainer>
            <Titulo>Encontre aqui!</Titulo>
            <Input placeholder="ENCONTRE AQUI!"
            onBlur = { evento => setTextoDigitado(evento.target.value) }
            />
             <Paragrafo>{textoDigitado}</Paragrafo>
        </PesquisaContainer>
    )
}


export default Pesquisa