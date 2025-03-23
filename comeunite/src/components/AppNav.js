import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import Button from './Button';

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Events', path: '/events' },
  { name: 'Community', path: '/community' },
  { name: 'Team', path: '/team' },
  { name: 'Volunteers', path: '/volunteers' },
];

const StyledNavBar = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  padding: 10px 190px;
  justify-content: flex-start;
  align-items: center;
  background-color: #08116d;
  color: beige;
`;

const StyledNavList = styled.ul`
  list-style: none;
  cursor: pointer;
  display: flex;
  gap: 50px;
  margin: 10px 100px;
`;

const StyledNavLink = styled(NavLink)`
  color: beige;
  text-decoration: none;
`;

export default function NavBar() {
  return (
    <nav>
      <StyledNavBar>
        <Logo styles={{ fontSize: '45' }} />

        <StyledNavList>
          {navItems.map((item) => (
            <li key={item.name}>
              <StyledNavLink to={item.path}>{item.name}</StyledNavLink>
            </li>
          ))}
        </StyledNavList>
        <Button onClick={() => {
          alert('Login / SignUp Page is yet not setup');
        }} >Login / SignUp</Button>
      </StyledNavBar>
    </nav>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
