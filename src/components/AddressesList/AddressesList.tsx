import React from 'react';
import styles from "./AddressesList.module.scss";

interface IAddressesListProps {
    children: React.ReactNode
}

export default function AddressesList({ children }: IAddressesListProps) {

    return <div className={styles['addressesList']}>
        {
            children
        }
    </div>
}