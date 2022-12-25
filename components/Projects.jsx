import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline/";

import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="px-4 -scroll-mt-20 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center mx-auto my-14 text-4xl font-semibold">
        <h1 className="mb-24">My Projects</h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <Link href="https://muhammaddariazzidane.000webhostapp.com/" scroll>
          <div class="mx-auto hover:cursor-pointer hover:-translate-y-4 transition-all duration-300 flex w-80 flex-col justify-center bg-white rounded-2xl shadow-deep-purple-accent-400/40 shadow-xl">
            <img class="aspect-video w-80 rounded-t-2xl object-cover object-center" src="/web2.png" />
            <div class="p-6">
              <h1 class="text-2xl font-medium text-gray-700 pb-2">Your Heading</h1>
              <p class="text-gray-500 leading-6">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
            </div>
            <div className="flex space-x-2 ml-4 mb-5">
              <Image className="transition-all duration-300 hover:rotate-6" src="/ci.png" alt="/" width={25} height={25} />
              <Image className="transition-all duration-300 hover:rotate-6 " src="/tailwind.svg" alt="/" width={25} height={25} />
              <Image className="transition-all duration-300 hover:rotate-6" src="/alpine.png" alt="/" width={25} height={25} />
              <Image className="transition-all duration-300 hover:rotate-6" src="/mysql.png" alt="/" width={30} height={25} />
            </div>
          </div>
        </Link>
        <Link href="https://muhammaddariazzidane.000webhostapp.com/" scroll>
          <div class="mx-auto hover:cursor-pointer hover:-translate-y-4 transition-all duration-300 flex w-80 flex-col justify-center bg-white rounded-2xl shadow-deep-purple-accent-400/40 shadow-xl">
            <img class="aspect-video w-80 rounded-t-2xl object-cover object-center" src="/webfilm.png" />
            <div class="p-6">
              <h1 class="text-2xl font-medium text-gray-700 pb-2">Your Heading</h1>
              <p class="text-gray-500 leading-6">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
            </div>
            <div className="flex space-x-2 ml-7 mb-5">
              <Image className="transition-all duration-300 hover:rotate-6" src="/next.svg" alt="/" width={40} height={25} />
              <Image className="transition-all duration-300 hover:rotate-6 " src="/tailwind.svg" alt="/" width={25} height={25} />
              <Image className="transition-all duration-300 hover:rotate-6 " src="/vercel.svg" alt="/" width={40} height={25} />
              {/* <Image className="transition-all duration-300 hover:rotate-6" src="/alpine.png" alt="/" width={25} height={25} /> */}
              {/* <Image className="transition-all duration-300 hover:rotate-6" src="/mysql.png" alt="/" width={30} height={25} /> */}
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="text-center mt-14">
        <a
          href="/#"
          className="inline-flex items-center justify-center w-full h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded-md shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          <ChevronDoubleDownIcon className="h-6 w-6 " />

        </a>
      </div> */}
    </div>
  );
};

export default Projects;
