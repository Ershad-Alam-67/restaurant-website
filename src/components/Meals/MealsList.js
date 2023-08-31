import React from "react"
import Dataset from "./Dataset.js"
const MealsList = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" w-[55%] mt-20  text-zinc-700 bg-amber-500 rounded-md h-auto ">
        <ul>
          {Dataset.map((item) => (
            <li className="shadow-md flex justify-between">
              <div className="  pt-2 pl-5 rounded-md">
                <h1 className="font-bold text-lg text-zinc-800">{item.name}</h1>
                <p2 className="font-bold">{item.description}</p2>
                <h1 className="  font-bold text-lg">${item.price}</h1>
              </div>
              <div className=" mt-4 ml-11 ">
                <div className="flex">
                  <h1 className=" pr-2 font-bold">Amount</h1>

                  <input
                    type="number"
                    className=" p-3 h-6 w-12 pr-0 border-r-0 hover:border-0 mr-7 rounded-md"
                  ></input>
                </div>

                <button className=" ml-1 bg-orange-900 font-bold hover:bg-orange-950 text-xs w-28 mt-1 text-white p-1 rounded-md text-sm">
                  +ADD
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MealsList
