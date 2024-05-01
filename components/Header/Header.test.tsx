import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from ".";

describe("Header", () => {
	it("Should render Header text in heading tag", () => {
		render(<Header />);

		const HeaderEl = screen.getByRole("heading", { level: 1, name: "Header" });

		expect(HeaderEl).toBeInTheDocument();
	});
});
