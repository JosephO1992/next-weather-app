const ErrorMessage = ({message}) => {
    return (
        <div className="bg-white rounded-lg  p-8">
        <p className="text-rose-600 bold ">Error fetching data.</p>
        <p className="text-rose-600 bold ">{message}</p>
        </div>
    )
}

export default ErrorMessage;