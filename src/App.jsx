import { ThemeProvider } from "next-themes";

const App = () => {
    return (
        <ThemeProvider
            attribute="class"
            enableColorScheme={true}
            enableSystem={true}></ThemeProvider>
    );
};

export default App;
