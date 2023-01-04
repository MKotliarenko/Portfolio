import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/title";
import {Fade} from "react-awesome-reveal";
import {faBriefcase, faLaptopCode, faTasks} from "@fortawesome/free-solid-svg-icons";
import {faSketch} from "@fortawesome/free-brands-svg-icons";


export const Skills = () => {
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={"Skills"}/>
                    <div className={style.skills}>
                        <Skill title={'DEVELOPMENT'} description={"React, Redux, AXIOS etc."}
                               titleIcon={faLaptopCode}/>
                        <Skill title={'FOUNDATION'} description={"JavaScript, TypeScript, HTML5, CSS3."}
                               titleIcon={faBriefcase}/>
                        <Skill title={'TESTING'} description={"Unit Tests, SnapShot, Storybook."}
                               titleIcon={faTasks}/>
                        <Skill title={'DESIGN'} description={"Material UI, Ant-Design etc."}
                               titleIcon={faSketch}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};