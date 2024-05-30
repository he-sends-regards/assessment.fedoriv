import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BackButton from "./BackButton";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("BackButton", () => {
  it("renders the button with correct text", () => {
    render(<BackButton />);
    expect(screen.getByText("← Back")).toBeInTheDocument();
  });

  it("calls router.back on button click", () => {
    const router = { back: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(router);

    render(<BackButton />);
    const button = screen.getByText("← Back");

    fireEvent.click(button);
    expect(router.back).toHaveBeenCalled();
  });
});
