import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

interface Params extends Record<string, string> {
    aid: string,
    cid: string,
}

export default function AssignmentEditor() {
    const { aid, cid } = useParams<Params>();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);

    // Return a not found message if assignment doesn't exist.
    if (!assignment) {
        return  <h2>Assignment not found</h2>;
    }

    return (
        <div id="wd-assignments-editor" className="p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form>
                {/* Assignment Name */}
                <div className="mb-3 row">
                    <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
                    <div className="col-sm-10">
                        <input
                            id="wd-name"
                            className="form-control border"
                            defaultValue={assignment.title}
                            style={{border: "1px solid lightgray"}}
                        />
                    </div>
                </div>

                {/* Assignment Description */}
                <div className="mb-3 row">
                    <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea
                            id="wd-description"
                            className="form-control"
                            defaultValue={assignment.description}
                            style={{border: "1px solid lightgray"}}
                        />
                    </div>
                </div>

                {/* Assignment Points */}
                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-10">
                        <input
                            id="wd-points"
                            className="form-control"
                            defaultValue={assignment.points}
                            style={{border: "1px solid lightgray"}}
                        />
                    </div>
                </div>

                {/* Assignment Dates */}
                <div className="mb-3 row">
                    <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due Date</label>
                    <div className="col-sm-10">
                        <input
                            id="wd-due-date"
                            type="date"
                            className="form-control"
                            defaultValue={assignment.due_date}
                            style={{border: "1px solid lightgray"}}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">Available From</label>
                    <div className="col-sm-10">
                        <input
                            id="wd-available-from"
                            type="date"
                            className="form-control"
                            defaultValue={assignment.available_from}
                            style={{border: "1px solid lightgray"}}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Available Until</label>
                    <div className="col-sm-10">
                        <input
                            id="wd-available-until"
                            type="date"
                            className="form-control"
                            defaultValue={assignment.available_until}
                            style={{border: "1px solid lightgray"}}
                        />
                    </div>
                </div>

                {/* Cancel and Save Buttons */}
                <div className="mb-3 row">
                    <div className="col-sm-2 offset-sm-8">
                        <Link
                            to={`/Kanbas/Courses/${cid}/Assignments`}
                            className="btn btn-secondary w-100">
                            Cancel
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link
                            to={`/Kanbas/Courses/${cid}/Assignments`}
                            className="btn btn-primary w-100">
                            Save
                        </Link>
                    </div>
                </div>

            </form>
        </div>
    );
}