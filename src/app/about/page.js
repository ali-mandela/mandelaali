import { Experience } from '@/data/about';
import React from 'react';

const Page = () => {
    return (
        <div className="w-full h-full p-0 md:p-4">
            {/* Education */}
            <div className="mb-6">
                <h2 className="text-xl text-[#9A9A9A] font-bold my-2">Education</h2>
                <div className="border hover:bg-neutral-700 bg-neutral-800 p-4 rounded-md ">
                    <div className="mb-2 flex justify-between items-center">
                        <p className="font-medium text-[#FaFAFA]">Bachelor of Technology in Computer Science and Engineering</p>
                        <p className="text-white">NIT Rourkela</p>
                        
                    </div>
                    <p className="text-gray-500">2019-2023</p>
                    <p className="italic text-[#9A9A9A]">Computer Science and Engineering</p>
                </div>
            </div>
            {/* Exprience */}
            <div className="mb-6">
                <h2 className="text-xl text-[#9A9A9A] font-bold my-2">Experience</h2>
                {Experience.map(exp => (
                <ExperienceItem
                    key={exp.id}
                    employer={exp.employer}
                    website={exp.website}
                    duration={exp.duration}
                    profile={exp.profile}
                />
            ))}
                
            </div>
        </div>
    );
};

export default Page;

const ExperienceItem = ({ employer, website, duration, profile }) => {
  return (
      <div className="border my-4 hover:bg-neutral-700 bg-neutral-800 p-4 rounded-md">
          <div className="mb-2 flex justify-between items-center">
              <a href={website} className="font-medium text-[#FaFAFA]" target="_blank" rel="noopener noreferrer">
                  {employer}
              </a>
              <p className="text-white">{duration}</p>
          </div> 
          <p className="italic text-[#9A9A9A]">{profile}</p>
      </div>
  );
};