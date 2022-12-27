export const InCompleteTodos = ({ todos, onClickComplete, onClickRemove }) => {
  return (
    <div className="incompleted-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              　{todo}
              <div className="list-row">
                <button onClick={() => onClickComplete(i)}>完了</button>
                <button onClick={() => onClickRemove(i)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
