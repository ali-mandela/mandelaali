import {MobileProjects, WebProjects} from '@/data/about'
import { Stack } from '@/data/nav'
import React from 'react'

// #1A1A1A
const page = () => {
    return (
        <div className='w-full h-full'>
        {/* Tech stack */}
        <div className="flex flex-wrap gap-4 my-12 justify-center">
            {Stack.map((icon) => (
                <div key={icon.key} className="p-2">
                    {icon}
                </div>
            ))}
        </div>
            {/* Mobile apps */}
            <div>
                <h1 className='text-xl text-[#9A9A9A] capitalize font-bold my-2'>web solutions</h1>
                <div className='grid md:grid-cols-3 grid-cols-1  gap-4 my-4'>
                    {WebProjects.map((item) =>< Project key = {
                        item.id
                    }
                    item = {
                        item
                    } />)
}
                </div>
            </div>
            
            {/* Mobile apps */}
            <div>
                <h1 className='text-xl text-[#9A9A9A] font-bold capitalize my-2'>mobile solutions</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
                    {MobileProjects.map((item) =>< Project key = {
                        item.id
                    }
                    item = {
                        item
                    } />)
}
                </div>
            </div>
        </div>
    )
}

export default page

export const Project = ({item}) => {
    return (
        <div
            className='bg-[#1A1A1A] border-[1px] shadow-xl border-[#9A9A9A] px-6 py-10 '>
            <div className='flex justify-between flex-col gap-5'>
                <div className=''>{item.Icon}</div>
                <a href={item.Link} target='_blank'>
                    <h2 className='text-[#9A9A9A] text-xl font-medium'>{item.name}</h2>
                </a>
                <p className='text-[#9A9A9A] font-light'>{item.Description}</p>
            </div>

        </div>
    )
}