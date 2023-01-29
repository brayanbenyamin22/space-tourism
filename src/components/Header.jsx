import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';
import { dataMenu } from '../data';
import { logoST, menuClose, menuOpen } from '../images';
import '../styles/Header.css';

const Header = () => {
    const { menu, setMenu, activeSec, setActiveSec, hoverSec, setHoverSec } = useContext(AppContext);
    
    const handleMenu = () => {
        setMenu(!menu);
    }
    const handleActive = (item) => {
        setActiveSec(item);
    }
    return (
        <header> 
            <img src={logoST} alt="logo" className='logo space tourism' />
            <span className="menu-btn">
                <img 
                    src={!menu ? menuOpen : menuClose} 
                    alt="menu icon"
                    onClick={handleMenu} 
                />
            </span>
            <nav className={`nav-bar ${menu && 'nav-bar__active'}`}>
                <span className="line"></span>
                <ul className="sections-list">
                    {
                        dataMenu.map((data, key) => {
                            return(
                                <li key={key} id={data.id}
                                    /* className={activeSec === data.id ? "sectionActive" : ""} */
                                    onClick={() => {handleActive(data.id); handleMenu()}}
                                >
                                    <Link to={data.path} 
                                        onMouseEnter={() => setHoverSec(data.id) }
                                        onMouseLeave={() => setHoverSec(null)}
                                    >
                                        {data.name}
                                    </Link>
                                    <span className={activeSec === data.id ? "sectionActive" : ""}></span>
                                    <span className={(hoverSec === data.id && hoverSec !== activeSec) ? "sectionHovered" : ""}></span>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
    </header>
    );
}

export default Header;