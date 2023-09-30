import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import profileImage from "./assets/img/profile-image.webp";
import MediaQuery from "react-responsive";
import SectionLayout from "./components/Layout/SectionLayout";
import Card from "./components/Cards/Card";
import { useEffect, useState } from "react";
import Contact from "./components/Cards/Contact";
import { Tutanota, Linkedin } from "@icons-pack/react-simple-icons";
export default function App() {
    const [githubRepos, setGithubRepos] = useState({
        0: {
            name: "Loading...",
            description: "Loading...",
            html_url: "Loading...",
        },
        1: {
            name: "Loading...",
            description: "Loading...",
            html_url: "Loading...",
        },
        2: {
            name: "Loading...",
            description: "Loading...",
            html_url: "Loading...",
        },
    });

    const [githubUser, setGithubUser] = useState("melikechan");

    const fetchGithubRepos = async () => {
        const response = await fetch(
            `https://api.github.com/users/${githubUser}/repos`
        );
        const data = await response.json();
        setGithubRepos(data);
    };

    useEffect(() => {
        fetchGithubRepos();
    }, [githubUser]);

    return (
        <>
            <Header />
            <Hero />
            <SectionLayout id="about" header={"About Me"}>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-x-4 px-4 md:px-16 lg:px-32">
                    <p className="break-words">
                        I am currently a <i>computer engineering</i> student at{" "}
                        <i>Ankara University, Turkey</i> who is interested in
                        artificial intelligence, mathematics, and quantum
                        computing. I am also keen on competitive programming.
                        <br />I love drawing, watching anime (I mostly love
                        action and fantasy animes), and reading fantasy books.
                    </p>

                    <MediaQuery minWidth={768}>
                        <img src={profileImage} alt="image" width={"20%"} />
                    </MediaQuery>
                    <MediaQuery maxWidth={767}>
                        <img
                            src={profileImage}
                            alt="image"
                            width={"90%"}
                            preview={false}
                        />
                    </MediaQuery>
                </div>
                <hr className="w-full my-4" />
            </SectionLayout>
            <SectionLayout id="projects" header={"Projects"}>
                <p className="text-center">
                    Here are some of my projects that I have commited recently.
                    You can see all of my projects on my Github profile.
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-x-4 px-4 md:px-16 lg:px-32">
                    <Card
                        title={githubRepos[0].name}
                        description={githubRepos[0].description}
                        link={githubRepos[0].html_url}
                    />
                    <Card
                        title={githubRepos[1].name}
                        description={githubRepos[1].description}
                        link={githubRepos[1].html_url}
                    />
                    <Card
                        title={githubRepos[2].name}
                        description={githubRepos[2].description}
                        link={githubRepos[2].html_url}
                    />
                </div>
            </SectionLayout>

            <SectionLayout id="contact" header={"Contact"}>
                <p className="text-center">You can contact me from</p>
                <Contact
                    link={"mailto:melikechan@tuta.io"}
                    text={"melikechan[at]tuta.io"}
                    icon={<Tutanota span="Tutanota" />}
                />
                <Contact
                    link={"https://linkedin.com/in/melikechan"}
                    text={"Melike Vurucu"}
                    icon={<Linkedin span="Linkedin" />}
                />
            </SectionLayout>
            <Footer />
        </>
    );
}
