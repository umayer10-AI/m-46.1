import LeftSide from '@/component/LeftSide';
import RightSide from '@/component/RightSide';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-[90%] mx-auto grid grid-cols-5'>
      <LeftSide></LeftSide>
      <div className='col-span-3'>

      </div>
      <RightSide></RightSide>
    </div>
  );
};

export default page;