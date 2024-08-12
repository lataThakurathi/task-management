import { useParams, useSearchParams } from "react-router-dom";
import priorities from "../data/priorities";
import Section from "../components/Section/Section";
import SectionHead from "../components/Section/SectionHead";
import SectionTitle from "../components/Section/SectionTitle";
import SectionMain from "../components/Section/SectionMain";
import { FaRegTrashAlt } from "react-icons/fa";
import { useTasksContext } from "../contexts/TasksContext";
import { searchParamConstants } from "../routes/pathConstants";

const TasksView = () => {
    const { id: projectId } = useParams();
    const [searchParams] = useSearchParams();
    const priorityValue = searchParams.get(
        searchParamConstants.SELECTED_PRIORITY
    );

    const { selectTasksByPriorityId, selectTasksByProjectId } =
        useTasksContext();

    const priority = priorities.find((p) => p.value === priorityValue);
    const priorityId = priority ? priority.id : null;

    const filteredTasks = priorityId
        ? selectTasksByPriorityId(Number(projectId), priorityId)
        : selectTasksByProjectId(Number(projectId));

    const sortedFilteredTasks = filteredTasks.sort(
        (a, b) => a.completed - b.completed
    );

    return (
        <div className="h-full grow shadow bg-white rounded-0.75 dark:bg-gray-800">
            <Section>
                <SectionHead>
                    <SectionTitle>Tasks</SectionTitle>
                </SectionHead>
                <SectionMain className="p-1">
                    <div className="flex flex-col gap-0.25">
                        {sortedFilteredTasks.map((task) => (
                            <Task key={task.id} task={task} />
                        ))}
                    </div>
                </SectionMain>
            </Section>
        </div>
    );
};

const Task = ({ task }) => {
    const { toggleTaskCompletion, deleteTask } = useTasksContext();

    return (
        <div className="task-item h-3 bg-gray-100 dark:bg-gray-700 rounded-1 flex items-center px-1 gap-0.5 hover:dark:bg-gray-600 cursor-pointer">
            <input
                type="checkbox"
                id={task.id}
                className="task-item-checkbox"
                checked={task.completed}
                onChange={() => {
                    toggleTaskCompletion(task.id);
                }}
            />
            <label
                htmlFor={task.id}
                className="task-item-text flex h-full items-center select-none grow cursor-pointer">
                {task.text}
            </label>
            <FaRegTrashAlt
                onClick={() => {
                    deleteTask(task.id);
                }}
                className="trash-icon"
            />
        </div>
    );
};

export default TasksView;
