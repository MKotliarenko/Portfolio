import React from 'react';
import style from './ProjectItem.module.scss';


export const ProjectItem = (props) => {
    return (
        <div className={style.projectItem}>
            <div className={style.imgBlock} style={props.style}>
                <div className={style.imgCover}>
                    <h3>{props.description}</h3>
                    <a href={props.link}>Klicken, um das Projekt zu sehen</a>
                </div>
            </div>
            <h4>{props.title}</h4>
        </div>
    );
};
