export const CompleteTodos = ({ todos, onClickBack }) => {
  return (
    <div className="completed-area">
      <p className="title">完了のTodo</p>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              <div className="list-row">
                {todo}
                <button onClick={() => onClickBack(i)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
