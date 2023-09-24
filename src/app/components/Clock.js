"use client"

import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import styles from '../page.module.css'

const Clock = ({ timezone }) => {
    const [currentTime, setCurrentTime] = useState(DateTime.local().setZone(timezone));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(DateTime.local().setZone(timezone));
        }, 1000);

        return () => clearInterval(interval);
    }, [timezone]);

    const formattedTime = currentTime.toFormat('hh:mm:ss a');

    return (
        <div>
            <time dateTime={formattedTime}>
                {formattedTime}
            </time>
        </div >
    );
};

export default Clock;