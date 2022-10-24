import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.photo}></div>

                <div className={style.greetings}>
                    <h1> Mykola Kotliarenko </h1>
                    <h6>Frontend Developer</h6>
                    <p>Hi, I’m Mykola Kotliarenko and
                        I am creative web & app developer who
                        dream making the world better place by
                        creating captivating products</p>
                </div>
            </div>
        </div>
    );
};

