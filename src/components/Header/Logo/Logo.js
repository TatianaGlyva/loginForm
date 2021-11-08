import React from 'react';
import LogoImage from '../../../assets/image/Logo.jpg'
import s from './logo.module.css'

function Logo(props) {
    return (
        <div>
                <div>
                    <img className={s.logoImg} src={LogoImage} alt="Logo"/>
                </div>
        </div>
    );
}

export default Logo;