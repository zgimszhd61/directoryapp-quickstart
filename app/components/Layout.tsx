import React, { Children } from "react";
import NavBar from "./NavBar";

const Layout = ({children}:any) => {
    return <div className="min-h-screen">
        <NavBar />
        {children}
        </div>;
};

export default Layout;