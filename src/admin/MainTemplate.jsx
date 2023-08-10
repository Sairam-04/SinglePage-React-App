import React from 'react';
import { Link, Outlet, Route } from 'react-router-dom';
import './maintemplate.css';


const MainTemplate = () => {
    return (
        <div className="admin__container">
            {/* Header */}
            <div className="admin__container__header box">
                <div className='admin__container__header__logo'>Logo</div>
                <div className='admin__container__header__title'>Admin Panel</div>
                <div className='admin__container__header__profile'>Profile</div>
            </div>
            {/* Sidebar */}
            <div className="admin__container__sidebar box">
                <Link to='/homepage'>HomePage</Link>
                <Link to='/signup'>SignUp</Link>
                <Link to='/landing'>LandingPage</Link>
                <Link to='/content'>Content</Link>
            </div>
            <div className="admin__container__form box">
                <Outlet />
            </div>
        </div>
    );
}

export default MainTemplate;
