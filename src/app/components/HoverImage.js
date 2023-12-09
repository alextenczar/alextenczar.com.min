// components/ImageHover.js

'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HoverImage = ({ imageUrl, altText, targetElementId }) => {
    const [isHovered, setHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const targetElement = document.getElementById(targetElementId)


        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX - 66, y: e.clientY + 50 });
        };

        targetElement.addEventListener('mouseenter', () => setHovered(true));
        targetElement.addEventListener('mouseleave', () => setHovered(false));
        targetElement.addEventListener('mousemove', handleMouseMove);

        return () => {
            targetElement.removeEventListener('mouseenter', () => setHovered(true));
            targetElement.removeEventListener('mouseleave', () => setHovered(false));
            targetElement.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="hover-container">
            {isHovered && (
                <Image
                    className="hover-image"
                    src={imageUrl}
                    alt={altText}
                    style={{ left: position.x, top: position.y }}
                    width={150}
                    height={150}
                    loading='eager'
                />
            )}
        </div>
    );
};

export default HoverImage;