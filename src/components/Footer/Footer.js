import React from "react";
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <>
            <footer className="flex justify-center items-center bg-gray-100 h-16">
                <p>melikechan - {year}</p>
            </footer>
        </>
    );
};

export default Footer;
