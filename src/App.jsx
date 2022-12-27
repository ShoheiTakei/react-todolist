import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  const todoInit = {
    todoText: "",
    inCompleteTodos: [],
    completeTodos: []
  };

  const [state, setState] = useState(todoInit);

  const onChangeTodoText = (e) =>
    setState({ ...state, todoText: e.target.value });

  const onClickAdd = () => {
    console.log("s");
    if (state["todoText"] !== "") {
      const newTodos = [...state["inCompleteTodos"], state["todoText"]];
      setState({
        ...state,
        todoText: "",
        inCompleteTodos: newTodos
      });
    } else {
      alert("未入力です。");
      return;
    }
  };

  const onClickRemove = (i) => {
    const newTodos = [...state["inCompleteTodos"]];
    newTodos.splice(i, 1);
    setState({ ...state, inCompleteTodos: newTodos });
  };

  const onClickComplete = (i) => {
    const newInCompleteTodos = [...state["inCompleteTodos"]];
    const newCompleteTodos = [...state["completeTodos"], newInCompleteTodos[i]];
    newInCompleteTodos.splice(i, 1);

    setState({
      ...state,
      inCompleteTodos: newInCompleteTodos,
      completeTodos: newCompleteTodos
    });
  };

  const onClickBack = (i) => {
    const newCompleteTodos = [...state["completeTodos"]];
    const newInCompleteTodos = [
      ...state["inCompleteTodos"],
      newCompleteTodos[i]
    ];
    newCompleteTodos.splice(i, 1);

    setState({
      ...state,
      inCompleteTodos: newInCompleteTodos,
      completeTodos: newCompleteTodos
    });
  };

  return (
    <>
      <InputTodo
        todoText={state["todoText"]}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodos
        todos={state["inCompleteTodos"]}
        onClickComplete={onClickComplete}
        onClickRemove={onClickRemove}
      />
      <CompleteTodos todos={state["completeTodos"]} onClickBack={onClickBack} />
    </>
  );
};
