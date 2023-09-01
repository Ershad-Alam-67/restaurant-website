import React from "react"
import cart from "../../assets/cart_icon.png"
import bg_img from "../../assets/meals.jpg"
import "./Header.css"
const Header = (props) => {
  const setShowModal = () => {
    props.showModalHandler(true)
  }
  return (
    <div className=" h-auto bg-transparent">
      <header>
        <div className="header fixed top-0 left-0 w-full h-16 bg-mycolor text-white flex justify-between items-center px-10 box-shadow z-20">
          <div>
            <h1 className=" ml-14 font-bold text-white text-xl">ReactMeals</h1>
          </div>
          <div className="ml-[800px] w-56 flex justify-center shadow-md h-12 items-center rounded-3xl p-4 bg-orange-950 ">
            <button
              className="flex p-3 font-bold text-white "
              onClick={setShowModal}
            >
              <div>
                <img src={cart} className=" mr-2 w-7 h-7"></img>
              </div>
              <h1 className="mr-2  ">Your Cart</h1>
              <div className=" bg-orange-800 w-8 rounded-2xl ml-2">0</div>
            </button>
          </div>
        </div>
      </header>
      <div className="main-image   h-80 relative transform rotate-[-3deg] -translate-x-[1rem] w-[102%] -translate-y-[1rem] z-0 overflow-hidden">
        <div className="zoomed-image overflow-hidden ">
          <img
            src={bg_img}
            className="w-[100%] h-full overflow-clip object-cover transform rotate-[-4deg] -translate-y-[-1rem] -translate-x-[-1rem]"
            alt="Background Image"
          />
        </div>
      </div>
      <div className=" w-[35rem] h-[12rem] bg-zinc-700 absolute z-10 top-[11rem] descr  left-[29%] rounded-xl shadow-black shadow-md">
        <h1 className="text-white font-bold  flex justify-center mt-2 text-2xl">
          Delicious Food, Delivered To You
        </h1>
        <p className="flex text-white mt-4 justify-center font text-center">
          Choose your favourite meal from our board selection of avilable meals
          and enjoy delicious lunch or dinner at home
        </p>
        <p className="flex text-white p-2  mt-3 justify-center font text-center">
          All our meals are cooked with high quality ingredient, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  )
}

export default Header
