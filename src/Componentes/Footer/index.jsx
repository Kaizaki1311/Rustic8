import React from "react";
import styled from "styled-components";
import logoFaceBook from "../../Imagenes/facebook.png";
import logoInstagram from "../../Imagenes/instagram.png";
import logoTwitter from "../../Imagenes/twitter.png";
import fondoMadera from "../../Imagenes/fondoMadera.png";

const StyleFooter = styled.footer`
    width: 100%;
    display: flex;
    padding: 5%;
    align-items: center;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    justify-content: space-between;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    /*background-color: #000000;*/
    background-image: url(${fondoMadera});
`

const StyleRedes = styled.img`
    width: 30px;
    height: 30px;
    padding: 0px 15px;
`


const Footer = () => {
    return (
        <StyleFooter>
            {/*<img src="../../Imagenes/logo.png" alt="org" />*/}
            <strong></strong>
            {/*<div className="redes">
                <a href="https://www.aluracurso.com/">
                    <StyleRedes src={logoFaceBook} alt="Facebook" />
                </a>
                <a href="https://ig.me/m/rustic8_pizza">
                    <StyleRedes src={logoInstagram} alt="Instagram" />
                </a>
                <a href="https://www.aluracurso.com/">
                    <StyleRedes src={logoTwitter} alt="Twitter" />
                </a>
            </div>*/}
        </StyleFooter>
    );
}

export default Footer;