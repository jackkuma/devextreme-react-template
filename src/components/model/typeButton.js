import React, { useContext } from 'react';
import Button from 'devextreme-react/button';
import context from '../../contexts/context';

const TypeButton = () => {
    const { isOpen, isShow, isView, openToggle, showToggle, viewToggle } = useContext(context);
    return (
            <div class="type-btn">
                <Button onClick={openToggle} className="btn">
                    {isOpen ? "Close" : "Open"}
                </Button>
                <Button onClick={showToggle} className="btn">
                    {isShow ? "Hide" : "Show"}
                </Button>
                <Button onClick={viewToggle} className="btn">
                    {isView ? "NoSee" : "View"}
                </Button>
            </div>
    );
};

export default TypeButton;