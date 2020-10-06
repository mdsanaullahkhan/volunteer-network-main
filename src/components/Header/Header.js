import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import brandImg from '../../images/brandLogo.png'
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        setLoggedInUser({
            isSignedIn: false,
            name: '',
            email: '',
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light pt-3 container">
                <Link to='/' className="navbar-brand">
                    <img style={{height: "50px"}} src={brandImg} alt="brand-logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-3">
                            <Link to='/home' className="nav-link normal-nav-link">Home</Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link to='/donation' className="nav-link normal-nav-link">Donation</Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link to='/events' className="nav-link normal-nav-link">Events</Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link to='/blog' className="nav-link normal-nav-link">Blog</Link>
                        </li>
                        <li className="nav-item ml-3">
                            {<Link onClick={handleSignOut} to='/register' className="nav-link btn btn-primary btn-lg text-white px-4">{loggedInUser.email || loggedInUser.name ? `${loggedInUser.name}/Logout` : 'Register'}</Link>}
                        </li>
                        <li className="nav-item ml-3">
                            <Link to='/admin' className="nav-link btn btn-dark btn-lg text-white px-4">Admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;