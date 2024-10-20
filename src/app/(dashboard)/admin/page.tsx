import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import FinanaceChart from '@/components/FinanaceChart';
import UserCard from '@/components/UserCard';
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
        <div className="flex w-full lg:w-2/3 flex-col gap-6">
          <div className="flex gap-4 justify-between flex-wrap w-full">
            <UserCard type='student'/>
            <UserCard type='parent'/>
            <UserCard type='teacher'/>
            <UserCard type='staff'/>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px] ">
              <CountChart/>
            </div>

            <div className="w-full lg:w-2/3 h-[450px] ">
              <AttendanceChart/>
            </div>
          </div>
        <div className="w-full h-[500px]">
          <FinanaceChart/>
        </div>
        </div>


        <div className="flex w-full lg:w-1/3">r</div>
    </div>
  )
}

export default AdminPage;
