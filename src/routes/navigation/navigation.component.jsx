import { Fragment } from 'react'; // <div> is not needed 
import { Outlet, Link } from 'react-router-dom'; // Link dynamically uses the BrowserRouter to create a link to the path specified place in the to prop.

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>

            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;