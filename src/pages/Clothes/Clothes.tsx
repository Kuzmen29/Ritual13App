import React from 'react';
import styles from "./Clothes.module.scss";
import ProductCard from '@/components/ProductCard/ProductCard';
import data from "@/assets/data/data.json";
import Address from '@/components/Address/Address';
import Telephone from '@/components/Telephone/Telephone';
import ProductList from '@/components/ProductList/ProductList';
import Paragraph from '@/components/Paragraph/Paragraph';
import TelephonesList from '@/components/TelephonesList/TelephonesList';
import AddressesList from '@/components/AddressesList/AddressesList';
import WeWillSupport from '@/components/WeWillSupport/WeWillSupport';

export default function Clothes() {


    return (
        <section className={styles['clothes']}>
            <Paragraph>
                Процедура прощания (похороны) проходит только в новой ритуальной форме.
            </Paragraph>

            <Paragraph>
                Одежда для усопших - одно из условий правильного прощания и ритуального захоронения.
            </Paragraph>

            <Paragraph>
                Мы cэкономим Ваше время на несвоевременные ритуальные покупки.
            </Paragraph>

            <Paragraph>
                Наше ритуальное агентство предлагает Вам широкий выбор одежды на похороны для усопших. Предлагаем ритуальную одежду всех размеров.
            </Paragraph>

            <Paragraph>
                Одежда для прощания должна быть легкой, не стеснять тело, без различных узлов и молний. Одежда, представленная в ассортименте нашего ритуального агенства, выполнена из натуральных и качественных материалов.
            </Paragraph>


            <Paragraph>Наш ассортимент одежды:</Paragraph>
            <Paragraph>
                <ul>
                    <li>Женские платья и костюмы;</li>
                    <li>Мужские костюмы;</li>
                    <li>Мужские рубашки;</li>
                    <li>Платки и галстуки;</li>
                    <li>Нательное белье;</li>
                    <li>Носки и чулки;</li>
                    <li>Ритуальные тапочки.</li>
                </ul>
            </Paragraph>


            <Paragraph>
                Чтобы правильно подобрать ритуальные вещи необходимы размеры и мерки усопшего. Если Вы затрудняетесь в определении размера, то наш ритуальный агент возьмет все необходимые мерки усопшего, чтобы Вам не пришлось потом повторно обменивать одежду.
            </Paragraph>

            <TelephonesList>
                <h2>Информация по телефонам:</h2>
                {
                    data.telephones.map(item => <Telephone telephone={item.telephone} />)
                }
            </TelephonesList>

            <AddressesList>
                <h2>Ритуальные службы находятся по адресам:</h2>
                {
                    data.addresses.map(item => <Address address={item.fullAddress} />)
                }
            </AddressesList>


            <WeWillSupport />

            <ProductList>
                {
                    data.clothes.map(item => <ProductCard card={item} />)
                }
            </ProductList>

        </section>
    );
}