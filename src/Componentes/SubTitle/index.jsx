import styled from "styled-components";

const SubTitle = styled.div`
  text-align: left;
  font-size: 28px;
  color: #ffffff; //Se elimina para colocar el tema
  //color: ${({theme}) => theme.text};
  /*padding: 10px 0;*/
  padding-top: 5px;
  margin-bottom: 5px;
  /*border: 1px solid red;*/
`

/*const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};*/

export default SubTitle;