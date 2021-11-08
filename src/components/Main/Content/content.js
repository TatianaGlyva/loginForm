import React from 'react';
import s from './content.module.css'
import PropTypes from "prop-types";

const Content = (props) => {

    const dataContent = props.dataContent;

    const renderItems = () => {
            return dataContent.map((el, index) => (
                <div key={index}>
                    <h2>{el.title}</h2>
                    <p>{el.body}</p>
                </div>
            ))
    };

    return (
        <div className={s.contentContainer}>
            <div className={s.data}>
                <div>Данные для входа:</div>
                <pre>
                    name: 'Admin',
                    email: 'admin@com',
                    password: '123admin'
                 </pre>
            </div>
                {renderItems()}
        </div>
    );
};

export default Content;

Content.propTypes = {
    dataContent: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string
        })
    )
};