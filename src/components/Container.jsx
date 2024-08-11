import clsx from "clsx";

const Container = (props) => {
    const { children, className } = props;

    return <div className={clsx("w-4/5 mx-auto", className)}>{children}</div>;
};

export default Container;
