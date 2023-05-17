
import Home from '../Home/Home/Home';
import NavBar from '../components/shared/NavBar/NavBar';
import {Outlet} from 'react-router-dom'

const Main = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;