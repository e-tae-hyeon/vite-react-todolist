import { render } from "utils/renderWithTheme";
import { describe, it } from "vitest";
import Placeholder from ".";

describe("Placeholder", () => {
  it("renders scucessfully", () => {
    const message = "renders scucessfully";
    render(<Placeholder message={message} />);
  });
});
