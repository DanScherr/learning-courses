import PropTypes from 'prop-types';
import HomeIconLink from './HomeIconLink';
import AboutIconLink from './AboutIconLink';
import { useLocation } from 'react-router-dom';

export default function Header( { text, bgColor, textColor } ) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };

    const location = useLocation();

    console.log(location)

    return (
        <header style={ headerStyles }>
            <div className="container">
                <h2>{text}</h2>
                <div className="header-link-container">
                    { location.pathname !== '/' && <HomeIconLink/> }
                    {/* <HomeIconLink /> */}
                    <AboutIconLink size={20}/>
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
};

Header.propTypes = {
    text: PropTypes.string
};