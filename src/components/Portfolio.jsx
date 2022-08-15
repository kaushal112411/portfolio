import React from 'react';
import memories from '../assets/545201_18701015_3401269_9e84b80f_image.png'
import movies  from '../assets/pngtree-movie-book-logo-template-vector-illustration---vector-png-image_4814689.jpg'
const Portfolio = () => {

   const portfolios = [
    {
        id:1,
        val:memories
    },
    {
        id:2,
        val:movies
    }
   ]


    return (
        <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
           <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out my work here</p>
           </div>

           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 
              {
                portfolios.map(({id,val})=>{ 
                    return (
                    <div key={id} className='shadow-md shadow-gray-400 rounded-lg'>
                <img src={val} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex justify-center items-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
                    )
                })
              }
          
           </div>

           </div>

        </div>
    );
};

export default Portfolio;