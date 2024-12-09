import React from "react";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import QuizDetails from "./Kanbas/Courses/Quizzes/QuizDetails";

const App = () => {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Labs" />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kanbas/*" element={<Kanbas />} />
                    <Route path="/quizDetails" Component={QuizDetails} />
                </Routes>
            </div>
        </HashRouter>
    );
}
export default App;


