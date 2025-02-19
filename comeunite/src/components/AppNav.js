import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navBar'>
      <ul className="navList">
        <li>
          <NavLink to={'/home'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/events'}>Events</NavLink>
        </li>
        <li>
          <NavLink to={'/community'}>Community</NavLink>
        </li>
        <li>
          <NavLink to={'/team'}>Team</NavLink>
        </li>
        <li>
          <NavLink to={'/volunteers'}>Volunteers</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return <div>Home</div>;
}
function Team() {
  return <div>Team</div>;
}
function Community() {
  return <div>Community</div>;
}
function Events() {
  return <div>Events</div>;
}
