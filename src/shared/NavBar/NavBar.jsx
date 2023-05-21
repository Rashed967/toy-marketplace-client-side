import {Link} from 'react-router-dom'
import logo from '../../../src/assets/logo.png'
import { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProviders';
import { CgProfile } from "react-icons/cg";


const NavBar = () => {
  const {user, logout}= useContext(AuthContex)
  const title = document.title;
  console.log(title)

  const logOutHandler = () => {
    logout()
  }

  // console.log(user)
  
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Home</Link></li>
        <li><Link to="/allToyes">All Toyes</Link></li>
        <li><Link to="/myToyes">My Toyes</Link></li>
        <li><Link to="addAToy">Add A Toy</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
     <img className='h-28' src={logo} alt="" />
  </div>
  <div className="navbar-end">

    {
      user ? <>
      <div className={`tooltip htooltip-open tooltip-left`} data-tip="hello">
</div>
       <CgProfile className='mx-3 text-2xl' /> <Link onClick={logOutHandler} >logout</Link></> : <Link to="/login">login</Link>
    }
  </div>
</div>
    );
};

export default NavBar;