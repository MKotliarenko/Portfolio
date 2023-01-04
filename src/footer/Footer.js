import React from 'react';
import style from './Footer.module.scss';
import {Icon} from "./icons/Icon";
import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div>
                <h2 className={style.title}>Mykola Kotliarenko</h2>
                <div className={style.rightsFooter}>© 2022, All Rights Reserved.</div>
            </div>
            < div className={style.iconsContainer}>
                <Icon titleIcon={faLinkedinIn} link={"https://www.linkedin.com/in/mykola-kotliarenko-29958b25a/"}/>
                <Icon titleIcon={faGithub} link={"https://github.com/MKotliarenko"}/>
            </div>
        </div>
    );
};