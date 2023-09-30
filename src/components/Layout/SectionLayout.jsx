import React from "react";

const SectionLayout = ({ id, header, children }) => {
    return (
        <section
            id={id}
            className="flex flex-col items-center justify-center mx-1 md:mx-2 lg:mx-4 xl:mx-8 my-4 space-y-4"
        >
            <h1 className="text-3xl font-bold text-center">{header}</h1>
            {children}
        </section>
    );
};

export default SectionLayout;
