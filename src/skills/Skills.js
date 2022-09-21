import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'TS'} description={"TypeScript is a strongly typed programming" +
                        " language that builds on JavaScript, giving you better tooling at any scale."}/>
                    <Skill title={'CSS'} description={"CSS is the language for describing the presentation " +
                        "of Web pages, including colors, layout, and fonts."}/>
                    <Skill title={'React'} description={"React is a declarative, efficient," +
                        " and flexible JavaScript library for building user interfaces." +
                        " It lets you compose complex UIs from small and isolated pieces " +
                        "of code called “components”."}/>
                </div>
            </div>

        </div>
    );
};