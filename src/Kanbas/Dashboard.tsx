import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import * as db from "./Database";

interface DashboardProps {
    courses: any[];
    course: any;
    setCourse: React.Dispatch<React.SetStateAction<any>>;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}

export default function Dashboard({
                                      courses,
                                      course,
                                      setCourse,
                                      addNewCourse,
                                      deleteCourse,
                                      updateCourse
                                  }: DashboardProps) {
    const editCourse = (courseId: string) => {
        const courseToEdit = courses.find((c) => c._id === courseId);
        if (courseToEdit) {
            setCourse(courseToEdit);
        }
    };

    // Access accountReducer with useSelector hook
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            <h5>New Course
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse}>
                    Add
                </button>
                <button
                    className="btn btn-warning float-end me-2"
                    id="wd-update-course-click"
                    onClick={updateCourse}>
                    Update
                </button>
            </h5>
            <br />

            <input name="name"
                   value={course.name}
                   onChange={(e) => setCourse({ ...course, name: e.target.value })}
                   className="form-control mb-2" />
            <textarea name="description"
                      value={course.description}
                      onChange={(e) => setCourse({ ...course, description: e.target.value })}
                      className="form-control mb-4" />
            <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
            </h2>

            <hr />

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .filter((course) =>
                            enrollments.some(
                                (enrollment) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            ))
                        .map((course) => (
                            <div key={course._id} className="wd-dashboard-course col">
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                          className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <img src="/images/reactjs.jpg"/>
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text">
                                                {course.description}
                                            </p>

                                            <button className="btn btn-primary">Go</button>

                                            <a href="#" id="wd-edit-course-click"
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   editCourse(course._id);
                                               }}
                                               className="btn btn-danger float-end">
                                                Edit
                                            </a>
                                            <a href="#" id="wd-delete-course-click"
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   deleteCourse(course._id);
                                               }}
                                               className="btn btn-danger float-end">
                                                Delete
                                            </a>

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </div>
    );
}