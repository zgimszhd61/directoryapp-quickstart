import React from "react";

const Hero = () => {
    return (
        <div className="w-full py-8 gap-3 flex flex-col md:px-40 px-4">
            <div className="flex flex-row items-center gap-1 bg-gray-100 py-1 rounded w-max px-3">
            <div className="circle" />
            <p className="text-[12px] text-gray-700">2 new tools added this week</p>
        </div>
        <h1 className="text-4xl md:w-4/5 pb-2 w-full font-bold tracking-tighter md:text-5xl bg-gradient-to-b from-black to-gray-500 bg-clip-text">
            Discovery your path to success with Leading solutions
        </h1>
        <p className="md:w-4/5 text-base tracking-tight text-gray-500 w-full">
            Expore our curated directory of essential SaaS solutions and startup tools , design to empower your business with innovative and efficient alertnatives for daily operations
        </p>
        <form className="flex flex-row gap-2">
            <input
            type="email"
            className="text-sm w-1/3 py-1 border border-gray-200 px-3 rounded"
            placeholder="Subscribe to our newsletter"
            />
            <button className="w-max text-sm bg-black text-white px-3 rounded hover:bg-gray-700 transition-all">
                Subscribe
            </button>
        </form>
        </div>
        
    );
}
export default Hero;