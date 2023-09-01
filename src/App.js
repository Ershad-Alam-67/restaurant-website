import Header from "./components/Layout/Header"
import MealsList from "./components/Meals/MealsList"
import Modal from "./components/Modal/Modal"
import React, { useState } from "react"
function App() {
  const [showModal, setShowModal] = useState(false)
  const onShowModalHandler = (a) => {
    setShowModal(a)
  }
  return (
    <div className=" bg-zinc-800">
      <Header showModalHandler={onShowModalHandler}></Header>
      <MealsList></MealsList>
      {showModal && <Modal showModalHandler={onShowModalHandler} />}
    </div>
  )
}

export default App
