import { Outlet } from "react-router";
import ProjectsSidebar from "../../components/ProjectsSidebar";

const ProjectsLayout = () => {
    return (
        <div className="flex w-full gap-0.5">
            <ProjectsSidebar />
            <Outlet />
        </div>
    );
};

export default ProjectsLayout;
