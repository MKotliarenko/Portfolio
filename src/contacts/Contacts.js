import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Title} from "../common/components/title/title";
import {Fade} from "react-awesome-reveal";
import {Form} from "./form/Form";
import {ContactsData} from "./contactsData/ContactsData";


export const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={"Contacts"}/>
                    <div className={style.formAndData}>
                        <ContactsData/>
                        <Form/>
                    </div>

                </div>
            </Fade>
        </div>
    );
};