import { Link } from "react-router-dom";
const Header = () => {
  function logOutput(){
    window.localStorage.removeItem('email');
   window.location="/Login"
  }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!window.localStorage.getItem("email") ? (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </>
          ):
           
              <li>
                <Link  onClick={logOutput}>Log out</Link>
              </li>
          
            }
        </ul>
      </nav>
    </header>
  );
};
export default Header;
