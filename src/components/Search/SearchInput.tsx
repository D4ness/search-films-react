import React, { useEffect, useState } from 'react';
import { IQueryFilms } from './Search';
import useDebounce, { myToken } from './searchFuncs';

interface ISearchInput {
    getFilmList: (responseList: Array<IQueryFilms> | []) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ getFilmList }: ISearchInput) => {
    const [filmQuery, setFilmQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const searchFilms = (value: string) => {
        console.log('srchFlms');
        // setFilmQuery(value);
        const preparedValue: string = value.trim().toLowerCase();

        if (preparedValue.length) {
            fetch(
                `https://api.kinopoisk.dev/movie?search=${preparedValue}` +
                    `&field=name&isStrict=true&token=${myToken}`,
            )
                .then((response) => response.json())
                .then((response) => {
                    console.log(response.docs);
                    getFilmList(response.docs);
                })
                .catch((err) => {
                    console.error(err);
                    getFilmList([]);
                });
        } else {
            getFilmList([]);
        }
        setIsSearching(false);
    };
    const debouncedFilmQuery = useDebounce(filmQuery, 1000);
    useEffect(() => {
        console.log('useEff');
        if (debouncedFilmQuery) {
            // Выставить состояние isSearching
            setIsSearching(true);
            // Сделать запрос к АПИ
            searchFilms(debouncedFilmQuery);
        } else {
            searchFilms('');
        }
    }, [debouncedFilmQuery]);
    // TODO Кнопка "С рейтингом больше х" - дополнительный фильтр
    // TODO 2 поля с годами - фильтр от и до
    // TODO Сделать состояние загрузки пока идёт запрос к API
    return (
        <div className='search'>
            {isSearching && <div>Searching ...</div>}
            <input
                className='search__input'
                type='text'
                value={filmQuery}
                onChange={(event) => setFilmQuery(event.target.value)}
            />
        </div>
    );
};
export default SearchInput;
