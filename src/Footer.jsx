import React from "react";

const Footer=()=>{
    const year=new Date().getFullYear();
    return(
    <> 
    <footer className=" foot">  copyright © {year} </footer>
    </>
    );
}
export default Footer;