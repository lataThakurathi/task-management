import Section from "../components/Section/Section";
import SectionTitle from "../components/Section/SectionTitle";
import SectionHead from "../components/Section/SectionHead";
import SectionMain from "../components/Section/SectionMain";
import { useProjectsContext } from "../contexts/ProjectsContext";
import { Link } from "react-router-dom";
import pathConstants from "../routes/pathConstants";

const Home = () => {
    const { projects } = useProjectsContext();

    return (
        <div className="h-full w-full shadow bg-white rounded-0.75 dark:bg-gray-800">
            <Section>
                <SectionHead>
                    <SectionTitle>All Projects</SectionTitle>
                </SectionHead>
                <SectionMain>
                    <div className="px-1 pb-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                        {projects.map((project) => (
                            <Project project={project} />
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
