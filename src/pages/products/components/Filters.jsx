import React, { useEffect, useState } from 'react';
import Button from '../../../components/button/Button';
import Store from '../../../Store';
import Cross from '../../../components/cross/Cross';
import Api from '../../../Api';
import LoadingGeneral from '../../../components/loading/LoadingGeneral';
import useGetFilters from '../hooks/useGetFilters';

const Filters = () => {

    const getFilters = useGetFilters()

    if (!getFilters.isOpen) return null

    return (
        <div className={`filters_panel ${getFilters.isOpen}`} onMouseDown={(e) => e.stopPropagation()}>
            <Cross func={getFilters.closeFilter}/>
             
            {getFilters.load ? 
                <>
                    <div className="filter_block">
                        {getFilters.filters.colors?.length ? 
                            <>
                                <div className="filter_name">Цвет</div>
                                <div className='filter_grid'>
                                    {getFilters.filters.colors.map((el, i) => (
                                        <div className="color_item active" key={i}><span></span>{el.color_name}</div>
                                    ))}
                                </div>
                            </>
                        :<></>}
                    </div>

                    <div className="filter_block">
                        {getFilters.filters.material?.length ? 
                            <>
                                <div className="filter_name">Материал</div>
                                <div className='filter_grid'>
                                    {getFilters.filters.material.map((el, i) => (
                                        <div className="color_item active" key={i}><span></span>{el.material}</div>
                                    ))}
                                </div>
                            </>
                        :<></>}
                    </div>

                    <div className="filter_block">
                        <div className="filter_name">Цена</div>

                        <div className="filter_grid">
                            <div className="color_item"><span></span>0 - 2000 руб.</div>
                            <div className="color_item"><span></span>2000 - 5000 руб.</div>
                            <div className="color_item"><span></span>5000 - 10000 руб.</div>
                        </div>
                    </div>
                </>
            :<LoadingGeneral />}

            <Button mode={'fill'} title={'Очистить'}/>

        </div>
    );
};

export default Filters;