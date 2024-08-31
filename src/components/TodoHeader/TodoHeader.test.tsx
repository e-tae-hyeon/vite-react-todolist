import { it, describe } from "vitest";
import TodoHeader from ".";
import DateUtil from "../../utils/DateUtil";
import { render, screen } from "utils/renderWithTheme";

describe("TodoHeader", () => {
  it("renders successfully", () => {
    render(<TodoHeader />);
  });

  it("shows today", () => {
    render(<TodoHeader />);

    const today = DateUtil.nowFormat();
    screen.getByText(today);
  });
});
