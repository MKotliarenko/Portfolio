import React from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                Home
            </Link>
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                Skills
            </Link>
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                Projects
            </Link>
            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                Contacts
            </Link>
        </div>
    );
};

