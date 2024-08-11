import { ThemeProvider } from "next-themes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import ProjectsLayout from "./pages/layouts/ProjectsLayout";
import pathConstants from "./routes/pathConstants";

const router = createBrowserRouter([
    {
        path: pathConstants.HOME,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <h1>Home</h1>,
            },
            {
                path: pathConstants.PROJECTS,
                element: <ProjectsLayout />,
                children: [
                    {
                        path: pathConstants.SINGLE_PROJECT,
                        element: <>one</>,
                    },
                ],
            },
            {
                path: pathConstants.PROFILE,
                element: <h1>User Profile Page</h1>,
            },
            {
                path: pathConstants.SETTINGS,
                element: <h1>Settings Page</h1>,
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
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
