import styled, { useTheme } from "styled-components";
import DateUtil from "../../utils/DateUtil";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Icon from "../Icon";
import useTodosStore from "stores/useTodosStore";

function TodoHeader() {
  const theme = useTheme();

  const today = DateUtil.nowFormat();

  const upsertTodo = useTodosStore((s) => s.upsertTodo);
  const [name, setName] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!name) return;

    upsertTodo({
      name,
    });

    setName("");
  };

  return (
    <Root>
      <Today>{today}</Today>

      <Field onSubmit={handleSubmit}>
        <Input placeholder="할 일" value={name} onChange={handleChange} />

        <AddBtn>
          <Icon name="plus" color={theme.white} size={20} />
        </AddBtn>
      </Field>
    </Root>
  );
}

export default TodoHeader;

const Root = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.main};
  border-radius: 8px;
`;

const Today = styled.div`
  color: ${(props) => props.theme.white};
  font-size: 14px;
`;

const Field = styled.form`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  overflow: hidden;
  padding: 0px 4px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  margin: 0;
  border: none;
  outline: none;
  font-size: 16px;
`;

const AddBtn = styled.button`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.main};
  cursor: pointer;
`;
