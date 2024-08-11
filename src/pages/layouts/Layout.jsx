import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";

const Layout = () => {
    return (
        <Container className="h-full py-2 flex">
            <Navbar />
            {<Outlet />}
        </Container>
    );
};

export default Layout;
