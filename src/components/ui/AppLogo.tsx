'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
    src?: string; // Image source (optional)
    text?: string; // Logo text (optional)
    iconName?: string; // Icon name when no image
    size?: number; // Size for icon/image
    className?: string; // Additional classes
    onClick?: () => void; // Click handler
}

const AppLogo = memo(function AppLogo({
    src,
    text,
    iconName = 'CommandLineIcon', // Use a standard icon from HeroIcons
    size = 32,
    className = '',
    onClick,
}: AppLogoProps) {
    // Memoize className calculation
    const containerClassName = useMemo(() => {
        const classes = ['flex items-center gap-2'];
        if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
        if (className) classes.push(className);
        return classes.join(' ');
    }, [onClick, className]);

    return (
        <div className={containerClassName} onClick={onClick}>
            {/* Show image if src provided, otherwise show icon */}
            {src ? (
                <img
                    src={src}
                    alt="Logo"
                    width={size}
                    height={size}
                    className="flex-shrink-0 object-contain"
                />
            ) : (
                <AppIcon name={iconName} size={size} className="flex-shrink-0" />
            )}

            {/* Show text if provided */}
            {text && <span className="text-xl font-bold">{text}</span>}
        </div>
    );
});

export default AppLogo;