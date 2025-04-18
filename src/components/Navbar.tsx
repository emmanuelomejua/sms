import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt="" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>

      <div className="flex items-center gap-4 justify-end w-full">
        <div className="rounded-full bg-white w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src='/message.png' alt='' width={20} height={20} />
        </div>

        <div className="rounded-full bg-white w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src='/announcement.png' alt='' width={20} height={20} />
          <span className='absolute bg-purple-500 h-5 w-5 flex items-center justify-center -top-3 -right-3 rounded-full text-xs text-white'>4</span>
        </div>

        <div className="flex flex-col">
          <span className="leading-3 text-xs font-medium">John David</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>

        <Image src='/avatar.png' alt='' width={36} height={36} className='rounded-full' />
      </div>
    </div>
  )
}

export default Navbar;
