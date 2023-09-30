import React from "react";
import HeaderButtons from "../Buttons/HeaderButtons";

const Card = ({ title, description, image, link }) => {
    return (
        <section className="flex flex-col items-center justify-center mx-1 md:mx-2 lg:mx-4 xl:mx-8 my-4 w-2/3 md:1/4 border-2 border-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            {image}
            <p className="text-center">{description}</p>
            <HeaderButtons text="View" link={link} />
        </section>
    );
};

export default Card;
