import { ThemeProvider } from "next-themes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/layouts/Layout";
import ProjectsLayout from "./pages/layouts/ProjectsLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import TasksView from "./pages/TasksView";
import pathConstants from "./routes/pathConstants";
import { TasksContext, TasksProvider } from "./contexts/TasksContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";

const router = createBrowserRouter([
    {
        path: pathConstants.HOME,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: pathConstants.PROJECTS,
                element: <ProjectsLayout />,
                children: [
                    {
                        path: pathConstants.SINGLE_PROJECT,
                        element: <TasksView />,
                    },
                ],
            },
            {
                path: pathConstants.PROFILE,
                element: <Profile />,
            },
            {
                path: pathConstants.SETTINGS,
                element: <Settings />,
            },
        ],
    },
]);

const App = () => {
    return (
        <ThemeProvider
            attribute="class"
            enableColorScheme={true}
            enableSystem={true}>
            <ProjectsProvider>
                <TasksProvider>
                    <RouterProvider router={router} />
                </TasksProvider>
            </ProjectsProvider>
        </ThemeProvider>
    );
};

export default App;
