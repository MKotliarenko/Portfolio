import React from 'react'
import styles from './ContactsData.module.scss';
import {faEnvelope, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Data} from "./data/Data";

export const ContactsData = () => {
    return (
        <div className={styles.data}>
            <Data iconTitle={faPhone} contactTitle={'Telefon'} data={'+43-681-20208879'} a={"tel:+43-681-20208879"}/>
            <Data iconTitle={faEnvelope} contactTitle={'Email'} data={'Kotliarenkom282@gmail.com'} a={""}/>
            <Data iconTitle={faHome} contactTitle={'Ort'} data={'Wien, Österreich'} a={""}/>
        </div>
    );
}

