import React from 'react';
import { menuItems } from '@/lib/menuData';
import Link from 'next/link';
import Image from 'next/image';


const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(i=> (
        <div className="flex flex-col gap-3" key={i.title}>
          <span className='hidden lg:block text-gray-400 my-4 font-light'>{i.title}</span>
          {i.items.map((item) => (
            <Link href={item.href} className='flex items-center justify-center lg:justify-start py-2 text-gray-500 gap-4' key={item.label}>
              <Image src={item.icon} alt='' width={20} height={20}/>
              <span className='hidden lg:block'>{item.label}</span>
            </Link>
          ))
          }
        </div>
      ))}
    </div>
  )
}

export default Menu;
