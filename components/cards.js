
const Cards = ({ heading, bgColor, title, subtitle }) => {
    return (
        <div className={`py-6 px-4 rounded-lg shadow-md flex flex-col align-middle justify-center gap-y-6 ${bgColor}`}>
            <div>
                <p className="font-normal text-sm">{heading}</p>
            </div>
            <div className="flex flex-col gap-y-7 ">
                <div className="w-52">
                    <h3 className="font-semibold mb-2 text-lg tracking-wider">{title}</h3>
                </div>

                <div className="flex flex-col gap-y-3 ">
                    {subtitle && <p className="text-gray-700 ">{subtitle}</p>}
                </div>
            </div>


        </div>
    );
}

export default Cards;