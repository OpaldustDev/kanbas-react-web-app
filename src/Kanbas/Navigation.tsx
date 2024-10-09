import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { SetStateAction, useState } from "react";
import {Link} from 'react-router-dom';

export default function KanbasNavigation() {
    const [activeLink, setActiveLink] = useState("");

    const handleClick = (route: SetStateAction<string>) => {
      setActiveLink(route);
    };

    const buttonStyles = (route: string) => ({
      background: activeLink === route ? "white" : "black",
      color: activeLink === route ? "red" : "white",
      textDecoration: 'none'
    });

    return (
        <div id="wd-kanbas-navigation" style={{ width: 120 }}
             className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank"
               href="https://www.northeastern.edu/"
               className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" /></a>
                <Link to="/Kanbas/Account" id="wd-account-link" style={buttonStyles("/Kanbas/Account")}>
                    <div
                        onClick={() => handleClick("/Kanbas/Account")}
                        className="list-group-item list-group-item-action text-center border-0 bg-black text-white"
                    >
                        <FaRegCircleUser className="fs-1"/><br/>
                        Account
                    </div>
                </Link>
                <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" style={buttonStyles("/Kanbas/Dashboard")}>
                    <div
                        onClick={() => handleClick("/Kanbas/Dashboard")}
                        className="list-group-item list-group-item-action text-center border-0"
                        style={buttonStyles("/Kanbas/Dashboard")}
                    >
                        <AiOutlineDashboard className="fs-1 text-danger"/><br/>
                        Dashboard
                    </div>
                </Link>
                <Link to="/Kanbas/Courses" id="wd-course-link" style={buttonStyles("/Kanbas/Courses")}>
                    <div
                        onClick={() => handleClick("/Kanbas/Courses")}
                        className="list-group-item list-group-item-action text-center border-0"
                        style={buttonStyles("/Kanbas/Courses")}
                    >
                        <LiaBookSolid className="fs-1 text-danger"/><br/>
                        Courses
                    </div>
                </Link>
                <Link to="/Kanbas/Calendar" id="wd-course-link" style={buttonStyles("/Kanbas/Calendar")}>
                    <div
                        onClick={() => handleClick("/Kanbas/Calendar")}
                        className="list-group-item list-group-item-action text-center border-0"
                        style={buttonStyles("/Kanbas/Calendar")}
                    >
                        <IoCalendarOutline className="fs-1 text-danger"/><br/>
                        Calendar
                    </div>
                </Link>
                <Link to="/Kanbas/Inbox" id="wd-course-link" style={buttonStyles("/Kanbas/Inbox")}>
                    <div
                        onClick={() => handleClick("/Kanbas/Inbox")}
                        className="list-group-item list-group-item-action text-center border-0"
                        style={buttonStyles("/Kanbas/Inbox")}
                    >
                        <FaInbox className="fs-1 text-danger"/><br/>
                        Inbox
                    </div>
                </Link>
                <Link to="/Labs" id="wd-course-link" style={buttonStyles("/Kanbas/Labs")}>
                    <div
                        onClick={() => handleClick("/Kanbas/Labs")}
                        className="list-group-item list-group-item-action text-center border-0"
                        style={buttonStyles("/Kanbas/Labs")}
                    >
                        <LiaCogSolid className="fs-1 text-danger"/><br/>
                        Labs
                    </div>
                 </Link>
        </div>
    );
}