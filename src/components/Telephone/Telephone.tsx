import React from 'react';
import styles from "./Telephone.module.scss";

interface ITelephoneProps {
    telephone: string,
    fontSize?: string | undefined,
}

export default function Telephone({ telephone, fontSize }: ITelephoneProps) {


    return (
        <h2 className={styles['telephone']}>
            {telephone}
        </h2>
    );
}