import { useRef } from "react";
import clsx from "clsx";
import { useClickOutside } from "../hooks/useClickOutside";

const PopOver = (props) => {
    const { isOpen, close, className, toggleButtonRef, children } = props;

    const popOverRef = useRef(null);

    useClickOutside({
        elementRef: popOverRef,
        excludeElementRef: toggleButtonRef,
        onClickOutside: close,
    });

    return (
        <div
            ref={popOverRef}
            className={clsx(
                "absolute top-full z-20 transition-all",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible",
                className
            )}>
            {children}
        </div>
    );
};

export default PopOver;
