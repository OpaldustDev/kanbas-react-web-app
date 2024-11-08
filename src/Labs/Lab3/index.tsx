import VariablesAndConstants from "./VariablesAndConstants";
import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import AddPathParameters from "./AddPathParameters";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInLine from "./ConditionalOutputInLine";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import {FindIndex} from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import PathParameters from "./PathParameters";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Square from "./Square";
import Highlight from "./Highlight";
import { useSelector } from "react-redux";

export default function Lab3() {
    console.log('Hello World!');
        const { todos } = useSelector((state: any) => state.todosReducer);

        return(
            <div id="wd-lab3">
                    <h3>Lab 3</h3>
                    <ul className="list-group">
                            {todos.map((todo: any) => (
                                <li className="list-group-item" key={todo.id}>
                                        {todo.title}
                                </li>
                            ))}
                    </ul>
                    <hr/>

                    <VariablesAndConstants/>
                    <Add a={3} b={4}/>
                    <AddPathParameters/>
                    <ArrayIndexAndLength/>
                    <ArrowFunctions/>
                    <BooleanVariables/>
                    <Classes/>
                    <ConditionalOutputIfElse/>
                    <ConditionalOutputInLine/>
                    <Destructing/>
                    <DestructingImports/>
                    <FilterFunction/>
                    <FindFunction/>
                    <FindIndex/>
                    <ForLoops/>
                    <FunctionDestructing/>
                    <House/>
                    <IfElse/>
                    <ImpliedReturn/>
                    <JsonStringify/>
                    <LegacyFunctions/>
                    <MapFunction/>
                    <PathParameters/>
                    <SimpleArrays/>
                    <Spreading/>
                    <Styles/>
                    <TemplateLiterals/>
                    <TernaryOperator/>
                    <VariableTypes/>
                    <TodoItem/>
                    <TodoList/>
                    <h4>Square of 4</h4>
                    <Square>4</Square>
                    <Highlight>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione eaque illo minus
                            cum, saepe totam
                            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores,
                            provident voluptates.
                    </Highlight>
                    <hr/>
                    <AddingAndRemovingToFromArrays/>
            </div>
        );
}