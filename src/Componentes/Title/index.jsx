import styled from "styled-components";

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  color: #ffffff; //Se elimina para colocar el tema
  //color: ${({theme}) => theme.text};
  /*padding: 10px 0;*/
  padding-top: 30px;
  /*margin-bottom: 5px;*/
  /*border: 1px solid red;*/
  text-decoration: underline;
`

/*const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};*/

export default Title;