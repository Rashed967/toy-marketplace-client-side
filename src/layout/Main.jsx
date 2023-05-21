

import NavBar from '../shared/NavBar/NavBar';
import {Outlet} from 'react-router-dom'
import Footer from '../shared/Footer/Footer';
import useTitleHook from '../CustomHook/TitleHook/TitleHook';

const Main = () => {
    useTitleHook('Mian')
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;