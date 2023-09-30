import React from "react";

const Contact = ({ icon, text, link }) => {
    return (
        <section className="flex flex-row">
            {icon} <a href={link}>{text}</a>
        </section>
    );
};

export default Contact;
