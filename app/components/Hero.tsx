import React from "react";

const Hero = () => {
    return (
        <div className="w-full py-8 gap-3 flex flex-col md:px-40 px-4">
            <div className="flex flex-row items-center gap-1 bg-gray-100 py-1 rounded w-max px-3">
            <div className="circle" />
            <p className="text-[12px] text-gray-700">本周新增2个工具</p>
        </div>
        <h1 className="text-4xl md:w-4/5 pb-2 w-full font-bold tracking-tighter md:text-5xl bg-gradient-to-b from-black to-gray-500 bg-clip-text">
            发现通往成功的道路，领先的解决方案
        </h1>
        <p className="md:w-4/5 text-base tracking-tight text-gray-500 w-full">
            探索我们精选的SaaS解决方案和初创工具目录，旨在为您的业务提供创新高效的日常运营替代方案
        </p>
        <form className="flex flex-row gap-2">
            <input
            type="email"
            className="text-sm w-1/3 py-1 border border-gray-200 px-3 rounded"
            placeholder="订阅我们的新闻简报"
            />
            <button className="w-max text-sm bg-black text-white px-3 rounded hover:bg-gray-700 transition-all">
                立即订阅
            </button>
        </form>
        </div>
        
    );
}
export default Hero;
