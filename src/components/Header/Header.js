import React from 'react';
import Logo from "./Logo/Logo";
import s from './header.module.css'

const Header = (props) => {
    return (
        <div>
            <header className={s.header}>
                <div className={s.headerContainer}>
                    <Logo/>
                </div>
            </header>
        </div>
    );
};

export default Header;