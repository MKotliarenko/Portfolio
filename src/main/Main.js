import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Fade} from "react-awesome-reveal";

export const Main = () => {
    return (
        <div id={'home'} className={style.mainBlock}>
            <Fade bottom>
                <div className={styleContainer.container}>
                    <div className={style.photo}></div>
                    <div className={style.greetings}>
                        <h1> Mykola Kotliarenko </h1>
                        <h6>Front-end Developer</h6>
                        <p>Hallo, mein Name ist Mykola Kotliarenko, ich bin
                            ein kreativer Web- und App-Entwickler, der davon
                            träumt, die Welt durch die Entwicklung interessanter
                            Produkte zu verbessern.</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

