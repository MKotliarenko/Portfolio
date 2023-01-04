import React from 'react';
import style from './Icon.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Icon = (props) => {
    return (
        <div className={style.iconBlock}>
            <a href={props.link}>
                <FontAwesomeIcon icon={props.titleIcon}/>
            </a>
        </div>
    );
};