import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoForm from "./todos/TodoForm";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
    return(
        <div>
            <h2>Redux Examples</h2>
            <AddRedux></AddRedux>
            <CounterRedux></CounterRedux>
            <HelloRedux></HelloRedux>
            <TodoForm></TodoForm>
            <TodoList></TodoList>
        </div>
    );
};
