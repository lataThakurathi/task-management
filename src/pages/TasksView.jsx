import { useParams, useSearchParams } from "react-router-dom";
import priorities, { priorityColorClassMap } from "../data/priorities";
import Section from "../components/Section/Section";
import PopOver from "../components/PopOver";
import SectionHead from "../components/Section/SectionHead";
import SectionTitle from "../components/Section/SectionTitle";
import SectionMain from "../components/Section/SectionMain";
import { FaRegTrashAlt } from "react-icons/fa";
import { useTasksContext } from "../contexts/TasksContext";
import { searchParamConstants } from "../routes/pathConstants";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRef } from "react";
import useToggle from "../hooks/useToggle";
import clsx from "clsx";

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
    const { toggleTaskCompletion, deleteTask, changeTaskPriority } =
        useTasksContext();

    const { isOpen, close, toggle } = useToggle(false);

    const showOptionsRef = useRef();

    return (
        <div className="relative task-item h-3 bg-gray-100 dark:bg-gray-700 rounded-1 flex items-center px-1 gap-0.5 hover:dark:bg-gray-600 cursor-pointer">
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
            <span
                onClick={toggle}
                ref={showOptionsRef}
                className="h-1.75 w-1.75 text-gray-500 hover:bg-white  dark:text-gray-200 hover:dark:bg-gray-400 hover:dark:text-white flex items-center justify-center rounded-full">
                <BsThreeDotsVertical />
            </span>
            <PopOver
                close={close}
                toggleButtonRef={showOptionsRef}
                isOpen={isOpen}
                className="right-1 top-full translate-y-0.25">
                <div className="p-1 bg-white shadow rounded-0.5 dark:bg-gray-600">
                    <p className=" leading-1 mb-0.5">Change Priority</p>
                    <div className="mb-1 flex gap-0.5">
                        {priorities.map((priority) => (
                            <div
                                key={priority.id}
                                onClick={() => {
                                    changeTaskPriority(task.id, priority.id);
                                }}
                                className={clsx(
                                    "h-1.25 w-1.25 rounded-full",
                                    priorityColorClassMap[priority.id],
                                    priority.id === task.priorityId
                                        ? "border-2 border-gray-800 dark:border-white"
                                        : ""
                                )}></div>
                        ))}
                    </div>
                    <div className="flex items-center gap-1">
                        <p>Delete</p>
                        <FaRegTrashAlt
                            onClick={() => {
                                deleteTask(task.id);
                            }}
                            className="text-gray-700 dark:text-gray-200 hover:text-red  hover:dark:text-red"
                        />
                    </div>
                </div>
            </PopOver>
        </div>
    );
};

export default TasksView;
