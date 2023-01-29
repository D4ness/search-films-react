import { useEffect, useState } from 'react';

export const myToken = '5X1TPKV-8REM72J-QF2QXG9-F4EZ2Q6';
export default function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        console.log('useDebounce');
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
}
