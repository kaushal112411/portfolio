import React from "react";
import hero from "../assets/IMG-8867(2).jpg";
import { HiChevronDoubleRight } from "react-icons/hi";
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div
      name="Home"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" justify-center h-full flex flex-col">
          <h1 className=" font-bold text-4xl sm:text-7xl">
            I am a software developer(Reactjs,nodejs)
          </h1>
          <p className=" text-gray-500 py-4 max-w-md">
            I am a software developer looking for a position with a focus on
            new and challenging technologies for skill enhancement and become a
            professional in Computer Science stream who is capable enough to
            contribute the organization to look 
            beyond the horizon and adapt in changing environment. i have 1+ year
            experience in frontend development.i also have hands on project
            experience in javascript ,nodejs,expressjs, database and React.
          </p>
          <div>
            <Link to={"Portfolio"} smooth duration={500} className=" text-white w-fit px-6 py-3 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span>
                <HiChevronDoubleRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img src={hero} alt="" className=" rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
