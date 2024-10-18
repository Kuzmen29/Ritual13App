import React from 'react';
import styles from "./Coffins.module.scss";
import data from "@/assets/data/data.json";
import ProductCard from '@/components/ProductCard/ProductCard';

export default function Coffins() {


    return (
        <section className={styles['coffins']}>
            <p>
                Символизирует последнего ложе умершего человека. И, наверное, из всей траурной атрибутики – это самый ответственный момент.
            </p>

            <p>
                Мы со всей серьезностью и скорбью понимаем Ваши переживания, поэтому готовы оказать Вам полную консультацию и помощь в выборе гробов, чтобы Вы могли взять все необходимые атрибуты.
            </p>

            <p>
                Купить можно в нашем ритуальном агентстве Темникова. Для Вашего выбора мы представим изделия, выполненные в различном стиле и по любым ценовым категориям.
            </p>

            <p>
                Классическим вариантом, который по карману каждому – обшитый атласом, бархатом или искусственным шелком. Наши консультанты помогут подобрать цвет. Это может быть синий, розовый, красный и другие расцветки обшивки. Гроб необходимо выбирать под характер умершего. Это могут быть либо нежные женские цвета. Либо наши консультанты помогут вариант мужской гроб.
            </p>

            <p>
                Стандартный вариант выполнен из различных пород дерева. Натуральный, экологичный и экономичный. Внутренняя часть также обшивается мягким материалом, чтобы ничто не могло повредить тело. Внутри можно украсить рюшами, тесьмой или драпировкой. В комплекте также входят все необходимые ритуальные принадлежности (например, подушка). Все это Вам подскажет агент Бюро Ритуальных Услуг. У нас низкие цены.
            </p>

            <p>
                Среди элитного ассортимента можно выделить гробы, выполненные из ценных пород дерева. Лакированный будет выделяться и выглядеть очень презентабельно. Это самый достойный вариант прощания с умершим.
            </p>

            <p>
                Для упрощения процедуры прощания представлены гробы с 2-мя крышками. При этом конечную часть можно закрыть, а верхнюю поднять для прощания с усопшим.
            </p>

            <p>
                Для сопровождающих возможно заказать установку ручек на гроб. Это поможет нести гроб без различных неудобств и тяжести. Ручки очень прочные и не скользят. Они не сломаются и не оторвутся.
            </p>

            <p>
                Наш агент проконсультирует Вас по ценам и по необходимым параметрам. Он расскажет Вам о размерах, цветах и обшивках.
            </p>

            <p>
                Телефон в Темникове 8 (987)699-17-77 или обратиться по адресу: г. Тенмиков, Территория старого кладюищя.
            </p>

            <p>
                Всю необходимую информацию Вы можете найти в разделе Контакты.
            </p>

            <h3>Мы поддержим Вас в трудное время!</h3>

            <div className={styles['coffins__list']}>
                {
                    data.coffins.map(item => <ProductCard card={item}/>)
                }
            </div>
        </section>
    );
}