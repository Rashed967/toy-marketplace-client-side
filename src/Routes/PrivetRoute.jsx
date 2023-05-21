
import { useContext } from 'react';
import { AuthContex } from '../providers/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContex)
    console.log(user, loading)
    const location = useLocation()
    if(loading){
        <p className='text-3xl font-semibold text-center'>Loading</p>
    }

    if(user){
        return children
    }

        return <Navigate to="/login" state={{from : location}}></Navigate>

    
};

export default PrivetRoute;