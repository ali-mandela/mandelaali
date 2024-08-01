import Image from "next/image";

export default function Home() {
    return (
        <div
            className="flex w-full h-full flex-col gap-10  justify-center items-center ">
            <div className="w-48 h-48 relative shadow-2xl rounded-full overflow-hidden">
                <Image
                    alt="profile"
                    width={200}
                    height={200}
                    className="object-cover"
                    src={require('../../public/image.jpg')}/>
            </div>
            <div className="text-center flex flex-col items-center justify-center    ">
                <p className="text-base text-[#9A9A9A] font-light">Hi, I am Muhammad Ali</p>
                <h1 className="text-2xl w-3/4 text-center font-medium mt-2 text-[#9A9A9A] ">I am
                    a full-stack developer with experience in building digital products and mobile
                    apps. I specialize in creating and shipping impactful solutions.</h1>
            </div>
            {/* Buttons */}
            <div className="my-2 flex gap-6">
                <a
                    href="https://drive.google.com/file/d/1xDVwyZQw2ZEgu9-jDlc4OTeswUweofFB/view?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="border-[1px] px-4 py-2 rounded-md text-base text-[#9A9A9A] border-[#9A9A9A] hover:bg-[#9A9A9A] hover:text-black inline-block">
                    Resume
                </a>
                <a
                    href="mailto:muhammadali.nitrkl@gmail.com"
                    className="px-4 py-2 border-[1px] rounded-md text-base bg-[#9A9A9A] text-black hover:border-[#9A9A9A] hover:bg-transparent hover:text-[#9A9A9A] inline-block">
                    Connect
                </a>
            </div>

        </div>
    );
}
