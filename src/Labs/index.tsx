import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
export default function Labs() {
    return (
        <Provider store={store}>
        <div className="container-fluid">
            <h1>Taksin Mann | Section 2</h1>
            <h1>Labs</h1>
            Please
            <a id="wd-repo" href="https://github.com/OpaldustDev/WebdevRepo">click here</a>
            to see this repo<br/>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="Lab1" element={<Lab1/>}/>
                <Route path="Lab2" element={<Lab2/>}/>
                <Route path="Lab3/*" element={<Lab3 />} />
                <Route path="Lab4/*" element={<Lab4 />} />
            </Routes>

        </div>
        </Provider>
    );
}
