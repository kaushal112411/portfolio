import React from 'react';

const Contact = () => {
    return (
        <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white ' style={{paddingTop:"30px"}}>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 my-4'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch</p>
                </div>

            <div className='flex flex-col items-center'>
                <form action='https://getform.io/f/395968e9-34ff-453b-afeb-0b4976af219c' method='POST' className='flex flex-col '>
                    <input type="text" name="name" placeholder="Enter your name" className="p-2
                    bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <input type="text" name="email" placeholder="Enter your email" className="p-2 my-4
                    bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <textarea 
                    name='message'
                    placeholder='enter the message'
                    rows="10"
                    className="p-2
                    bg-transparent border-2 rounded-md text-white focus:outline-none">
                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300'>Submit</button>
                </form>
            </div>


            </div>
        </div>
    );
};

export default Contact;