import React from 'react';
import { IQueryFilms } from './Search';

interface ISearchList {
    filmList: Array<IQueryFilms> | [];
}

const SearchList: React.FC<ISearchList> = ({ filmList }: ISearchList) => {
    console.log('xyz', filmList);
    return (
        <div className='search__options'>
            {filmList.length === 0 ? (
                <h3>Пусто</h3>
            ) : (
                filmList.map((film) => (
                    <div key={film.id} className='search__option'>
                        {film.name}, {film.year}
                    </div>
                ))
            )}
        </div>
    );
};

export default SearchList;
