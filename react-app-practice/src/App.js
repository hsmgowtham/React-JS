import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <nav className='nav'>
      <img src={logo} className="App-logo" alt="logo" width="100px" />
      <ul className='nav-items'>
        <li>About</li>
        <li>Home</li>
        <li>Projects</li>
      </ul>
      </nav>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
// export {Header};