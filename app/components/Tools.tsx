"use client";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaSort } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { RiArrowDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { dataList } from "@/data/dataList";

const Tools = () => {
    const [openSort, setOpenSort] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [openItems,setOpenItems] = useState(false);

    console.log(openSort);
    const dropdownRefSort:any = useRef(null);
    const dropdownRefFilter:any = useRef(null);
    const dropdownRefItems:any = useRef(null);
    const handleClickOutsiteSort = (event: any) => {
        if (
            dropdownRefSort.current && 
            !dropdownRefSort.current.contains(event.target)
        ){
            setOpenSort(false);
        }
    };
    const handleClickOutsiteFilter = (event: any) => {
        if (
            dropdownRefFilter.current && 
            !dropdownRefFilter.current.contains(event.target)
        ){
            setOpenFilter(false);
        }
    };
    const handleClickOutsiteItems = (event: any) => {
        if (
            dropdownRefItems.current && 
            !dropdownRefItems.current.contains(event.target)
        ){
            setOpenItems(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown",handleClickOutsiteSort);
        document.addEventListener("mousedown",handleClickOutsiteFilter);
        document.addEventListener("mousedown",handleClickOutsiteItems);
        return () => {
            document.removeEventListener("mousedown",handleClickOutsiteSort);
            document.removeEventListener("mousedown",handleClickOutsiteFilter);
            document.removeEventListener("mousedown",handleClickOutsiteItems);
        };
    },[])

    return (
        <div className="w-full py-8 flex flex-col md:px-40 px-4">
            <div className="w-full flex flex-row gap-2">
                <div className="flex flex-col" ref={dropdownRefSort}>
                <button className="text-xs flex flex-row items-center transition-all hover:bg-gray-100 gap-1 bg-white text-gray-600 border rounded px-3 py-2">
                    <FaSort />
                    Sort By
                </button>
                <AnimatePresence>
                    {openSort && (
                      <motion.div   
                      initial={{ opacity:0,y:-10 }}
                      animate={{opacity:1,y:0 }}
                      exit={{ opacity:0,y:-10}}
                      transition={{duration:0.2,ease:"easeInOut"}}
                      className="absolute w-40 mt-10 bg-white border border-gray-200 rounded shadow-lg z-10"
                     >
                    <a 
                     href=""
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        Latest
                     </a>
                     <a 
                     href=""
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        Oldest{" "}
                     </a>
                     <a 
                     href=""
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        Highest Rated{" "}
                     </a>
                     </motion.div>
                    )}
                </AnimatePresence>
                </div>
                <div className="flex flex-col" ref={dropdownRefFilter}>
                    <button 
                        onClick={()=>setOpenFilter(!openFilter)}
                        className="text-xs flex flex-row items-center transition-all hover:bg-gray-100 gap-1 bg-white text-gray-600 border rounded px-3 py-2"
                        >
                        <IoFilter />
                        Show Filters
                    </button>
                    <AnimatePresence>
                    {openFilter && (
                      <motion.div   
                      initial={{ opacity:0,y:-10 }}
                      animate={{opacity:1,y:0 }}
                      exit={{ opacity:0,y:-10}}
                      transition={{duration:0.2,ease:"easeInOut"}}
                      className="absolute w-40 mt-10 bg-white border border-gray-200 rounded shadow-lg z-10"
                     >
                    <a 
                     href="#action1"
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        Categories
                     </a>
                     <a 
                     href="#action2"
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        Languages
                     </a>
                     <a 
                     href=""
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        Topics
                     </a>
                     </motion.div>
                    )}
                </AnimatePresence>

                </div>
                <button 
                    onClick={()=>setOpenItems(!openItems)}
                    className="text-xs flex flex-row items-center transition-all hover:bg-gray-100 gap-1 bg-white text-gray-600 border rounded px-3 py-2"
                    >
                    Items per page
                    <RiArrowDownLine className="mt-1" />
                </button>
                <AnimatePresence>
                    {openItems && (
                      <motion.div   
                      initial={{ opacity:0,y:-10 }}
                      animate={{opacity:1,y:0 }}
                      exit={{ opacity:0,y:-10}}
                      transition={{duration:0.2,ease:"easeInOut"}}
                      className="absolute w-40 mt-10 bg-white border border-gray-200 rounded shadow-lg z-10"
                     >
                    <a 
                     href="#action1"
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        10 per page
                     </a>
                     <a 
                     href="#action2"
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        12 per page
                     </a>
                     <a 
                     href=""
                     className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100"
                     >
                        15 per page
                     </a>
                     </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex items-center gap-2 bg-white border rounded px-3 py-2 flex-grow">
                    <CiSearch className= "text-gray-600 " />
                    <input
                        placeholder="Type to search..."
                        className="text-xs flex-grow px-1 bg-white text-gray-600 border-none outline-none"
                    />
                </div>
                <button className="text-xs flex flex-row items-center transition-all hover:bg-gray-100 gap-1 bg-white text-gray-600 border rounded px-3 py-2">
                    search
                </button>
            </div>
            <div className="py-10 grid w-full gap-6 grid-cols-1 md:grid-cols-3">
                {dataList.map((item,index) => (
                    <div className="px-5 py-7 w-full flex flex-col gap-2 rounded-lg cursor-pointer transition-all hover-opacity-70 border border-gray-700"
                    key={index}>
                         <div className="flex flex-row items-center gap-2">
                            <div className="logo-container bg-white border p-2 rounded shadow-sm flex">
                                <div className="logo-image" style={{
                                    backgroundImage:`url($item.logo})`,
                                }}>
                                
                                </div>
                            </div>
                        <h1 className="text-2xl text-gray-700 font-semibold tracking-tight">
                         {item.name} 
                        </h1>
                        <p className="text-sm tracking-tight text-gray-500 line-clamp">
                            {item.description}
                        </p>
                        <div className = "flex flex-col gap-2 pt-2">
                            <div className="flex flex-row items-center">
                                <p className="text-sm text-gray-500 tracking-tight">Category</p>
                            <hr className="text-sm text-gray-500 tracking-tight">

                            </hr>
                            </div>
                        </div>
                    </div>
                   </div>
                ))}
            </div>
        </div>
    )
}

export default Tools;