import clsx from "clsx";

const SectionMain = (props) => {
    const { children, className } = props;

    return (
        <div className={clsx("grow overflow-y-auto", className)}>
            {children}
        </div>
    );
};

export default SectionMain;
