import Input from "../Input"
import styled from "styled-components"

const PesquisaContainer = styled.section`
    display:flex;
    align-items: center;
    color: black;
    text-align: center;
    padding: 2rem 10rem;
    height:10rem;
    width: 100%;
`

const Titulo = styled.h2`
    color: black;
    font-size: 36px;
    text-align: center;
    width: 30%;
`
function Pesquisa (){
    return(
        <PesquisaContainer>
            <Titulo>Encontre aqui!</Titulo>
            <Input placeholder="Procurar!"/>
        </PesquisaContainer>
    )
}


export default Pesquisa