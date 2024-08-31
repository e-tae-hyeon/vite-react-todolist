export type Todo = {
  id: string;
  name: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
};

class _TodoStorage {
  private key = "k_todo_storage";

  set = (todos: Todo[]) => {
    localStorage.setItem(this.key, JSON.stringify(todos));
  };
  get = (): Todo[] => {
    const raw = localStorage.getItem(this.key);

    return raw ? JSON.parse(raw) : [];
  };

  clear = () => {
    localStorage.removeItem(this.key);
  };
}

const TodoStorage = new _TodoStorage();

export default TodoStorage;
