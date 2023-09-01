import ReactDOM from "react-dom"
const Modal = (props) => {
  const setShowModal = () => {
    props.showModalHandler(false)
  }
  return ReactDOM.createPortal(
    <div className="modal font-bold text-slate-950 justify-center  items-center fixed inset-0 flex w-screen bg-black z-50 bg-opacity-50">
      <div className="p-3 mb-20 bg-white w-[35%] rounded-xl">
        <h1 className=" font-semibold">Sushi</h1>
        <div className="flex mt-5  justify-between">
          <h1 className=" text-lg">Total Amount</h1>
          <h1>$ 49</h1>
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
    </div>,
    document.getElementById("root")
  )
}
export default Modal
