'use client'

import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const Clock = ({ timezone }) => {
    const [currentTime, setCurrentTime] = useState(DateTime.local().setZone(timezone));
    const utcOffset = currentTime.offset / 60; // Get the UTC offset in hours

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(DateTime.local().setZone(timezone));
        }, 1000);

        return () => clearInterval(interval);
    }, [timezone]);

    const formattedTime = currentTime.toFormat('hh:mm:ss a');

    // Format UTC offset in (UTC +/-HH:MM) format
    const formattedUtcOffset = utcOffset > 0 ? `+${String(utcOffset).padStart(2, '0')}` : String(utcOffset).padStart(2, '0');
    const formattedUtcString = `(UTC ${formattedUtcOffset}:00)`;

    return (
        <div>
            <time dateTime={formattedTime}>
                {formattedTime}
            </time>
            <> {formattedUtcString}</>
        </div>
    );
};

export default Clock;