import styled from 'styled-components';

const StyledButton = styled.button`
  /* width: 15px;
height: 5px; */
  background-color: #00a9a5;
  display: block;
  width: fit-content;
  height: fit-content;
  margin: 10px 20px;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

function Button({ children, style = {}, onClick = {} }) {
  return (
    <StyledButton style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
