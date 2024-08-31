import { it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import TodoHeader from ".";
import DateUtil from "../../utils/DateUtil";

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
