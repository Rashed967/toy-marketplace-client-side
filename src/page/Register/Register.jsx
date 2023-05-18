
import { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContex)
    const handleRegister = event => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(errro => {
        console.error(errro.message)
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className="flex flex-col w-full border-opacity-50">
  <div className="mb-3 p-3">
    <p className="text-white">Already have an account? <Link to="/login" className="text-secondary underline">login</Link></p>
  </div>
</div>

    </div>

</div>
    );
};

export default Register;