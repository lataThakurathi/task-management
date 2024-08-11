import clsx from "clsx";
import { FaClipboardList } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import pathConstants from "../routes/pathConstants";
import ThemeToggler from "./ThemeToggler";

const navLinks = [
    { label: "Home", path: pathConstants.HOME, icon: GoHomeFill },
    { label: "Projects", path: pathConstants.PROJECTS, icon: FaClipboardList },
    { label: "Profile", path: pathConstants.PROFILE, icon: FaUser },
    { label: "Settings", path: pathConstants.SETTINGS, icon: IoSettingsSharp },
];

const Navbar = () => {
    return (
        <div className="h-full rounded-0.75 shadow p-0.25 bg-white dark:bg-gray-800 flex flex-col items-center">
            <ul className="flex flex-col gap-0.25">
                {navLinks.map((navLink) => (
                    <li key={navLink.path}>
                        <NavItem navLink={navLink} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

const NavItem = (props) => {
    const { navLink } = props;
    const { path, icon: Icon } = navLink;

    return (
        <NavLink
            className={({ isActive }) =>
                clsx(
                    "flex text-1.5 items-center justify-center h-3 w-3 rounded-0.5",
                    isActive
                        ? "text-primary bg-primary-100 dark:bg-primary-900"
                        : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"
                )
            }
            to={path}>
            <Icon />
        </NavLink>
    );
};

export default Navbar;
