import tasks from "../data/tasks";
import Section from "../components/Section/Section";
import SectionHead from "../components/Section/SectionHead";
import SectionTitle from "../components/Section/SectionTitle";
import SectionMain from "../components/Section/SectionMain";
import { FaRegTrashAlt } from "react-icons/fa";

const TasksView = () => {
    return (
        <div className="h-full grow w-full shadow bg-white rounded-0.75 dark:bg-gray-800">
            <Section>
                <SectionHead>
                    <SectionTitle></SectionTitle>
                </SectionHead>
                <SectionMain className="p-1">
                    <div className="flex flex-col gap-0.25">
                        {tasks.map((task) => (
                            <Task task={task} />
                        ))}
                    </div>
                </SectionMain>
            </Section>
        </div>
    );
};

const Task = (props) => {
    const { task } = props;

    return (
        <div className="task-item h-3 bg-gray-100 dark:bg-gray-700 rounded-1 flex items-center px-1 gap-0.5 cursor-pointer">
            <input
                type="checkbox"
                id={task.id}
                className="task-item-checkbox"
                checked={task.completed}
                onChange={() => {
                    // toggleTaskCompletion(task.id);
                }}
            />
            <label htmlFor={task.id} className="task-item-text">
                {task.text}
            </label>
            <FaRegTrashAlt
                onClick={() => {
                    // removeTask(task.id);
                }}
                className="trash-icon"
            />
        </div>
    );
};

export default TasksView;
