import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLogo = styled.span`
  letter-spacing: 4px;
  font-size: 30px;
  margin: 5px 20px 5px 10px;
  padding: 5px;
  width: auto;
  height: auto;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`;

function Logo({ style = {} }) {
  return (
    <div>
      <StyledLogo style={style}>ComeUnite</StyledLogo>
    </div>
  );
}

export default Logo;
