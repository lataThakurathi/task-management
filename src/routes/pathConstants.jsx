export const paramConstants = {
    SINGLE_PROJECT_PARAM: "id",
};

const createPathConstants = () => {
    const pathConstants = {
        HOME: "/",
        PROJECTS: "/projects",
        SINGLE_PROJECT: "",
        PROFILE: "/profile",
        SETTINGS: "/settings",
    };

    pathConstants.SINGLE_PROJECT = `${pathConstants.PROJECTS}/:${paramConstants.SINGLE_PROJECT_PARAM}`;
    return pathConstants;
};

const pathConstants = createPathConstants();
export default pathConstants;
