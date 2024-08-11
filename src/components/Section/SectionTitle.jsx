const SectionTitle = (props) => {
    const { children } = props;

    return (
        <h2 className="text-1.25 font-[500] text-gray-900 dark:text-gray-100 ">
            {children}
        </h2>
    );
};

export default SectionTitle;
