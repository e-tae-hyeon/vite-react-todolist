import { describe, it } from "vitest";
import TodoItem from ".";
import { render } from "utils/renderWithTheme";
import { Todo } from "storages/todoStorage";
import DateUtil from "utils/DateUtil";

describe("TodoItem", () => {
  it("renders successfully", () => {
    const todo: Todo = {
      id: "test",
      name: "test",
      isDone: false,
      createdAt: DateUtil.nowISO(),
      updatedAt: DateUtil.nowISO(),
    };

    render(<TodoItem todo={todo} />);
  });
});
