import React, { useState } from 'react';
import SearchInput from './components/Search/SearchInput';
import SearchList from './components/Search/SearchList';

export interface IQueryFilms {
    id: number;
    name: string;
    year: number;
}
function App() {
    const getFilmList = (responseList: Array<IQueryFilms> | []) => {
        setFilmList(responseList);
    };
    const [filmList, setFilmList] = useState<Array<IQueryFilms> | []>([]);
    return (
        <>
            <section className='main'>
                <h1>Список фильмов</h1>
                <SearchInput getFilmList={getFilmList} />
                <SearchList filmList={filmList} />
            </section>
        </>
    );
}

export default App;
