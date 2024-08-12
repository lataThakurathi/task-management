import React, { createContext, useContext, useState } from "react";
import initialTasks from "../data/tasks";

export const TasksContext = createContext();

const filterTasks = (tasks, options) => {};

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (text, priorityId, projectId) => {
        const newTask = {
            id: tasks.length + 1,
            text,
            completed: false,
            priorityId,
            projectId,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const selectAllTasks = () => {
        return tasks;
    };

    const selectTasksByProjectId = (projectId) => {
        let filteredTasks = tasks.filter(
            (task) => task.projectId === projectId
        );

        return filteredTasks;
    };

    const selectTasksByPriorityId = (projectId, priorityId) => {
        const tasksFilteredByProjectId = selectTasksByProjectId(projectId);

        if (priorityId) {
            return tasksFilteredByProjectId.filter(
                (taskFilteredByProjectId) =>
                    taskFilteredByProjectId.priorityId === priorityId
            );
        }
        return tasksFilteredByProjectId;
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                addTask,
                deleteTask,
                toggleTaskCompletion,
                selectAllTasks,
                selectTasksByProjectId,
                selectTasksByPriorityId,
            }}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksContext = () => {
    return useContext(TasksContext);
};
