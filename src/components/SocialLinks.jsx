import React from 'react';
import { FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill} from "react-icons/bs";
import { Simulate } from 'react-dom/test-utils';
const SocialLinks = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                Linkedin<FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/feed/",
            style:"rounded-bl-md",

        },
        {
            id:2,
            child:(
                <>
                Github<FaGithub size={30}/>
                </>
            ),
            href:"https://github.com/kaushal112411",

        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:foo@gmail.com",

        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:"../assets/unsortedarray-resume.pdf",
            style:"rounded-br-md",
            download:true,

        },
    ];
    return (
        <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
            <ul>
            {links.map((item)=>{
                return <li key={item.id} className={'flex  justify-between items-center w-40 h-14 bg-gray-500 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'+' '+item.style}>
                 <a download={item.download} href={item.href} target='_blank' rel="noreferrer" className=' flex  justify-between  items-center  w-full  text-white'>
                   {item.child}
                 </a>
             </li>
            })}
               
            </ul>
        </div>
    );
};

export default SocialLinks;