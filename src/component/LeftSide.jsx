import Link from 'next/link';
import React from 'react';

const fetching = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    return res.json()
}

const LeftSide = async () => {

    const f = await fetching()
    const data = f.data.news_category
    console.log(data)

    return (
        <div>
            <h2 className='text-xl font-bold mb-3'>All Caterogy</h2>
            <div className='flex flex-col'>
                {
                    data.map(v => (
                        <Link href={`/category/${v.category_id}`} key={v.category_id} className='btn'>{v.category_name}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftSide;