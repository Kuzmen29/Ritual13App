import React from 'react';
import styles from "./Contacts.module.scss";
import data from "@/assets/data/data.json";
import Telephone from '@/components/Telephone/Telephone';


export default function Contacts() {


    return (
        <section className={styles['contacts']}>

            <h2>Телефоны и контакты</h2>

            <div className={styles['contacts__telephones']}>
                <h2>Номера телефонов: </h2>
                {
                    data.telephones.map(item => (
                        <Telephone telephone={item.telephone} />
                    ))
                }
            </div>
            <div className={styles['contacts__addresses']}>
                <h2>Адреса: </h2>
                {
                    data.addresses.map(item => (
                        <Telephone telephone={item.fullAddress} />
                    ))
                }
            </div>

            <p>
                В г. Темников предоставляется круглосуточная консультация и помощь в организации похорон.
            </p>

            <h3>Мы поможем Вам в любое время. Звоните круглосуточно!</h3>

        </section>
    );
}