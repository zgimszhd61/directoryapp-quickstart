import Link from "next/link";
import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const NavBar = () => {
    return (
        <div className="w-full py-8 flex flex-row md:px-40 px-4 justify-between items-center">
            <Link href="/">
                <div className="flex flex-row items-center gap-2 transition-all hover:opacity-70">
                    <FaRegFolderOpen className="text-xl" />
                    <p className="font-medium tracking-tighter text-black">
                        DirectorySource
                    </p>
                </div>
            </Link>
            <div className="flex flex-row gap-4 items-center">
                <Link href="/about">
                    <p className="text-sm transition-all hover:opacity-70">About</p>
                </Link>
                <Link href="/concat">
                    <p className="text-sm transition-all hover:opacity-70">Concat</p>
                </Link>
                <Link href="/submit">
                    <button className="flex flex-row gap-1 items-center bg-white transition-all  hover:bg-gray border border-gray-300 py-1 px-2 rounded">
                        <GoPlus />
                        <p className="text-sm">Submit</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;