export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">PERCENTAGE</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">ONLINE</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Online Entry Options</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" multiple>
                            <option id={"wd-text-entry"} value="TEXT ENTRY">Text Entry</option>
                            <option id={"wd-website-url"} value="WEBSITE URL">Website URL</option>
                            <option id={"wd-media-recordings"} value="MEDIA RECORDINGS">Media Recordings</option>
                            <option id={"wd-student-annotation"} value="STUDENT ANNOTATION">Student Annotation</option>
                            <option id={"wd-file-upload"} value="FILE UPLOADS">File Uploads</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value={"Everyone"}/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date"> Due </label>
                    </td>
                    <td>
                        <input type="date"
                               id="wd-due-date"
                               value="2024-05-13"/><br/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from"> Available from </label>
                    </td>
                    <td>
                        <input type="date"
                               id="wd-available-from"
                               value="2024-05-13"/><br/>
                    </td>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until"> Until </label>
                    </td>
                    <td>
                        <input type="date"
                               id="wd-available-until"
                               value="2024-05-13"/><br/>
                    </td>
                </tr>
                {/* Complete on your own */}
            </table>
            
        </div>
    );
}
