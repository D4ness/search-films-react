import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchList from './SearchList';

export interface IQueryFilms {
    id: number;
    name: string;
    year: number;
}

const Search = () => {
    const getFilmList = (responseList: Array<IQueryFilms> | []) => {
        setFilmList(responseList);
    };
    const [filmList, setFilmList] = useState<Array<IQueryFilms> | []>([]);
    return (
        <section className='main'>
            <h1>Список фильмов</h1>
            <SearchInput getFilmList={getFilmList} />
            <SearchList filmList={filmList} />
        </section>
    );
};

export default Search;
