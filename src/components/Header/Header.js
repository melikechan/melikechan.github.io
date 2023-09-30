import React from "react";
import melikechanLogo from "../../assets/img/melikechan-logo.svg";
import MediaQuery from "react-responsive";
import HeaderButton from "../Buttons/HeaderButtons";

const Header = () => {
    return (
        <>
            <header className="flex justify-center md:justify-between flex-row items-center px-16 py-4 bg-gray-100 sticky top-0">
                <img
                    className="w-1/3 md:w-1/12"
                    src={melikechanLogo}
                    alt="melikechan-logo"
                />
                <MediaQuery minDeviceWidth={768}>
                    <nav className="flex flex-row space-x-4">
                        <HeaderButton text={"About"} link={"#about"} />
                        <HeaderButton text={"Projects"} link={"#projects"} />
                        <HeaderButton text={"Contact"} link={"#contact"} />
                    </nav>
                </MediaQuery>
            </header>
        </>
    );
};

export default Header;
