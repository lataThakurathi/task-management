import { useState } from "react";

const useToggle = (initialState) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, open, close, toggle };
};

export default useToggle;
