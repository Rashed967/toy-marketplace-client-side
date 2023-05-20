import {Link} from 'react-router-dom'
import logo from '../../../src/assets/logo.png'
import { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProviders';


const NavBar = () => {
  const {user}= useContext(AuthContex)
  
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Home</Link></li>
        <li><Link>All Toyes</Link></li>
        <li><Link to="/myToyes">My Toyes</Link></li>
        <li><Link>Add A Toy</Link></li>
        <li><Link>Blogs</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
     <img className='h-28' src={logo} alt="" />
  </div>
  <div className="navbar-end">

    <Link>login</Link>
  </div>
</div>
    );
};

export default NavBar;