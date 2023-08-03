import styled from "styled-components";
import fondoMadera from "../../Imagenes/fondoMadera.png";

const StyledNosotros = styled.header`
    /*background-color: #000000;*/
    background-image: url(${fondoMadera});
`

const StyledNosotrosTitulo = styled.div`
    font-size: 64px;
    color: #FF6600;
    font-family: 'Benne', serif;
    font-family: 'Lumanosimo', cursive;
    text-align: center;
    padding-top: 24px;
`

const StyledNosotrosDescripcion = styled.div`
    font-size: 24px;
    color: #ffffff;
    font-family: 'Benne', serif;
    font-family: 'Lumanosimo', cursive;
    text-shadow: 1px 1px 2px #000000;
    /*padding-left: 5vw;*/
    padding: 20px 3vw;
    /*text-align: center;*/
    /*border: 1px solid white;*/
`

const SeccionSobre = () =>{

    return (
        <StyledNosotros>
            {/*<StyledNosotrosTitulo>RUSTIC 8 PIZZAS</StyledNosotrosTitulo>*/}
            <StyledNosotrosDescripcion>Nuestras pizzas son horneadas en horno de piedra a la leña para darle un sabor único y especial</StyledNosotrosDescripcion>
        </StyledNosotros>
    );

}

export default SeccionSobre;