import React from 'react';
import styles from "./Transport.module.scss";
import data from "@/assets/data/data.json";
import ProductCard from '@/components/ProductCard/ProductCard';

export default function Transport() {


    return (
        <section className={styles['transport']}>
            <p>
                Ритуальный транспорт – неотъемлемая часть похорон.
            </p>

            <h2>Правильные ритуальные похороны</h2>

            <p>
                Стоит отметить, что сейчас данная услуга распространена не только для людей с большим достатком, но и других социальных слоев.
            </p>

            <p>
                Катафалк предназначен для перевозки гроба с усопшим по назначенному маршруту: до места отпевания, ритуального погребения или кремации.
            </p>

            <p>
                Издавна эту функцию выполняли обычные носилки или повозки, что было весьма проблематично при долгой и тяжелой дороге. Сегодня наше ритуальное агентство предлагает Вам заказать ритуальный катафалк.
            </p>

            <p>
                Живя в большом городе, путь до кладбища не близкий. Именно, поэтому наши катафалки помогут решить проблему перевозки умершего, сопровождающих до места захоронения.
            </p>

            <h2>Катафалк</h2>

            <p>
                Катафалк – специализированный среди всего транспорта. Пассажирский транспорт (катафалк) должен быть оборудован специальным образом для комфортной ритуальной перевозки на похороны и сохранения в целом состоянии гроба.
            </p>

            <p>
                В нашем агентстве Бюро Ритуальных Услуг работают только профессиональные водители, которые довезут до нужного места. Водители катафалка очень пунктуальны и обязательно приедут в назначенное время без опозданий. Мы понимаем, что в день похорон каждая минута очень дорога.
            </p>

            <p>
                Наши ритуальные перевозки выполняются на высшем уровне с гарантом безопасности.
            </p>

            <h2>Ритуальные услуги</h2>
            <p>
                Наше агентство ритуальных услуг поможет Вам подобрать по требуемым параметрам нужный катафалк для церемонии прощания. Вам необходимо лишь определить количество пассажиров, время и место. Все остальные проблемы мы берем на себя.
            </p>

            <p>
                С нами Вы можете быть уверены, что все пройдет правильно.
            </p>

            <h3>Мы поддержим Вас в трудное время!</h3>

            <div className={styles['transport__list']}>
                {
                    data.transport.map(item=><ProductCard card={item}/>)
                }
            </div>
        </section>
    );
}