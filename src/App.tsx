import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';
import FilmInfo from './components/FilmInfo/FilmInfo';

function App() {
    // const getFilmID = () => {
    //     return filmID
    // }
    return (
        <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/film' element={<FilmInfo filmID={123} />} />
        </Routes>
    );
}

export default App;
