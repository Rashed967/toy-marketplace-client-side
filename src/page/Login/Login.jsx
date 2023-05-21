import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
import { AuthContex } from "../../providers/AuthProviders";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const from = location.state?.from?.pathname || '/'
  const {signInUser, googleSignIn} = useContext(AuthContex)
  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
    .then(result => {
      const user = result.user;
      navigate(from, {replace : true})
      
    })
    .catch(error => {
      const errorMessage = error.message;
      setError(errorMessage)
    })
    
  }

  const googleLogin = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      navigate(from, {replace : true})
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200 mt-16">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label mt-3">
            <a href="#" className="label-text-alt link link-hover">{error}</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button >
        </div>
      </form>
      <div className="flex flex-col w-full border-opacity-50">
  <div className="divider">OR</div>
  <div className="flex justify-center items-center mb-4">
  <span onClick={googleLogin} className="text-2xl"><FaGoogle /></span>
  </div>
  <div className="mb-3 p-3">
    <p className="text-white">New to this site? <Link to="/register" className="text-secondary underline">register</Link></p>
  </div>
</div>

    </div>

</div>
    );
};

export default Login;