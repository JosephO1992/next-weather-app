// {
//     "Headline": {
//         "EffectiveDate": "2023-05-08T11:00:00+01:00",
//         "EffectiveEpochDate": 1683540000,
//         "Severity": 3,
//         "Text": "Expect rainy weather late Monday morning through Tuesday afternoon",
//         "Category": "rain",
//         "EndDate": "2023-05-09T20:00:00+01:00",
//         "EndEpochDate": 1683658800,
//         "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us",
//         "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us"
//     },
//     "DailyForecasts": [
//         {
//             "Date": "2023-05-07T07:00:00+01:00",
//             "EpochDate": 1683439200,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 51,
//                     "Unit": "F",
//                     "UnitType": 18
//                 },
//                 "Maximum": {
//                     "Value": 66,
//                     "Unit": "F",
//                     "UnitType": 18
//                 }
//             },
//             "Day": {
//                 "Icon": 16,
//                 "IconPhrase": "Mostly cloudy w/ t-storms",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Light"
//             },
//             "Night": {
//                 "Icon": 36,
//                 "IconPhrase": "Intermittent clouds",
//                 "HasPrecipitation": false
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us",
//             "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us"
//         }
//     ]
// }

// C = (°F - 32) × 5/9

const Forecast = ({data}) => {

    function convertToCelc(temp: number):number {
        return Math.floor((temp - 32) * (5/9))
    }

    return (
        <div className="text-slate-800 bg-white rounded-lg p-4 font-thin">
            <h2>Weather for "We will come back to this later"</h2>
            <h3>Synopsis: {data.Headline.Text}</h3>
            <div className="flex">
                <div>
                    <p>From: {convertToCelc(data.DailyForecasts[0].Temperature.Minimum.Value)} &#8451;</p>
                    <p>To: {convertToCelc(data.DailyForecasts[0].Temperature.Maximum.Value)} &#8451;</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Forecast