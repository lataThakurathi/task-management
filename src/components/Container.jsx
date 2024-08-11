import clsx from "clsx";

const Container = (props) => {
    const { children, className } = props;

    return <div className={clsx("p-1 mx-auto", className)}>{children}</div>;
};

export default Container;
