import UserCard from '@/components/UserCard';
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
        <div className="flex w-full lg:w-2/3">
          <div className="flex gap-4 justify-between flex-wrap w-full">
            <UserCard type='student'/>
            <UserCard type='parent'/>
            <UserCard type='teacher'/>
            <UserCard type='staff'/>
          </div>
        </div>

        <div className="flex w-full lg:w-1/3">r</div>
    </div>
  )
}

export default AdminPage;
