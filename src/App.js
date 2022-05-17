import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Páginas </h1>

      <Link to='/landing-page'> Landing Page </Link>

      <br/>

      <Link to='/login'> Login </Link>

      <br/>

      <Link to='/Admin'> Administração </Link>

      <br/>

      <Link to='/cadastro'> Cadastro </Link>
    </div>
  )
}
export default App;
