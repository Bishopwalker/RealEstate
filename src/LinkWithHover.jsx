import { useState } from 'react';
import { Link } from 'react-router-dom';

const LinkWithHover = ({ to, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link
            to={to}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                textDecoration: isHovered ? 'underline' : 'none',
                color: isHovered ? 'red' : 'blue',
                // Add any other styles you want to apply on hover and normal state
            }}
        >
            {children}
        </Link>
    );
};

export default LinkWithHover;
