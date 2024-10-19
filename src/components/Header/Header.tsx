import React from 'react';
import styles from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';
import data from '@/assets/data/data.json';

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
                            <h2 className={styles['telephones__telephone']}><a href={'tel:'+telephone}>{telephone}</a></h2>
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

            
        </header>
    );
}