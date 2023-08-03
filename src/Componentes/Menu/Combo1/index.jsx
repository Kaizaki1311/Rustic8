import { useState } from "react"
import styled from "styled-components";
/*import imagen1 from "../../../Imagenes/pizza1.jpg";
import imagen2 from "../../../Imagenes/pizza2.jpg";
import imagen3 from "../../../Imagenes/pizza3.jpg";
import imagen4 from "../../../Imagenes/hot-dog.jpg";
import imagen5 from "../../../Imagenes/nachos.jpg";
import imagen6 from "../../../Imagenes/papas-fritas.png";*/

import { colorPrimario } from "../../UI/Variables";


const StyleOpcion = styled.div`
    width: 250px;
    /*width: max-content;*/
    /*height: max-content;*/
    margin-bottom: 24px;
    position: relative;
    border: 1px dotted #ffffff;
    background-color: #000000;
    margin: 10px;
    padding: 10px;
    -webkit-box-shadow: 1px 1px 5px 2px rgba(255,102,0,0.7);
    -moz-box-shadow: 1px 1px 5px 2px rgba(255,102,0,0.7);
    box-shadow: 1px 1px 5px 2px rgba(255,102,0,0.7);
`

const StyleFoto = styled.img`
    width: 150px;
    height: 150px;
    /*border-radius: 50%;*/
    position: relative;
    /*bottom: -50px;*/
`

const StyleNombre = styled.div`
    width: 100%;
    font-size: 24px;
    /*max-width: 250px;*/
    margin-bottom: 5px;
    position: relative;
    height: max-content;
    color: #FF6600;
    text-align: center;
    /*border: 1px solid #ffffff;*/
    
`

const StyleInfo = styled.div`
    width: 100%;
    /*max-width: 100%;*/
    margin-bottom: 14px;
    position: relative;
    height: max-content;
    color: #ffffff;
    text-align: center;
    /*border: 1px solid #ffffff;*/
    
`

const StylePrecio = styled.div`
    width: 100%;
    font-size: 18px;
    /*max-width: 100%;*/
    margin-bottom: 14px;
    position: relative;
    height: max-content;
    color: #FF6600;
    text-align: center;
    /*border: 1px solid #ffffff;*/
    
`


const Combo1 = (props) => {

    const {id, imagen, nombre, opcion1, complemento1, complemento2, precio1, precio2, estatus} = props.seleccion;

        console.log("props.seleccion:", props.seleccion);
        //console.log("Seleccion:" , id, " " , nombre, " ", ingredientes, " ", precioG, " ", precioP, " ", estatus);

    return (
        <StyleOpcion>
            <div className="colaborador">
                <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
                    <StyleFoto src={imagen} alt="nombre"/*{nombre}*/ />
                </div>
                <StyleNombre>{nombre}</StyleNombre>
                <StyleInfo>{opcion1} </StyleInfo>
                <StyleInfo>{complemento1} </StyleInfo>
                <StyleInfo>O</StyleInfo>
                <StyleInfo>{complemento2} </StyleInfo>
                <StylePrecio>${precio1}</StylePrecio>
            </div>
        </StyleOpcion>

    );
}

export default Combo1;