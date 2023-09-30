import React from "react";

const Button = ({ text, link }) => {
    return (
        <a href={link}>
            <button className="flex rounded bg-gradient-to-tr from-pink-500 to-yellow-500 px-4 py-2 text-gray-50">
                {text}
            </button>
        </a>
    );
};

export default Button;
