import React from 'react';
import styles from "./Crosses.module.scss";
import data from "@/assets/data/data.json";
import ProductCard from '@/components/ProductCard/ProductCard';
import Telephone from '@/components/Telephone/Telephone';
import ProductList from '@/components/ProductList/ProductList';
import Paragraph from '@/components/Paragraph/Paragraph';
import TelephonesList from '@/components/TelephonesList/TelephonesList';
import WeWillSupport from '@/components/WeWillSupport/WeWillSupport';
import AddressesList from '@/components/AddressesList/AddressesList';
import Address from '@/components/Address/Address';

export default function Crosses() {


    return (
        <section className={styles['crosses']}>
            <Paragraph>
                Крест - давняя традиция христианской веры. Принято считать, что крест символизирует вечную жизнь усопшего.
            </Paragraph>

            <Paragraph>
                Место могилы – священное место. Для того, чтобы оградить место от чужих глаз на могилу обычно устанавливают оградку и крест (символ христианской веры).
            </Paragraph>

            <Paragraph>
                Многие знают, что кресты на могилу должны быть восьмиконечными и иметь определенную форму. Крест обязательно устанавливают на могилу либо в ноги либо у изголовья усопшего.
            </Paragraph>

            <Paragraph>
                Материалы используют разные: металл, камень, дерево (например, дубовый). Но следует знать, что в день похорон желательно установить на могилу деревянный крест. Эта мера предупредит просадку почвы. На крест вешается табличка с именем и датой усопшего. В дальнейшем это поможет найти место захоронения среди остальных могил.
            </Paragraph>

            <Paragraph>
                Со временем Вы уже сможете решить, что лучше установить. Через год можно установить каменный крест или памятник.
            </Paragraph>

            <Paragraph>
                Каждый крест покрывается специальным средством и лаком. Такая мера предотвратит гниение и затемнение. Лак продлит срок службы.
            </Paragraph>

            <Paragraph>
                На Ваш выбор можно быстро заказать красивый металлический кованый крест, который будет дополнен различными орнаментами и узорами. Мы поможем Вам заказать все необходимое за оптимальные цены. Мы со всем сочувствием понимаем Ваше горе, поэтому всегда готовы пойти Вам навстречу.
            </Paragraph>

            <TelephonesList>

                <h2>Заказывайте крест на могилу по телефонам: </h2>

                {
                    data.telephones.map(item=>(
                        <Telephone telephone={item.telephone}/>
                    ))
                }
            </TelephonesList>

            <AddressesList>
                <h2>Или приходите к нам: </h2>
                {
                    data.addresses.map(item=>(
                        <Address address={item.fullAddress}/>
                    ))
                }
            </AddressesList>

            <WeWillSupport/>

            <ProductList>
                {
                    data.crosses.map(item => <ProductCard card={item} />)
                }
            </ProductList>


        </section>
    );
}