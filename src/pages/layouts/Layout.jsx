import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import ThemeToggler from "../../components/ThemeToggler";

const Layout = () => {
    return (
        <Container className="h-full flex gap-0.5">
            <div className="flex flex-col items-center">
                <Navbar />
                <ThemeToggler className="mt-0.5" />
            </div>
            {<Outlet />}
        </Container>
    );
};

export default Layout;
