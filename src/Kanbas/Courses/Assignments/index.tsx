import { ReactElement, JSXElementConstructor, ReactNode } from "react";
import {BsGripVertical, BsPlus, BsSearch} from "react-icons/bs";
import {LiaPaperPlane} from "react-icons/lia";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
        <div className="mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                    <BsSearch/>
                    <input className="ml-2" placeholder="Search for Assignments"/>
                </div>
                <div>
                    <button className="btn btn-secondary mr-2">+ Group</button>
                    <button className="btn text-bg-danger mr-2">+ Assignment</button>
                </div>
            </div>
            <h3 className="d-flex justify-content-between align-items-center">
                <span>ASSIGNMENTS 40% of Total</span>
                <BsPlus/>
            </h3>
            <ul className="list-group">
                {renderAssignmentItem("A1 - ENV + HTML", "Not available until May 6 at 12:00 AM | Due May 13 at 11:59pm | 100 pts")}
                {renderAssignmentItem("A2 - CSS + BOOTSTRAP", "Not available until May 13 at 12:00 AM | Due May 20 at 11:59pm | 100 pts")}
                {renderAssignmentItem("A3 - JAVASCRIPT + REACT", "Not available until May 20 at 12:00 AM | Due May 27 at 11:59pm | 100 pts")}
            </ul>
        </div>
    );
}

function renderAssignmentItem(title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, subText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined) {
    return (
        <li className="list-group-item pl-3" style={{ borderLeft: '2px solid green' }}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <LiaPaperPlane className="wd-fg-color-green bold"/>
                    <a className="ml-2 wd-assignment-link p-3 ps-1 text-black" href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: 'none' }}>{title}</a>
                </div>
                <LessonControlButtons />
            </div>
            <div className="ml-5 p-3 ps-1">
                <small>{subText}</small>
            </div>
        </li>
    );
}