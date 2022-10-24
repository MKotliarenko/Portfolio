import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {ProjectItem} from './projectItem/ProjectItem';
import {Title} from '../common/components/title/title';
import socialImage from '../assets/image/netz.jpeg';
import todoImage from '../assets/image/todo.jpeg';



export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const toDo = {
        backgroundImage: `url(${todoImage})`
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <ProjectItem style={social} title={'Social network'} link ={'url'}/>
                    <ProjectItem style={toDo} title={'To do list'}  link ={'url'}/>
                </div>


            </div>

        </div>
    );
};