import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Icon} from "./icons/Icon";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className= {`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Mykola Kotliarenko</h2>
                < div className={style.iconsContainer}>
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                </div>
                <span className={style.rightsFooter}>© 2022. All rights reserved</span>


            </div>

        </div>
    );
};