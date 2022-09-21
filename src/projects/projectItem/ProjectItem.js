import React from 'react';
import style from './ProjectItem.module.css';


export const ProjectItem = (props) => {
    return (
        <div className={style.projectItem}>
            <div className={style.imgBlock}>
                <a href={props.link} className={style.link}>More</a>
            </div>
                <span className={style.title}>{props.title}</span>
                <span className={style.description}>Project description</span>

        </div>
    );
};