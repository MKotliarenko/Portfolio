import React from 'react';
import style from './ProjectItem.module.css';


export const ProjectItem = (props) => {
    return (
        <div className={style.projectItem}>
            <div className={style.imgBlock} style={props.style}>
                <a href={props.link} className={style.link}>More</a>
            </div>
                <h4>{props.title}</h4>
                <p>Project description</p>

        </div>
    );
};