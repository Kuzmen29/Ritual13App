import React from 'react';
import styles from "./ProductMenu.module.scss";
import { NavLink } from 'react-router-dom';
import data from "@/assets/data/data.json";

export default function ProductMenu() {


    return <nav className={styles['productMenu']}>
        {
            data.funeralGoods.map((item) => (
                <NavLink to={'/funeralGoods/' + item.to}>
                    <div className={styles['productMenu__link']}>
                        <img src={item.poster} className={styles['productMenu__image']} alt="" />
                        <h2 className={styles['productMenu__title']}>{item.type}</h2>
                    </div>
                </NavLink>
            ))
        }
    </nav>
}