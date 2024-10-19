import React from 'react';
import styles from "./Wreaths.module.scss";
import { NavLink } from 'react-router-dom';
import data from "@/assets/data/data.json";
import ProductCard from '@/components/ProductCard/ProductCard';
import Address from '@/components/Address/Address';
import ProductList from '@/components/ProductList/ProductList';
import Paragraph from '@/components/Paragraph/Paragraph';
import TelephonesList from '@/components/TelephonesList/TelephonesList';
import AddressesList from '@/components/AddressesList/AddressesList';
import Telephone from '@/components/Telephone/Telephone';
import WeWillSupport from '@/components/WeWillSupport/WeWillSupport';

export default function Wreaths() {


    return (
        <section className={styles['wreaths']}>

            <Paragraph>
                Венок – давняя традиция, которая выражает почтение и уважение к умершему. Он символизирует конец жизненного пути и начало дороги в рай. Правильно подобранный венок поможет не только облагородить место захоронения, но и в полной мере выразить всю любовь и скорбь к усопшему. Венок выражает чувства и эмоции без лишних слов.
            </Paragraph>

            <h2>Венок изготавливается из искусственных цветов</h2>

            <Paragraph>
                Одним из главных преимуществ искусственных венков перед живыми цветами: это их износостойкость ко времени, изменениям погоды и временам года. Он не выцветет и будет долго сохранять свой свежий вид. К тому же цена гораздо меньше других вариантов. Цена приемлемая.
            </Paragraph>

            <h2>История</h2>

            <Paragraph>
                Использование цветов на процедуре захоронения – очень давняя традиция. Наши предшественники вместо искусственных венков приносили живые цветы.
            </Paragraph>

            <Paragraph>
                Со времен этот ритуал был изменен: появился венок из цветов, который просто укладывали на холм захоронения.
            </Paragraph>

            <Paragraph>
                В наши дни венок из живых цветов уже не используется. Ритуальные искусственные венки более практичны и ярче натурального. В наших агенствах Вы сможете преобрести венки дешево.
            </Paragraph>

            <h2>Венок. Типы и цвета</h2>

            <Paragraph>
                Венок необходимо подбирать тщательно. Ритуал13 предлагает заказать венок из классических цветов (красные, белые, синие) для мужчин и женщин.
            </Paragraph>

            <h2>
                Каждый цвет несет свой символ и смысл.
            </h2>
            <Paragraph>
                Цвета:
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>Красный – любовь, сильная привязанность к усопшему;</li>
                    <li>Желтый – надежда на светлое;</li>
                    <li>Черный – глубокая скорбь;</li>
                    <li>Синий – тоска и верность;</li>
                    <li>Белый – чистота, непорочность.</li>
                </ul>
            </Paragraph>

            <Paragraph>У нас возможно заказать как искусственные венки, так и цветочные корзины. <NavLink to={'/'}>Наше агентство</NavLink> поможет Вам в такую трудную минуту приобести все необходимое.</Paragraph>

            <TelephonesList>
                <h2>Звоните нам по телефонам: </h2>
                {
                    data.telephones.map(item => <Telephone telephone={item.telephone} />)
                }
            </TelephonesList>

            <AddressesList>
                <h2>Или обращайтесь в ритуальные агенства: </h2>
                {
                    data.addresses.map(item => <Address address={item.fullAddress} />)
                }
            </AddressesList>

            <WeWillSupport />

            <ProductList>
                {
                    data.wreaths.map(item => <ProductCard card={item} />)
                }
            </ProductList>

        </section>
    );
}