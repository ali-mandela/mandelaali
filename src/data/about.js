import {FaStoreAlt} from "react-icons/fa";
import {MdOutlineCastForEducation} from "react-icons/md";
import {FaBuilding} from "react-icons/fa";
import {IoLibrarySharp} from "react-icons/io5";
import {FaSpinner} from "react-icons/fa6";
import {GrTechnology} from "react-icons/gr";
import {FaMoneyCheck} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import {HiOutlineTemplate} from "react-icons/hi";

export const Experience = [
    {
        id: 1,
        employer: "Techwire Studio",
        website: "https://techwire.studio/",
        duration: "15 Dev 2023 - 15 Jul 2024",
        profile: "Software Developer"
    }, {
        id: 2,
        employer: "R-dev",
        website: "https://rdevs.vercel.app/",
        profile: "Freelance Full-Stack Developer",
        duration: "15 Jul 2023 - noww"
    }, {
        id: 3,
        employer: "Skropay",
        website: "https://www.linkedin.com/company/skropay/?originalSubdomain=in",
        profile: "Junior Software Developer",
        duration: "05 Aug 2022 - 15 Jan 2023"
    }
];

export const WebProjects = [
    {
        id: 1,
        name: "R-store",
        Description: "R-Store offering diverse products with seamless shopping and checkout experience",
        Link: "https://r-store-liard.vercel.app/",
        Icon: <FaStoreAlt fontSize={32} color="#9A9A9A"/>
    }, {
        id: 2,
        name: "CMS",
        Description: "A comprehensive platform where professors register courses and students enroll t" +
                "o access features like course materials, announcements, and progress tracking.",
        Link: "https://frontendcms.onrender.com",
        Icon: <MdOutlineCastForEducation fontSize={32} color="#9A9A9A"/>
    }, {
        id: 3,
        name: "askLuxor",
        Description: "A real estate marketplace connecting agents, users, and admins, offering propert" +
                "y listings, inquiries, and management tools for seamless transactions.",
        Link: "https://askluxor.onrender.com",
        Icon: <FaBuilding fontSize={32} color="#9A9A9A"/>
    }, {
        id: 4,
        name: "Academy 360",
        Description: "A comprehensive library and coaching academy offering resources and guidance for" +
                " academic and personal development.",
        Link: "https://academy360-zeta.vercel.app/",
        Icon: <IoLibrarySharp fontSize={32} color="#9A9A9A"/>
    }, {
        id: 5,
        name: "techno",
        Description: "A dummy website showcasing diverse web design elements and functionalities, idea" +
                "l for testing, experimentation, and learning new web technologies.",
        Link: "https://techno-five.vercel.app/",
        Icon: <GrTechnology fontSize={32} color="#9A9A9A"/>
    }, {
        id: 6,
        name: "aspire",
        Description: "A dummy website showcasing diverse web design elements and functionalities, idea" +
                "l for testing, experimentation, and learning new web technologies.",
        Link: "https://techno-five.vercel.app/",
        Icon: <FaSpinner fontSize={32} color="#9A9A9A"/>
    }, {
        id: 7,
        name: "Skropay",
        Description: "Early access portal for Skropay",
        Icon: <FaMoneyCheck fontSize={32} color="#9A9A9A"/>
    }
];

export const MobileProjects = [
    {
        id: 1,
        name: "HRMS app",
        Description: "A Human Resource Management System (HRMS) mobile app for streamlined employee ma" +
                "nagement, attendance tracking, leave requests, and more, enhancing HR efficiency" +
                ".",
        Link: "",
        Icon: <HiOutlineTemplate fontSize={32} color="#9A9A9A"/>
    }, {
        id: 2,
        name: "Rapid Foods",
        Description: "An online food delivery app connecting users, restaurants, admins, and delivery " +
                "partners for seamless ordering, management, and efficient deliveries.",
        Link: "",
        Icon: <MdDeliveryDining fontSize={32} color="#9A9A9A"/>
    }
];
