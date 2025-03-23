import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';

const footerItems = [
  'Home',
  'About',
  'Features',
  'Pricing',
  'Documentation',
  'Student Community Plan',
  'Non-Profit Community Plan',
  'Communities',
  'Login',
  'Events',
  'Create Account',
  'Speakers',
  'Privacy Policy',
  'New',
  'Terms and Conditions',
  'Call for Speakers',
  'Contact Us',
  'Labs',
  'Refund & Cancellation Policy',
  'Experts',
  'All Policies',
  'Compliance',
  'Brand Guidelines',
];

const StyledFooter = styled.footer`
  display: flex;
  padding: 20px 170px;
  gap: 20px;
  align-items: center;
  background-color: #010001;
  color: beige;
  height: 250px;
`;

const StyledNavLink = styled(NavLink)`
  color: beige;
  text-decoration: none;
`;

const StyledFooterItems = styled.ul`
  font-size: 14px;
  margin: auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap /* Allow new columns to form */;
  align-content: center /* Align columns at the start */;
  height: 180px /* Set a height limit */;
  row-gap: 10px /* Spacing between columns */;
  column-gap: 50px /* Spacing between columns */;
  /* justify-content: center; */
  /* justify-items: center; */
`;

function Footer() {
  // make navlink for each item in footerItems
  // use NavLink instead of li

  return (
    <footer>
      <StyledFooter>
        <Logo />
        <StyledFooterItems>
          {footerItems.map((el, index) => (
            <li key={index}>
              <StyledNavLink to="#">{el}</StyledNavLink>
            </li>
          ))}
        </StyledFooterItems>
      </StyledFooter>
    </footer>
  );
}

export default Footer;
