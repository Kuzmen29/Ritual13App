import React from 'react';
import Header from '@/components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import FuneralGoods from './pages/FuneralGoods/FuneralGoods';
import Contacts from './pages/Contacts/Contacts';
import Documents from './pages/Documents/Documents';
import Container from './components/Container/Container';
import Crosses from './pages/Crosses/Crosses';
import Wreaths from './pages/Wreaths/Wreaths';
import Coffins from './pages/Coffins/Coffins';
import Clothes from './pages/Clothes/Clothes';
import Transport from './pages/Transport/Transport';
import Cargo200 from './pages/Cargo200/Cargo200';

export default function App() {

    return (
        <div>
            <Header />

            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/funeralGoods' element={<FuneralGoods />}>
                        <Route path='crosses' element={<Crosses/>} />
                        <Route path='wreaths' element={<Wreaths/>} />
                        <Route path='coffins' element={<Coffins/>} />
                        <Route path='clothes' element={<Clothes/>} />
                        <Route path='transport' element={<Transport/>} />
                        <Route path='cargo200' element={<Cargo200/>} />
                    </Route>
                    <Route path='/documents' element={<Documents />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>
            </Container>

            

        </div>
    );
}