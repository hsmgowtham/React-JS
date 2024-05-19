import logo from '../logo.svg';
import '../App.css';

export default function Navbar() {
  return (
      <nav>
          <img src={logo} className="nav--icon" alt='nav-icon' />
          <h3 className="nav--logo_text">ReactFacts</h3>
          <h4 className="nav--title">React JS - Project 1</h4>
      </nav>
  )
}