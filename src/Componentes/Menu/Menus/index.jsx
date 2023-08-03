import { useState } from "react"
import styled from "styled-components";
import Title from "../../Title";
import SubTitle from "../../SubTitle";
import Opcion from "../Opciones";
import Combo1 from "../Combo1";
import Combo2 from "../Combo2";
import fondoSnacks from "../../../Imagenes/fondoComida.png";
import imagen1 from "../../../Imagenes/pizza1.jpg";
import imagen2 from "../../../Imagenes/pizza2.jpg";
import imagen3 from "../../../Imagenes/pizza3.jpg";
import imagen4 from "../../../Imagenes/hot-dog.jpg";
import imagen5 from "../../../Imagenes/nachos.jpg";
import imagen6 from "../../../Imagenes/papas-fritas.png";

/*fondo= styled.img`
opacity: 1;
`*/

const StyledContainer = styled.section`
  //background-color: ${({ theme }) => theme.body}; //Codigo para definir la seleccion del tema
  min-height: 90vh;
  padding: 0px 3vw;
  /*border: 1px solid #000000;*/
  border: 1px solid #FF6600;
  font-family: 'Lumanosimo', cursive;
  //background-image: url("../../../Imagenes/fondoComida.png");
  background-image: url(${fondoSnacks});  
`

const StyleMenu = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #FFFFFF;
    /*padding-top: 5px;*/
    margin-bottom: 30px;
`

const SeccionMenu = () => {

    const MenuOpciones = [
        {
            id:1,
            imagen: imagen1,
            nombre: "Y LA QUESO…",
            ingredientes: "Salsa pomodoro / Mezcla de 6 quesos, Mozzarella, Monterey Jack, Parmesano, Cheddar, Chihuahua y Asadero con un toque de Chile Quebrado",
            precioG: "130.00",
            precioP: "75.00",
            estatus: true
        },
        {
            id:2,
            imagen: imagen2,
            nombre: "CARNES FRÍAS",
            ingredientes: "Salsa pomodoro / Queso Mozzarella, Queso Monterey Jack, Aceituna Verde Rellena, Salchicha de Pavo, Jamón de Pavo y Pepperoni",
            precioG: "120.00",
            precioP: "70.00",
            estatus: true
        },
        {
            id:3,
            imagen: imagen3,
            nombre: "NAPOLITANA",
            ingredientes: "Salsa Pomodoro / Queso Mozzarella, Queso Monterey Jack, Queso Parmesano, Cebolla Morada, Champiñones, Pimientos, Aceituna Negra",
            precioG: "110.00",
            precioP: "65.00",
            estatus: true
        },
        {
            id:4,
            imagen: imagen4,
            nombre: "MARGARITA",
            ingredientes: "Salsa Pomodoro / Queso Mozzarella, Queso Monterey Jack, Queso Parmesano, Jitomate Asado y Albahaca Fresca",
            precioG: "110.00",
            precioP: "65.00",
            estatus: true
        },
        {
            id:5,
            imagen: imagen5,
            nombre: "PEPPERONI",
            ingredientes: "Salsa Pomodoro / Queso Mozzarella, Queso Monterey Jack y Pepperoni",
            precioG: "110.00",
            precioP: "65.00",
            estatus: true
        },
        {
            id:6,
            imagen: imagen6,
            nombre: "HAWAIIAN PEPPERONI",
            ingredientes: "Salsa Pomodoro / Queso Mozzarella, Queso Monterey Jack, Pepperoni y Piña asada",
            precioG: "110.00",
            precioP: "65.00",
            estatus: true
        },
    ];

    const MenuCombo1 = [
        {
            id:1,
            imagen: imagen1,
            nombre: "PIZZA MEDIANA DE:",
            opcion1: "Carnes Frías / Napolitana / Margarita / Pepperoni / Hawaiian Pepperoni",
            complemento1: "Con papás Rustic 8",
            complemento2: "A la Francesa",
            precio1: "160.00",
            precio2: "",
            estatus: true
        },
        {
            id:2,
            imagen: imagen1,
            nombre: "PIZZA MEDIANA DE:",
            opcion1: "Y la Queso...",
            complemento1: "Con papás Rustic 8",
            complemento2: "A la Francesa",
            precio1: "180.00",
            precio2: "",
            estatus: true
        },
        {
            id:3,
            imagen: imagen2,
            nombre: "PIZZA PERSONAL DE:",
            opcion1: "Carnes Frías / Napolitana / Margarita / Pepperoni / Hawaiian Pepperoni",
            complemento1: "Con papás Rustic 8",
            complemento2: "A la Francesa",
            precio1: "100.00",
            precio2: "",
            estatus: true
        },
        {
            id:4,
            imagen: imagen2,
            nombre: "PIZZA PERSONAL DE:",
            opcion1: "Y la Queso...",
            complemento1: "Con papás Rustic 8",
            complemento2: "A la Francesa",
            precio1: "115.00",
            precio2: "",
            estatus: true
        }
    ];

    const MenuCombo2 = [
        {
            id:1,
            imagen: imagen3,
            nombre: "COMBO RUSTIC 8",
            opcion1: "Boneless, Papas a la Francesa y Dedos de Queso",
            complemento1: "",
            complemento2: "",
            precio1: "200.00",
            precio2: "",
            estatus: true
        },
        {
            id:2,
            imagen: imagen4,
            nombre: "DOGGO PIZZA",
            opcion1: "",
            complemento1: "Con papás Rustic 8",
            complemento2: "A la Francesa",
            precio1: "115.00",
            precio2: "95.00",
            estatus: true
        },
        {
            id:3,
            imagen: imagen5,
            nombre: "ALITAS ADOBADAS",
            opcion1: "",
            complemento1: "Con papás Rustic 8",
            complemento2: "A la Francesa",
            precio1: "150.00",
            precio2: "130.00",
            estatus: true
        }
    ];


    return (
        <StyledContainer>
            <Title>NUESTRO MENU</Title>
            <SubTitle>PIZZAS</SubTitle>
            <StyleMenu>
            <Opcion seleccion ={MenuOpciones[0]}/>
            <Opcion seleccion ={MenuOpciones[1]}/>
            <Opcion seleccion ={MenuOpciones[2]}/>
            <Opcion seleccion ={MenuOpciones[3]}/>
            <Opcion seleccion ={MenuOpciones[4]}/>
            <Opcion seleccion ={MenuOpciones[5]}/>
            </StyleMenu>
            <SubTitle>COMBOS</SubTitle>
            <StyleMenu>
            <Combo1 seleccion ={MenuCombo1[0]}/>
            <Combo1 seleccion ={MenuCombo1[1]}/>
            <Combo1 seleccion ={MenuCombo1[2]}/>
            <Combo1 seleccion ={MenuCombo1[3]}/>
            <Combo2 seleccion ={MenuCombo2[0]}/>
            <Combo2 seleccion ={MenuCombo2[1]}/>
            <Combo2 seleccion ={MenuCombo2[2]}/>
            </StyleMenu>
        </StyledContainer>
    );


}

export default SeccionMenu;