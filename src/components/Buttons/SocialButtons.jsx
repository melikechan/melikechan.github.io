import React from "react";

const Button = ({ icon, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 px-4 py-2 text-gray-50">
                {icon}
            </button>
        </a>
    );
};

export default Button;
