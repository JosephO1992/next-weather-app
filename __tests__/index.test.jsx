import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
	it("renders the heading", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", {
			name: /Weather\.app/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
