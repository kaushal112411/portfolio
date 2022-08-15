import React from 'react';

const About = () => {
    return (
        <div name="About" className=' w-full bg-gradient-to-b from-gray-800 to-black text-white px-4 justify-between items-center'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                I am a software developer(frontend) with 1+ year industry experience in REACT, JAVASCRIPT, REDUX, NODE , SQL and Express.
            </p>
            <br/>
            <p className='text-xl mt-20'>
                I am currenting working as a frontend developer at Nvest Solution pvt ltd.my day to day tasks inlcudes adding features for the web apps based on 
                react, redux, contextapi, sql, and materialui. fixing bugs/issues rised on ui or frontend part of the applications.Writing and maintaining the efficient code.
            </p>
            </div>
        </div>
    );
};

export default About;