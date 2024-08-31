import Icon from "components/Icon";
import { Todo } from "storages/todoStorage";
import useTodosStore from "stores/useTodosStore";
import styled from "styled-components";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { id, name, isDone } = todo;

  const { done, undone, remove } = useTodosStore((s) => ({
    done: s.doneTodo,
    undone: s.undoneTodo,
    remove: s.removeTodo,
  }));

  const handleToggleStatus = () => {
    if (isDone) undone(id);
    else done(id);
  };

  const handleRemove = () => {
    remove(id);
  };

  return (
    <Root onClick={handleToggleStatus} isDone={isDone}>
      <Icon name={isDone ? "squareCheck" : "square"} />
      <Name>{name}</Name>

      <RemoveBtn onClick={handleRemove}>
        <Icon name="delete" />
      </RemoveBtn>
    </Root>
  );
}

export default TodoItem;

const Root = styled.div<{ isDone: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${(props) => (props.isDone ? 0.3 : 1)};
`;

const Name = styled.h1`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
`;

const RemoveBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  margin: 0;
  padding: 0;
  opacity: 0.4;
  border: none;
`;
