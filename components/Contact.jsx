import React from "react";

const Contact = () => {
  return (
    <>
      <div class="max-w-full mt-8 lg:mx-6" id="contact">
        <div className="w-full mx-auto text-center font-bold text-4xl py-24">Contact me</div>
        <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-deep-purple-accent-400/50">
          <h1 class="text-lg font-medium text-gray-700">What do you want to ask</h1>

          <form class="mt-6">
            <div class="flex-1">
              <label class="block mb-2 text-sm text-gray-600 ">Full Name</label>
              <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md " />
            </div>

            <div class="flex-1 mt-6">
              <label class="block mb-2 text-sm text-gray-600 ">Email address</label>
              <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  " />
            </div>

            <div class="w-full mt-6">
              <label class="block mb-2 text-sm text-gray-600 ">Message</label>
              <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48  " placeholder="Message"></textarea>
            </div>

            <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-deep-purple-accent-400 rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              get in touch
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
