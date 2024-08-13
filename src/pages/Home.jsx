import React, { useState } from "react";
import Section from "../components/Section/Section";
import SectionTitle from "../components/Section/SectionTitle";
import SectionHead from "../components/Section/SectionHead";
import SectionMain from "../components/Section/SectionMain";
import { useProjectsContext } from "../contexts/ProjectsContext";
import { Link } from "react-router-dom";
import pathConstants from "../routes/pathConstants";

const Home = () => {
    const { projects, addProject } = useProjectsContext();
    const [newProjectTitle, setNewProjectTitle] = useState("");

    const handleAddProject = () => {
        if (newProjectTitle.trim() === "") return;
        const newProject = {
            id: projects.length + 1,
            title: newProjectTitle,
            status: "incomplete",
        };
        addProject(newProject);
        setNewProjectTitle("");
    };

    return (
        <div className="h-full w-full shadow bg-white rounded-0.75 dark:bg-gray-800">
            <Section>
                <SectionHead>
                    <SectionTitle>All Projects</SectionTitle>
                </SectionHead>
                <SectionMain>
                    <div className="px-1 pb-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                        <div className="bg-gray-100 cursor-pointer rounded-1 flex items-center p-1 justify-center text-3 leading-1 relative">
                            <input
                                placeholder="Add new project"
                                type="text"
                                value={newProjectTitle}
                                onChange={(e) =>
                                    setNewProjectTitle(e.target.value)
                                }
                                className="border placeholder:text-1 p-0 text-1 pl-1 rounded-full pr-2 h-2 min-w-[0]"
                            />
                            <button onClick={handleAddProject} className="pl-1">
                                +
                            </button>
                        </div>
                        {projects.map((project) => (
                            <Project key={project.id} project={project} />
                        ))}
                    </div>
                </SectionMain>
            </Section>
        </div>
    );
};

const Project = (props) => {
    const { project } = props;
    return (
        <Link to={`${pathConstants.PROJECTS}/${project.id}`}>
            <div className="border border-gray-100 p-1 rounded-1">
                <h3 className="text-gray-800 font-medium">{project.title}</h3>
            </div>
        </Link>
    );
};

export default Home;
