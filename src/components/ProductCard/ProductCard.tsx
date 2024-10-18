import React from 'react';
import styles from './ProductCard.module.scss';

interface IProductCard {
    id: string,
    name: string,
    link: string,
    links?: string[]
}

interface IProductCardProps {
    card: IProductCard
}

export default function ProductCard({ card }: IProductCardProps) {

    return (
        <div className={styles['productCard']}>
            <img src={card.link} className={styles['productCard__image']} alt="" />
            <h2 className={styles['productCard__name']}>{card.name}</h2>
        </div>
    );
}