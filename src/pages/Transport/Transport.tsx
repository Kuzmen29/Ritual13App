import React from 'react';
import styles from "./Transport.module.scss";
import data from "@/assets/data/data.json";
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductList from '@/components/ProductList/ProductList';
import WeWillSupport from '@/components/WeWillSupport/WeWillSupport';
import Paragraph from '@/components/Paragraph/Paragraph';
import Address from '@/components/Address/Address';
import AddressesList from '@/components/AddressesList/AddressesList';
import Telephone from '@/components/Telephone/Telephone';
import TelephonesList from '@/components/TelephonesList/TelephonesList';

export default function Transport() {


    return (
        <section className={styles['transport']}>
            <Paragraph>
                Ритуальный транспорт – неотъемлемая часть похорон.
            </Paragraph>

            <Paragraph>
                Стоит отметить, что сейчас данная услуга распространена не только для людей с большим достатком, но и других социальных слоев.
            </Paragraph>

            <Paragraph>
                Катафалк предназначен для перевозки гроба с усопшим по назначенному маршруту: до места отпевания, ритуального погребения или кремации.
            </Paragraph>

            <Paragraph>
                Издавна эту функцию выполняли обычные носилки или повозки, что было весьма проблематично при долгой и тяжелой дороге. Сегодня наше ритуальное агентство предлагает Вам заказать ритуальный катафалк.
            </Paragraph>

            <Paragraph>
                Живя в большом городе, путь до кладбища неблизкий. Именно поэтому наши катафалки помогут решить проблему перевозки умершего, сопроводив до места захоронения.
            </Paragraph>

            <h2>Катафалк</h2>

            <Paragraph>
                Катафалк – специализированный среди всего транспорта. Пассажирский транспорт (катафалк) должен быть оборудован специальным образом для комфортной ритуальной перевозки на похороны и сохранения в целом состоянии гроба.
            </Paragraph>

            <Paragraph>
                В нашем ритуальном агентстве работают только профессиональные водители, которые довезут до нужного места. Водители катафалка очень пунктуальны и обязательно и приедут в назначенное время без опозданий. Мы понимаем, что в день похорон каждая минута очень дорога.
            </Paragraph>

            <Paragraph>
                Наши ритуальные перевозки выполняются на высшем уровне с гарантом безопасности.
            </Paragraph>

            <Paragraph>
                Наше агентство ритуальных услуг поможет Вам подобрать по требуемым параметрам нужный катафалк для церемонии прощания. Вам необходимо лишь определить количество пассажиров, время и место. Все остальные проблемы мы берем на себя.
            </Paragraph>

            <Paragraph>
                С нами Вы можете быть уверены, что все пройдет правильно.
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
                    data.transport.map(item => <ProductCard card={item} />)
                }
            </ProductList>
        </section>
    );
}