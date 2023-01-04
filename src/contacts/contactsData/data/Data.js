import React from 'react'
import styles from './Data.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Data = ({iconTitle, contactTitle, data, a}) => {
    return (<div className={styles.dataBlock}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={iconTitle}/>
            </div>
            <div className={styles.description}>
                <h4>{contactTitle}</h4>
                <a href={a}>{data}</a>
            </div>
        </div>
    );
}

