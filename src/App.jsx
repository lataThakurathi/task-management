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
            <TasksProvider>
                <RouterProvider router={router} />
            </TasksProvider>
        </ThemeProvider>
    );
};

export default App;
