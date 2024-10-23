import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
    cid: string | undefined;
}

export default function CoursesNavigation({ cid }: NavigationProps) {
    const { pathname } = useLocation(); // this will get the current URL pathname

    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map(link => (
                <Link to={`/Kanbas/Courses/${cid}/${link}`}
                      id={`wd-course-${link.toLowerCase()}-link`}
                      key={link}
                      className={`list-group-item border border-0 
            ${pathname.includes(link) ? "active" : "text-danger"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}