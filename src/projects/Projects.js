import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {ProjectItem} from "./projectItem/ProjectItem";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <ProjectItem title={'Social network'} link ={'url'}/>
                    <ProjectItem title={'Todo list'}  link ={'url'}/>
                </div>


            </div>

        </div>
    );
};