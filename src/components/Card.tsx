import React from "react"

interface UserProps {
    personName: string,
    personImage: string
}

const Card: React.FC<UserProps> = ({personName, personImage}) => {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mx-4 mt-8">
        <img
        src={personImage}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{personName}</h1>
        <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
        </p>
        <button className="mt-4 inline-flex cursor-pointer items-center text-sm font-semibold text-black bg-white px-3 py-2 rounded-md hover:bg-black hover:text-white">
            View Profile →
        </button>
        </div>
    </div>
  
    )
}

export default Card