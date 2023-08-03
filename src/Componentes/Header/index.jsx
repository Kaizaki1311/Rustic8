import React from "react";
import styled from "styled-components";
import logo from "../../Imagenes/logo.png";
import fondoMadera from "../../Imagenes/fondoMadera.png";
import { colorPrimario } from "../UI/Variables";

const StyleHeader = styled.div`
  /*background-color: #41d3be;*/
  /*background-color: ${colorPrimario}; /*se hace una inyeccion de variables*/
  display: flex;
  justify-content: space-between;
  padding: 0 3vw;
  height: 20vh;
  align-items: center;
  background-image: url(${fondoMadera});
`
const Logo = styled.img`
  height: 150px;
  width: 150px;
`
const StyledHeaderTitulo = styled.div`
    width: 100%;
    font-size: 64px;
    color: #FF6600;
    font-family: 'Benne', serif;
    font-family: 'Lumanosimo', cursive;
    text-align: center;
    padding-top: 24px;
    padding-right: 150px;
    text-shadow: 1px 1px 2px #ffffff;
    /*border: 1px solid red;*/
`


const StyledContenedorBtns = styled.nav`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    /*height:50px;*/
    /*margin-right: 30%;*/
    justify-content: space-between;
    /*border: 1px solid white;*/

    @media (max-width:768px) {
        flex-direction: column;
        align-items: end;
    }

`
const BtnHeader = styled.a`
  /*display: flex;*/
  height: 25px;
  width: 90px;
  text-decoration: none;
  text-align: center;

  border-radius: 3px;
  /*padding: 5px 40px;*/
  /*margin: 0 20px;*/
  font-weight: 600;
  border: 2px solid white;
  color: ${(props) => props.primary ? "white" : colorPrimario}; //se hace una compracion si props.primary es primary el color sera white SI NO sera colorPrimario
  background:  ${(props) => props.primary ? "transparente" : "white"};

  @media (max-width:768px) {
        margin-bottom: 5px;
    }

`

const Header = () => {
    return (
        <StyleHeader>
            <Logo src={logo} alt="Logo Rustic8" />
            <StyledHeaderTitulo>RUSTIC 8 PIZZAS</StyledHeaderTitulo>
            {/*<StyledContenedorBtns>
                <BtnHeader href="https://google.com">Inicio</BtnHeader>
                <BtnHeader href="https://google.com"> Sobre </BtnHeader>
                <BtnHeader href="https://google.com"> Menú </BtnHeader>
                <BtnHeader href="https://google.com"> Contacto </BtnHeader>
            </StyledContenedorBtns>*/}
        </StyleHeader>
    );
};

export default Header;