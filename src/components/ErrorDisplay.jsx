const ErrorDisplay = ({ error }) => {
  return (
    <div className="bg-red-500 h-fit rounded p-4 flex flex-col gap-5">
     <p> uzgunuz bir hata olustu daha sonra tekrar deneyiniz</p>

     <h2 className="font-semibold">{error}</h2>
      </div>
  )
}

export default ErrorDisplay