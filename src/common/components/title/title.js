import React from 'react';
import style from './title.module.scss';

export const Title = (props) => {
    return (
        <div>
            <h2 className={style.title}>{props.title}</h2>
        </div>
    );
};