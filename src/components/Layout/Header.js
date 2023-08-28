import React from "react"
import cart from "../../assets/cart_icon.png"
import bg_img from "../../assets/header_bg_image.png"
const Header = () => {
  return (
    <div>
      <div className=" flex bg-mycolor h-16 items-center">
        <div>
          <h1 className=" ml-14 font-bold text-white text-xl">ReactMeals</h1>
        </div>
        <div className="ml-[800px] w-56 flex justify-center h-12 items-center rounded-3xl p-4 bg-orange-950 ">
          <button className="flex p-1 font-bold text-white ">
            <div>
              <img src={cart} className=" mr-2 w-7 h-7"></img>
            </div>
            <h1 className="mr-2 ">Your Cart</h1>
            <div className=" bg-orange-800 w-8 rounded-2xl ml-2">0</div>
          </button>
        </div>
      </div>
      <div className="">
        <img src={bg_img}></img>
      </div>
    </div>
  )
}

export default Header
