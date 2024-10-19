import React from 'react';
import styles from "./Coffins.module.scss";
import data from "@/assets/data/data.json";
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductList from '@/components/ProductList/ProductList';
import Paragraph from '@/components/Paragraph/Paragraph';
import TelephonesList from '@/components/TelephonesList/TelephonesList';
import Telephone from '@/components/Telephone/Telephone';
import AddressesList from '@/components/AddressesList/AddressesList';
import Address from '@/components/Address/Address';
import WeWillSupport from '@/components/WeWillSupport/WeWillSupport';

export default function Coffins() {


    return (
        <section className={styles['coffins']}>
            <Paragraph>
                Гроб символизирует последнего ложе умершего человека. И, наверное, из всей траурной атрибутики – это самый ответственный момент.
            </Paragraph>

            <Paragraph>
                Мы со всей серьезностью и скорбью понимаем Ваши переживания, поэтому готовы оказать Вам полную консультацию и помощь в выборе гроба, чтобы Вы могли взять все необходимые атрибуты.
            </Paragraph>

            <Paragraph>
                Для Вашего выбора мы предоставим изделия, выполненные в различном стиле и по любым ценовым категориям.
            </Paragraph>

            <Paragraph>
                Классическим вариантом, который по карману каждому – обшитый атласом, бархатом или искусственным шелком. Наши консультанты помогут подобрать цвет. Это может быть синий, розовый, красный и другие расцветки обшивки. Гроб необходимо выбирать под характер умершего. Это могут быть либо нежные женские цвета или строгий мужской гроб.
            </Paragraph>

            <Paragraph>
                Стандартный вариант гроба выполнен из различных пород дерева. Натуральный, экологичный и экономичный. Внутренняя часть гроба также обшивается мягким материалом, чтобы ничто не могло повредить тело. Внутри можно украсить рюшами, тесьмой или драпировкой. В комплекте также входят все необходимые ритуальные принадлежности (например, подушка).
            </Paragraph>

            <Paragraph>
                Среди элитного ассортимента можно выделить гробы, выполненные из ценных пород дерева. Лакированный будет выделяться и выглядеть очень презентабельно. Это самый достойный вариант прощания с умершим.
            </Paragraph>

            <Paragraph>
                Для упрощения процедуры прощания представлены гробы с 2-мя крышками. При этом конечную часть можно закрыть, а верхнюю поднять для прощания с усопшим.
            </Paragraph>

            <Paragraph>
                Для сопровождающих грою возможно заказать установку ручек на гроб. Это поможет нести гроб без различных неудобств и тяжести. Ручки очень прочные и не скользят. Они не сломаются и не оторвутся.
            </Paragraph>

            <Paragraph>
                Наш агент проконсультирует Вас по ценам и всем необходимым параметрам. Он расскажет Вам о размерах, цветах и обшивках.
            </Paragraph>

            <TelephonesList>
                <h2>Звоните нам по телефонам: </h2>
                {
                    data.telephones.map(item=> <Telephone telephone={item.telephone}/>)
                }
            </TelephonesList>

            <AddressesList>
                <h2>Или обращайтесь в ритуальные агенства: </h2>
                {
                    data.addresses.map(item=> <Address address={item.fullAddress}/>)
                }
            </AddressesList>
            
            <WeWillSupport/>

            <ProductList>
                {
                    data.coffins.map(item => <ProductCard card={item} />)
                }
            </ProductList>
            
        </section>
    );
}