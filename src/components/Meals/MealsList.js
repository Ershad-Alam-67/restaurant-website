import React from "react"
import Dataset from "./Dataset.js"
const MealsList = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" w-[55%] mt-20  text-zinc-700 bg-amber-500 rounded-md h-auto ">
        <ul>
          {Dataset.map((item) => (
            <li>
              <div className=" shadow-md pt-2 pl-3 rounded-md">
                <h1 className="font-bold text-zinc-800">{item.name}</h1>
                <p2 className>{item.description}</p2>
                <h1 className="  font-bold text-lg">${item.price}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MealsList
