import { Outlet } from "react-router";

const ProjectsLayout = () => {
    return (
        <div>
            ProjectsList
            <Outlet />
        </div>
    );
};

export default ProjectsLayout;
