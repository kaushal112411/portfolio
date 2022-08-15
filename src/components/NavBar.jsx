import React ,{useState}from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const links = [
     {
        id:1,
        link:"Home"
     },
     {
        id:2,
        link:"About"
     },
     {
        id:3,
        link:"Portfolio"
     },
     {
        id:4,
        link:"Experience"
     },
     {
        id:5,
        link:"Contact"
     },

    ]
    return (
        <div className='flex justify-between items-center bg-black  text-white px-4 w-full h-20 fixed'>
            <div>
            <h1 className='text-5xl font-signature ml02'>kaushal sriperambudur </h1>
            </div>

            <ul className='hidden md:flex'>
                {
                    links.map((item)=>{
                        console.log(item.link)
                        return <li key={item.id} className='px-6 cursor-pointer text-gray-500 capitalize font-medium'><Link to={item.link} smooth duration={500}>{item.link}</Link></li>
                    })
                }
            </ul>
            <div onClick={()=>{setNav(!nav)}} className='cursor-pointer text-gray-500 pr-4 z-10 md:hidden'>
                {nav? <FaTimes size={30}/>:<FaBars size={30} />}
            </div>
            {nav && <ul className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
            {
                    links.map((item)=>{
                        return <li key={item.id} className='px-4 py-6 text-4xl cursor-pointer text-gray-500 capitalize'><Link onClick={()=>{setNav(!nav)}} to={item.link} smooth duration={500}>{item.link}</Link></li>
                    })
                }
            </ul>}
        </div>
        
    );
};

export default NavBar;