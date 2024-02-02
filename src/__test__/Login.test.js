import { render, screen } from "@testing-library/react";
import Login from "./../pages/Login/Login";
test("checking heading element", () => {
  render(<Login />);
  const homeComponet = screen.getByTestId("LoginHeading");

  expect(homeComponet).toBeInTheDocument();
});

test("checking username place holder test", () => {
  render(<Login />);
  const userNameplaceholder = screen.getByPlaceholderText("Enter username");
  expect(userNameplaceholder).toBeInTheDocument();
});
test("checking password  place holder test", () => {
  render(<Login />);
  const passwordplaceholder = screen.getByPlaceholderText("Enter Password");
  expect(passwordplaceholder).toBeInTheDocument();
});
