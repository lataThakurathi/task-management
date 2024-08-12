import { useEffect } from "react";

export const useClickOutside = (props) => {
    const { elementRef, excludeElementRef, onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (elementRef?.current && !elementRef.current.contains(e.target)) {
                if (
                    excludeElementRef?.current &&
                    !excludeElementRef.current.contains(e.target)
                ) {
                    onClickOutside && onClickOutside();
                }
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [onClickOutside, excludeElementRef, elementRef]);
};
