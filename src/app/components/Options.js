'use client'

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from 'react';

const Options = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [isHidden, setVisibility] = useState(true);

    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    const handleClick = () => {
        setVisibility(!isHidden);
    };

    let tempUnit = 'f'
    let timeFormat = '12hr'

    if (searchParams.get('tempUnit')) {
        tempUnit = searchParams.get('tempUnit')
    }
    if (searchParams.get('timeFormat')) {
        timeFormat = searchParams.get('timeFormat')
    }

    let fActive = ''
    let cActive = 'active'
    let oppTempUnit = ''
    if (tempUnit === 'f') {
        fActive = 'active'
        cActive = ''
        oppTempUnit = 'c'
    } else {
        oppTempUnit = 'f'
    }

    let twelveActive = ''
    let twentyFourActive = 'active'
    let oppTimeFormat = ''
    if (timeFormat === '12hr') {
        twelveActive = 'active'
        twentyFourActive = ''
        oppTimeFormat = '24hr'
    } else {
        oppTimeFormat = '12hr'
    }

    return (
        <div className='options-container'>

            <button class='options-button' onClick={handleClick}>
                Options
            </button>
            <div className={`options ${isHidden ? 'hidden' : 'visble'}`}>
                <button onClick={() => {
                    router.push(pathname + '?' + createQueryString('timeFormat', oppTimeFormat))
                }}><span className={`${twelveActive}`}>12hr</span>&nbsp;<span className={`${twentyFourActive}`}>24hr</span></button><br />
                <button onClick={() => {
                    router.push(pathname + '?' + createQueryString('tempUnit', oppTempUnit))
                }}><span className={`${fActive}`}>°F</span>&nbsp;<span className={`${cActive}`}>°C</span></button>
            </div>
        </div >
    );
};

export default Options;