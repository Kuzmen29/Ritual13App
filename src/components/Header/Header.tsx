import React from 'react';
import styles from "./Header.module.scss";
import { NavLink, useNavigate } from 'react-router-dom';

import data from '@/assets/data/data.json';
import { Menu, MenuItem } from '../UI/DropdownMenu/DropdownMenu';

export default function Header() {

    const navigate = useNavigate();

    return (
        <header className={styles['header']}>

            <div className={styles['logo']} onClick={()=> navigate('/')}>
                <h1 className={styles['logo__title']}>Ритуал13</h1>
                <h2 className={styles['logo__sub-title']}>Ритуальные услуги</h2>
            </div>

            <div className={styles['info']}>
                <div className={styles['telephones']}>
                    {
                        data.telephones.map(({ telephone }) => (
                            <h2 className={styles['telephones__telephone']}>{telephone}</h2>
                        ))
                    }
                </div>

                <div className={styles['addresses']}>
                    {
                        data.addresses.map(({ address }) => (
                            <h2 className={styles['addresses__address']}>{address}</h2>
                        ))
                    }
                </div>
            </div>

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
        </header>
    );
}