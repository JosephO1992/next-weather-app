## Getting Started

You will need to copy the .env.example by running:

```bash
cp .env.example .env
```

You will need to be in the root of the project directory.

You will then need to populate the `NEXT_PUBLIC_API_KEY` with your own key from [Accuweather](https://developer.accuweather.com/).

Run an npm install:

```bash
npm run install
```

Then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

It will default to getting a daily forecast for London, which you can toggle to get the 5 day forecast.

Add in some text input and it will refetch to get the 1 day or 5 day (depending on what you've already selected) for that city.

You can run the tests with:

```bash
npm run test
```
