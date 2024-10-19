import React from 'react';
import styles from "./TelephonesList.module.scss";

interface ITelephonesListProps {
    children: React.ReactNode
}

export default function TelephonesList({ children }: ITelephonesListProps) {


    return <div className={styles['telephonesList']}>
        {
            children
        }
    </div>
}