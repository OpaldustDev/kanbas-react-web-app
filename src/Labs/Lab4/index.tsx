import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import StringStateVariables from "./StringStateVariables";
import { useState } from 'react';

export default function Lab4() {
    const [counter, setCounter] = useState(0);

    function sayHello() {
        alert("Hello");
    }
    return (
        <div id="wd-passing-functions">
            <h2>Lab 4</h2>
            <PassingFunctions theFunction={sayHello} />
            <ReduxExamples/>
            <ArrayStateVariable/>
            <BooleanStateVariables/>
            <ChildStateComponent counter={counter} setCounter={setCounter} />
            <ClickEvent/>
            <Counter/>
            <DateStateVariable/>
            <EventObject/>
            <ObjectStateVariable/>
            <ParentStateComponent/>
            <PassingDataOnEvent/>
            <StringStateVariables/>
        </div>
    );
}