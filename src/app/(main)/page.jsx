import { redirect } from 'next/navigation';
import React from 'react';

const id = '01';

const page = () => {
  return (
    <div>
      {
        redirect(`category/${id}`)
      }
    </div>
  );
};

export default page;