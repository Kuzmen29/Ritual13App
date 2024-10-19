import React from 'react';
import styles from './Container.module.scss';

interface IContainer {
    children: React.ReactNode
}

export default function Container({ children }: IContainer) {


    return <div className={styles['container']}>
        {
            children
        }
    </div>
}