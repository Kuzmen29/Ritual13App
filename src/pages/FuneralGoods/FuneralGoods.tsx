import ProductMenu from '@/components/ProductMenu/ProductMenu';
import React from 'react';
import styles from "./FuneralGoods.module.scss";
import { Outlet } from 'react-router-dom';

export default function FuneralGoods() {
    
    
    return (
        <section className={styles['funeralGoods']}>
            <ProductMenu/>

            <Outlet/>
        </section>
    );
}