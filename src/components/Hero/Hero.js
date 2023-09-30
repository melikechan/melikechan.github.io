import React from "react";
import {
    Github,
    Gitlab,
    Linkedin,
    Kaggle,
    Codeforces,
} from "@icons-pack/react-simple-icons";

import SocialButton from "../Buttons/SocialButtons";

const Hero = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-yellow-600 to-pink-600">
                <div>
                    <div className="flex flex-col space-x-2 justify-center items-center text-gray-50">
                        <span className="text-4xl font-bold">
                            Melike Vurucu
                        </span>
                        <span className="text-2xl font-bold">melikechan</span>
                    </div>
                    <hr />
                    <p className="text-center text-gray-50">
                        A computer engineering student who is interested in
                        quantum computing, AI and competitive programming.
                    </p>
                    <div className="flex flex-row justify-center space-x-4 py-2">
                        <SocialButton
                            icon={<Github span="Github" />}
                            link="https://github.com/melikechan"
                        />
                        <SocialButton
                            icon={<Gitlab span="Gitlab" />}
                            link="https://gitlab.com/melikechan"
                        />
                        <SocialButton
                            icon={<Codeforces span="Codeforces" />}
                            link="https://codeforces.com/profile/melikechan"
                        />
                        <SocialButton
                            icon={<Kaggle span="Kaggle" />}
                            link="https://kaggle.com/melikechan"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
export default Hero;
