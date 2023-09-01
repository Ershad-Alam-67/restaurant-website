import Header from "./components/Layout/Header.js"
import MealsList from "./components/Meals/MealsList.js"
import Modal from "./components/Modal/Modal.js"
import React, { useState } from "react"
import CartData from "./components/Cart/CartData.js"
function App() {
  const [showModal, setShowModal] = useState(false)
  const onShowModalHandler = (a) => {
    setShowModal(a)
  }
  return (
    <CartData>
      <div className=" bg-zinc-800">
        <Header showModalHandler={onShowModalHandler}></Header>
        <MealsList></MealsList>
        {showModal && (
          <Modal showModalHandler={onShowModalHandler} CartData={CartData} />
        )}
      </div>
    </CartData>
  )
}

export default App
