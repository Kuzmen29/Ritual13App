import React from 'react';
import styles from './Container.module.scss';

interface IContainer {
    children: JSX.Element
}

export default function Container({ children }: IContainer) {


    return <div className={styles['container']}>
        {
            children
        }
    </div>
}