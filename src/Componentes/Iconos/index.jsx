import styled from "styled-components";

const StyledContenedor = styled.div`
    
`

const StyledIcono = styled.img`
  height: 42px;
  width: 42px;
  border: 1px solid red;
`

const StyledTexto = styled.p`
    color: #ffffff;
`

const IconoTexto = (props) =>{

    //console.log("Props:", props );
    const {icono, texto, alt} = props;
    console.log("icono:", icono);
    console.log("texto:", texto);
    console.log("alt:", alt);

    return(
    <StyledContenedor>
        {/*<StyledIcono src={icono} ></StyledIcono> <IconoTexto>{texto}</IconoTexto>*/}
    </StyledContenedor>
    );
}

export default IconoTexto;