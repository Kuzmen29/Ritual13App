import React from 'react';
import styles from "./Documents.module.scss";
import Paragraph from '@/components/Paragraph/Paragraph';
import WeWillSupport from '@/components/WeWillSupport/WeWillSupport';


export default function Documents() {


    return (
        <section className={styles['documents']}>
            
            <h2 className={styles['documents__title']}>Если у Вас скончался близкий человек, Вам необходимо собрать определенный пакет документов</h2>

            <div>
                <Paragraph>1. Медицинское свидетельство о смерти</Paragraph>
                <Paragraph>
                    - выдается в поликлинике на основании записей в медицинской карте по месту прописки, проживания (если умерший вставал на учет в поликлинике по месту проживания) если человек долгое время болел, а участковый врач его наблюдал на протяжении болезни.
                </Paragraph>
                <Paragraph>
                    - выдается в больнице на основании записей в медицинской карте больного или на основании патологоанатомического вскрытия в морге больницы (если умерший находился на момент смерти в больнице, и его смерть не связанна с травмой, отравлением, насилием и т.д.)
                </Paragraph>
                <Paragraph>
                    - выдается в бюро судебно-медицинской экспертизы (на основании вскрытия) или проще говоря, морге.
                </Paragraph>
            </div>

            <div>
                <Paragraph>2. Государственное (гербовое) свидетельство о смерти</Paragraph>
                <Paragraph>
                    - выдается в Загсе района по прописке или месте смерти умершего.
                </Paragraph>
                <Paragraph>
                    Для получения медицинского и государственного свидетельства о смерти Вам нужно при себе иметь паспорт умершего и свой паспорт.
                </Paragraph>
            </div>

            <WeWillSupport/>
            
        </section>
    );
}