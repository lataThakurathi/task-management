import Section from "./Section/Section";
import SectionHead from "./Section/SectionHead";
import SectionTitle from "./Section/SectionTitle";
import SectionMain from "./Section/SectionMain";
import PriorityListView from "./PriorityListView";
import { useParams } from "react-router";
import { paramConstants } from "../routes/pathConstants";
import { useProjectsContext } from "../contexts/ProjectsContext";
const ProjectsSidebar = () => {
    const params = useParams();
    const projectId = params[paramConstants.SINGLE_PROJECT_PARAM];

    const { selectProjectById } = useProjectsContext();

    const project = selectProjectById(Number(projectId));

    if (!project) return;

    return (
        <div className="w-15 shrink-0 bg-white dark:bg-gray-800 shadow rounded-0.75">
            <Section>
                <SectionHead>
                    <SectionTitle>{project.title}</SectionTitle>
                </SectionHead>
                <SectionMain className="p-0.25">
                    <PriorityListView />
                </SectionMain>
            </Section>
        </div>
    );
};

export default ProjectsSidebar;
