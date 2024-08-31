import { render, screen } from "utils/renderWithTheme";
import { describe, it } from "vitest";
import TodoList from ".";
import TodoStorage from "storages/todoStorage";

describe("TodoList", () => {
  it("renders successfully", () => {
    render(<TodoList />);
  });

  it("shows doing todos count", () => {
    render(<TodoList />);

    const doingCount = TodoStorage.get().filter((todo) => !todo.isDone).length;

    screen.getAllByText(doingCount);
  });
});
