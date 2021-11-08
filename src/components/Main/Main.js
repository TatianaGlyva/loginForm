import React from 'react';
import s from './main.module.css'
import Content from "./Content/content";
import Aside from "./Asside/Aside";
import PropTypes from "prop-types";

const Main = (props) => {
    return (
        <div className={s.main}>
            <Content dataContent={props.dataContent}/>
            <Aside/>
        </div>
    );
};

export default Main;

Main.propTypes = {
    dataContent: PropTypes.array
};