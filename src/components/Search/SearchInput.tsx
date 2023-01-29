import React, { useState } from 'react';
import { IQueryFilms } from '../../App';
interface ISearchInput {
    getFilmList: (responseList: Array<IQueryFilms> | []) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ getFilmList }: ISearchInput) => {
    const [filmQuery, setFilmQuery] = useState('');
    const myToken = '5X1TPKV-8REM72J-QF2QXG9-F4EZ2Q6';
    const searchFilms = (value: string) => {
        setFilmQuery(value);
        const preparedValue: string = value.trim().toLowerCase();

        // TODO Кнопка "С рейтингов больше х" - дополнительный фильтр
        // TODO 2 поля с годами - фильтр от и до
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
                .catch((err) => console.error(err));
        } else {
            getFilmList([]);
        }
        // function debounce(callback: () => void) {
        //     let timeout: number;
        //     return function (...args: [number]) {
        //         clearTimeout(timeout);
        //         timeout = setTimeout(callback, 1000, ...args);
        //     };
        // }
        // const debounceInput = debounce(searchFilms, 800);
        //     clearSearchList();
        //     if (value !== '') {
        //         let url = `${urlStart}search/movie?${urlParams}&query=${query}`;
        //         sendRequest(url).then((response) => {
        //             showSearchList(response.results, query);
        //         });
        //     } else {
        //         document.querySelector('.search__options').classList.add('hide');
        //     }
    };
    return (
        <div className='search'>
            <input
                className='search__input'
                type='text'
                value={filmQuery}
                onChange={(event) => searchFilms(event.target.value)}
            />
        </div>
    );
};
export default SearchInput;
