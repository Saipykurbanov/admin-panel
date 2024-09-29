import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
    return (
        <nav className="navigation">
            <NavLink to="/">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g className="icon"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke-width="1.44" stroke-linecap="round"/> <path d="M15 18H9"stroke-width="1.44" stroke-linecap="round"/> </g>

                </svg>
                <p>Главная</p>
            </NavLink>
            <NavLink to="/orders">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g className='icon'> <path d="M20.2236 12.5257C19.6384 9.40452 19.3458 7.84393 18.2349 6.92196C17.124 6 15.5362 6 12.3606 6H11.6394C8.46386 6 6.87608 6 5.76518 6.92196C4.65428 7.84393 4.36167 9.40452 3.77645 12.5257C2.95353 16.9146 2.54207 19.1091 3.74169 20.5545C4.94131 22 7.17402 22 11.6394 22H12.3606C16.826 22 19.0587 22 20.2584 20.5545C20.9543 19.7159 21.108 18.6252 20.9537 17" stroke-width="1.44" stroke-linecap="round"/> <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke-width="1.44" stroke-linecap="round"/> </g>

                </svg>
                <p>Заказы</p>
            </NavLink>
            <NavLink to="/categories">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g className='icon'> <path d="M2.5 13V17.5C2.5 19.3856 2.5 20.3284 3.08579 20.9142C3.67157 21.5 4.61438 21.5 6.5 21.5C8.38562 21.5 9.32843 21.5 9.91421 20.9142C10.5 20.3284 10.5 19.3856 10.5 17.5V6.5C10.5 4.61438 10.5 3.67157 9.91421 3.08579C9.32843 2.5 8.38562 2.5 6.5 2.5C4.61438 2.5 3.67157 2.5 3.08579 3.08579C2.5 3.67157 2.5 4.61438 2.5 6.5V9" stroke-width="1.44" stroke-linecap="round"/> <path d="M21.4995 18C21.495 19.5572 21.4458 20.3827 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5V15.5C13.5 13.6144 13.5 12.6716 14.0858 12.0858C14.6716 11.5 15.6144 11.5 17.5 11.5C19.3856 11.5 20.3284 11.5 20.9142 12.0858C21.3183 12.4899 21.4436 13.0638 21.4825 14" stroke-width="1.44" stroke-linecap="round"/> <path d="M13.5 5.5C13.5 4.56812 13.5 4.10218 13.6522 3.73463C13.8552 3.24458 14.2446 2.85523 14.7346 2.65224C15.1022 2.5 15.5681 2.5 16.5 2.5H18.5C19.4319 2.5 19.8978 2.5 20.2654 2.65224C20.7554 2.85523 21.1448 3.24458 21.3478 3.73463C21.5 4.10218 21.5 4.56812 21.5 5.5C21.5 6.43188 21.5 6.89782 21.3478 7.26537C21.1448 7.75542 20.7554 8.14477 20.2654 8.34776C19.8978 8.5 19.4319 8.5 18.5 8.5H16.5C15.5681 8.5 15.1022 8.5 14.7346 8.34776C14.2446 8.14477 13.8552 7.75542 13.6522 7.26537C13.5 6.89782 13.5 6.43188 13.5 5.5Z" stroke-width="1.44"/> </g>

                </svg>
                <p>Категории</p>
            </NavLink>
            <NavLink to="/products">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g className='icon'> <path d="M18.2238 10C18.2265 9.50631 18.2438 9.22305 18.3547 8.96928C18.4861 8.66875 18.7329 8.44624 19.2264 8.00123L19.4116 7.83416C20.4679 6.8817 20.996 6.40548 21 5.71612C21.004 5.02677 20.5355 4.59391 19.5987 3.72818C19.4569 3.59713 19.3164 3.47455 19.1808 3.36582C18.7094 2.98797 18.0431 2.57442 17.5332 2.27565C17.056 1.99609 16.4954 1.93167 15.9656 2.07103L15.4755 2.19993C15.0874 2.302 14.7493 2.5526 14.5274 2.90278C13.3251 4.80015 10.6749 4.80015 9.47256 2.90278C9.25065 2.5526 8.91264 2.302 8.52454 2.19993L8.03445 2.07103C7.50458 1.93167 6.944 1.99609 6.46683 2.27565C5.95689 2.57442 5.29062 2.98797 4.81923 3.36582C4.68359 3.47455 4.5431 3.59713 4.40129 3.72818C3.46446 4.59391 2.99605 5.02677 3.00003 5.71612C3.004 6.40548 3.53212 6.8817 4.58835 7.83416L4.77364 8.00123C5.26714 8.44624 5.51389 8.66875 5.64528 8.96928C5.77667 9.26982 5.77667 9.61172 5.77667 10.2955V18.265C5.77667 19.5881 5.77667 20.2497 6.22555 20.8116C6.67443 21.3736 7.21092 21.4723 8.28392 21.6696C9.27582 21.8521 10.5325 22 12 22C13.4675 22 14.7242 21.8521 15.7161 21.6696C16.7891 21.4723 17.3256 21.3736 17.7745 20.8116C18.2233 20.2497 18.2233 19.5881 18.2233 18.265V14" stroke-width="1.44" stroke-linecap="round"/> </g>

                </svg>
                <p>Товары</p>
            </NavLink>
            <NavLink to="/344">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g className='icon'> <circle cx="9" cy="6" r="4" stroke-width="1.44"/> <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke-width="1.44" stroke-linecap="round"/> <path d="M5.88915 20.5843C6.82627 20.8504 7.88256 21 9 21C12.866 21 16 19.2091 16 17C16 14.7909 12.866 13 9 13C5.13401 13 2 14.7909 2 17C2 17.3453 2.07657 17.6804 2.22053 18" stroke-width="1.44" stroke-linecap="round"/> <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"  stroke-width="1.44" stroke-linecap="round"/> </g>

                </svg>
                <p>Пользователи</p>
            </NavLink>
        </nav>
    );
};

export default Navigations;