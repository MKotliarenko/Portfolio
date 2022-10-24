import React from 'react';
import style from './title.module.css';

export const Title = (props) => {
    return (
        <div>
                <h2 className={style.title}>{props.title}</h2>
        </div>
    );
};