import React from 'react';
import LeftSideList from './LeftSideList';

const fetching = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    return res.json()
}

const LeftSide = async () => {

    const f = await fetching()
    const data = f.data.news_category
    // console.log(data)

    return (
        <div>
            <h2 className='text-xl font-bold mb-3'>All Caterogy</h2>
            <LeftSideList data={data}></LeftSideList>
        </div>
    );
};

export default LeftSide;