import React from 'react';
import { TfiEmail } from 'react-icons/tfi';

const Page = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between p-6">
            {/* About Me */}
            <section>
                <h1 className="text-3xl underline font-medium text-[#9A9A9A]">Muhammad Ali</h1>
                <p className="my-4 text-base font-light leading-7 text-neutral-500">
                    An engineering graduate in Computer Science from the National Institute of Technology Rourkela, class of 2023. With a solid foundation in software development, my experience spans an internship as a Junior Software Developer at Skropay, a full-time role as a Software Developer at Techwire, and ongoing freelance work as a full-stack developer specializing in mobile and web solutions. I am passionate about technology, quick to learn and adapt, and dedicated to problem-solving and code optimization. My collaborative spirit enhances my ability to contribute effectively to any team.
                </p>
            </section>

            {/* Reach Out */}
            <section className="mt-32 flex flex-col items-center">
                <h2 className="text-3xl  font-semibold text-gray-500">
                    Share your idea, and I will build it for you.
                </h2>
                <div className="border-2 p-4 rounded-full border-[#9A9A9A] mt-4">
                    <a href="mailto:muhammadali.nitrkl@gmail.com" aria-label="Send an email to Muhammad Ali" className="text-[#9A9A9A]">
                        <TfiEmail fontSize={28} />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className=" ">
                <p className="text-base font-light text-gray-500">
                    All rights reserved &copy; 2024
                </p>
            </footer>
        </div>
    );
};

export default Page;
