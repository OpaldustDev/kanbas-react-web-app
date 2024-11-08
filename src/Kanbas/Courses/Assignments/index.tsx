import React, { ReactElement } from "react";
import { BsGripVertical, BsPlus, BsSearch } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
import ModulesControls from "../Modules/ModulesControls";

export default function Assignments() {
    
    
    // Get course id from route params
    const { cid } = useParams<{ cid?: string }>();

    // Filter assignments for the current course
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);

    
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
                {assignments.map(({ title, _id }) =>
                    renderAssignmentItem(title, _id, cid))}
            </ul>
        </div>
    );
}

function renderAssignmentItem(title: string, id: string, cid: string | undefined) {
    const subText = "Not available until May 6 at 12:00 AM | Due May 13 at 11:59pm | 100 pts";
    return (
        <li className="list-group-item pl-3" style={{ borderLeft: '2px solid green' }}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <Link className="ml-2 wd-assignment-link p-3 ps-1 text-black"
                          to={`/Kanbas/Courses/${encodeURIComponent(cid as string)}/Assignments/${encodeURIComponent(id)}`}
                          style={{ textDecoration: 'none' }}>
                        {title}
                    </Link>
                </div>
                
            </div>
            <div className="ml-5 p-3 ps-1">
                <small>{subText}</small>
            </div>
        </li>
    );
}