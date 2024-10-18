import React from 'react';
import styles from "./Clothes.module.scss";
import ProductCard from '@/components/ProductCard/ProductCard';
import data from "@/assets/data/data.json";
import Address from '@/components/Address/Address';
import Telephone from '@/components/Telephone/Telephone';

export default function Clothes() {


    return (
        <section className={styles['clothes']}>
            <p>
                Процедура прощания (похороны) проходит только в новой ритуальной форме.
            </p>

            <p>
                Одежда для усопших - одно из условий правильного прощания и ритуального захоронения
            </p>

            <p>
                Мы экономим Ваше время на несвоевременные ритуальные покупки.
            </p>

            <p>
                Наше ритуальное агентство предлагает Вам широкий выбор одежды на похороны для усопших. Предлагаем ритуальную одежду всех размеров.
            </p>

            <p>
                Одежда для прощания должна быть легкой, не стеснять тело, без различных узлов и молний. Одежда, представленная в ассортименте сайта Бюро Ритуальных Услуг, выполнена из натуральных и качественных материалов.
            </p>

            <div>
                <h2>Наш ассортимент одежды:</h2>
                <ul>
                    <li>Женские платья и костюмы;</li>
                    <li>Мужские костюмы;</li>
                    <li>Мужские рубашки;</li>
                    <li>Платки и галстуки;</li>
                    <li>Нательное белье;</li>
                    <li>Носки и чулки;</li>
                    <li>Ритуальные тапочки.</li>
                </ul>
            </div>

            <p>
                Чтобы правильно подобрать ритуальные вещи необходимы размеры и мерки усопшего. Если Вы затрудняетесь в определении размера, то наш ритуальный агент возьмет все необходимы мерки усопшего, чтобы Вам не пришлось потом повторно обменивать одежду.
            </p>

            <div>
                <h2>Ритуальная службы находятся по адресам:</h2>
                {
                    data.addresses.map(item => <Address address={item.fullAddress}/>)
                }
            </div>

            <div>
                <h2>Информация по телефонам:</h2>
                {
                    data.telephones.map(item => <Telephone telephone={item.telephone}/>)
                }
            </div>

            <h3>Мы поддержим Вас в трудное время!</h3>

            <div className={styles['clothes__list']}>
                {
                    data.clothes.map(item=><ProductCard card={item} />)
                }
            </div>

        </section>
    );
}