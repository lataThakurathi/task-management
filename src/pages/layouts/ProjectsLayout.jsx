import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import ProjectsSidebar from "../../components/ProjectsSidebar";
import projects from "../../data/projects";

const ProjectsLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/projects" && projects.length > 0) {
            const firstProjectId = projects[0].id;
            navigate(`/projects/${firstProjectId}`);
        }
    }, [location, navigate, projects]);

    return (
        <div className="flex w-full gap-0.5">
            <ProjectsSidebar />
            <Outlet />
        </div>
    );
};

export default ProjectsLayout;
