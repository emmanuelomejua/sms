import React from 'react';
import Image from 'next/image';

const UserCard = ({type}: {type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-vPurple even:bg-vYellow p-4 flex-1 min-w-[130px]'>
        <div className="flex justify-between items-center w-full">
            <span className='px-2 py-1 text-[10px] bg-white text-green-600 rounded-full'>2023/24</span>
            <Image src='/more.png' alt='' width={20} height={20} className='cursor-pointer' />
        </div>
        <h1 className='text-xl font-semibold my-3'>2,234</h1>
        <span className='capitalize text-sm font-medium text-gray-500'>{type}</span>
    </div>
  )
}

export default UserCard;
