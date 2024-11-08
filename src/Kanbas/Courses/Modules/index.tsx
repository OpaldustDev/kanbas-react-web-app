// Import the required functions
import { useDispatch, useSelector } from "react-redux";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

function ModuleControlButtons() {
    return null;
}

export default function Modules() {
    const dispatch = useDispatch();
    const { cid } = useParams();
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const [moduleName, setModuleName] = useState("");

    return (
        <div>
            <ModulesControls
                moduleName={moduleName}
                setModuleName={setModuleName}
                addModule={() => {
                    dispatch(addModule({ name: moduleName, course: cid }));
                    setModuleName("");
                }} />

            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                { module.editing && (
                                    <input className="form-control w-50 d-inline-block"
                                           onChange={(e) =>
                                               dispatch(
                                                   updateModule({ ...module, name: e.target.value })
                                               )
                                           }
                                           onKeyDown={(e) => {
                                               if (e.key === "Enter") {
                                                   dispatch(updateModule({ ...module, editing: false }));
                                               }
                                           }}
                                           defaultValue={module.name}/>
                                )}
                                {module.name}
                                <LessonControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        dispatch(deleteModule(moduleId));
                                    }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}/>

                            </div>
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons && module.lessons.map((lesson: { _id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" />
                                        {lesson.name}
                                        <LessonControlButtons
                                            moduleId={module._id}
                                            deleteModule={(moduleId) => {
                                                dispatch(deleteModule(moduleId));
                                            }}
                                            editModule={(moduleId) => dispatch(editModule(moduleId))}/>

                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    );
}