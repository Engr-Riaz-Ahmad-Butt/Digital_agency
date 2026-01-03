
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

const nav__links = [
    { path: '#home', display: 'Home' },
    { path: '#about', display: 'About Us' },
    { path: '#pricing-plane', display: 'Services' },
]

const Header = () => {

    const headerRed = useRef(null);
    const menuRef = useRef(null);
    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRed.current.classList.add('sticky__header');
        } else {
            headerRed.current.classList.remove('sticky__header');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);
        return () => window.removeEventListener('scroll', headerFunc);
    }, []);

    const menuToggle = () => {
        if (!menuRef.current) return;
        menuRef.current.classList.toggle('active__menu');
    };

    const handleClick = e => {
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();

        const targetEl = document.querySelector(href);
        if (targetEl) {
            const location = targetEl.offsetTop;
            window.scrollTo({ left: 0, top: location - 80 });
        }

        // close mobile menu after navigating
        if (menuRef.current && menuRef.current.classList.contains('active__menu')) {
            menuRef.current.classList.remove('active__menu');
        }
    };

    return (
        <header className='header' ref={headerRed}>
            <div className='container'>
                <div className='nav__wrapper'>
                    <div className='logo'>
                        <h2 className='logo-text'>RB Digital</h2>
                    </div>

                    <div className='navigation' ref={menuRef}>
                        <ul className='menu'>
                            {
                                nav__links.map((item, index) => (
                                    <li className='nav__item' key={index}><a className={item.path === '#contact' ? 'menu-contact' : ''} onClick={handleClick} href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    {/*=========nav right========= */}
                    <div className='nav__right'>
                        <Link to='/contactUs' className='register__btn' style={{ fontWeight: '600' }}>Contact Us</Link>
                        <span className='mobile__menu' onClick={menuToggle}><i className='ri-menu-line'></i></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
