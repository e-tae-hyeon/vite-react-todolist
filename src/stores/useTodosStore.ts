import TodoStorage, { Todo } from "storages/todoStorage";
import DateUtil from "utils/DateUtil";
import generateId from "utils/generateId";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  todos: Todo[];
};

type Actions = {
  upsertTodo: (by: { name: string; id?: string }) => void;
  removeTodo: (id: string) => void;
  doneTodo: (id: string) => void;
  undoneTodo: (id: string) => void;
};

const initialState: State = {
  todos: TodoStorage.get(),
};

const useTodosStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,
    upsertTodo: (by) =>
      set((state) => {
        const targetIdx = by.id
          ? state.todos.findIndex((todo) => todo.id === by.id)
          : -1;

        if (targetIdx === -1) {
          // create
          const newTodo: Todo = {
            id: generateId(),
            name: by.name,
            isDone: false,
            createdAt: DateUtil.nowISO(),
            updatedAt: DateUtil.nowISO(),
          };

          state.todos.push(newTodo);
        } else {
          // update
          const updated: Todo = {
            ...state.todos[targetIdx],
            name: by.name,
            updatedAt: DateUtil.nowISO(),
          };

          state.todos[targetIdx] = updated;
        }

        TodoStorage.set(state.todos);
      }),

    removeTodo: (id) =>
      set((state) => {
        state.todos = state.todos.filter((todo) => todo.id !== id);

        TodoStorage.set(state.todos);
      }),

    doneTodo: (id) =>
      set((state) => {
        state.todos.forEach((todo) => {
          if (todo.id !== id) return;
          todo.isDone = true;
        });

        TodoStorage.set(state.todos);
      }),
    undoneTodo: (id) =>
      set((state) => {
        state.todos.forEach((todo) => {
          if (todo.id !== id) return;
          todo.isDone = false;
        });

        TodoStorage.set(state.todos);
      }),
  }))
);

export default useTodosStore;
