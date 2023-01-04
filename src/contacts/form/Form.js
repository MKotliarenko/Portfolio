import React from 'react';
import style from './Form.module.scss';


export const Form = () => {
    return (
        <form className={style.form}>
            <div className={style.inputBlock}>
                <input type="text" placeholder="Ihr Name"/>
                <input type="email" placeholder="Ihre Email"/>
            </div>
            <textarea placeholder="Ihre Nachricht"/>
            <button className={style.btn}>
                Nachricht senden
            </button>
        </form>
    );
};