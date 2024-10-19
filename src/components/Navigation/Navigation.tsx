import React from 'react';
import styles from "./Navigation.module.scss";
import { NavLink } from 'react-router-dom';

export default function Navigation() {

    return (
        <nav className={styles['navigation']}>
            <NavLink to={'/'} className={styles['navigation__link']}>
                Главная
            </NavLink>
            <NavLink to={'/funeralGoods'} className={styles['navigation__link']}>
                Ритуальные товары
            </NavLink>
            <NavLink to={'/documents'} className={styles['navigation__link']}>
                Документы
            </NavLink>
            <NavLink to={'/contacts'} className={styles['navigation__link']}>
                Контакты
            </NavLink>

        </nav>
    );
}