import React from 'react';

import '../../../../styles/scss/index.scss';

export default function RippleButton({ children, onClick }) {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 1200);
        } else setIsRippling(false);
    }, [coords]);

    React.useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
        <button
            type='button'
            className='ripple-button'
            onClick={(e) => {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setCoords({ x, y });
                onClick && onClick(e);
            }}
        >
            {isRippling ? (
                <span
                    className='ripple'
                    style={{
                        left: coords.x + 10,
                        top: coords.y,
                    }}
                />
            ) : (
                ''
            )}
            <span className='content'>{children}</span>
        </button>
    );
}
