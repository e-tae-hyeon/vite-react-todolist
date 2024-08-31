import DateUtil from "../utils/DateUtil";
import generateId from "../utils/generateId";

export type Todo = {
  id: string;
  name: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
};

class _TodoStorage {
  private key = "k_todo_storage";
  private default: Todo = {
    id: generateId(),
    name: "",
    isDone: false,
    createdAt: DateUtil.nowISO(),
    updatedAt: DateUtil.nowISO(),
  };

  private _set = (todos: Todo[]) => {
    localStorage.setItem(this.key, JSON.stringify(todos));
  };
  private _get = (): Todo[] => {
    const raw = localStorage.getItem(this.key);

    return raw ? JSON.parse(raw) : [];
  };

  getTodos() {
    return this._get();
  }

  upsertTodo = (by: { name: string; id?: string }) => {
    const todos = this._get();

    const targetIdx = by.id ? todos.findIndex((todo) => todo.id === by.id) : -1;

    if (targetIdx === -1) {
      // create
      const newTodo: Todo = { ...this.default, name: by.name };

      this._set([...todos, newTodo]);
    } else {
      // update
      const updated: Todo = {
        ...todos[targetIdx],
        name: by.name,
        updatedAt: DateUtil.nowISO(),
      };

      todos[targetIdx] = updated;

      this._set(todos);
    }
  };

  removeTodo = (id: string) => {
    const todos = this._get();
    this._set(todos.filter((todo) => todo.id !== id));
  };

  doneTodo = (id: string) => {
    const todos = this._get();

    const targetIdx = todos.findIndex((todo) => todo.id === id);

    if (targetIdx === -1) return;

    todos[targetIdx] = { ...todos[targetIdx], isDone: true };

    this._set(todos);
  };

  undoneTodo = (id: string) => {
    const todos = this._get();

    const targetIdx = todos.findIndex((todo) => todo.id === id);

    if (targetIdx === -1) return;

    todos[targetIdx] = { ...todos[targetIdx], isDone: false };

    this._set(todos);
  };

  clear = () => {
    localStorage.removeItem(this.key);
  };
}

const TodoStorage = new _TodoStorage();

export default TodoStorage;
