import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CoursesNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        <div id="wd-courses-navigation">
        <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home">Home</Link><br/>
    <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules">Modules
    </Link><br/>
    <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza">Piazza</Link><br/>
    <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom">Zoom</Link><br/>
    <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments">
    Assignments</Link><br/>
    <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes">Quizzes
    </Link><br/>
    <Link id="wd-course-grades-link"  to="/Kanbas/Courses/1234/Grades">Grades</Link><br/>
    <Link id="wd-course-people-link"  to="/Kanbas/People">People</Link><br/>
        </div>
);}
