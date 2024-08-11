import clsx from "clsx";

const Section = (props) => {
    const { children, className } = props;

    return (
        <div className={clsx("flex flex-col h-full", className)}>
            {children}
        </div>
    );
};

export default Section;
