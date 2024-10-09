export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
                    <div className="col-sm-10">
                        <input id="wd-name" className="form-control border" defaultValue="A1 - ENV + HTML" style={{border: "1px solid lightgray"}}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea id="wd-description" className="form-control" style={{border: "1px solid lightgray"}}>
                             The assignment is available online Submit a link to the landing page of
                        </textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-10">
                        <input id="wd-points" className="form-control" defaultValue={100} style={{border: "1px solid lightgray"}}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
                    <div className="col-sm-10">
                        <select id="wd-group" className="form-control" style={{border: "1px solid lightgray"}}>
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
                    <div className="col-sm-10">
                        <select id="wd-display-grade-as" className="form-control" style={{border: "1px solid lightgray"}}>
                            <option value="PERCENTAGE">PERCENTAGE</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                    <div className="col-sm-10">
                        <select id="wd-submission-type" className="form-control" style={{border: "1px solid lightgray"}}>
                            <option value="ONLINE">ONLINE</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-online-entry-options" className="col-sm-2 col-form-label">Online Entry
                        Options</label>
                    <div className="col-sm-10">
                        <select id="wd-online-entry-options" className="form-control" multiple style={{border: "1px solid lightgray"}}>
                            <option id={"wd-text-entry"} value="TEXT ENTRY">Text Entry</option>
                            <option id={"wd-website-url"} value="WEBSITE URL">Website URL</option>
                            <option id={"wd-media-recordings"} value="MEDIA RECORDINGS">Media Recordings</option>
                            <option id={"wd-student-annotation"} value="STUDENT ANNOTATION">Student Annotation</option>
                            <option id={"wd-file-upload"} value="FILE UPLOADS">File Uploads</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign</label>
                    <div className="col-sm-10">
                        <input id="wd-assign-to" className="form-control" defaultValue={"Everyone"} style={{border: "1px solid lightgray"}}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due</label>
                    <div className="col-sm-10">
                        <input type="date" id="wd-due-date" className="form-control" defaultValue="2024-05-13" style={{border: "1px solid lightgray"}}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">Available from</label>
                    <div className="col-sm-10">
                        <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-13" style={{border: "1px solid lightgray"}}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Until</label>
                    <div className="col-sm-10">
                        <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-13" style={{border: "1px solid lightgray"}}/>
                    </div>
                </div>
            </form>
        </div>
    );
}