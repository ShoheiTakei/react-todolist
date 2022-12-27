export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;
  console.log(onClickAdd);
  return (
    <div className="input-area">
      <input
        placeholder="Todoを入力"
        defaultValue={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
