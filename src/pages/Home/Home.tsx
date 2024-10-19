import React from 'react';
import styles from "./Home.module.scss";
import ProductMenu from '@/components/ProductMenu/ProductMenu';
import { NavLink } from 'react-router-dom';
import WeWillSupport from '@/components/WeWillSupport/WeWillSupport';
import Paragraph from '@/components/Paragraph/Paragraph';


export default function Home() {


    return (

        <section className={styles['home']}>

            <h2>Ритуальные услуги</h2>

            <div className={styles['home__angels']}>
                <img src={'/assets/images/home/home_image_1.jpg'} className={styles['home__angels-image']} alt="" />

                <div className={styles['home__angels-text']}>
                    <Paragraph>
                        Мы - организация, предоставляющая ритуальные услуги в г. Темников и с. Теньгушево. Наши сотрудники обладают многолетним опытом в сфере организации похорон и проведения различных ритуальных услуг.
                    </Paragraph>
                    <Paragraph>
                        Невозможно подготовиться к смерти близкого человека заранее. Она наступает всегда неожиданно и внезапно. Однако, несмотря на всю душевную утрату и горечь, которую чувствуют родные умершего, возникает необходимость в организации траурного процесса. При этом каждый из нас хочет достойно попрощаться с близким человеком.
                    </Paragraph>
                </div>
            </div>

            <Paragraph>
                Наше ритуальное агенство предоставляет полный комплекс ритуальных услуг и товаров, чтобы церемония прощания прошло тихо и спокойно
            </Paragraph>

            <ProductMenu />

            <NavLink to={'/contacts'} className={styles['home__contacts']}>Телефоны и контакты</NavLink>

            <Paragraph>
                В случае смерти человека, квалифицированные сотрудники проконсультируют Вас относительно порядка организации похорон. При необходимости, специалисты окажут помощь в проведении церемонии с учетом ваших пожеланий, а также согласно религиозным обычаям и обрядам.
            </Paragraph>
            
            <Paragraph>
                Наше ритуальное агентство предлагает оптимальные цены.
            </Paragraph>

            <img src='/assets/images/home/home_image_2.jpg' alt="" />

            <WeWillSupport/>
        </section>
    );
}