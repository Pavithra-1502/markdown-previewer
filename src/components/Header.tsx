
import styled, { css } from 'styled-components';
const HeaderContainer = styled.div`
text-align: center;
background-color: black;

`;
const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;

`;
const TomatoButton = styled(Button)`
background: tomato;
border-color: tomato;
color: white;
&:hover {
  background: white;
  color: tomato; // <Thing> when hovered
}
`;

const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: red;
background: papayawhip;
border: none;
border-radius: 3px;
`;

// const HeaderContainer  = styled.div`
// display: flex;
// flex-wrap: wrap;
// background-color: black;
// `;


const Header = () => {
  

    
   
    return (
        <>
       {/* <HeaderContainer>
        <Title></Title>
        <Button></Button>
       </HeaderContainer> */}

     
     
   <div>working on markdown previewer</div>

        </>
    )
    
  }

export default Header




 