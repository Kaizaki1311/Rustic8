import styled from "styled-components";
import Title from "../Title";
import IconoWhatsApp from "../../Imagenes/iconoWhatsApp.png";
import IconoTelefono from "../../Imagenes/iconoTelefono.png";
import IconoFaceBook from "../../Imagenes/iconoFacebook.png";
import IconoInstagram from "../../Imagenes/iconoInstagram.png";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px 3vw;
    color: #ffffff;
    font-family: 'Benne', serif;
    font-family: 'Lumanosimo', cursive;
    border: 1px solid #FF6600;
    background-color: #000000;
`

const StyledContacto = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    font-size: 20px;
    margin: 15px 0;
    /*border: 1px solid red;*/
`

const StyledMapa = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    margin: 20px 0;
    /*border: 1px solid #FF6600;*/
    -webkit-box-shadow: 1px 1px 5px 4px rgba(255,102,0,0.7);
    -moz-box-shadow: 1px 1px 5px 4px rgba(255,102,0,0.7);
    box-shadow: 1px 1px 5px 4px rgba(255,102,0,0.7);
`

const StyledIcono = styled.img`
  height: 42px;
  width: 42px;
  padding: 0px 15px;
  /*border: 1px solid blue;*/
`

const StyledTelefonos = styled.p`
    /*display: flex;*/
    display: inline-block;
    /*width: 100%;*/
    /*position: relative;*/
    font-size: 20px;
    margin: 0;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 40px;
    /*border: 1px solid yellow;*/
    vertical-align: top;
`

const StyleRedes = styled.a`
    display: table;
    /*border: 1px solid red;*/
    color: #ffffff;
    vertical-align: middle;
`


const SeccionContacto = () => {
    return (
        <StyledSection>
            <Title>NUESTRA UBICACION</Title>
            <StyledContacto>Nos encontramos ubicados al norte del Ciudad de México, en la siguiente dirección:</StyledContacto>

            <StyledMapa>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.5790892029238!2d-99.20675314938524!3d19.513726570577564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202b0ca9c8b1d%3A0x96f061df7b634066!2sQu%C3%ADmica%2043%2C%20El%20Rosario%2C%20Azcapotzalco%2C%2002100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1690934383573!5m2!1ses-419!2smx"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </StyledMapa>
            <StyledContacto>Nuestro horario de atención es de jueves a sábado de 5:00 - 10:00 pm</StyledContacto>
            <StyledContacto>
                <StyledIcono src={IconoWhatsApp} alt="Icono WhasApp"></StyledIcono><StyledTelefonos>55 23 96 96 82</StyledTelefonos>
                <StyledIcono src={IconoTelefono} alt="Icono Telefono"></StyledIcono><StyledTelefonos>55 89 75 03 69</StyledTelefonos>


                <StyleRedes href="https://www.facebook.com/profile.php?id=100094577067311">
                    <StyledIcono src={IconoFaceBook} alt="Icono FaceBook"></StyledIcono>
                    <StyledTelefonos>rustic8_pizza</StyledTelefonos>
                </StyleRedes>

                <StyleRedes href="https://ig.me/m/rustic8_pizza">
                    <StyledIcono src={IconoInstagram} alt="Icono Instagram"></StyledIcono>
                    <StyledTelefonos>rustic8_pizza</StyledTelefonos>
                </StyleRedes>
            </StyledContacto>
        </StyledSection>
    );

}

export default SeccionContacto;