import ReactDOM from "react-dom"
import React, { useContext, useState } from "react"
import { MyContext } from "../Cart/CartData"
const Modal = (props) => {
  const { cartData, cartDataHandler, count, total, updateCart } =
    useContext(MyContext)
  const setShowModal = () => {
    props.showModalHandler(false)
  }
  const deleteItem = (id) => {
    const updatedCart = cartData
      .map((item) => {
        if (item.id === id) {
          if (item.cnt - 1 === 0) {
            return null
          } else {
            return { ...item, cnt: item.cnt - 1 }
          }
        }
        return item
      })
      .filter((num) => num !== null)
    updateCart(updatedCart)
  }
  const addItem = (id) => {
    const updatedCart = cartData.map((item) => {
      if (item.id === id) {
        return { ...item, cnt: parseInt(item.cnt) + 1 }
      }
      return item
    })

    updateCart(updatedCart)
  }

  return ReactDOM.createPortal(
    <div className="modal font-bold text-slate-950 justify-center  items-center fixed inset-0 flex w-screen bg-black z-50 bg-opacity-50">
      <div className="p-3 mb-20 bg-white w-[35%] rounded-xl">
        {cartData.map((item) => {
          return (
            <div className="flex  mt-1 pb-2 border-b-[2px] rounded-md border-orange-800  mb-1 ">
              <div>
                <h1>{item.name}</h1>
                <h1 className="pt-4">{item.price}</h1>
              </div>
              <div className="  ml-16 rounded-md mt-9   border-[1px] px-[6px] border-orange-800">
                x {item.cnt}
              </div>
              <div className=" ml-40 mt-5">
                <button
                  onClick={() => {
                    addItem(item.id)
                  }}
                  className=" border-orange-800 rounded-md border-[1px] mt-2 px-4 mr-2  h-6  "
                >
                  +
                </button>
                <button
                  onClick={() => {
                    deleteItem(item.id)
                  }}
                  className="border-[1px]  border-orange-800 rounded-md  mt-2 px-4  h-6 "
                >
                  -
                </button>
              </div>
            </div>
          )
        })}

        <div>
          <div className="flex mt-5  justify-between">
            <h1 className=" text-lg">Total Amount</h1>
            <h1>$ {total}</h1>
          </div>
          <div className="flex mt-2 justify-end">
            <button
              onClick={setShowModal}
              className="mr-6 border-2 px-4 py-1 font-normal rounded-3xl border-orange-800 text-orange-800"
            >
              Close
            </button>
            <button className=" text-white mr-1 font-normal bg-orange-800 rounded-3xl py-1 px-4 ">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  )
}
export default Modal
