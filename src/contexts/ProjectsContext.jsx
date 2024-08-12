import React, { createContext, useContext, useState } from "react";
import projectsData from "../data/projects";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState(projectsData);

    const addProject = (newProject) => {
        setProjects([...projects, newProject]);
    };

    const deleteProject = (projectId) => {
        setProjects(projects.filter((project) => project.id !== projectId));
    };

    const updateProject = (projectId, updatedProject) => {
        setProjects(
            projects.map((project) =>
                project.id === projectId
                    ? { ...project, ...updatedProject }
                    : project
            )
        );
    };

    const selectProjectById = (projectId) => {
        return projects.find((project) => project.id === projectId);
    };

    const selectProjectsByStatus = (status) => {
        return projects.filter((project) => project.status === status);
    };

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                addProject,
                deleteProject,
                updateProject,
                selectProjectById,
                selectProjectsByStatus,
            }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjectsContext = () => useContext(ProjectsContext);
