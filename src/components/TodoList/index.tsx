import TodoItem from "components/TodoItem";
import useTodosStore from "stores/useTodosStore";
import styled from "styled-components";

function TodoList() {
  const todos = useTodosStore((s) => s.todos);

  const doingTodos = todos.filter((todo) => !todo.isDone);

  return (
    <Root>
      <Header>
        <TotalCount>{doingTodos.length}</TotalCount>
      </Header>

      <Main>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </Main>
    </Root>
  );
}

export default TodoList;

const Root = styled.div`
  height: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => props.theme.white};
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const TotalCount = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;
