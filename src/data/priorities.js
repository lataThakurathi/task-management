const priorities = [
    {
        id: 1,
        name: "High Priority",
        value: "high-priority",
        description: "Tasks that need immediate attention",
    },
    {
        id: 2,
        name: "Medium Priority",
        value: "medium-priority",
        description: "Tasks that are important but not urgent",
    },
    {
        id: 3,
        name: "Low Priority",
        value: "low-priority",
        description: "Tasks that can be addressed later",
    },
];
export const priorityColorClassMap = {
    0: "bg-gray-200 dark:bg-gray-700", // All Tasks
    1: "bg-red", // High Priority
    2: "bg-yellow", // Medium Priority
    3: "bg-green", // Low Priority
};
export default priorities;
