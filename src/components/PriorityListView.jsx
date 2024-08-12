import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import priorities from "../data/priorities.js";
import { Link } from "react-router-dom";
import { searchParamConstants } from "../routes/pathConstants.jsx";

const priorityColorClassMap = {
    0: "bg-gray-200 dark:bg-gray-700", // All Tasks
    1: "bg-red", // High Priority
    2: "bg-yellow", // Medium Priority
    3: "bg-green", // Low Priority
};

const PriorityListView = () => {
    const [searchParams] = useSearchParams();
    const selectedPriority =
        searchParams.get(searchParamConstants.SELECTED_PRIORITY) || "all";

    const priorityItems = [
        {
            id: 0,
            name: "All",
            value: "all",
            description: "All tasks regardless of their priority",
            bgClassName: priorityColorClassMap[0],
        },
        ...priorities.map((priority) => ({
            ...priority,
            bgClassName: priorityColorClassMap[priority.id] || "bg-gray-200",
        })),
    ];

    return (
        <div className="flex flex-col gap-0.25">
            {priorityItems.map((priorityItem) => (
                <PriorityItem
                    key={priorityItem.id}
                    priorityItem={priorityItem}
                    isActive={priorityItem.value === selectedPriority}
                />
            ))}
        </div>
    );
};

const PriorityItem = ({ priorityItem, isActive }) => {
    return (
        <Link
            to={`?${searchParamConstants.SELECTED_PRIORITY}=${priorityItem.value}`}
            className={clsx(
                "h-3 p-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center rounded-full gap-0.5",
                isActive ? "bg-gray-100 dark:bg-gray-700" : "bg-transparent"
            )}>
            <div
                className={clsx(
                    "h-1.5 w-1.5 border-2 border-white dark:border-gray-800 rounded-full",
                    priorityItem.bgClassName
                )}></div>
            <p>{priorityItem.name}</p>
        </Link>
    );
};

export default PriorityListView;
