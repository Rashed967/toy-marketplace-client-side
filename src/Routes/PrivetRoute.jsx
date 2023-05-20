
import { useContext } from 'react';
import { AuthContex } from '../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContex)
    const navigate = useNavigate()
    if(user?.email){
        return children
    }
    
    return navigate('/login')
};

export default PrivetRoute;