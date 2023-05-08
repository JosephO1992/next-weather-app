import { render, screen } from "@testing-library/react";
import Forecast from "../src/components/Forecast";
import "@testing-library/jest-dom";
import { dummyDataSingle, dummyDataMultiple } from "../dummyData.tsx";

const { Headline, DailyForecasts } = dummyDataMultiple;

describe("Forecast component", () => {
	it("shows the headline", () => {
		render(<Forecast data={dummyDataMultiple} location="London" />);

		const heading = screen.getByTestId("headline");

		expect(heading).toHaveTextContent(
			'"Expect rainy weather late Monday morning through Tuesday afternoon"'
		);
	});

	it("shows the location", () => {
		render(<Forecast data={dummyDataMultiple} location="London" />);

		const location = screen.getByTestId("location-" + DailyForecasts[0].Date);
		expect(location).toHaveTextContent("London");
	});

	it("shows the maximum and minimum temperature", () => {
		render(<Forecast data={dummyDataMultiple} location="London" />);

		const minimumTemp = screen.getByTestId("minimum-" + DailyForecasts[0].Date);
		const maximumTemp = screen.getByTestId("maximum-" + DailyForecasts[0].Date);

		expect(minimumTemp).toHaveTextContent("10 C");
		expect(maximumTemp).toHaveTextContent("18 C");
	});

	it("renders out multiple cards if given multiple forecasts", () => {
		render(<Forecast data={dummyDataMultiple} location="London" />);

		const cards = screen.getAllByRole("heading", { level: 2 });

		expect(cards.length).toBe(3);
	});

	it("renders a single card for if given an array with 1 daily forecast", () => {
		render(<Forecast data={dummyDataSingle} location="London" />);

		const cards = screen.getAllByRole("heading", { level: 2 });

		expect(cards.length).toBe(1);
	});
});
