import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
    return (
        <div>
            <h1>Taksin Mann | Section 2</h1>
            <h1>Labs</h1>
            Please
            <a id="wd-repo" href="https://github.com/OpaldustDev/WebdevRepo/tree/a1">click here</a>
            to see this repo<br/>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="Lab1" element={<Lab1/>}/>
                <Route path="Lab2" element={<Lab2/>}/>
                <Route path="Lab3/*" element={<Lab3 />} />
            </Routes>

        </div>
    );
}
