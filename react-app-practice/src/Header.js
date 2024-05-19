import logo from './logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className='nav'>
      <img src={logo} className="nav-logo" alt="logo"/>
      <ul className='nav-items'>
        <li>About</li>
        <li>Home</li>
        <li>Projects</li>
      </ul>
      </nav>
    </header>
  )
}