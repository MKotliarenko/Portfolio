import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {ProjectItem} from './projectItem/ProjectItem';
import {Title} from '../common/components/title/title';
import socialImage from '../assets/image/netz.jpeg';
import todoImage from '../assets/image/todo.jpeg';
import cardsImage from '../assets/image/cards.png';
import counterImage from '../assets/image/counter.jpeg'
import {Fade} from "react-awesome-reveal";


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const toDo = {
        backgroundImage: `url(${todoImage})`
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`
    };
    const counter = {
        backgroundImage: `url(${counterImage})`
    };
    return (
        <div id={'projects'} className={style.projectsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title={"Projects"}/>
                    <div className={style.projects}>
                        <ProjectItem
                            style={social}
                            title={'The social network'}
                            description={"TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests"}
                            link={' https://mkotliarenko.github.io/social_network/'}/>
                        <ProjectItem
                            style={toDo}
                            title={'To do list'}
                            description={"TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests"}
                            link={'https://mkotliarenko.github.io/TodoList-new'}/>
                        <ProjectItem
                            style={cards}
                            title={'Card packs'}
                            description={"Es war eine Gruppenarbeit. App zum Lernen einiger Karten"}
                            link={'https://kirill2690.github.io/cards-front/#/login'}/>
                        <ProjectItem
                            style={counter}
                            title={'Counter'}
                            description={"Mein erstes Projekt mit React/Redux/TS." +
                                " Ich habe es hier als Erinnerung hinterlassen."}
                            link={'https://mkotliarenko.github.io/CounterWithSetting/'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};