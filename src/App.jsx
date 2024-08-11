import { ThemeProvider } from "next-themes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import ProjectsLayout from "./pages/layouts/ProjectsLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>,
            },
            {
                path: "/projects",
                element: <ProjectsLayout />,
                children: [
                    {
                        path: ":id",
                        element: <>one</>,
                    },
                ],
            },
            {
                path: "/profile",
                element: <h1>User Profile Page</h1>,
            },
            {
                path: "/settings",
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
