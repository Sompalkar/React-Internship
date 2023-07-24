 
import { Link } from 'react-router-dom'; 
import './Navbar.css';  

function Navbar(): JSX.Element {
  return (
    <div>
      <div className='mainDiv'>
       
        <div className='navBar'>
          <div className='navBarLogo'>
            <Link className='navBarLogo' to='/first-page'>
              LOGO
            </Link>
          </div>
          <div className='navbarLinks'>
            <Link className='linkOptions' to='/'>
               First Page
            </Link>
            <Link className='linkOptions' to='/'>
               Second Page
            </Link>
            <Link className='linkOptions' to='/'>
            Contact
            </Link>
            <Link className='linkOptions' to='/'>
               About Us
            </Link>
          </div>
          <div>
            <button className='navLoginBtn'>Login/SignUp</button>
          </div>
        </div>

         

       
      </div> 
    </div>
  );
}

export default Navbar;
