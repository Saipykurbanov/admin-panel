import React from 'react';

const Head = () => {
    return (
        <div className="calendar_head">
            <h2>Январь <span>2024</span></h2>
            <div className="calendar_navigation">
                <button>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)matrix(-1, 0, 0, 1, 0, 0)">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g className='main_icon_path'> <path d="M9 10L4 15M20 15L12 7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </g>

                    </svg>
                </button>
                <button className='right'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)matrix(-1, 0, 0, 1, 0, 0)">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g className='main_icon_path'> <path d="M9 10L4 15M20 15L12 7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </g>

                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Head;