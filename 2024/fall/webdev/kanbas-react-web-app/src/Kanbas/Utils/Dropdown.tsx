import React, { useState } from "react";
import './DropdownMenu.css';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="menu">
            <button onClick={toggleOpen}>
                {isOpen ? 'Close menu' : 'Open menu'}
            </button>
            {isOpen && (
                <div className="dropdown">
                    <a href="#">Assignment 1</a>
                    <a href="#">Assignment 2</a>
                    <a href="#">Assignment 3</a>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;