

import NavBar from '../shared/NavBar/NavBar';
import {Outlet} from 'react-router-dom'
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;