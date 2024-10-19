import React from 'react';
import styles from "./ProductList.module.scss";

interface IProductListProps {
    children: React.ReactNode
}
export default function ProductList({ children }: IProductListProps) {


    return <div className={styles['productList']}>
        {
            children
        }
    </div>
}