import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];


const BreakingNews = () => {
    return (
        <div className='flex items-center gap-3 max-w-[80%] mx-auto bg-gray-100 py-3 px-2 rounded-lg'>
            <button className='btn btn-error text-white'>Latest</button>
            <Marquee pauseOnHover={true}>
                <div className='flex gap-6'>
                    {
                        news.map(v => (
                            <h2 key={v._id} className='font-semibold'>{v.title}</h2>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;