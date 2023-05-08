import {DateTime} from 'luxon'

const Forecast = ({data, location}) => {

    function convertToCelc(temp: number):number {
        return Math.floor((temp - 32) * (5/9))
    }

    function convertDate(date:number): string {
        return DateTime.fromSeconds(date).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
    }

    const {Headline, DailyForecasts} = data;

    return (
        <div>
            <h3 className="italic mb-8 bg-white text-slate-800 p-4 rounded-lg">"{Headline.Text}"</h3>
            {DailyForecasts.map((forecast) => (
                <div className="text-slate-800 bg-white rounded-lg p-8 font-thin mb-8" key={forecast.Date}>
                <h2 className="text-center font-bold text-xl">{location ? location : 'London'}</h2>
                <h3 className="text-center font-thin mb-4">{convertDate(+forecast.EpochDate)}</h3>
                
                <div className="flex">
                    <div className="flex justify-around w-full h-20 items-center">
                        <p className="text-bold text-4xl border-2 border-slate-500 p-4 rounded-lg shadow-md">{convertToCelc(forecast.Temperature.Minimum.Value)} C</p>
                        <p className="text-bold text-4xl"> - </p>
                        <p className="text-bold text-4xl border-2 border-slate-500 p-4 rounded-lg shadow-md">{convertToCelc(forecast.Temperature.Maximum.Value)} C</p>
                    </div>
                    <div></div>
                </div>
                </div>
            ))}
            
        </div>
    )
}

export default Forecast