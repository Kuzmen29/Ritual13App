import React from 'react';
import styles from "./Address.module.scss";

interface IAddressProps {
    address: string,
    fontSize?: string | undefined,
}

export default function Address({ address, fontSize }: IAddressProps) {


    return (
        <h2 className={styles['address']}>
            {address}
        </h2>
    );
}