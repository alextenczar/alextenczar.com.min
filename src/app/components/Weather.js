'use client'

import useSWR from 'swr'
import { Noto_Sans_Mono } from 'next/font/google'
const notoMono = Noto_Sans_Mono({ subsets: ['latin'] })

export default function Weather({ lat, lon }) {

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    let { data, error } = useSWR(`/api/weather?lat=${lat}&lon=${lon}`, fetcher)

    if (error) return
    if (!data) return <span className="loading"></span>
    data = data.response
    let temp = data.main.temp
    let desc = data.weather[0].icon

    switch (desc) {
        case '01d':
        case '01n':
            desc = 'Clear'
            break
        case '02d':
        case '02n':
            desc = 'Partly Cloudy'
            break
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            desc = 'Cloudy'
            break
        case '09d':
        case '09n':
            desc = 'Showers'
            break
        case '10d':
        case '10n':
            desc = 'Rain'
            break
        case '11d':
        case '11n':
            desc = 'Thunderstorms'
            break
        case '13d':
        case '13n':
            desc = 'Snow'
            break
        case '50d':
        case '50n':
            desc = 'Fog'
            break
        default:
            desc = data.weather[0].main
    }

    return (
        <span>
            <span className={notoMono.className}>
                {Math.round(temp)}</span>&deg;F {desc}
        </span>
    );
};