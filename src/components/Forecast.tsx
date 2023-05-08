const Forecast = ({data}) => {

    function convertToCelc(temp: number):number {
        return Math.floor((temp - 32) * (5/9))
    }

    return (
        <div className="text-slate-800 bg-white rounded-lg p-8 font-thin">
            <h3 className="italic mb-8">"{data.Headline.Text}"</h3>
            <div className="flex">
                <div className="flex justify-around w-full h-20 items-center">
                    <p className="text-bold text-4xl border-2 border-slate-500 p-4 rounded-lg shadow-md">{convertToCelc(data.DailyForecasts[0].Temperature.Minimum.Value)} C</p>
                    <p className="text-bold text-4xl"> - </p>
                    <p className="text-bold text-4xl border-2 border-slate-500 p-4 rounded-lg shadow-md">{convertToCelc(data.DailyForecasts[0].Temperature.Maximum.Value)} C</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Forecast