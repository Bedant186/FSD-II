import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import FormExample from "./Form";

describe("Login Form Component", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("RENDERS email and password fields", () => {
    render(<FormExample />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("SHOWS ERROR for short password", () => {
    render(<FormExample />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123" } });
    fireEvent.click(checkbox);
    fireEvent.click(button);

    expect(screen.getByText("Min 6 characters")).toBeInTheDocument();
  });

  it("SUBMITS successfully with valid input", () => {
    render(<FormExample />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123456" } });
    fireEvent.click(checkbox);
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Form submitted successfully");
  });
});