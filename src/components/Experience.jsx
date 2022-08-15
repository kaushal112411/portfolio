import React from 'react';
import css from '../assets/css.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import sql from '../assets/sql.jpg'
import javascript from '../assets/javascript.png'
import nodejs from '../assets/node.jpg'
import mui from '../assets/mui.png'
import express from '../assets/express.png'
import redux from '../assets/redux.png'
//import github from '../assets/github.png'
const Experience = () => {
    const techs = [
    {
        id:1,
        val:css,
        text:"Css",
        style:"shadow-blue-500"
    },
    {
        id:2,
        val:html,
        text:"Html",
        style:"shadow-orange-500"

    },
    {
        id:3,
        val:react,
        text:"Reactjs",
        style:"shadow-blue-500"
    },
    {
        id:4,
        val:javascript,
        text:"Javascript",
        style:"shadow-yellow-500"
    },
    {
        id:5,
        val:nodejs,
        text:"Nodejs",
        style:"shadow-green-500"
    },
    {
        id:6,
        val:sql,
        text:"Sql",
        style:"shadow-yellow-500"
    },
    {
        id:7,
        val:mui,
        text:"Mui",
        style:"shadow-blue-500"
    },
    {
        id:8,
        val:express,
        text:"Express",
        style:"shadow-green-500"
    },
    {
        id:9,
        val:redux,
        text:"Redux",
        style:"shadow-purple-500"
    },
   
    ]
    return (
        <div name="Experience" className='bg-gradient-to-b from-gray-800 to-black
        w-full h-screen' style={{paddingTop:"35px"}}>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>I have 1+ YEARS Industry experience.These are the technologies I've worked with</p>
                </div>
                
              
                   <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0' >
                         {
                            techs.map(({id,val,text,style})=>{
                                return(
                                    <div id={id}className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg  ${style}`}>
                                    <img src={val} alt="" className='w-20 mx-auto'/>
                                    <p className='mt-4'>{text}</p>
                                   </div> 
                                )
                            })
                         }
                    </div>
               
            </div>
        </div>
    );
};

export default Experience;