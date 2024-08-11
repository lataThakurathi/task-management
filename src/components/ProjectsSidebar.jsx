import Section from "./Section/Section";
import SectionHead from "./Section/SectionHead";
import SectionTitle from "./Section/SectionTitle";
import SectionMain from "./Section/SectionMain";
const ProjectsSidebar = () => {
    return (
        <div className="w-15 shrink-0 bg-white dark:bg-gray-800 shadow rounded-0.75">
            <Section>
                <SectionHead>
                    <SectionTitle>Hello</SectionTitle>
                </SectionHead>
                <SectionMain>Hello</SectionMain>
            </Section>
        </div>
    );
};

export default ProjectsSidebar;
